import type { Product } from "../types";

const img = (seed: string): string =>
  `https://images.unsplash.com/photo-${seed}?w=400&h=300&fit=crop&q=80`;

export const PRODUCTS: Product[] = [
  {
    _id: "1",
    title: "چلو کباب کوبیده",
    description: "دو سیخ کباب کوبیده با برنج ایرانی و گوجه کبابی",
    price: 320000,
    offPrice: 288000,
    discount: 10,
    category: "mainFood",
    foodGroup: "persianFood",
    imageLink: img("1546069901-ba9599a1e63c"),
  },
  {
    _id: "2",
    title: "زرشک پلو با مرغ",
    description: "ران مرغ سرخ شده با برنج زرشک پلو",
    price: 280000,
    offPrice: 280000,
    discount: 0,
    category: "mainFood",
    foodGroup: "persianFood",
    imageLink: img("1603134227369-d953449af404"),
  },
  {
    _id: "3",
    title: "قیمه نثار",
    description: "خورشت قیمه با گوشت و برنج زعفرانی",
    price: 350000,
    offPrice: 315000,
    discount: 10,
    category: "mainFood",
    foodGroup: "persianFood",
    imageLink: img("1626700059515-2246834d0f5a"),
  },
  {
    _id: "4",
    title: "پاستا آلفردو",
    description: "پاستا با سس خامه‌ای و قارچ تازه",
    price: 240000,
    offPrice: 240000,
    discount: 0,
    category: "mainFood",
    foodGroup: "notPersianFood",
    imageLink: img("1621996346565-e3dbc646d9a9"),
  },
  {
    _id: "5",
    title: "پیتزا مخصوص",
    description: "پیتزا با پنیر موزارلا، قارچ و فلفل دلمه‌ای",
    price: 290000,
    offPrice: 261000,
    discount: 10,
    category: "mainFood",
    foodGroup: "pizza",
    imageLink: img("1513104891138-7db7495f5917"),
  },
  {
    _id: "6",
    title: "ساندویچ فیله مرغ",
    description: "فیله مرغ گریل شده با سبزیجات تازه",
    price: 180000,
    offPrice: 180000,
    discount: 0,
    category: "mainFood",
    foodGroup: "sandawich",
    imageLink: img("1528731705314-f2f3d1d54441"),
  },
  {
    _id: "7",
    title: "سوپ جو",
    description: "سوپ جو خانگی با سبزیجات تازه",
    price: 85000,
    offPrice: 76500,
    discount: 10,
    category: "appetizer",
    foodGroup: "all",
    imageLink: img("1547592166-23ac45744acd"),
  },
  {
    _id: "8",
    title: "سالاد سزار",
    description: "کاهو، نان تست، پarmesan و سس سزار",
    price: 120000,
    offPrice: 120000,
    discount: 0,
    category: "appetizer",
    foodGroup: "all",
    imageLink: img("1512621776951-a57141f2eefd"),
  },
  {
    _id: "9",
    title: "ماست و خیار",
    description: "ماست چکیده با خیار تازه و نعنا",
    price: 45000,
    offPrice: 45000,
    discount: 0,
    category: "appetizer",
    foodGroup: "all",
    imageLink: img("1488477181946-64285a577581"),
  },
  {
    _id: "10",
    title: "باقلوا",
    description: "باقلوای سنتی با پسته و عسل",
    price: 95000,
    offPrice: 85500,
    discount: 10,
    category: "dessert",
    foodGroup: "all",
    imageLink: img("1598114278702-55fd7453b44d"),
  },
  {
    _id: "11",
    title: "بستنی سنتی",
    description: "بستنی زعفرانی با پسته",
    price: 75000,
    offPrice: 75000,
    discount: 0,
    category: "dessert",
    foodGroup: "all",
    imageLink: img("1563805042-7684c019e1cb"),
  },
  {
    _id: "12",
    title: "شیرینی تر",
    description: "شیرینی خانگی با طعم گلاب",
    price: 65000,
    offPrice: 65000,
    discount: 0,
    category: "dessert",
    foodGroup: "all",
    imageLink: img("1558961363-fa8fdf86db51"),
  },
  {
    _id: "13",
    title: "دوغ سنتی",
    description: "دوغ خانگی با نعنا تازه",
    price: 35000,
    offPrice: 35000,
    discount: 0,
    category: "drinks",
    foodGroup: "all",
    imageLink: img("1625772299848-391b6a141bf2"),
  },
  {
    _id: "14",
    title: "آبمیوه طبیعی",
    description: "آبمیوه تازه فصل",
    price: 55000,
    offPrice: 49500,
    discount: 10,
    category: "drinks",
    foodGroup: "all",
    imageLink: img("1622595437922-3641920d1083"),
  },
  {
    _id: "15",
    title: "چای ایرانی",
    description: "چای سیاه دمی با نبات",
    price: 25000,
    offPrice: 25000,
    discount: 0,
    category: "drinks",
    foodGroup: "all",
    imageLink: img("1556679727-8b12906a9b0f"),
  },
  {
    _id: "16",
    title: "جوجه کباب",
    description: "یک سیخ جوجه کباب با برنج و زعفران",
    price: 300000,
    offPrice: 270000,
    discount: 10,
    category: "mainFood",
    foodGroup: "persianFood",
    imageLink: img("1529042410759-b854142a457d"),
  },
];

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p._id === id);
}

export function filterProducts(qs = ""): Product[] {
  const params = new URLSearchParams(qs.replace(/^\?/, ""));
  const category = params.get("category");
  const foodGroup = params.get("foodGroup");
  const search =
    params.get("search") || params.get("q") || params.get("query") || "";

  let result = [...PRODUCTS];

  if (category) {
    result = result.filter((p) => p.category === category);
  }

  if (foodGroup && foodGroup !== "all") {
    result = result.filter((p) => p.foodGroup === foodGroup);
  }

  if (search.trim()) {
    const term = decodeURIComponent(search.trim()).toLowerCase();
    result = result.filter(
      (p) =>
        p.title.toLowerCase().includes(term) ||
        p.description.toLowerCase().includes(term)
    );
  }

  return result;
}
