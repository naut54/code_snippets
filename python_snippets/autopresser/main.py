import pyautogui
import time

def fc():
    time.sleep(2)
    pyautogui.press("f5")
    time.sleep(3)

while True:
    fc()