import bs4

def extract_text(file_name):
    with open(file_name, "r", encoding="utf-8") as f:
        html_code = f.read()

    soup = bs4.BeautifulSoup(html_code, "lxml")

    text = []
    for tag in soup.find_all(["h1", "h2", "h3", "h4", "h5", "h6", "span", "p"]):
        text.append(tag.text)

    return text

if __name__ == "__main__":
    text = extract_text("Project-element-1_ar.html")
    print(text)
