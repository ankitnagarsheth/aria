import csv
import random
from datetime import datetime, timedelta

# Core Specs (approved config)
NUM_REVIEWS = 1400
START_DATE = datetime(2025, 10, 12)
END_DATE = datetime(2025, 11, 21)
DAYS_RANGE = (END_DATE - START_DATE).days + 1
REVIEWS_PER_DAY = NUM_REVIEWS / DAYS_RANGE

# Products (17 SKUs, duplicated for balance)
PRODUCTS = [
    'red-cubic-zirconia-earrings-shop-226495-9340',
    'cubic-zirconia-earrings-shop-226495-5746',
    'interlocking-hearts-anniversary-necklace-i-love-you-this-much-gift-box-silverrose-gold-or-18k-gold-shop-226495-2181',
    'girlfriend-gift-alluring-beauty-ribbon-necklace-with-to-my-beautiful-girlfriend-message-card-white-gold-or-18k-gold-shop-226495-2908',
    'dad-gift-cuban-link-chain-with-you-are-my-strength-role-model-best-friend-message-card-stainless-steel-or-14k-gold-shop-226495-9894',
    'gift-wrap-with-personalized-message-shop-226495-1328',
    'to-my-sister-forever-love-heart-necklace-14k-white-or-18k-yellow-gold-finish-shop-226495-6927',
    'rose-petals-shop-226495-1585',
    'to-my-beautiful-wife-last-everything-heart-necklace-message-card-from-husband-shop-226495-2728',
    'mom-birthday-necklace-forever-love-heart-pendant-with-message-card-white-gold-or-18k-gold-shop-226495-8074',
    'best-friend-love-knot-necklace-thank-you-for-standing-by-my-side-message-card-white-gold-or-18k-gold-shop-226495-7951',
    'to-my-daughter-infinity-knot-necklace-keepsake-message-card-from-mom-shop-226495-3665',
    'personalized-bestie-name-necklace-custom-gift-with-message-card-made-in-usa-shop-226495-8033',
    'husband-gift-cuban-link-chain-with-to-my-amazing-husband-message-card-stainless-steel-or-14k-gold-shop-226495-8496',
    'love-knot-stud-earrings-shop-226495-5414',
] * 2

# Unique names pool
FIRST_NAMES = [
    'Emma', 'Marcus', 'Sophia', 'Liam', 'Ava', 'Noah', 'Isabella', 'Oliver', 'Mia', 'Elijah', 'Charlotte', 'James',
    'Amelia', 'Henry', 'Harper', 'Lucas', 'Evelyn', 'Alexander', 'Abigail', 'Sebastian', 'Ella', 'Jack', 'Grace',
    'Ethan', 'Chloe', 'Mason', 'Violet', 'Logan', 'Scarlett', 'Owen', 'Luna', 'Caleb', 'Aria', 'Wyatt', 'Nora', 'Levi',
    'Hazel', 'Miles', 'Ivy', 'Finn', 'Lila', 'Jasper', 'Willow', 'Theo', 'Zoe', 'Ezra', 'Stella', 'Silas', 'Aurora',
    'Atticus', 'Nova', 'Felix', 'Sage', 'Roman', 'Freya', 'Asher', 'Lyric', 'Declan', 'Maeve', 'Gideon', 'Opal',
    'Soren', 'Indigo', 'Rory', 'Echo', 'Kieran', 'Juniper', 'Boden', 'Sienna', 'Zane', 'Marlowe', 'Dax', 'Cleo',
    'Reid', 'Fiona', 'Knox', 'Esme', 'Beckett', 'Liora', 'Griffin', 'Selene',
]
LAST_NAMES = [
    'Thompson', 'Hale', 'Reyes', 'Novak', 'Sinclair', 'Patel', 'Kim', 'Rodriguez', 'Nguyen', 'Wong', 'Martinez', 'Lee',
    'Garcia', 'Chen', 'Wilson', 'Taylor', 'Anderson', 'Thomas', 'Jackson', 'White', 'Harris', 'Martin', 'Thompson',
    'Garcia', 'Martinez', 'Robinson', 'Clark', 'Rodriguez', 'Lewis', 'Lee', 'Walker', 'Hall', 'Allen', 'Young',
    'Hernandez', 'King', 'Wright', 'Lopez', 'Hill', 'Scott', 'Green', 'Adams', 'Baker', 'Gonzalez', 'Nelson', 'Carter',
    'Mitchell', 'Perez', 'Roberts', 'Turner', 'Phillips', 'Campbell', 'Parker', 'Evans', 'Edwards', 'Collins',
]

NAMES = [f"{random.choice(FIRST_NAMES)} {random.choice(LAST_NAMES)}" for _ in range(5000)]
random.shuffle(NAMES)


def get_rating():
    """Rating split: 91% 5, 8% 4, 1% 3."""
    r = random.random()
    if r < 0.91:
        return 5
    if r < 0.99:
        return 4
    return 3


