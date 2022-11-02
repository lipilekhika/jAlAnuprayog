import base64
from PIL import Image
from os import system, makedirs
image = {
    "home.png": (50, 50),
    "on1.png": (64, 36),
    "off1.png": (64, 36),
    "on.png": (82, 46),
    "off.png": (82, 46),
    "convert.png": (50, 50),
    "main.png": (50, 50),
    "usage.png": (45, 45),
}
system(f'RD /S /Q "prayogan"')
makedirs("prayogan/base64")
for x in image:
    im = Image.open("moolam/"+x)
    resized_im = im.resize(image[x])
    resized_im.save('prayogan/'+x)
    file = open("prayogan/"+x, mode="rb+")
    data = "url(data:image/png;base64," + \
        base64.b64encode(file.read()).decode("ascii") + ");"
    file.close()
    file = open("prayogan/base64/"+x+".txt", mode="w+")
    file.write(data)
    file.close()
