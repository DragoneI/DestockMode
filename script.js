// Données produits
const products = [
    { id: 1, name: "Robe midi fluide à imprimé floral", brand: "Sandro", category: "femme", oldPrice: 245, newPrice: 98, stock: 3, image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=600&fit=crop", badge: "-60%", isNew: true },
    { id: 2, name: "Blazer slim fit en laine vierge", brand: "Hugo Boss", category: "homme", oldPrice: 399, newPrice: 159, stock: 5, image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=600&fit=crop", badge: "-60%", isNew: false },
    { id: 3, name: "Sneakers Campo chromefree", brand: "Veja", category: "femme", oldPrice: 120, newPrice: 72, stock: 8, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=600&fit=crop", badge: "-40%", isNew: true },
    { id: 4, name: "Manteau long en cachemire", brand: "Max Mara", category: "femme", oldPrice: 890, newPrice: 267, stock: 2, image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&h=600&fit=crop", badge: "-70%", isNew: false },
    { id: 5, name: "Costume complet bleu marine", brand: "Celio", category: "homme", oldPrice: 299, newPrice: 119, stock: 4, image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=600&fit=crop", badge: "-60%", isNew: true },
    { id: 6, name: "Pull torsadé en laine mérinos", brand: "Polo Ralph Lauren", category: "homme", oldPrice: 165, newPrice: 82, stock: 6, image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=600&fit=crop", badge: "-50%", isNew: false },
    { id: 7, name: "Ensemble jogging premium", brand: "Nike", category: "enfant", oldPrice: 65, newPrice: 26, stock: 12, image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400&h=600&fit=crop", badge: "-60%", isNew: true },
    { id: 8, name: "Robe de soirée en satin noir", brand: "Maje", category: "femme", oldPrice: 325, newPrice: 130, stock: 1, image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=600&fit=crop", badge: "-60%", isNew: false },
    { id: 9, name: "Chemise oxford slim fit", brand: "Tommy Hilfiger", category: "homme", oldPrice: 89, newPrice: 44, stock: 9, image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=600&fit=crop", badge: "-50%", isNew: true },
    { id: 10, name: "Doudoune légère matelassée", brand: "Moncler", category: "enfant", oldPrice: 350, newPrice: 140, stock: 3, image: "https://images.unsplash.com/photo-1545594861-3bef43ff22f7?w=400&h=600&fit=crop", badge: "-60%", isNew: false },
    { id: 11, name: "Sac porté épaule en cuir", brand: "Longchamp", category: "femme", oldPrice: 280, newPrice: 112, stock: 5, image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=600&fit=crop", badge: "-60%", isNew: true },
    { id: 12, name: "Jean 501 original fit", brand: "Levi's", category: "homme", oldPrice: 110, newPrice: 55, stock: 7, image: "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?w=400&h=600&fit=crop", badge: "-50%", isNew: false }
];

let cart = [];
let currentFilter = 'all';
let isAccessGranted = false;
let currentLang = 'fr';

// Traductions intégrées
const translations = {
    fr: {
        nav: { home: "Accueil", women: "Femme", men: "Homme", kids: "Enfant", collection: "Collection" },
        hero: { label: "Déstockage Premium", title: "Grandes marques européennes à prix d'exception", subtitle: "Découvrez notre sélection de surplus de stock neuf avec étiquette. Jusqu'à -70% sur les plus grandes marques.", cta: "Découvrir la collection", stat1_label: "Réduction max", stat2_label: "Authentique", stat3_label: "Avec étiquette" },
        categories: { label: "Nos Univers", title: "Parcourir par catégorie", subtitle: "Une sélection rigoureuse de pièces uniques en déstockage", men: "Homme", men_desc: "Élégance masculine", men_discount: "Jusqu'à -60%", women: "Femme", women_desc: "Mode féminine", women_discount: "Jusqu'à -65%", kids: "Enfant", kids_desc: "Petites tenues", kids_discount: "Jusqu'à -70%" },
        featured: { label: "Sélection", title: "Nos coups de cœur", subtitle: "Les pièces les plus demandées de notre collection actuelle", cta: "Voir toute la collection" },
        whyUs: { label: "Nos engagements", title: "Pourquoi nous choisir ?", subtitle: "La qualité premium accessible grâce au déstockage", feature1_title: "100% Authentique", feature1_desc: "Chaque produit est vérifié et certifié par nos experts qualité", feature2_title: "Neuf avec étiquette", feature2_desc: "Jamais porté, dans son emballage d'origine avec étiquettes", feature3_title: "Importé d'Europe", feature3_desc: "Surplus de stock directement issus des grandes maisons", feature4_title: "Prix d'exception", feature4_desc: "Jusqu'à -70% sur les collections des saisons passées" },
        products: { page_title: "Toute la collection", filters: { all: "Tous", women: "Femme", men: "Homme", kids: "Enfant", promo: "-50% et plus" }, stock_warning: "Plus que {stock} en stock", badge_new: "New", badge_stock: "Limité", no_restock: "Ce produit ne sera pas réapprovisionné", add_to_cart: "Ajouter au panier", authentic: "Produit 100% authentique", authentic_desc: "Vérifié par nos experts • Importé d'Europe • Neuf avec étiquettes", description: "Description", description_text: "Produit neuf avec étiquette, issu de surplus de stock de grandes marques européennes.", save: "Économisez {amount}€", left_stock: "Plus que {stock} exemplaires" },
        cart: { title: "Votre panier", empty: "Votre panier est vide", savings: "Vous économisez {amount}€", total: "Total TTC", checkout: "Finaliser la commande", secure: "Paiement 100% sécurisé", added: "Produit ajouté", added_text: "{qty} {product} ajouté au panier", updated: "Quantité mise à jour", updated_text: "{qty} {product} dans votre panier", removed: "Produit retiré", removed_text: "Le produit a été supprimé de votre panier", stock_error: "Stock insuffisant", stock_error_text: "La quantité demandée dépasse le stock disponible" },
        footer: { brand_desc: "Votre destination privilégiée pour le déstockage de grandes marques européennes.", explore: "Explorer", home: "Accueil", collection: "Collection", new: "Nouveautés", bestsellers: "Best-sellers", help: "Aide", delivery: "Livraison", returns: "Retours", size_guide: "Guide tailles", contact: "Contact", legal: "Légal", terms: "CGV", privacy: "Confidentialité", legal_notice: "Mentions légales", copyright: "Tous droits réservés", footer_text: "Déstockage de surplus de stock • Produits 100% neufs et authentiques" },
        notifications: { welcome: "Bienvenue au Maroc", welcome_text: "Vous avez accès à toute la collection DestockMode !" }
    },
    en: {
        nav: { home: "Home", women: "Women", men: "Men", kids: "Kids", collection: "Collection" },
        hero: { label: "Premium Clearance", title: "European luxury brands at exceptional prices", subtitle: "Discover our selection of new stock surplus with tags. Up to -70% off on major brands.", cta: "Discover the collection", stat1_label: "Max discount", stat2_label: "Authentic", stat3_label: "With tags" },
        categories: { label: "Our Worlds", title: "Browse by category", subtitle: "A rigorous selection of unique clearance pieces", men: "Men", men_desc: "Masculine elegance", men_discount: "Up to -60%", women: "Women", women_desc: "Women's fashion", women_discount: "Up to -65%", kids: "Kids", kids_desc: "Little outfits", kids_discount: "Up to -70%" },
        featured: { label: "Selection", title: "Our favorites", subtitle: "The most requested pieces from our current collection", cta: "View all collection" },
        whyUs: { label: "Our commitments", title: "Why choose us?", subtitle: "Premium quality accessible through clearance", feature1_title: "100% Authentic", feature1_desc: "Every product is verified and certified by our quality experts", feature2_title: "New with tags", feature2_desc: "Never worn, in original packaging with tags", feature3_title: "Imported from Europe", feature3_desc: "Stock surplus directly from major houses", feature4_title: "Exceptional prices", feature4_desc: "Up to -70% on past season collections" },
        products: { page_title: "Full collection", filters: { all: "All", women: "Women", men: "Men", kids: "Kids", promo: "-50% and more" }, stock_warning: "Only {stock} left", badge_new: "New", badge_stock: "Limited", no_restock: "Will not be restocked", add_to_cart: "Add to cart", authentic: "100% authentic", authentic_desc: "Verified by our experts • Imported from Europe • New with tags", description: "Description", description_text: "New product with tags from European luxury brands.", save: "Save {amount}€", left_stock: "Only {stock} left" },
        cart: { title: "Your cart", empty: "Your cart is empty", savings: "You save {amount}€", total: "Total", checkout: "Checkout", secure: "Secure payment", added: "Added", added_text: "{qty} {product} added", updated: "Updated", updated_text: "{qty} {product} in cart", removed: "Removed", removed_text: "Product removed", stock_error: "Out of stock", stock_error_text: "Not enough stock" },
        footer: { brand_desc: "Your premier destination for European luxury clearance.", explore: "Explore", home: "Home", collection: "Collection", new: "New", bestsellers: "Bestsellers", help: "Help", delivery: "Delivery", returns: "Returns", size_guide: "Size guide", contact: "Contact", legal: "Legal", terms: "Terms", privacy: "Privacy", legal_notice: "Legal notice", copyright: "All rights reserved", footer_text: "Stock surplus clearance • 100% authentic" },
        notifications: { welcome: "Welcome to Morocco", welcome_text: "You have access to DestockMode collection!" }
    },
    ar: {
        nav: { home: "الرئيسية", women: "نسائي", men: "رجالي", kids: "أطفال", collection: "المجموعة" },
        hero: { label: "تخفيضات فاخرة", title: "ماركات أوروبية بأسعار استثنائية", subtitle: "اكتشف مجموعتنا من فائض المخزون الجديد. خصومات تصل إلى -70%", cta: "اكتشف المجموعة", stat1_label: "أقصى خصم", stat2_label: "أصلي", stat3_label: "مع البطاقة" },
        categories: { label: "عوالمنا", title: "تصفح حسب الفئة", subtitle: "اختيار دقيق لقطع التخفيضات", men: "رجالي", men_desc: "أناقة رجالية", men_discount: "خصم -60%", women: "نسائي", women_desc: "أزياء نسائية", women_discount: "خصم -65%", kids: "أطفال", kids_desc: "ملابس أطفال", kids_discount: "خصم -70%" },
        featured: { label: "المفضلة", title: "اختياراتنا", subtitle: "القطع الأكثر طلباً", cta: "عرض المجموعة" },
        whyUs: { label: "التزاماتنا", title: "لماذا تختارنا؟", subtitle: "جودة فاخرة بأسعار التخفيضات", feature1_title: "أصلي 100%", feature1_desc: "منتجات معتمدة", feature2_title: "جديد مع البطاقة", feature2_desc: "لم يلبس أبداً", feature3_title: "مستورد من أوروبا", feature3_desc: "فائض مخزون", feature4_title: "أسعار استثنائية", feature4_desc: "خصم يصل إلى -70%" },
        products: { page_title: "المجموعة كاملة", filters: { all: "الكل", women: "نسائي", men: "رجالي", kids: "أطفال", promo: "-50% وأكثر" }, stock_warning: "فقط {stock} متبقي", badge_new: "جديد", badge_stock: "محدود", no_restock: "لن يتم إعادة التخزين", add_to_cart: "أضف للسلة", authentic: "منتج أصلي", authentic_desc: "مستورد من أوروبا • جديد مع البطاقة", description: "الوصف", description_text: "منتج جديد من ماركات أوروبية.", save: "وفر {amount}€", left_stock: "فقط {stock} متبقي" },
        cart: { title: "سلة التسوق", empty: "السلة فارغة", savings: "توفر {amount}€", total: "المجموع", checkout: "إتمام الشراء", secure: "دفع آمن", added: "تمت الإضافة", added_text: "تمت إضافة {qty} {product}", updated: "تم التحديث", updated_text: "{qty} {product} في السلة", removed: "تمت الإزالة", removed_text: "تم إزالة المنتج", stock_error: "نفذت الكمية", stock_error_text: "الكمية المطلوبة غير متوفرة" },
        footer: { brand_desc: "وجهتك لتخفيضات الماركات الأوروبية.", explore: "استكشف", home: "الرئيسية", collection: "المجموعة", new: "جديد", bestsellers: "الأكثر مبيعاً", help: "المساعدة", delivery: "التوصيل", returns: "الإرجاع", size_guide: "دليل المقاسات", contact: "اتصل بنا", legal: "قانوني", terms: "الشروط", privacy: "الخصوصية", legal_notice: "إشعار قانوني", copyright: "جميع الحقوق محفوظة", footer_text: "تخفيضات فائض المخزون • منتجات أصلية" },
        notifications: { welcome: "مرحباً", welcome_text: "مرحباً بك في DestockMode" }
    }
};

// Appliquer les traductions
function applyTranslations(lang) {
    const t = translations[lang];
    if (!t) return;
    
    document.getElementById('navHome').innerHTML = t.nav.home;
    document.getElementById('navWomen').innerHTML = t.nav.women;
    document.getElementById('navMen').innerHTML = t.nav.men;
    document.getElementById('navKids').innerHTML = t.nav.kids;
    document.getElementById('navCollection').innerHTML = t.nav.collection;
    
    document.getElementById('mobileNavHome').innerHTML = '<i class="fas fa-home"></i> ' + t.nav.home;
    document.getElementById('mobileNavWomen').innerHTML = '<i class="fas fa-female"></i> ' + t.nav.women;
    document.getElementById('mobileNavMen').innerHTML = '<i class="fas fa-male"></i> ' + t.nav.men;
    document.getElementById('mobileNavKids').innerHTML = '<i class="fas fa-child"></i> ' + t.nav.kids;
    
    document.getElementById('heroLabel').innerHTML = '<i class="fas fa-gem"></i> ' + t.hero.label;
    document.getElementById('heroTitle').innerHTML = t.hero.title;
    document.getElementById('heroSubtitle').innerHTML = t.hero.subtitle;
    document.getElementById('heroCta').innerHTML = t.hero.cta + ' <i class="fas fa-arrow-right"></i>';
    document.getElementById('stat1Label').innerHTML = t.hero.stat1_label;
    document.getElementById('stat2Label').innerHTML = t.hero.stat2_label;
    document.getElementById('stat3Label').innerHTML = t.hero.stat3_label;
    
    document.getElementById('categoriesLabel').innerHTML = t.categories.label;
    document.getElementById('categoriesTitle').innerHTML = t.categories.title;
    document.getElementById('categoriesSubtitle').innerHTML = t.categories.subtitle;
    document.getElementById('catMenTitle').innerHTML = t.categories.men;
    document.getElementById('catMenDesc').innerHTML = t.categories.men_desc;
    document.getElementById('catMenDiscount').innerHTML = t.categories.men_discount;
    document.getElementById('catWomenTitle').innerHTML = t.categories.women;
    document.getElementById('catWomenDesc').innerHTML = t.categories.women_desc;
    document.getElementById('catWomenDiscount').innerHTML = t.categories.women_discount;
    document.getElementById('catKidsTitle').innerHTML = t.categories.kids;
    document.getElementById('catKidsDesc').innerHTML = t.categories.kids_desc;
    document.getElementById('catKidsDiscount').innerHTML = t.categories.kids_discount;
    
    document.getElementById('featuredLabel').innerHTML = t.featured.label;
    document.getElementById('featuredTitle').innerHTML = t.featured.title;
    document.getElementById('featuredSubtitle').innerHTML = t.featured.subtitle;
    document.getElementById('featuredCta').innerHTML = t.featured.cta + ' <i class="fas fa-arrow-right"></i>';
    
    document.getElementById('whyUsLabel').innerHTML = t.whyUs.label;
    document.getElementById('whyUsTitle').innerHTML = t.whyUs.title;
    document.getElementById('whyUsSubtitle').innerHTML = t.whyUs.subtitle;
    document.getElementById('feature1Title').innerHTML = t.whyUs.feature1_title;
    document.getElementById('feature1Desc').innerHTML = t.whyUs.feature1_desc;
    document.getElementById('feature2Title').innerHTML = t.whyUs.feature2_title;
    document.getElementById('feature2Desc').innerHTML = t.whyUs.feature2_desc;
    document.getElementById('feature3Title').innerHTML = t.whyUs.feature3_title;
    document.getElementById('feature3Desc').innerHTML = t.whyUs.feature3_desc;
    document.getElementById('feature4Title').innerHTML = t.whyUs.feature4_title;
    document.getElementById('feature4Desc').innerHTML = t.whyUs.feature4_desc;
    
    document.getElementById('pageTitle').innerHTML = t.products.page_title;
    document.getElementById('breadcrumbCollection').innerHTML = t.nav.collection;
    if (document.querySelector('#breadcrumbHome span')) {
        document.querySelector('#breadcrumbHome span').innerHTML = t.nav.home;
    }
    
    const filters = document.querySelectorAll('.filter-btn span');
    if (filters[0]) filters[0].innerHTML = t.products.filters.all;
    if (filters[1]) filters[1].innerHTML = t.products.filters.women;
    if (filters[2]) filters[2].innerHTML = t.products.filters.men;
    if (filters[3]) filters[3].innerHTML = t.products.filters.kids;
    if (filters[4]) filters[4].innerHTML = t.products.filters.promo;
    
    document.getElementById('cartTitle').innerHTML = t.cart.title;
    document.getElementById('cartEmptyText').innerHTML = t.cart.empty;
    document.getElementById('cartTotalLabel').innerHTML = t.cart.total;
    if (document.querySelector('#checkoutBtn span')) {
        document.querySelector('#checkoutBtn span').innerHTML = t.cart.checkout;
    }
    if (document.querySelector('.secure-note span')) {
        document.querySelector('.secure-note span').innerHTML = t.cart.secure;
    }
    
    document.getElementById('footerBrandDesc').innerHTML = t.footer.brand_desc;
    document.getElementById('footerExplore').innerHTML = t.footer.explore;
    if (document.querySelector('#footerHome span')) {
        document.querySelector('#footerHome span').innerHTML = t.footer.home;
    }
    if (document.querySelector('#footerCollection span')) {
        document.querySelector('#footerCollection span').innerHTML = t.footer.collection;
    }
    document.getElementById('footerNew').innerHTML = t.footer.new;
    document.getElementById('footerBestsellers').innerHTML = t.footer.bestsellers;
    document.getElementById('footerHelp').innerHTML = t.footer.help;
    document.getElementById('footerDelivery').innerHTML = t.footer.delivery;
    document.getElementById('footerReturns').innerHTML = t.footer.returns;
    document.getElementById('footerSizeGuide').innerHTML = t.footer.size_guide;
    document.getElementById('footerContact').innerHTML = t.footer.contact;
    document.getElementById('footerLegal').innerHTML = t.footer.legal;
    document.getElementById('footerTerms').innerHTML = t.footer.terms;
    document.getElementById('footerPrivacy').innerHTML = t.footer.privacy;
    document.getElementById('footerLegalNotice').innerHTML = t.footer.legal_notice;
    document.getElementById('footerCopyright').innerHTML = t.footer.copyright;
    document.getElementById('footerText').innerHTML = t.footer.footer_text;
    
    const langLabels = { fr: 'FR', en: 'EN', ar: 'AR' };
    document.getElementById('currentLangLabel').innerHTML = langLabels[lang];
    
    if (lang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
    }
    
    renderPopularProducts();
    renderAllProducts(currentFilter);
    
    localStorage.setItem('userLang', lang);
    currentLang = lang;
}

function setLanguage(lang) {
    if (lang === currentLang) return;
    applyTranslations(lang);
    if (window.currentProductId) {
        showProductDetail(window.currentProductId);
    }
}

// Validation du pays - FONCTION PRINCIPALE
function validateCountry() {
    const select = document.getElementById('countrySelect');
    const selectedCountry = select.value;
    const errorDiv = document.getElementById('modalError');
    
    if (!selectedCountry) {
        errorDiv.classList.add('show');
        setTimeout(() => {
            errorDiv.classList.remove('show');
        }, 3000);
        return;
    }
    
    if (selectedCountry === 'maroc') {
        // ACCÈS AUTORISÉ
        isAccessGranted = true;
        
        // Cacher la modale de pays
        document.getElementById('countryModal').classList.add('hidden');
        
        // Afficher le contenu du site
        const contentWrapper = document.getElementById('contentWrapper');
        contentWrapper.classList.add('visible');
        
        // Sauvegarder
        localStorage.setItem('userCountry', selectedCountry);
        localStorage.setItem('accessGranted', 'true');
        
        // Appliquer la langue sauvegardée ou par défaut
        const savedLang = localStorage.getItem('userLang');
        if (savedLang && translations[savedLang]) {
            applyTranslations(savedLang);
        } else {
            applyTranslations('fr');
        }
        
        // Notification de bienvenue
        showNotification('Bienvenue', 'Vous avez accès à DestockMode');
    } else {
        // ACCÈS REFUSÉ - Afficher message d'erreur
        document.getElementById('countryModal').classList.add('hidden');
        document.getElementById('zoneError').classList.add('show');
    }
}

function closeZoneError() {
    // Fermer le message d'erreur et revenir à la modale
    document.getElementById('zoneError').classList.remove('show');
    document.getElementById('countryModal').classList.remove('hidden');
}

function checkExistingAccess() {
    const granted = localStorage.getItem('accessGranted');
    const country = localStorage.getItem('userCountry');
    const savedLang = localStorage.getItem('userLang');
    
    if (granted === 'true' && country === 'maroc') {
        isAccessGranted = true;
        document.getElementById('countryModal').classList.add('hidden');
        document.getElementById('contentWrapper').classList.add('visible');
        
        if (savedLang && translations[savedLang]) {
            applyTranslations(savedLang);
        } else {
            applyTranslations('fr');
        }
    }
}

// Navigation
function showPage(page) {
    if (!isAccessGranted) return;
    
    document.getElementById('page-home').classList.add('hidden');
    document.getElementById('page-products').classList.add('hidden');
    document.getElementById('page-product-detail').classList.add('hidden');
    
    document.getElementById('page-' + page).classList.remove('hidden');
    window.scrollTo(0, 0);
}

function toggleMobileMenu() {
    if (!isAccessGranted) return;
    document.getElementById('mobileMenu').classList.toggle('active');
}

function toggleCart() {
    if (!isAccessGranted) return;
    document.getElementById('cartSidebar').classList.toggle('active');
    document.getElementById('cartOverlay').classList.toggle('active');
}

// Rendu produits
function renderPopularProducts() {
    const container = document.getElementById('popularProducts');
    if (!container) return;
    const popular = products.slice(0, 4);
    container.innerHTML = popular.map(p => createProductCard(p)).join('');
}

function renderAllProducts(filter = 'all') {
    const container = document.getElementById('allProducts');
    if (!container) return;
    let filtered = products;
    
    if (filter !== 'all') {
        if (filter === 'promo') {
            filtered = products.filter(p => ((p.oldPrice - p.newPrice) / p.oldPrice) >= 0.5);
        } else {
            filtered = products.filter(p => p.category === filter);
        }
    }
    
    container.innerHTML = filtered.map(p => createProductCard(p)).join('');
}

function createProductCard(product) {
    const t = translations[currentLang]?.products;
    const stockWarningText = (t?.stock_warning || 'Plus que {stock} en stock').replace('{stock}', product.stock);
    const stockWarning = product.stock <= 3 ? `<div class="stock-warning"><i class="fas fa-clock"></i> ${stockWarningText}</div>` : '';
    
    const newBadgeText = t?.badge_new || 'New';
    const stockBadgeText = t?.badge_stock || 'Limité';
    const newBadge = product.isNew ? `<span class="badge badge-new"><i class="fas fa-star"></i> ${newBadgeText}</span>` : '';
    const stockBadge = product.stock <= 3 ? `<span class="badge badge-stock"><i class="fas fa-exclamation"></i> ${stockBadgeText}</span>` : '';
    
    return `
        <div class="product-card" onclick="showProductDetail(${product.id})">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <div class="product-badges">
                    <span class="badge badge-reduction">${product.badge}</span>
                    ${newBadge}
                    ${stockBadge}
                </div>
            </div>
            <div class="product-info">
                <div class="product-brand">${product.brand}</div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-pricing">
                    <span class="old-price">${product.oldPrice}€</span>
                    <span class="new-price">${product.newPrice}€</span>
                </div>
                ${stockWarning}
            </div>
        </div>
    `;
}

function filterCategory(cat) {
    if (!isAccessGranted) return;
    showPage('products');
    filterProducts(cat);
}

function filterProducts(filter) {
    if (!isAccessGranted) return;
    currentFilter = filter;
    
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-filter') === filter) {
            btn.classList.add('active');
        }
    });
    
    renderAllProducts(filter);
}

// Détail produit
window.currentProductId = null;

function showProductDetail(id) {
    if (!isAccessGranted) return;
    
    window.currentProductId = id;
    const product = products.find(p => p.id === id);
    if (!product) return;
    
    const t = translations[currentLang]?.products || translations.fr.products;
    const reduction = Math.round(((product.oldPrice - product.newPrice) / product.oldPrice) * 100);
    const saveText = (t.save || 'Économisez {amount}€').replace('{amount}', product.oldPrice - product.newPrice);
    const leftStockText = (t.left_stock || 'Plus que {stock} exemplaires').replace('{stock}', product.stock);
    const addToCartText = t.add_to_cart || 'Ajouter au panier';
    const noRestockText = t.no_restock || 'Ce produit ne sera pas réapprovisionné';
    
    document.getElementById('productDetail').innerHTML = `
        <div class="product-gallery">
            <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="product-detail-info">
            <div class="detail-brand">${product.brand}</div>
            <h1 class="detail-name">${product.name}</h1>
            <div class="detail-price-box">
                <div class="detail-pricing">
                    <span class="detail-old-price">${product.oldPrice}€</span>
                    <span class="detail-new-price">${product.newPrice}€</span>
                </div>
                <div class="detail-reduction">${saveText} (-${reduction}%)</div>
                <div class="detail-stock" style="margin-top: 12px;">
                    <i class="fas fa-exclamation-circle"></i>
                    <span>${leftStockText}</span>
                </div>
            </div>
            <div class="authenticity-box">
                <div class="authenticity-icon"><i class="fas fa-shield-alt"></i></div>
                <div class="authenticity-content">
                    <h4><i class="fas fa-check-circle"></i> ${t.authentic || 'Produit 100% authentique'}</h4>
                    <p>${t.authentic_desc || 'Vérifié par nos experts • Importé d\'Europe'}</p>
                </div>
            </div>
            <div class="detail-description">
                <h3>${t.description || 'Description'}</h3>
                <p>${t.description_text || 'Produit neuf avec étiquette, issu de surplus de stock.'}</p>
            </div>
            <div class="add-to-cart-box">
                <div class="quantity-selector">
                    <button class="qty-btn" onclick="updateQty(-1)"><i class="fas fa-minus"></i></button>
                    <input type="number" class="qty-input" id="qtyInput" value="1" min="1" max="${product.stock}" readonly>
                    <button class="qty-btn" onclick="updateQty(1, ${product.stock})"><i class="fas fa-plus"></i></button>
                </div>
                <button class="btn-add-cart" onclick="addToCart(${product.id})">
                    <i class="fas fa-shopping-bag"></i> ${addToCartText}
                </button>
            </div>
            <p class="no-restock"><i class="fas fa-info-circle"></i> ${noRestockText}</p>
        </div>
    `;
    
    showPage('product-detail');
}

function updateQty(change, max) {
    if (!isAccessGranted) return;
    const input = document.getElementById('qtyInput');
    if (!input) return;
    let val = parseInt(input.value) + change;
    if (val < 1) val = 1;
    if (max && val > max) val = max;
    input.value = val;
}

// Panier
function addToCart(productId) {
    if (!isAccessGranted) return;
    
    const product = products.find(p => p.id === productId);
    const qtyInput = document.getElementById('qtyInput');
    const qty = qtyInput ? parseInt(qtyInput.value) : 1;
    const t = translations[currentLang]?.cart || translations.fr.cart;
    
    const existing = cart.find(item => item.id === productId);
    
    if (existing) {
        if (existing.quantity + qty <= product.stock) {
            existing.quantity += qty;
            const updatedText = (t.updated_text || '{qty} {product} dans votre panier').replace('{qty}', existing.quantity).replace('{product}', product.name);
            showNotification(t.updated || 'Quantité mise à jour', updatedText);
        } else {
            showNotification(t.stock_error || 'Stock insuffisant', t.stock_error_text || 'Stock insuffisant', 'error');
            return;
        }
    } else {
        cart.push({...product, quantity: qty});
        const addedText = (t.added_text || '{qty} {product} ajouté au panier').replace('{qty}', qty).replace('{product}', product.name);
        showNotification(t.added || 'Produit ajouté', addedText);
    }
    
    updateCartUI();
    toggleCart();
}

function removeFromCart(productId) {
    if (!isAccessGranted) return;
    const t = translations[currentLang]?.cart || translations.fr.cart;
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
    showNotification(t.removed || 'Produit retiré', t.removed_text || 'Produit retiré');
}

function updateCartItemQty(productId, change) {
    if (!isAccessGranted) return;
    const item = cart.find(item => item.id === productId);
    const product = products.find(p => p.id === productId);
    if (!item) return;
    
    const newQty = item.quantity + change;
    if (newQty > 0 && newQty <= product.stock) {
        item.quantity = newQty;
        updateCartUI();
    } else if (newQty <= 0) {
        removeFromCart(productId);
    }
}

function updateCartUI() {
    const t = translations[currentLang]?.cart || translations.fr.cart;
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCount = document.getElementById('cartCount');
    if (cartCount) cartCount.textContent = count;
    
    const itemsContainer = document.getElementById('cartItems');
    const footer = document.getElementById('cartFooter');
    
    if (!itemsContainer) return;
    
    if (cart.length === 0) {
        itemsContainer.innerHTML = `<div class="cart-empty"><div class="cart-empty-icon"><i class="fas fa-shopping-bag"></i></div><p>${t.empty || 'Votre panier est vide'}</p></div>`;
        if (footer) footer.style.display = 'none';
        return;
    }
    
    itemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <div class="cart-item-brand">${item.brand}</div>
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">${item.newPrice}€</div>
                <div class="cart-item-qty">
                    <button class="cart-qty-btn" onclick="updateCartItemQty(${item.id}, -1)"><i class="fas fa-minus"></i></button>
                    <span>${item.quantity}</span>
                    <button class="cart-qty-btn" onclick="updateCartItemQty(${item.id}, 1)"><i class="fas fa-plus"></i></button>
                </div>
            </div>
            <button class="remove-item" onclick="removeFromCart(${item.id})"><i class="fas fa-trash"></i></button>
        </div>
    `).join('');
    
    if (footer) footer.style.display = 'block';
    
    const total = cart.reduce((sum, item) => sum + (item.newPrice * item.quantity), 0);
    const originalTotal = cart.reduce((sum, item) => sum + (item.oldPrice * item.quantity), 0);
    const savings = originalTotal - total;
    
    const cartTotal = document.getElementById('cartTotal');
    if (cartTotal) cartTotal.textContent = total.toFixed(2) + '€';
    
    const cartSavingsText = document.getElementById('cartSavingsText');
    if (cartSavingsText) cartSavingsText.innerHTML = (t.savings || 'Vous économisez {amount}€').replace('{amount}', savings.toFixed(2));
}

function showNotification(title, message, type = 'success') {
    const notif = document.getElementById('notification');
    if (!notif) return;
    
    const notifTitle = document.getElementById('notifTitle');
    const notifText = document.getElementById('notifText');
    
    if (notifTitle) notifTitle.textContent = title;
    if (notifText) notifText.textContent = message;
    
    const icon = notif.querySelector('.notification-icon i');
    if (icon) icon.className = type === 'success' ? 'fas fa-check' : 'fas fa-exclamation';
    
    notif.className = 'notification ' + type;
    setTimeout(() => notif.classList.add('show'), 10);
    setTimeout(() => notif.classList.remove('show'), 3000);
}

// Initialisation des événements
function initEventListeners() {
    document.getElementById('validateCountryBtn').addEventListener('click', validateCountry);
    document.getElementById('closeZoneErrorBtn').addEventListener('click', closeZoneError);
    document.getElementById('mobileMenuBtn').addEventListener('click', toggleMobileMenu);
    document.getElementById('closeMobileMenuBtn').addEventListener('click', toggleMobileMenu);
    document.getElementById('cartBtn').addEventListener('click', toggleCart);
    document.getElementById('closeCartBtn').addEventListener('click', toggleCart);
    document.getElementById('cartOverlay').addEventListener('click', toggleCart);
    document.getElementById('searchBtn').addEventListener('click', () => showPage('products'));
    document.getElementById('logoLink').addEventListener('click', (e) => { e.preventDefault(); showPage('home'); });
    
    document.getElementById('navHome').addEventListener('click', (e) => { e.preventDefault(); showPage('home'); });
    document.getElementById('navWomen').addEventListener('click', (e) => { e.preventDefault(); filterCategory('femme'); });
    document.getElementById('navMen').addEventListener('click', (e) => { e.preventDefault(); filterCategory('homme'); });
    document.getElementById('navKids').addEventListener('click', (e) => { e.preventDefault(); filterCategory('enfant'); });
    document.getElementById('navCollection').addEventListener('click', (e) => { e.preventDefault(); showPage('products'); });
    
    document.getElementById('mobileNavHome').addEventListener('click', (e) => { e.preventDefault(); showPage('home'); toggleMobileMenu(); });
    document.getElementById('mobileNavWomen').addEventListener('click', (e) => { e.preventDefault(); filterCategory('femme'); toggleMobileMenu(); });
    document.getElementById('mobileNavMen').addEventListener('click', (e) => { e.preventDefault(); filterCategory('homme'); toggleMobileMenu(); });
    document.getElementById('mobileNavKids').addEventListener('click', (e) => { e.preventDefault(); filterCategory('enfant'); toggleMobileMenu(); });
    document.getElementById('mobileNavCart').addEventListener('click', (e) => { e.preventDefault(); toggleCart(); toggleMobileMenu(); });
    
    document.getElementById('footerHome').addEventListener('click', (e) => { e.preventDefault(); showPage('home'); });
    document.getElementById('footerCollection').addEventListener('click', (e) => { e.preventDefault(); showPage('products'); });
    document.getElementById('breadcrumbHome').addEventListener('click', (e) => { e.preventDefault(); showPage('home'); });
    document.getElementById('heroCta').addEventListener('click', (e) => { e.preventDefault(); showPage('products'); });
    document.getElementById('featuredCta').addEventListener('click', (e) => { e.preventDefault(); showPage('products'); });
    
    document.getElementById('categoryMen').addEventListener('click', () => filterCategory('homme'));
    document.getElementById('categoryWomen').addEventListener('click', () => filterCategory('femme'));
    document.getElementById('categoryKids').addEventListener('click', () => filterCategory('enfant'));
    
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            filterProducts(btn.getAttribute('data-filter'));
        });
    });
    
    document.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', () => {
            setLanguage(option.getAttribute('data-lang'));
        });
    });
}

// Scroll header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (header) {
        header.style.boxShadow = window.pageYOffset > 100 ? '0 1px 3px rgba(0,0,0,0.08)' : 'none';
    }
});

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    initEventListeners();
    checkExistingAccess();
    renderPopularProducts();
    renderAllProducts();
    updateCartUI();
});