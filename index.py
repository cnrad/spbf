import threading
import random
import requests

def main():
    for i in range(100):
        with open("words.txt", "r") as file:
            allText = file.read()
            words = list(map(str, allText.split('\n')))

            phrase = []

            for j in range(12):
                phrase.append(random.choice(words))

            print(' '.join(phrase))


main()