"""Generate per-page, per-locale social share cards (Open Graph / X / WhatsApp / LinkedIn).

1200x630 JPEG (<600 KB so WhatsApp shows the large preview), one per route and
locale, titled from messages/<locale>.json seo.<key>. Rendered with headless
Chrome so Arabic shapes and runs RTL correctly. Output: public/og/<locale>/<slug>.jpg
Run from the repo root after changing SEO titles:  python3 scripts/brand/og.py
"""
import glob, html, io, json, os, re, subprocess, tempfile
from PIL import Image

CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
ROOT = os.getcwd()
LOCALES = {'en': 'ltr', 'ar-EG': 'rtl'}
EMP = {'/sol-sales-agent': 'aaref', '/sol-customer-service': 'adnan', '/sol-operations': 'roz'}
EYEBROW = {
    'en': {'emp': 'AI employee', 'ind': 'Industries', 'blog': 'GenuDo blog', 'site': 'AI employees for WhatsApp & beyond'},
    'ar-EG': {'emp': 'موظف بالذكاء الاصطناعي', 'ind': 'المجالات', 'blog': 'مدونة جينـو دو', 'site': 'موظفين بالذكاء الاصطناعي على WhatsApp وأكتر'},
}
NAMES = {'en': {'aaref': 'Aaref · Sales', 'adnan': 'Adnan · Support', 'roz': 'ROZ · Quality'},
         'ar-EG': {'aaref': 'عارف · المبيعات', 'adnan': 'عدنان · خدمة العملاء', 'roz': 'روز · الجودة'}}


def routes():
    seen = {}
    for p in glob.glob('src/app/[[]locale[]]/**/page.tsx', recursive=True) + ['src/app/[locale]/page.tsx']:
        m = re.search(r"route: '([^']*)', seoKey: '([^']+)'", open(p).read())
        if m: seen[m.group(1)] = m.group(2)
    return seen


def slug(route):
    return 'home' if route in ('', '/') else route.strip('/').replace('/', '-')


def card(locale, route, title, desc):
    d = LOCALES[locale]
    kind = 'emp' if route in EMP else 'ind' if route.startswith('/ind-') else 'blog' if route.startswith('/blog') else 'site'
    eyebrow = EYEBROW[locale][kind]
    if route in EMP:
        e = EMP[route]
        art = (f'<img class="hero-av" src="file://{ROOT}/public/media/img/{e}.svg">'
               f'<div class="tag">{html.escape(NAMES[locale][e])}</div>')
    else:
        art = (f'<img class="genu" src="file://{ROOT}/public/media/img/genu.svg"><div class="team">'
               + ''.join(f'<img src="file://{ROOT}/public/media/img/{e}.svg">' for e in ('aaref', 'adnan', 'roz')) + '</div>')
    return f'''<!doctype html><html lang="{locale}" dir="{d}"><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@500;700;800&family=Tajawal:wght@500;700;800&display=block" rel="stylesheet">
<style>
*{{box-sizing:border-box;margin:0}}
html,body{{width:1200px;height:630px;overflow:hidden}}
body{{font-family:{'Tajawal,' if d == 'rtl' else ''}Inter,system-ui,sans-serif;color:#fff;
  background:radial-gradient(900px 520px at {'85%' if d == 'ltr' else '15%'} 30%,#3b3fd8 0%,rgba(59,63,216,0) 60%),
             radial-gradient(700px 500px at {'15%' if d == 'ltr' else '85%'} 110%,#7c3aed55 0%,rgba(124,58,237,0) 60%),
             linear-gradient(135deg,#0a0e2e 0%,#141a52 55%,#1d2470 100%);
  display:grid;grid-template-columns:1fr 360px;padding:56px 64px;gap:24px;position:relative}}
body:before{{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(255,255,255,.09) 1.2px,transparent 1.3px);background-size:26px 26px}}
.copy{{display:flex;flex-direction:column;position:relative;min-width:0}}
.logo{{height:40px;width:auto;align-self:flex-start;filter:brightness(0) invert(1)}}
.pill{{margin-top:auto;align-self:flex-start;font-size:{22 if d == 'rtl' else 19}px;font-weight:700;letter-spacing:{0 if d == 'rtl' else '.02em'};
  padding:8px 16px;border-radius:999px;background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.22);color:#dfe3ff}}
h1{{margin-top:18px;font-size:{60 if d == 'rtl' else 56}px;line-height:{1.28 if d == 'rtl' else 1.08};font-weight:800;letter-spacing:{0 if d == 'rtl' else '-.025em'};
  display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}}
p{{margin-top:16px;font-size:{25 if d == 'rtl' else 23}px;line-height:1.45;color:#c9cef8;font-weight:500;
  display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}}
.url{{margin-top:22px;font:700 20px Inter,sans-serif;color:#9aa3f0;direction:ltr;align-self:flex-start}}
.art{{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center}}
.genu{{width:250px;filter:drop-shadow(0 24px 40px rgba(0,0,0,.45))}}
.team{{display:flex;gap:8px;margin-top:-6px}}
.team img{{width:96px;height:96px;padding:6px;border-radius:50%;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2)}}
.hero-av{{width:300px;filter:drop-shadow(0 24px 40px rgba(0,0,0,.45))}}
.tag{{margin-top:14px;font-size:24px;font-weight:700;padding:8px 18px;border-radius:999px;background:#fff;color:#141a52}}
</style></head><body>
<div class="copy"><img class="logo" src="file://{ROOT}/public/genu/genudo-name-white.svg">
<div class="pill">{html.escape(eyebrow)}</div><h1>{html.escape(title)}</h1><p>{html.escape(desc)}</p>
<div class="url">genudo.ai</div></div><div class="art">{art}</div></body></html>'''


def shoot(page_html, out):
    with tempfile.TemporaryDirectory() as tmp:
        f = os.path.join(tmp, 'c.html'); png = os.path.join(tmp, 'c.png')
        open(f, 'w').write(page_html)
        subprocess.run([CHROME, '--headless=new', '--disable-gpu', '--hide-scrollbars', '--allow-file-access-from-files',
                        '--virtual-time-budget=8000', '--window-size=1200,630', f'--screenshot={png}', f'file://{f}'],
                       check=True, capture_output=True)
        im = Image.open(png).convert('RGB').crop((0, 0, 1200, 630))
        buf = io.BytesIO(); im.save(buf, 'JPEG', quality=84, optimize=True, progressive=True)
        assert buf.tell() < 600_000, f'{out} is {buf.tell()} bytes; WhatsApp drops images over 600 KB'
        open(out, 'wb').write(buf.getvalue())


def main():
    for locale in LOCALES:
        seo = json.load(open(f'messages/{locale}.json'))['seo']
        os.makedirs(f'public/og/{locale}', exist_ok=True)
        for route, key in sorted(routes().items()):
            shoot(card(locale, route, seo[key]['title'], seo[key]['description']), f'public/og/{locale}/{slug(route)}.jpg')
        print(locale, 'done')


if __name__ == '__main__':
    import sys
    if len(sys.argv) == 3:   # preview one card:  og.py <locale> <route>
        seo = json.load(open(f'messages/{sys.argv[1]}.json'))['seo']; r = sys.argv[2]
        k = routes()[r]; os.makedirs(f'public/og/{sys.argv[1]}', exist_ok=True)
        shoot(card(sys.argv[1], r, seo[k]['title'], seo[k]['description']), f'public/og/{sys.argv[1]}/{slug(r)}.jpg')
    else:
        main()
