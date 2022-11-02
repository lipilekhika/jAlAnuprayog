import shubhlipi as sh
import os
from time import time
import sys
url = "http://localhost:3030"
if sys.argv[-1] == "1":
    url = "https://api.lipilekhika.com"
f = sh.read("test.txt").split("\n")
t = f[2]
if t in os.listdir("."):
    t = sh.read(t)
tm = time()
a = sh.post(f"{url}/{f[0]}/{f[1]}", json={"text": t})
f = [f[0], f[1], f[2], a.text]
sh.write("test.txt", "\n".join(f))
# print(a.text)
print("response headers:", a.headers)
print("response:", a.status_code)
print("time taken:", time()-tm)
