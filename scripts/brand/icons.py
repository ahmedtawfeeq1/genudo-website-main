"""Generate the favicon / app-icon set from the GenuDo "do" mark.

Source paths are the vector "d", "o" and dot from the brand files
(GenuDo Logo Files / icon - dark background - blue.svg), recoloured to the
brand palette. Run from the repo root:  python3 scripts/brand/icons.py
Needs: Google Chrome (headless render) and Pillow.
"""
import os, subprocess, tempfile
from PIL import Image

CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
OUT = 'public'
D = ('M 136.015625 -162.78125 L 136.015625 0 L 103.328125 0 L 103.328125 -13.59375 C 94.847656 -3.363281 82.5625 1.75 66.46875 1.75 '
     'C 55.351562 1.75 45.296875 -0.734375 36.296875 -5.703125 C 27.304688 -10.671875 20.25 -17.757812 15.125 -26.96875 '
     'C 10.007812 -36.1875 7.453125 -46.867188 7.453125 -59.015625 C 7.453125 -71.148438 10.007812 -81.820312 15.125 -91.03125 '
     'C 20.25 -100.25 27.304688 -107.34375 36.296875 -112.3125 C 45.296875 -117.289062 55.351562 -119.78125 66.46875 -119.78125 '
     'C 81.53125 -119.78125 93.304688 -115.023438 101.796875 -105.515625 L 101.796875 -162.78125 Z '
     'M 72.390625 -26.328125 C 81.023438 -26.328125 88.191406 -29.285156 93.890625 -35.203125 C 99.597656 -41.128906 102.453125 -49.066406 102.453125 -59.015625 '
     'C 102.453125 -68.953125 99.597656 -76.882812 93.890625 -82.8125 C 88.191406 -88.738281 81.023438 -91.703125 72.390625 -91.703125 '
     'C 63.617188 -91.703125 56.378906 -88.738281 50.671875 -82.8125 C 44.972656 -76.882812 42.125 -68.953125 42.125 -59.015625 '
     'C 42.125 -49.066406 44.972656 -41.128906 50.671875 -35.203125 C 56.378906 -29.285156 63.617188 -26.328125 72.390625 -26.328125 Z')
O = ('M 71.953125 1.75 C 59.523438 1.75 48.375 -0.84375 38.5 -6.03125 C 28.625 -11.226562 20.90625 -18.429688 15.34375 -27.640625 '
     'C 9.789062 -36.859375 7.015625 -47.316406 7.015625 -59.015625 C 7.015625 -70.710938 9.789062 -81.164062 15.34375 -90.375 '
     'C 20.90625 -99.59375 28.625 -106.796875 38.5 -111.984375 C 48.375 -117.179688 59.523438 -119.78125 71.953125 -119.78125 '
     'C 84.390625 -119.78125 95.503906 -117.179688 105.296875 -111.984375 C 115.097656 -106.796875 122.773438 -99.59375 128.328125 -90.375 '
     'C 133.890625 -81.164062 136.671875 -70.710938 136.671875 -59.015625 C 136.671875 -47.316406 133.890625 -36.859375 128.328125 -27.640625 '
     'C 122.773438 -18.429688 115.097656 -11.226562 105.296875 -6.03125 C 95.503906 -0.84375 84.390625 1.75 71.953125 1.75 Z '
     'M 71.953125 -26.328125 C 80.734375 -26.328125 87.9375 -29.285156 93.5625 -35.203125 C 99.195312 -41.128906 102.015625 -49.066406 102.015625 -59.015625 '
     'C 102.015625 -68.953125 99.195312 -76.882812 93.5625 -82.8125 C 87.9375 -88.738281 80.734375 -91.703125 71.953125 -91.703125 '
     'C 63.179688 -91.703125 55.941406 -88.738281 50.234375 -82.8125 C 44.535156 -76.882812 41.6875 -68.953125 41.6875 -59.015625 '
     'C 41.6875 -49.066406 44.535156 -41.128906 50.234375 -35.203125 C 55.941406 -29.285156 63.179688 -26.328125 71.953125 -26.328125 Z')
INK, BLUE, NAVY = '#0b0b12', '#2134b3', '#0c1446'
BX0, BY0, BX1, BY1 = 52.2, 66.3, 330.5, 269.6   # mark bounds in source units


def svg(mark_ratio=0.70, radius=112, bg='#ffffff'):
    """512x512 icon. mark_ratio = mark width / canvas; radius=0 gives a full-bleed square."""
    s = 512 * mark_ratio / (BX1 - BX0)
    tx = 256 - (BX0 + BX1) / 2 * s
    ty = 256 - (BY0 + BY1) / 2 * s
    tile = f'<rect width="512" height="512" rx="{radius}" fill="{bg}"/>' if bg else ''
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">'
            f'<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="{NAVY}"/>'
            f'<stop offset="1" stop-color="{BLUE}"/></linearGradient></defs>{tile}'
            f'<g transform="translate({tx:.2f} {ty:.2f}) scale({s:.5f})">'
            f'<path fill="{INK}" transform="translate(44.758659 267.811315)" d="{D}"/>'
            f'<path fill="{BLUE}" transform="translate(193.789604 267.862885)" d="{O}"/>'
            f'<circle cx="229.62" cy="106.19" r="39.9" fill="url(#g)"/></g></svg>')


def render(svg_text, px=1024):
    """Rasterise via headless Chrome with a transparent background."""
    with tempfile.TemporaryDirectory() as tmp:
        html = os.path.join(tmp, 'i.html'); png = os.path.join(tmp, 'i.png')
        sized = svg_text.replace('<svg ', '<svg width="%d" height="%d" ' % (px, px), 1)
        open(html, 'w').write('<html><body style="margin:0;background:transparent">' + sized + '</body></html>')
        subprocess.run([CHROME, '--headless=new', '--disable-gpu', '--hide-scrollbars', '--default-background-color=00000000',
                        f'--window-size={px},{px}', f'--screenshot={png}', f'file://{html}'], check=True, capture_output=True)
        return Image.open(png).convert('RGBA').crop((0, 0, px, px))


def main():
    tile = svg()                                   # rounded white tile: favicons, Android
    bleed = svg(mark_ratio=0.62, radius=0)         # full-bleed square: iOS rounds it itself
    maskable = svg(mark_ratio=0.50, radius=0)      # mark inside the 409px safe circle
    open(f'{OUT}/icon.svg', 'w').write(tile)
    big = render(tile)
    for size, name in [(192, 'icon-192.png'), (512, 'icon-512.png')]:
        big.resize((size, size), Image.LANCZOS).save(f'{OUT}/{name}', optimize=True)
    # Tab-size icon: tighter crop so the mark stays legible at 16-32px.
    render(svg(mark_ratio=0.84, radius=96)).resize((256, 256), Image.LANCZOS).save(f'{OUT}/favicon.ico', sizes=[(16, 16), (32, 32), (48, 48)])
    render(bleed).convert('RGB').resize((180, 180), Image.LANCZOS).save(f'{OUT}/apple-touch-icon.png', optimize=True)
    render(maskable).convert('RGB').resize((512, 512), Image.LANCZOS).save(f'{OUT}/icon-maskable-512.png', optimize=True)
    print('icons written to', OUT)


if __name__ == '__main__':
    main()
