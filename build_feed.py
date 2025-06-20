import os
import requests
from bs4 import BeautifulSoup
from feedgen.feed import FeedGenerator

BASE_URL = "https://mesh-analytics-2.kit.com/posts"
OUTPUT = os.path.join("dist", "mesh.xml")


def fetch_posts():
    response = requests.get(BASE_URL, timeout=10)
    response.raise_for_status()
    soup = BeautifulSoup(response.text, "html.parser")
    posts = []
    for article in soup.find_all("article"):
        a = article.find("a")
        if not a or not a.get("href"):
            continue
        title = a.get_text(strip=True)
        link = a["href"]
        if not link.startswith("http"):
            link = "https://mesh-analytics-2.kit.com" + link
        time_el = article.find("time")
        pubdate = time_el["datetime"] if time_el and time_el.has_attr("datetime") else None
        desc_el = article.find("p")
        description = desc_el.get_text(strip=True) if desc_el else ""
        posts.append({
            "title": title,
            "link": link,
            "pubdate": pubdate,
            "description": description,
        })
    return posts


def main():
    posts = fetch_posts()
    fg = FeedGenerator()
    fg.title("Marketing Analytics Needs Posts")
    fg.link(href=BASE_URL)
    fg.description("Latest posts from Marketing Analytics Needs on kit.com")
    for post in posts:
        fe = fg.add_entry()
        fe.title(post["title"])
        fe.link(href=post["link"])
        fe.guid(post["link"])
        if post["pubdate"]:
            fe.pubDate(post["pubdate"])
        if post["description"]:
            fe.description(post["description"])

    os.makedirs(os.path.dirname(OUTPUT), exist_ok=True)
    fg.rss_file(OUTPUT)


if __name__ == "__main__":
    main()
