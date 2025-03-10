// أول إشي بنعمله لما الصفحة تخلص تحميل
document.addEventListener('DOMContentLoaded', () => {
    // بنجيب كل العناصر اللي فيها الكلاس 'offer-box'
    const offerBoxes = document.querySelectorAll('.offer-box');
    
    // منمر على كل عنصر من العناصر اللي فيها 'offer-box'
    offerBoxes.forEach(box => {
        
        // لما الماوس ييجي فوق العنصر
        box.addEventListener('mouseover', () => {
            // بنكبر العنصر شوي
            box.style.transform = "scale(1.05)";
        });

        // لما الماوس يطلع من العنصر
        box.addEventListener('mouseout', () => {
            // بنرجع الحجم الطبيعي للعنصر
            box.style.transform = "scale(1)";
        });
    });
});