REVIEW_TEMPLATES = [
    # Short (20%)
    "Stunning piece—arrived fast and exceeded expectations.",
    "Perfect gift; she loved it instantly.",
    "High quality, elegant design. Highly recommend.",
    "Timely delivery, beautiful craftsmanship.",
    "Worth every penny—sparkles just right.",
    # Medium (50%)
    "Bought this for our anniversary and it was a hit. The interlocking hearts symbolize our bond perfectly, and the rose gold tone matches her style. Packaging was thoughtful too.",
    "These earrings are a game-changer for daily wear. Subtle shine without being flashy—comfortable all day. Shipped quicker than promised.",
    "Gifted to my dad; the message card brought tears. Durable chain, meaningful design. Feels premium for the price.",
    "As a treat for myself, this necklace feels luxurious. The infinity knot is a sweet reminder—wore it on date night and got compliments.",
    "Fast shipping, great box. The cubic zirconia rivals real diamonds up close. My girlfriend wears them everywhere now.",
    # Long (30%) - Emotional, detailed
    "I was skeptical about online jewelry, but this chain for my husband blew me away. The Cuban link is hefty yet comfortable, and pairing it with the 'amazing husband' card made our 10-year milestone unforgettable. No tarnish after weeks—ordering more for the family.",
    "For my sister's birthday, the forever love heart was spot-on. She said it captures our chaotic but unbreakable bond. The 18k yellow gold finish elevates it from sweet to sophisticated. Delivery was discreet, and the rose petals add that extra romance touch.",
    "This personalized bestie necklace was a surprise for my college roommate reunion. Custom name engraved flawlessly, message card heartfelt. We've both been layering it with other pieces—it's become our 'sisterhood' staple. Loox photos don't do the detail justice.",
    "The alluring beauty ribbon for my girlfriend arrived in under a week, wrapped like a high-end boutique. The 'beautiful girlfriend' card sealed the sentiment; she teared up reading it aloud. White gold option is versatile—pairs with everything in her wardrobe.",
    "As a mom gifting the infinity knot to my daughter before college, this hit deep. The keepsake card from 'mom' is gold (literally). She's worn it non-stop, says it grounds her. Quality holds up to her active lifestyle—no snags or fades.",
] * 10


def generate_review_body(rating: int) -> str:
    base = random.choice(REVIEW_TEMPLATES)
    variants = [
        base,
        base.replace('perfect', 'flawless').replace('loved', 'adores'),
        base + " Can't wait to shop again.",
        base[: len(base) // 2] + " ...and the best part? " + random.choice(['It fits like a dream.', 'Zero regrets on the upgrade.']),
    ]
    if rating < 5:
        variants = [v.replace('perfect', 'solid') + " Room for a longer chain next time." for v in variants]
    return random.choice(variants)


PHOTO_POOL = [
    'https://cdn.shopify.com/s/files/1/2264/9500/files/anniversary_necklace_wear.jpg',
    'https://cdn.shopify.com/s/files/1/2264/9500/files/earrings_closeup_sparkle.jpg',
    'https://cdn.shopify.com/s/files/1/2264/9500/files/chain_on_wrist.jpg',
    'https://cdn.shopify.com/s/files/1/2264/9500/files/heart_pendant_closeup.jpg',
    '',
    '',
] * 20


HEADERS = [
    'reviewer_name',
    'rating',
    'review_title',
    'review_body',
    'product_handle',
    'created_at',
    'photo_url',
]


def generate_reviews():
    reviews = []
    name_counts = {}
    used_bodies = set()

    current_date = START_DATE
    review_count = 0

    while review_count < NUM_REVIEWS:
        daily_reviews = round(random.uniform(30, 38))
        for _ in range(min(daily_reviews, NUM_REVIEWS - review_count)):
            name = random.choice(NAMES)
            if name_counts.get(name, 0) >= 5:
                continue
            name_counts[name] = name_counts.get(name, 0) + 1

            product = random.choice(PRODUCTS)
            date_str = current_date.strftime('%Y-%m-%d')

            rating = get_rating()
            body = generate_review_body(rating)

            # Keep bodies diverse without risking an infinite loop
            for _ in range(10):
                if body not in used_bodies:
                    break
                body = generate_review_body(rating)
            used_bodies.add(body)

            title_words = body.split()[:3]
            title = ' '.join(title_words).title() + '!'

            photo = random.choice(PHOTO_POOL) if random.random() < 0.68 else ''

            reviews.append(
                [
                    name,
                    rating,
                    title,
                    body,
                    product,
                    date_str,
                    photo,
                ]
            )
            review_count += 1
        current_date += timedelta(days=1)
    return reviews


def write_csv(filename: str, rows):
    with open(filename, 'w', newline='', encoding='utf-8') as f:
        writer = csv.writer(f)
        writer.writerow(HEADERS)
        writer.writerows(rows)


def main():
    reviews = generate_reviews()
    write_csv('HeartCraftedGift_Reviews_Full_1400.csv', reviews)
    print('Full CSV generated: HeartCraftedGift_Reviews_Full_1400.csv')

    batch_size = NUM_REVIEWS // 6
    for i in range(6):
        start = i * batch_size
        end = (i + 1) * batch_size if i < 5 else NUM_REVIEWS
        batch_rows = reviews[start:end]
        write_csv(f'Batch_{i+1}_Oct12-Nov21_2025.csv', batch_rows)
        print(f'Batch {i+1} CSV generated: {len(batch_rows)} reviews')

    avg_rating = sum(row[1] for row in reviews) / len(reviews)
    print(f"\nGenerated {len(reviews)} reviews | Avg Rating: {avg_rating:.2f} | Unique Bodies: {len(set(row[3] for row in reviews))}")


if __name__ == '__main__':
    main()
