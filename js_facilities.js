//  مصفوفة بتخزن بيانات العروض المختلفة
const offers = [
    {
        image: "c:/Users/User/Desktop/pic folder/firstroom.jfif",  // صورة العرض الأول
        title: "5 Nights Stay - Full Board + 5 Rounds of Golf",  // عنوان العرض
        description: "استمتع بـ 5 ليالي في منتجعنا الفاخر، مع إفطار وعشاء كاملين و5 جولات جولف. عرض مثالي لعشاق الجولف.",  // الوصف
        rating: 5,  // التقييم
        reviews: 200,  // عدد المراجعات
        price: "$1500 for 5 Nights"  // السعر
    },
    {
        image: "c:/Users/User/Desktop/pic folder/2room.jpg",  // صورة العرض الثاني
        title: "3 Nights Stay - Half Board + 3 Rounds of Golf",  // عنوان العرض
        description: "عيش تجربة 3 ليالي مع نصف إقامة و3 جولات جولف. راحة وسعادة لمحبي الجولف.",  // الوصف
        rating: 4.5,  // التقييم
        reviews: 150,  // عدد المراجعات
        price: "$900 for 3 Nights"  // السعر
    },
    {
        image: "c:/Users/User/Desktop/pic folder/3room.jfif",  // صورة العرض الثالث
        title: "7 Nights Stay - Full Board + Unlimited Golf",  // عنوان العرض
        description: "استمتع بأسبوع كامل مع إقامة كاملة وجولف غير محدود لتجربة جولف لا تُنسى.",  // الوصف
        rating: 4.8,  // التقييم
        reviews: 300,  // عدد المراجعات
        price: "$2000 for 7 Nights"  // السعر
    }
];

let currentOfferIndex = 0;  // هاد المتغير بحتفظ بمؤشر العرض الحالي لعرضه

function changeImage(direction) {
    // هاد الكود بغير المؤشر حسب الاتجاه
    currentOfferIndex += direction;

    // لو وصلنا لنهاية المصفوفة، منرجع لأول عرض
    if (currentOfferIndex < 0) {
        currentOfferIndex = offers.length - 1;
    } else if (currentOfferIndex >= offers.length) {
        currentOfferIndex = 0;
    }

    // بحدّث الصورة وبيانات العرض
    updateOfferDetails();
}

function updateOfferDetails() {
    const offer = offers[currentOfferIndex];  // بجيب بيانات العرض الحالي

    // بحدّث الصورة والعنوان والوصف والتقييم والسعر
    document.getElementById("c:/Users/User/Desktop/pic folder/2room.jpg").src = offer.image;  // لازم تكتب ID العنصر بدل المسار
    document.getElementById("offerTitle").innerText = offer.title;
    document.getElementById("offerDescription").innerText = offer.description;

    // بحدّث التقييم بالنجوم
    const stars = document.querySelectorAll(".star");
    for (let i = 0; i < 5; i++) {
        if (i < offer.rating) {
            stars[i].style.color = "gold";  // النجوم المملوءة
        } else {
            stars[i].style.color = "gray";  // النجوم الفارغة
        }
    }

    // بحدّث النص اللي بيظهر أسفل التقييم
    document.getElementById("ratingText").innerText = `${offer.rating}/5 - ${offer.reviews} Reviews`;
    document.getElementById("offerPrice").innerText = offer.price;
}

// تنفيذ الإعداد الأولي عند تحميل الصفحة
updateOfferDetails();
