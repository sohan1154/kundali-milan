var varnakshatra = "";
var kanyanakshatra = "";

var varnm = "";
var varnm1 = "";
var varrashi = "";
var varvarn = "";
var varvashya = "";
var vartara = "";
var varyoni = "";
var vargraha = "";
var vargan = "";
var varnaadi = "";

var kanyanm = "";
var kanyanm1 = "";
var kanyarashi = "";
var kanyavarn = "";
var kanyavashya = "";
var kanyatara = "";
var kanyayoni = "";
var kanyagraha = "";
var kanyagan = "";
var kanyanaadi = "";

var varnnumber = 0;
var vashyanumber = 0;
var taranumber = 0;
var yoninumber = 0;
var gannumber = 0;
var naadinumber = 0;
var grahanumber = 0;
var bhkutnumber = 0;
var totalnumber = 0;
var bhakutmitranumber = 0;

var milanresultmessage = "";

var bhkutmessage = "भकूट गुणों को जीवन में जरूरी माना गया है जो यहाँ पर नहीं मिलते है! यह दोष होने पर भौतिक सुख का अभाव  व सुख में कमी रहती है! किसी विद्वान ब्राह्मण से सलाह लेवे!";

var naadimessage = "नाड़ी गुण मिलान में जरूरी होते है जो यहाँ पर नहीं मिलते है! यह दोष होने पर दम्पत्ति के जीवन में तनाव  व सुख का अभाव रहेगा! किसी विद्वान ब्राह्मण से सलाह लेवे!";

var bhkutnaadimessage = "नाड़ी और भकूट को मिलान में परमावश्यक माना जाता है जो यहाँ पर नहीं मिलते है! इन दोषो के होने पर दम्पत्ति के जीवन में भौतिक सुख का अभाव व पारिवारिक सुख में कमी रहती है! यह विवाह उपयुक्त नहीं होगा! किसी विद्वान ब्राह्मण से सलाह लेवे!";

var ganmessage = "गण गुणों में जरूरी होता है इससे विचार बनते है जो जरूरी है! इसके नहीं मिलने से वैचारिक मतभेद-अनबन रहती है, व्यवहार आदि का मेल नहीं होता है, सुख में कमी रहती है!";

var grahamessage = "ग्रह मैत्री गुण मिलान में परमावश्यक मानी गयी है! ग्रह स्वामी दोष होने पर शत्रुता का भाव रहता है जिससे वैवाहिक जीवन संतोषजनक नहीं रहता है और तनाव भी होता है!";

var yonimessage = "योनि दोष गुणों के मिलान में जरूरी है जो वैवाहिक जीवन में तनाव लाती है, परस्पर मतभेद रहता है पारिवारिक सुख का अभाव रहता है!";

var bhkutmitramessage = "भकूट दोष में वर-कन्या की मित्र राशि होने पर परिहार हो जाता है! इस स्थिति में 4 अंक मिलते है जो गुणांक में जोड़े जा सकते है!";

function milan() {
  varnakshatra = "";
  varnm = "";
  varnm1 = "";
  varrashi = "";
  varvarn = "";
  varvashya = "";
  vartara = "";
  varyoni = "";
  vargraha = "";
  vargan = "";
  varnaadi = "";

  kanyanakshatra = "";
  kanyanm = "";
  kanyanm1 = "";
  kanyarashi = "";
  kanyavarn = "";
  kanyavashya = "";
  kanyatara = "";
  kanyayoni = "";
  kanyagraha = "";
  kanyagan = "";
  kanyanaadi = "";

  varnnumber = 0;
  vashyanumber = 0;
  taranumber = 0;
  yoninumber = 0;
  gannumber = 0;
  naadinumber = 0;
  grahanumber = 0;
  bhkutnumber = 0;
  totalnumber = 0;
  bhakutmitranumber = 0;

  milanresultmessage = "";

  varnm = document.forms["milanform"]["varname"].value;
  kanyanm = document.forms["milanform"]["kanyaname"].value;
  varnm = varnm.toLowerCase();
  kanyanm = kanyanm.toLowerCase();
  if (varnm == null || varnm == "") {
    alert("कृपया वर का नाम भरे");
  }
  else if (kanyanm == null || kanyanm == "") {
    alert("कृपया कन्या का नाम भरे");
  }
  else {
    varnm1 = varnm.substring(0, 1);
    findnakshatra1(varnm1);
    varnm1 = varnm.substring(0, 2);
    findnakshatra1(varnm1);
    varnm1 = varnm.substring(0, 3);
    findnakshatra1(varnm1);
    varnm1 = varnm.substring(0, 4);
    findnakshatra1(varnm1);

    kanyanm1 = kanyanm.substring(0, 1);
    findnakshatra2(kanyanm1);
    kanyanm1 = kanyanm.substring(0, 2);
    findnakshatra2(kanyanm1);
    kanyanm1 = kanyanm.substring(0, 3);
    findnakshatra2(kanyanm1);
    kanyanm1 = kanyanm.substring(0, 4);
    findnakshatra2(kanyanm1);

    findvarnnumber();
    findvashyanumber();
    findtaranumber();
    findyoninumber();
    findgannumber();
    findnaadinumber();
    findgrahanumber();
    findbhkutnumber();

    totalnumber = varnnumber + vashyanumber + taranumber + yoninumber + gannumber + naadinumber + grahanumber + bhkutnumber;
    milaanmessage();
    document.getElementById('resulttable').style.display = "";

    document.getElementById('ladkaa1').innerHTML = varvarn;
    document.getElementById('ladkaa2').innerHTML = varvashya;
    document.getElementById('ladkaa3').innerHTML = vartara;
    document.getElementById('ladkaa4').innerHTML = varyoni;
    document.getElementById('ladkaa5').innerHTML = vargraha;
    document.getElementById('ladkaa6').innerHTML = vargan;
    document.getElementById('ladkaa7').innerHTML = varrashi;
    document.getElementById('ladkaa8').innerHTML = varnaadi;

    document.getElementById('ladkee1').innerHTML = kanyavarn;
    document.getElementById('ladkee2').innerHTML = kanyavashya;
    document.getElementById('ladkee3').innerHTML = kanyatara;
    document.getElementById('ladkee4').innerHTML = kanyayoni;
    document.getElementById('ladkee5').innerHTML = kanyagraha;
    document.getElementById('ladkee6').innerHTML = kanyagan;
    document.getElementById('ladkee7').innerHTML = kanyarashi;
    document.getElementById('ladkee8').innerHTML = kanyanaadi;

    document.getElementById('gotnumber1').innerHTML = varnnumber;
    document.getElementById('gotnumber2').innerHTML = vashyanumber;
    document.getElementById('gotnumber3').innerHTML = taranumber;
    document.getElementById('gotnumber4').innerHTML = yoninumber;
    document.getElementById('gotnumber5').innerHTML = grahanumber;
    document.getElementById('gotnumber6').innerHTML = gannumber;
    document.getElementById('gotnumber7').innerHTML = bhkutnumber;
    document.getElementById('gotnumber8').innerHTML = naadinumber;

    document.getElementById('gottotal').innerHTML = totalnumber;

    document.getElementById('saarineevichar').innerHTML = "मेलापक सारिणी विचार";

    document.getElementById('sarineevivharmsg').innerHTML = milanresultmessage + "<br /><br />";
  }
}

function findnakshatra1(namechar1) {
  if (namechar1 == "चू" || namechar1 == "चे" || namechar1 == "चो" || namechar1 == "ला" || namechar1 == "चु" || namechar1 == "चै" || namechar1 == "ल" || namechar1 == "chu" || namechar1 == "che" || namechar1 == "cho" || namechar1 == "laa" || namechar1 == "l" || namechar1 == "chai" || namechar1 == "la") {
    varnakshatra = "अश्विनी";
    varrashi = "मेष";
    varvarn = "क्षत्रिय";
    varvashya = "चतुष्पाद";
    vartara = "जन्म";
    varyoni = "अश्व";
    vargraha = "मंगल";
    vargan = "देव";
    varnaadi = "आदि";
  }
  else if (namechar1 == "ली" || namechar1 == "लू" || namechar1 == "लु" || namechar1 == "ले" || namechar1 == "लो" || namechar1 == "li" || namechar1 == "lee" || namechar1 == "lu" || namechar1 == "le" || namechar1 == "lo") {
    varnakshatra = "भरणी";
    varrashi = "मेष";
    varvarn = "क्षत्रिय";
    varvashya = "चतुष्पाद";
    vartara = "सम्पत";
    varyoni = "गज";
    vargraha = "मंगल";
    vargan = "मनुष्य";
    varnaadi = "मध्य";
  }
  else if (namechar1 == "अ" || namechar1 == "इ" || namechar1 == "उ" || namechar1 == "ए" || namechar1 == "आ" || namechar1 == "ई" || namechar1 == "ऐ" || namechar1 == "a" || namechar1 == "aa" || namechar1 == "e" || namechar1 == "i" || namechar1 == "u" || namechar1 == "ai" || namechar1 == "ऊ" || namechar1 == "अं" || namechar1 == "आं" || namechar1 == "इं" || namechar1 == "an" || namechar1 == "aan" || namechar1 == "in") {
    varnakshatra = "कृत्तिका";
    varvashya = "चतुष्पाद";
    vartara = "विपत";
    varyoni = "मेष";
    vargan = "राक्षस";
    varnaadi = "अन्त";
    if (namechar1 == "अ" || namechar1 == "आ" || namechar1 == "a" || namechar1 == "aa" || namechar1 == "अं" || namechar1 == "आं" || namechar1 == "an" || namechar1 == "aan") {
      varrashi = "मेष";
      varvarn = "क्षत्रिय";
      vargraha = "मंगल";
    }
    else {
      varrashi = "वृष";
      varvarn = "वैश्य";
      vargraha = "शुक्र";
    }
  }
  else if (namechar1 == "ओ" || namechar1 == "व" || namechar1 == "वा" || namechar1 == "वी" || namechar1 == "वु" || namechar1 == "ब" || namechar1 == "बा" || namechar1 == "बी" || namechar1 == "बू" || namechar1 == "बु" || namechar1 == "वू" || namechar1 == "वि" || namechar1 == "बि" || namechar1 == "O" || namechar1 == "v" || namechar1 == "va" || namechar1 == "vee" || namechar1 == "vi" || namechar1 == "vu" || namechar1 == "b" || namechar1 == "ba" || namechar1 == "bi" || namechar1 == "bee" || namechar1 == "bu" || namechar1 == "बं" || namechar1 == "ban" || namechar1 == "वं" || namechar1 == "व्र" || namechar1 == "vr" || namechar1 == "ब्र" || namechar1 == "br" || namechar1 == "वृ" || namechar1 == "बृ" || namechar1 == "vri" || namechar1 == "bri" || namechar1 == "van") {
    varnakshatra = "रोहिणी";
    varrashi = "वृष";
    varvarn = "वैश्य";
    varvashya = "चतुष्पाद";
    vartara = "क्षेम";
    varyoni = "सर्प";
    vargraha = "शुक्र";
    vargan = "मनुष्य";
    varnaadi = "अन्त";
  }
  else if (namechar1 == "वे" || namechar1 == "बे" || namechar1 == "बो" || namechar1 == "वो" || namechar1 == "क" || namechar1 == "का" || namechar1 == "की" || namechar1 == "कि" || namechar1 == "ve" || namechar1 == "be" || namechar1 == "vo" || namechar1 == "bo" || namechar1 == "k" || namechar1 == "ka" || namechar1 == "kee" || namechar1 == "ki" || namechar1 == "कं" || namechar1 == "kn" || namechar1 == "कां" || namechar1 == "kan" || namechar1 == "कृ" || namechar1 == "kri") {
    varnakshatra = "मृगशिरा";
    vartara = "प्रत्यरि";
    varyoni = "सर्प";
    vargan = "देव";
    varnaadi = "मध्य";
    if (namechar1 == "वे" || namechar1 == "बे" || namechar1 == "बो" || namechar1 == "वो" || namechar1 == "ve" || namechar1 == "be" || namechar1 == "vo" || namechar1 == "bo") {
      varrashi = "वृष";
      varvarn = "वैश्य";
      varvashya = "चतुष्पाद";
      vargraha = "शुक्र";
    }
    else {
      varrashi = "मिथुन";
      varvarn = "शूद्र";
      varvashya = "मानव";
      vargraha = "बुध";
    }
  }
  else if (namechar1 == "कु" || namechar1 == "कू" || namechar1 == "घ" || namechar1 == "घा" || namechar1 == "घी" || namechar1 == "घि" || namechar1 == "घो" || namechar1 == "छ" || namechar1 == "छी" || namechar1 == "छि" || namechar1 == "छो" || namechar1 == "ku" || namechar1 == "gh" || namechar1 == "gha" || namechar1 == "ghee" || namechar1 == "ghi" || namechar1 == "ghu" || namechar1 == "gho" || namechar1 == "chh" || namechar1 == "chha" || namechar1 == "छा" || namechar1 == "chho" || namechar1 == "chhi" || namechar1 == "chhu" || namechar1 == "chhe" || namechar1 == "घ्र" || namechar1 == "ghr") {
    varnakshatra = "आर्द्रा";
    varrashi = "मिथुन";
    varvarn = "शूद्र";
    varvashya = "मानव";
    vartara = "साधक";
    varyoni = "स्वान";
    vargraha = "बुध";
    vargan = "मनुष्य";
    varnaadi = "आदि";
  }
  else if (namechar1 == "के" || namechar1 == "को" || namechar1 == "कै" || namechar1 == "ह" || namechar1 == "हा" || namechar1 == "ही " || namechar1 == "हि" || namechar1 == "ke" || namechar1 == "ko" || namechar1 == "kai" || namechar1 == "h" || namechar1 == "ha" || namechar1 == "hi" || namechar1 == "hee" || namechar1 == "हं" || namechar1 == "han") {
    varnakshatra = "पुनर्वसु";
    vartara = "वध";
    varyoni = "विडाल";
    vargan = "देव";
    varnaadi = "आदि";
    if (namechar1 == "ही " || namechar1 == "हि" || namechar1 == "hi" || namechar1 == "hee") {
      varrashi = "कर्क";
      varvarn = "ब्राह्मण";
      varvashya = "कीट";
      vargraha = "चन्द्र";
    }
    else {
      varrashi = "मिथुन";
      varvarn = "शूद्र";
      varvashya = "मानव";
      vargraha = "बुध";
    }
  }
  else if (namechar1 == "हु" || namechar1 == "हू" || namechar1 == "हे" || namechar1 == "हो" || namechar1 == "ड" || namechar1 == "डा" || namechar1 == "hu" || namechar1 == "he" || namechar1 == "ho") {
    varnakshatra = "पुष्य";
    varrashi = "कर्क";
    varvarn = "ब्राह्मण";
    varvashya = "कीट";
    vartara = "मित्र";
    varyoni = "मेष";
    vargraha = "चन्द्र";
    vargan = "देव";
    varnaadi = "मध्य";
  }
  else if (namechar1 == "डी" || namechar1 == "डू" || namechar1 == "डु" || namechar1 == "डे" || namechar1 == "डो" || namechar1 == "डौ") {
    varnakshatra = "आश्लेषा";
    varrashi = "कर्क";
    varvarn = "ब्राह्मण";
    varvashya = "कीट";
    vartara = "अतिमित्र";
    varyoni = "विडाल";
    vargraha = "चन्द्र";
    vargan = "राक्षस";
    varnaadi = "अन्त";
  }
  else if (namechar1 == "म" || namechar1 == "मा" || namechar1 == "मी" || namechar1 == "मि" || namechar1 == "मु" || namechar1 == "मू" || namechar1 == "मे" || namechar1 == "m" || namechar1 == "ma" || namechar1 == "mee" || namechar1 == "mi" || namechar1 == "mu" || namechar1 == "me" || namechar1 == "मं" || namechar1 == "मृ" || namechar1 == "म्र" || namechar1 == "man" || namechar1 == "mri" || namechar1 == "mr") {
    varnakshatra = "मघा";
    varrashi = "सिंह";
    varvarn = "क्षत्रिय";
    varvashya = "वनचर";
    vartara = "जन्म";
    varyoni = "मूषक";
    vargraha = "सूर्य";
    vargan = "राक्षस";
    varnaadi = "अन्त";
  }
  else if (namechar1 == "मो" || namechar1 == "ट" || namechar1 == "टा" || namechar1 == "टी" || namechar1 == "टि" || namechar1 == "टू" || namechar1 == "टु" || namechar1 == "mo") {
    varnakshatra = "पूर्वा फाल्गुनी";
    varrashi = "सिंह";
    varvarn = "क्षत्रिय";
    varvashya = "वनचर";
    vartara = "सम्पत";
    varyoni = "मूषक";
    vargraha = "सूर्य";
    vargan = "मनुष्य";
    varnaadi = "मध्य";
  }
  else if (namechar1 == "टे" || namechar1 == "टो" || namechar1 == "प" || namechar1 == "पा" || namechar1 == "पी" || namechar1 == "पि" || namechar1 == "p" || namechar1 == "pa" || namechar1 == "paa" || namechar1 == "pi" || namechar1 == "pee" || namechar1 == "पं" || namechar1 == "pan" || namechar1 == "पृ" || namechar1 == "pri" || namechar1 == "प्र" || namechar1 == "pr") {
    varnakshatra = "उत्तरा फाल्गुनी";
    vartara = "विपत";
    varyoni = "गौ";
    vargan = "मनुष्य";
    varnaadi = "आदि";
    if (namechar1 == "टे") {
      varrashi = "सिंह";
      varvarn = "क्षत्रिय";
      varvashya = "वनचर";
      vargraha = "सूर्य";
    }
    else {
      varrashi = "कन्या";
      varvarn = "वैश्य";
      varvashya = "मानव";
      vargraha = "बुध";
    }
  }
  else if (namechar1 == "पु" || namechar1 == "पू" || namechar1 == "ष" || namechar1 == "ण" || namechar1 == "ठ" || namechar1 == "ठा" || namechar1 == "ठु" || namechar1 == "ठू" || namechar1 == "pu") {
    varnakshatra = "हस्त";
    varrashi = "कन्या";
    varvarn = "वैश्य";
    varvashya = "मानव";
    vartara = "क्षेम";
    varyoni = "महिष";
    vargraha = "बुध";
    vargan = "देव";
    varnaadi = "आदि";
  }
  else if (namechar1 == "पे" || namechar1 == "पो" || namechar1 == "र" || namechar1 == "रा" || namechar1 == "री" || namechar1 == "रि" || namechar1 == "ऋ" || namechar1 == "pe" || namechar1 == "po" || namechar1 == "r" || namechar1 == "ra" || namechar1 == "raa" || namechar1 == "ri" || namechar1 == "ree" || namechar1 == "रं" || namechar1 == "ran" || namechar1 == "rn") {
    varnakshatra = "चित्रा";
    vartara = "प्रत्यरि";
    varyoni = "व्याघ्र";
    vargan = "राक्षस";
    varnaadi = "मध्य";
    if (namechar1 == "पे" || namechar1 == "पो" || namechar1 == "pe" || namechar1 == "po") {
      varrashi = "कन्या";
      varvarn = "वैश्य";
      varvashya = "मानव";
      vargraha = "बुध";
    }
    else {
      varrashi = "तुला";
      varvarn = "शूद्र";
      varvashya = "मानव";
      vargraha = "शुक्र";
    }
  }
  else if (namechar1 == "रू" || namechar1 == "रे" || namechar1 == "रो" || namechar1 == "त" || namechar1 == "ता" || namechar1 == "ru" || namechar1 == "re" || namechar1 == "ro" || namechar1 == "t" || namechar1 == "ta" || namechar1 == "taa" || namechar1 == "तं" || namechar1 == "tan" || namechar1 == "तृ") {
    varnakshatra = "स्वाती";
    varrashi = "तुला";
    varvarn = "शूद्र";
    varvashya = "मानव";
    vartara = "साधक";
    varyoni = "महिष";
    vargraha = "शुक्र";
    vargan = "देव";
    varnaadi = "अन्त";
  }
  else if (namechar1 == "ती" || namechar1 == "ति" || namechar1 == "तू" || namechar1 == "तु" || namechar1 == "ते" || namechar1 == "तो" || namechar1 == "त्र" || namechar1 == "त्री" || namechar1 == "त्रि" || namechar1 == "ti" || namechar1 == "tee" || namechar1 == "tu" || namechar1 == "te" || namechar1 == "to" || namechar1 == "tri" || namechar1 == "tr" || namechar1 == "tree") {
    varnakshatra = "विशाखा";
    vartara = "वध";
    varyoni = "व्याघ्र";
    vargan = "राक्षस";
    varnaadi = "अन्त";
    if (namechar1 == "तो" || namechar1 == "to") {
      varrashi = "वृश्चिक";
      varvarn = "ब्राह्मण";
      varvashya = "कीट";
      vargraha = "मंगल";
    }
    else {
      varrashi = "तुला";
      varvarn = "शूद्र";
      varvashya = "मानव";
      vargraha = "शुक्र";
    }
  }
  else if (namechar1 == "न" || namechar1 == "ना" || namechar1 == "नी" || namechar1 == "नि" || namechar1 == "नु" || namechar1 == "नू" || namechar1 == "ने" || namechar1 == "नै" || namechar1 == "n" || namechar1 == "na" || namechar1 == "naa" || namechar1 == "ni" || namechar1 == "nee" || namechar1 == "nu" || namechar1 == "ne" || namechar1 == "nai" || namechar1 == "नं" || namechar1 == "nn" || namechar1 == "nan" || namechar1 == "नृ" || namechar1 == "nri") {
    varnakshatra = "अनुराधा";
    varrashi = "वृश्चिक";
    varvarn = "ब्राह्मण";
    varvashya = "कीट";
    vartara = "मित्र";
    varyoni = "हरिण";
    vargraha = "मंगल";
    vargan = "देव";
    varnaadi = "मध्य";
  }
  else if (namechar1 == "नो" || namechar1 == "य" || namechar1 == "या" || namechar1 == "यी" || namechar1 == "यि" || namechar1 == "यु" || namechar1 == "यू" || namechar1 == "no" || namechar1 == "y" || namechar1 == "ya" || namechar1 == "yaa" || namechar1 == "yi" || namechar1 == "yee" || namechar1 == "yu") {
    varnakshatra = "ज्येष्ठा";
    varrashi = "वृश्चिक";
    varvarn = "ब्राह्मण";
    varvashya = "कीट";
    vartara = "अतिमित्र";
    varyoni = "हरिण";
    vargraha = "मंगल";
    vargan = "राक्षस";
    varnaadi = "आदि";
  }
  else if (namechar1 == "ये" || namechar1 == "यो" || namechar1 == "भ" || namechar1 == "भा" || namechar1 == "भि" || namechar1 == "भी" || namechar1 == "ye" || namechar1 == "yo" || namechar1 == "bh" || namechar1 == "bha" || namechar1 == "bhaa" || namechar1 == "bhi" || namechar1 == "bhee" || namechar1 == "भ्र" || namechar1 == "bhr") {
    varnakshatra = "मूला";
    varrashi = "धनु";
    varvarn = "क्षत्रिय";
    varvashya = "मानव";
    vartara = "जन्म";
    varyoni = "स्वान";
    vargraha = "गुरु";
    vargan = "राक्षस";
    varnaadi = "आदि";
  }
  else if (namechar1 == "भू" || namechar1 == "भु" || namechar1 == "ध" || namechar1 == "धा" || namechar1 == "धु" || namechar1 == "धू" || namechar1 == "धी" || namechar1 == "धि" || namechar1 == "धो" || namechar1 == "फ" || namechar1 == "फा" || namechar1 == "फै" || namechar1 == "फी " || namechar1 == "फि" || namechar1 == "bhu" || namechar1 == "dh" || namechar1 == "dha" || namechar1 == "dhaa" || namechar1 == "dhu" || namechar1 == "dhee" || namechar1 == "dhi" || namechar1 == "dho" || namechar1 == "f" || namechar1 == "fa" || namechar1 == "faa" || namechar1 == "fai" || namechar1 == "fi" || namechar1 == "fee" || namechar1 == "धृ" || namechar1 == "dhr" || namechar1 == "ध्रु" || namechar1 == "dhru") {
    varnakshatra = "पूर्वाषाढ़ा";
    varrashi = "धनु";
    varvarn = "क्षत्रिय";
    varvashya = "मानव";
    vartara = "सम्पत";
    varyoni = "वानर";
    vargraha = "गुरु";
    vargan = "मनुष्य";
    varnaadi = "मध्य";
  }
  else if (namechar1 == "भे" || namechar1 == "भो" || namechar1 == "ज" || namechar1 == "जा" || namechar1 == "जी" || namechar1 == "जि" || namechar1 == "जू" || namechar1 == "जु" || namechar1 == "जे" || namechar1 == "जो" || namechar1 == "j" || namechar1 == "ja" || namechar1 == "jaa" || namechar1 == "ji" || namechar1 == "jee" || namechar1 == "ju" || namechar1 == "je" || namechar1 == "jo" || namechar1 == "jai" || namechar1 == "जं" || namechar1 == "jan" || namechar1 == "bhe" || namechar1 == "bho") {
    varnakshatra = "उत्तराषाढ़ा";
    vartara = "विपत";
    varyoni = "नकुल";
    vargan = "मनुष्य";
    varnaadi = "अन्त";
    if (namechar1 == "भे" || namechar1 == "bhe") {
      varrashi = "धनु";
      varvarn = "क्षत्रिय";
      vargraha = "गुरु";
      varvashya = "मानव";
    }
    else {
      varrashi = "मकर";
      varvarn = "वैश्य";
      varvashya = "जलचर";
      vargraha = "शनि";
    }
  }
  else if (namechar1 == "ख" || namechar1 == "खा" || namechar1 == "खी" || namechar1 == "खि" || namechar1 == "खु" || namechar1 == "खू" || namechar1 == "खे" || namechar1 == "खो" || namechar1 == "kh" || namechar1 == "kha" || namechar1 == "khaa" || namechar1 == "khi" || namechar1 == "khee" || namechar1 == "khu" || namechar1 == "khe" || namechar1 == "kho") {
    varnakshatra = "श्रवण";
    varrashi = "मकर";
    varvarn = "वैश्य";
    varvashya = "जलचर";
    vartara = "क्षेम";
    varyoni = "वानर";
    vargraha = "शनि";
    vargan = "देव";
    varnaadi = "अन्त";
  }
  else if (namechar1 == "ग" || namechar1 == "गा" || namechar1 == "गी" || namechar1 == "गि" || namechar1 == "गु" || namechar1 == "गू" || namechar1 == "गे" || namechar1 == "g" || namechar1 == "ga" || namechar1 == "gaa" || namechar1 == "gi" || namechar1 == "gee" || namechar1 == "gu" || namechar1 == "ge" || namechar1 == "गं" || namechar1 == "गृ" || namechar1 == "gri" || namechar1 == "ग्र" || namechar1 == "gr" || namechar1 == "gan") {
    varnakshatra = "धनिष्ठा";
    vartara = "प्रत्यरि";
    varyoni = "सिंह";
    vargan = "राक्षस";
    varnaadi = "मध्य";
    if (namechar1 == "ग" || namechar1 == "गा" || namechar1 == "गी" || namechar1 == "गि" || namechar1 == "गं" || namechar1 == "गृ" || namechar1 == "ग्र" || namechar1 == "g" || namechar1 == "ga" || namechar1 == "gaa" || namechar1 == "gi" || namechar1 == "gee" || namechar1 == "gan" || namechar1 == "gri" || namechar1 == "gr") {
      varrashi = "मकर";
      varvarn = "वैश्य";
      varvashya = "जलचर";
      vargraha = "शनि";
    }
    else {
      varrashi = "कुम्भ";
      varvarn = "शूद्र";
      varvashya = "मानव";
      vargraha = "शनि";
    }
  }
  else if (namechar1 == "गो " || namechar1 == "गै" || namechar1 == "गौ" || namechar1 == "स" || namechar1 == "सा" || namechar1 == "सी" || namechar1 == "सि" || namechar1 == "सु " || namechar1 == "सू" || namechar1 == "श्री" || namechar1 == "go" || namechar1 == "gai" || namechar1 == "ri" || namechar1 == "gau" || namechar1 == "s" || namechar1 == "sa" || namechar1 == "sa" || namechar1 == "si" || namechar1 == "see" || namechar1 == "su" || namechar1 == "shri" || namechar1 == "सं" || namechar1 == "san" || namechar1 == "शं" || namechar1 == "shan" || namechar1 == "सृ" || namechar1 == "sri" || namechar1 == "शी" || namechar1 == "शि" || namechar1 == "श" || namechar1 == "शु" || namechar1 == "शू" || namechar1 == "शो" || namechar1 == "shee" || namechar1 == "shi" || namechar1 == "sho" || namechar1 == "shu" || namechar1 == "sh") {
    varnakshatra = "शतभिषा";
    varrashi = "कुम्भ";
    varvarn = "शूद्र";
    varvashya = "मानव";
    vartara = "साधक";
    varyoni = "अश्व";
    vargraha = "शनि";
    vargan = "राक्षस";
    varnaadi = "आदि";
  }
  else if (namechar1 == "से " || namechar1 == "सो" || namechar1 == "सै" || namechar1 == "द" || namechar1 == "दा" || namechar1 == "दी" || namechar1 == "दि" || namechar1 == "se" || namechar1 == "so" || namechar1 == "sai" || namechar1 == "d" || namechar1 == "da" || namechar1 == "di" || namechar1 == "daa" || namechar1 == "dee" || namechar1 == "दं" || namechar1 == "dan" || namechar1 == "दृ" || namechar1 == "द्र" || namechar1 == "dr" || namechar1 == "dri") {
    varnakshatra = "पूर्वा भाद्रपद";
    vartara = "वध";
    varyoni = "सिंह";
    vargan = "मनुष्य";
    varnaadi = "आदि";
    if (namechar1 == "दी" || namechar1 == "दि" || namechar1 == "di" || namechar1 == "dee") {
      varrashi = "मीन";
      varvarn = "ब्राह्मण";
      varvashya = "जलचर";
      vargraha = "गुरु";
    }
    else {
      varrashi = "कुम्भ";
      varvarn = "शूद्र";
      varvashya = "मानव";
      vargraha = "शनि";
    }
  }
  else if (namechar1 == "दू" || namechar1 == "दु" || namechar1 == "थ" || namechar1 == "था" || namechar1 == "थी" || namechar1 == "थि" || namechar1 == "थू" || namechar1 == "थु" || namechar1 == "झ" || namechar1 == "झा" || namechar1 == "झु" || namechar1 == "झू" || namechar1 == "ञ" || namechar1 == "du" || namechar1 == "jh" || namechar1 == "jha" || namechar1 == "jhu" || namechar1 == "झं" || namechar1 == "jhan") {
    varnakshatra = "उत्तरा भाद्रपद";
    varrashi = "मीन";
    varvarn = "ब्राह्मण";
    varvashya = "जलचर";
    vartara = "मित्र";
    varyoni = "गौ";
    vargraha = "गुरु";
    vargan = "मनुष्य";
    varnaadi = "मध्य";
  }
  else if (namechar1 == "दे" || namechar1 == "दो" || namechar1 == "दौ" || namechar1 == "च" || namechar1 == "चा" || namechar1 == "ची" || namechar1 == "चि" || namechar1 == "de" || namechar1 == "do" || namechar1 == "dau" || namechar1 == "ch" || namechar1 == "cha" || namechar1 == "chaa" || namechar1 == "chi" || namechar1 == "chee" || namechar1 == "चं" || namechar1 == "chan" || namechar1 == "दै" || namechar1 == "dai") {
    varnakshatra = "रेवती";
    varrashi = "मीन";
    varvarn = "ब्राह्मण";
    varvashya = "जलचर";
    vartara = "अतिमित्र";
    varyoni = "गज";
    vargraha = "गुरु";
    vargan = "देव";
    varnaadi = "अन्त";
  }
  else {
  }
}

function findnakshatra2(namechar2) {
  if (namechar2 == "चू" || namechar2 == "चे" || namechar2 == "चो" || namechar2 == "ला" || namechar2 == "चु" || namechar2 == "चै" || namechar2 == "ल" || namechar2 == "chu" || namechar2 == "che" || namechar2 == "cho" || namechar2 == "laa" || namechar2 == "l" || namechar2 == "chai" || namechar2 == "la") {
    kanyanakshatra = "अश्विनी";
    kanyarashi = "मेष";
    kanyavarn = "क्षत्रिय";
    kanyavashya = "चतुष्पाद";
    kanyatara = "जन्म";
    kanyayoni = "अश्व";
    kanyagraha = "मंगल";
    kanyagan = "देव";
    kanyanaadi = "आदि";
  }
  else if (namechar2 == "ली" || namechar2 == "लू" || namechar2 == "लु" || namechar2 == "ले" || namechar2 == "लो" || namechar2 == "li" || namechar2 == "lee" || namechar2 == "lu" || namechar2 == "le" || namechar2 == "lo") {
    kanyanakshatra = "भरणी";
    kanyarashi = "मेष";
    kanyavarn = "क्षत्रिय";
    kanyavashya = "चतुष्पाद";
    kanyatara = "सम्पत";
    kanyayoni = "गज";
    kanyagraha = "मंगल";
    kanyagan = "मनुष्य";
    kanyanaadi = "मध्य";
  }
  else if (namechar2 == "अ" || namechar2 == "इ" || namechar2 == "उ" || namechar2 == "ए" || namechar2 == "आ" || namechar2 == "ई" || namechar2 == "ऐ" || namechar2 == "a" || namechar2 == "aa" || namechar2 == "e" || namechar2 == "i" || namechar2 == "u" || namechar2 == "ai" || namechar2 == "ऊ" || namechar2 == "अं" || namechar2 == "आं" || namechar2 == "इं" || namechar2 == "an" || namechar2 == "aan" || namechar2 == "in") {
    kanyanakshatra = "कृत्तिका";
    kanyavashya = "चतुष्पाद";
    kanyatara = "विपत";
    kanyayoni = "मेष";
    kanyagan = "राक्षस";
    kanyanaadi = "अन्त";
    if (namechar2 == "अ" || namechar2 == "आ" || namechar2 == "a" || namechar2 == "aa" || namechar2 == "अं" || namechar2 == "आं" || namechar2 == "an" || namechar2 == "aan") {
      kanyarashi = "मेष";
      kanyavarn = "क्षत्रिय";
      kanyagraha = "मंगल";
    }
    else {
      kanyarashi = "वृष";
      kanyavarn = "वैश्य";
      kanyagraha = "शुक्र";
    }
  }
  else if (namechar2 == "ओ" || namechar2 == "व" || namechar2 == "वा" || namechar2 == "वी" || namechar2 == "वु" || namechar2 == "ब" || namechar2 == "बा" || namechar2 == "बी" || namechar2 == "बू" || namechar2 == "बु" || namechar2 == "वू" || namechar2 == "वि" || namechar2 == "बि" || namechar2 == "O" || namechar2 == "v" || namechar2 == "va" || namechar2 == "vee" || namechar2 == "vi" || namechar2 == "vu" || namechar2 == "b" || namechar2 == "ba" || namechar2 == "bi" || namechar2 == "bee" || namechar2 == "bu" || namechar2 == "बं" || namechar2 == "ban" || namechar2 == "वं" || namechar2 == "व्र" || namechar2 == "vr" || namechar2 == "ब्र" || namechar2 == "br" || namechar2 == "वृ" || namechar2 == "बृ" || namechar2 == "vri" || namechar2 == "bri" || namechar2 == "van") {
    kanyanakshatra = "रोहिणी";
    kanyarashi = "वृष";
    kanyavarn = "वैश्य";
    kanyavashya = "चतुष्पाद";
    kanyatara = "क्षेम";
    kanyayoni = "सर्प";
    kanyagraha = "शुक्र";
    kanyagan = "मनुष्य";
    kanyanaadi = "अन्त";
  }
  else if (namechar2 == "वे" || namechar2 == "बे" || namechar2 == "बो" || namechar2 == "वो" || namechar2 == "क" || namechar2 == "का" || namechar2 == "की" || namechar2 == "कि" || namechar2 == "ve" || namechar2 == "be" || namechar2 == "vo" || namechar2 == "bo" || namechar2 == "k" || namechar2 == "ka" || namechar2 == "kee" || namechar2 == "ki" || namechar2 == "कं" || namechar2 == "kn" || namechar2 == "कां" || namechar2 == "kan" || namechar2 == "कृ" || namechar2 == "kri") {
    kanyanakshatra = "मृगशिरा";
    kanyatara = "प्रत्यरि";
    kanyayoni = "सर्प";
    kanyagan = "देव";
    kanyanaadi = "मध्य";
    if (namechar2 == "वे" || namechar2 == "बे" || namechar2 == "बो" || namechar2 == "वो" || namechar2 == "ve" || namechar2 == "be" || namechar2 == "vo" || namechar2 == "bo") {
      kanyarashi = "वृष";
      kanyavarn = "वैश्य";
      kanyavashya = "चतुष्पाद";
      kanyagraha = "शुक्र";
    }
    else {
      kanyarashi = "मिथुन";
      kanyavarn = "शूद्र";
      kanyavashya = "मानव";
      kanyagraha = "बुध";
    }
  }
  else if (namechar2 == "कु" || namechar2 == "कू" || namechar2 == "घ" || namechar2 == "घा" || namechar2 == "घी" || namechar2 == "घि" || namechar2 == "घो" || namechar2 == "छ" || namechar2 == "छी" || namechar2 == "छि" || namechar2 == "छो" || namechar2 == "ku" || namechar2 == "gh" || namechar2 == "gha" || namechar2 == "ghee" || namechar2 == "ghi" || namechar2 == "ghu" || namechar2 == "gho" || namechar2 == "chh" || namechar2 == "chha" || namechar2 == "छा" || namechar2 == "chho" || namechar2 == "chhi" || namechar2 == "chhu" || namechar2 == "chhe" || namechar2 == "घ्र" || namechar2 == "ghr") {
    kanyanakshatra = "आर्द्रा";
    kanyarashi = "मिथुन";
    kanyavarn = "शूद्र";
    kanyavashya = "मानव";
    kanyatara = "साधक";
    kanyayoni = "स्वान";
    kanyagraha = "बुध";
    kanyagan = "मनुष्य";
    kanyanaadi = "आदि";
  }
  else if (namechar2 == "के" || namechar2 == "को" || namechar2 == "कै" || namechar2 == "ह" || namechar2 == "हा" || namechar2 == "ही " || namechar2 == "हि" || namechar2 == "ke" || namechar2 == "ko" || namechar2 == "kai" || namechar2 == "h" || namechar2 == "ha" || namechar2 == "hi" || namechar2 == "hee" || namechar2 == "हं" || namechar2 == "han") {
    kanyanakshatra = "पुनर्वसु";
    kanyatara = "वध";
    kanyayoni = "विडाल";
    kanyagan = "देव";
    kanyanaadi = "आदि";
    if (namechar2 == "ही " || namechar2 == "हि" || namechar2 == "hi" || namechar2 == "hee") {
      kanyarashi = "कर्क";
      kanyavarn = "ब्राह्मण";
      kanyavashya = "कीट";
      kanyagraha = "चन्द्र";
    }
    else {
      kanyarashi = "मिथुन";
      kanyavarn = "शूद्र";
      kanyavashya = "मानव";
      kanyagraha = "बुध";
    }
  }
  else if (namechar2 == "हु" || namechar2 == "हू" || namechar2 == "हे" || namechar2 == "हो" || namechar2 == "ड" || namechar2 == "डा" || namechar2 == "hu" || namechar2 == "he" || namechar2 == "ho") {
    kanyanakshatra = "पुष्य";
    kanyarashi = "कर्क";
    kanyavarn = "ब्राह्मण";
    kanyavashya = "कीट";
    kanyatara = "मित्र";
    kanyayoni = "मेष";
    kanyagraha = "चन्द्र";
    kanyagan = "देव";
    kanyanaadi = "मध्य";
  }
  else if (namechar2 == "डी" || namechar2 == "डू" || namechar2 == "डु" || namechar2 == "डे" || namechar2 == "डो" || namechar2 == "डौ") {
    kanyanakshatra = "आश्लेषा";
    kanyarashi = "कर्क";
    kanyavarn = "ब्राह्मण";
    kanyavashya = "कीट";
    kanyatara = "अतिमित्र";
    kanyayoni = "विडाल";
    kanyagraha = "चन्द्र";
    kanyagan = "राक्षस";
    kanyanaadi = "अन्त";
  }
  else if (namechar2 == "म" || namechar2 == "मा" || namechar2 == "मी" || namechar2 == "मि" || namechar2 == "मु" || namechar2 == "मू" || namechar2 == "मे" || namechar2 == "m" || namechar2 == "ma" || namechar2 == "mee" || namechar2 == "mi" || namechar2 == "mu" || namechar2 == "me" || namechar2 == "मं" || namechar2 == "मृ" || namechar2 == "म्र" || namechar2 == "man" || namechar2 == "mri" || namechar2 == "mr") {
    kanyanakshatra = "मघा";
    kanyarashi = "सिंह";
    kanyavarn = "क्षत्रिय";
    kanyavashya = "वनचर";
    kanyatara = "जन्म";
    kanyayoni = "मूषक";
    kanyagraha = "सूर्य";
    kanyagan = "राक्षस";
    kanyanaadi = "अन्त";
  }
  else if (namechar2 == "मो" || namechar2 == "ट" || namechar2 == "टा" || namechar2 == "टी" || namechar2 == "टि" || namechar2 == "टू" || namechar2 == "टु" || namechar2 == "mo") {
    kanyanakshatra = "पूर्वा फाल्गुनी";
    kanyarashi = "सिंह";
    kanyavarn = "क्षत्रिय";
    kanyavashya = "वनचर";
    kanyatara = "सम्पत";
    kanyayoni = "मूषक";
    kanyagraha = "सूर्य";
    kanyagan = "मनुष्य";
    kanyanaadi = "मध्य";
  }
  else if (namechar2 == "टे" || namechar2 == "टो" || namechar2 == "प" || namechar2 == "पा" || namechar2 == "पी" || namechar2 == "पि" || namechar2 == "p" || namechar2 == "pa" || namechar2 == "paa" || namechar2 == "pi" || namechar2 == "pee" || namechar2 == "पं" || namechar2 == "pan" || namechar2 == "पृ" || namechar2 == "pri" || namechar2 == "प्र" || namechar2 == "pr") {
    kanyanakshatra = "उत्तरा फाल्गुनी";
    kanyatara = "विपत";
    kanyayoni = "गौ";
    kanyagan = "मनुष्य";
    kanyanaadi = "आदि";
    if (namechar2 == "टे") {
      kanyarashi = "सिंह";
      kanyavarn = "क्षत्रिय";
      kanyavashya = "वनचर";
      kanyagraha = "सूर्य";
    }
    else {
      kanyarashi = "कन्या";
      kanyavarn = "वैश्य";
      kanyavashya = "मानव";
      kanyagraha = "बुध";
    }
  }
  else if (namechar2 == "पु" || namechar2 == "पू" || namechar2 == "ष" || namechar2 == "ण" || namechar2 == "ठ" || namechar2 == "ठा" || namechar2 == "ठु" || namechar2 == "ठू" || namechar2 == "pu") {
    kanyanakshatra = "हस्त";
    kanyarashi = "कन्या";
    kanyavarn = "वैश्य";
    kanyavashya = "मानव";
    kanyatara = "क्षेम";
    kanyayoni = "महिष";
    kanyagraha = "बुध";
    kanyagan = "देव";
    kanyanaadi = "आदि";
  }
  else if (namechar2 == "पे" || namechar2 == "पो" || namechar2 == "र" || namechar2 == "रा" || namechar2 == "री" || namechar2 == "रि" || namechar2 == "ऋ" || namechar2 == "pe" || namechar2 == "po" || namechar2 == "r" || namechar2 == "ra" || namechar2 == "raa" || namechar2 == "ri" || namechar2 == "ree" || namechar2 == "रं" || namechar2 == "ran" || namechar2 == "rn") {
    kanyanakshatra = "चित्रा";
    kanyatara = "प्रत्यरि";
    kanyayoni = "व्याघ्र";
    kanyagan = "राक्षस";
    kanyanaadi = "मध्य";
    if (namechar2 == "पे" || namechar2 == "पो" || namechar2 == "pe" || namechar2 == "po") {
      kanyarashi = "कन्या";
      kanyavarn = "वैश्य";
      kanyavashya = "मानव";
      kanyagraha = "बुध";
    }
    else {
      kanyarashi = "तुला";
      kanyavarn = "शूद्र";
      kanyavashya = "मानव";
      kanyagraha = "शुक्र";
    }
  }
  else if (namechar2 == "रू" || namechar2 == "रे" || namechar2 == "रो" || namechar2 == "त" || namechar2 == "ता" || namechar2 == "ru" || namechar2 == "re" || namechar2 == "ro" || namechar2 == "t" || namechar2 == "ta" || namechar2 == "taa" || namechar2 == "तं" || namechar2 == "tan" || namechar2 == "तृ") {
    kanyanakshatra = "स्वाती";
    kanyarashi = "तुला";
    kanyavarn = "शूद्र";
    kanyavashya = "मानव";
    kanyatara = "साधक";
    kanyayoni = "महिष";
    kanyagraha = "शुक्र";
    kanyagan = "देव";
    kanyanaadi = "अन्त";
  }
  else if (namechar2 == "ती" || namechar2 == "ति" || namechar2 == "तू" || namechar2 == "तु" || namechar2 == "ते" || namechar2 == "तो" || namechar2 == "त्र" || namechar2 == "त्री" || namechar2 == "त्रि" || namechar2 == "ti" || namechar2 == "tee" || namechar2 == "tu" || namechar2 == "te" || namechar2 == "to" || namechar2 == "tri" || namechar2 == "tr" || namechar2 == "tree") {
    kanyanakshatra = "विशाखा";
    kanyatara = "वध";
    kanyayoni = "व्याघ्र";
    kanyagan = "राक्षस";
    kanyanaadi = "अन्त";
    if (namechar2 == "तो" || namechar2 == "to") {
      kanyarashi = "वृश्चिक";
      kanyavarn = "ब्राह्मण";
      kanyavashya = "कीट";
      kanyagraha = "मंगल";
    }
    else {
      kanyarashi = "तुला";
      kanyavarn = "शूद्र";
      kanyavashya = "मानव";
      kanyagraha = "शुक्र";
    }
  }
  else if (namechar2 == "न" || namechar2 == "ना" || namechar2 == "नी" || namechar2 == "नि" || namechar2 == "नु" || namechar2 == "नू" || namechar2 == "ने" || namechar2 == "नै" || namechar2 == "n" || namechar2 == "na" || namechar2 == "naa" || namechar2 == "ni" || namechar2 == "nee" || namechar2 == "nu" || namechar2 == "ne" || namechar2 == "nai" || namechar2 == "नं" || namechar2 == "nn" || namechar2 == "nan" || namechar2 == "नृ" || namechar2 == "nri") {
    kanyanakshatra = "अनुराधा";
    kanyarashi = "वृश्चिक";
    kanyavarn = "ब्राह्मण";
    kanyavashya = "कीट";
    kanyatara = "मित्र";
    kanyayoni = "हरिण";
    kanyagraha = "मंगल";
    kanyagan = "देव";
    kanyanaadi = "मध्य";
  }
  else if (namechar2 == "नो" || namechar2 == "य" || namechar2 == "या" || namechar2 == "यी" || namechar2 == "यि" || namechar2 == "यु" || namechar2 == "यू" || namechar2 == "no" || namechar2 == "y" || namechar2 == "ya" || namechar2 == "yaa" || namechar2 == "yi" || namechar2 == "yee" || namechar2 == "yu") {
    kanyanakshatra = "ज्येष्ठा";
    kanyarashi = "वृश्चिक";
    kanyavarn = "ब्राह्मण";
    kanyavashya = "कीट";
    kanyatara = "अतिमित्र";
    kanyayoni = "हरिण";
    kanyagraha = "मंगल";
    kanyagan = "राक्षस";
    kanyanaadi = "आदि";
  }
  else if (namechar2 == "ये" || namechar2 == "यो" || namechar2 == "भ" || namechar2 == "भा" || namechar2 == "भि" || namechar2 == "भी" || namechar2 == "ye" || namechar2 == "yo" || namechar2 == "bh" || namechar2 == "bha" || namechar2 == "bhaa" || namechar2 == "bhi" || namechar2 == "bhee" || namechar2 == "भ्र" || namechar2 == "bhr") {
    kanyanakshatra = "मूला";
    kanyarashi = "धनु";
    kanyavarn = "क्षत्रिय";
    kanyavashya = "मानव";
    kanyatara = "जन्म";
    kanyayoni = "स्वान";
    kanyagraha = "गुरु";
    kanyagan = "राक्षस";
    kanyanaadi = "आदि";
  }
  else if (namechar2 == "भू" || namechar2 == "भु" || namechar2 == "ध" || namechar2 == "धा" || namechar2 == "धु" || namechar2 == "धू" || namechar2 == "धी" || namechar2 == "धि" || namechar2 == "धो" || namechar2 == "फ" || namechar2 == "फा" || namechar2 == "फै" || namechar2 == "फी " || namechar2 == "फि" || namechar2 == "bhu" || namechar2 == "dh" || namechar2 == "dha" || namechar2 == "dhaa" || namechar2 == "dhu" || namechar2 == "dhee" || namechar2 == "dhi" || namechar2 == "dho" || namechar2 == "f" || namechar2 == "fa" || namechar2 == "faa" || namechar2 == "fai" || namechar2 == "fi" || namechar2 == "fee" || namechar2 == "धृ" || namechar2 == "dhr" || namechar2 == "ध्रु" || namechar2 == "dhru") {
    kanyanakshatra = "पूर्वाषाढ़ा";
    kanyarashi = "धनु";
    kanyavarn = "क्षत्रिय";
    kanyavashya = "मानव";
    kanyatara = "सम्पत";
    kanyayoni = "वानर";
    kanyagraha = "गुरु";
    kanyagan = "मनुष्य";
    kanyanaadi = "मध्य";
  }
  else if (namechar2 == "भे" || namechar2 == "भो" || namechar2 == "ज" || namechar2 == "जा" || namechar2 == "जी" || namechar2 == "जि" || namechar2 == "जू" || namechar2 == "जु" || namechar2 == "जे" || namechar2 == "जो" || namechar2 == "j" || namechar2 == "ja" || namechar2 == "jaa" || namechar2 == "ji" || namechar2 == "jee" || namechar2 == "ju" || namechar2 == "je" || namechar2 == "jo" || namechar2 == "jai" || namechar2 == "जं" || namechar2 == "jan" || namechar2 == "bhe" || namechar2 == "bho") {
    kanyanakshatra = "उत्तराषाढ़ा";
    kanyatara = "विपत";
    kanyayoni = "नकुल";
    kanyagan = "मनुष्य";
    kanyanaadi = "अन्त";
    if (namechar2 == "भे" || namechar2 == "bhe") {
      kanyarashi = "धनु";
      kanyavarn = "क्षत्रिय";
      kanyagraha = "गुरु";
      kanyavashya = "मानव";
    }
    else {
      kanyarashi = "मकर";
      kanyavarn = "वैश्य";
      kanyavashya = "चतुष्पाद";
      kanyagraha = "शनि";
    }
  }
  else if (namechar2 == "ख" || namechar2 == "खा" || namechar2 == "खी" || namechar2 == "खि" || namechar2 == "खु" || namechar2 == "खू" || namechar2 == "खे" || namechar2 == "खो" || namechar2 == "kh" || namechar2 == "kha" || namechar2 == "khaa" || namechar2 == "khi" || namechar2 == "khee" || namechar2 == "khu" || namechar2 == "khe" || namechar2 == "kho") {
    kanyanakshatra = "श्रवण";
    kanyarashi = "मकर";
    kanyavarn = "वैश्य";
    kanyavashya = "चतुष्पाद";
    kanyatara = "क्षेम";
    kanyayoni = "वानर";
    kanyagraha = "शनि";
    kanyagan = "देव";
    kanyanaadi = "अन्त";
  }
  else if (namechar2 == "ग" || namechar2 == "गा" || namechar2 == "गी" || namechar2 == "गि" || namechar2 == "गु" || namechar2 == "गू" || namechar2 == "गे" || namechar2 == "g" || namechar2 == "ga" || namechar2 == "gaa" || namechar2 == "gi" || namechar2 == "gee" || namechar2 == "gu" || namechar2 == "ge" || namechar2 == "गं" || namechar2 == "गृ" || namechar2 == "gri" || namechar2 == "ग्र" || namechar2 == "gr" || namechar2 == "gan") {
    kanyanakshatra = "धनिष्ठा";
    kanyatara = "प्रत्यरि";
    kanyayoni = "सिंह";
    kanyagan = "राक्षस";
    kanyanaadi = "मध्य";
    if (namechar2 == "ग" || namechar2 == "गा" || namechar2 == "गी" || namechar2 == "गि" || namechar2 == "गं" || namechar2 == "गृ" || namechar2 == "ग्र" || namechar2 == "g" || namechar2 == "ga" || namechar2 == "gaa" || namechar2 == "gi" || namechar2 == "gee" || namechar2 == "gan" || namechar2 == "gri" || namechar2 == "gr") {
      kanyarashi = "मकर";
      kanyavarn = "वैश्य";
      kanyavashya = "चतुष्पाद";
      kanyagraha = "शनि";
    }
    else {
      kanyarashi = "कुम्भ";
      kanyavarn = "शूद्र";
      kanyavashya = "मानव";
      kanyagraha = "शनि";
    }
  }
  else if (namechar2 == "गो " || namechar2 == "गै" || namechar2 == "गौ" || namechar2 == "स" || namechar2 == "सा" || namechar2 == "सी" || namechar2 == "सि" || namechar2 == "सु " || namechar2 == "सू" || namechar2 == "श्री" || namechar2 == "go" || namechar2 == "gai" || namechar2 == "ri" || namechar2 == "gau" || namechar2 == "s" || namechar2 == "sa" || namechar2 == "sa" || namechar2 == "si" || namechar2 == "see" || namechar2 == "su" || namechar2 == "shri" || namechar2 == "सं" || namechar2 == "san" || namechar2 == "शं" || namechar2 == "shan" || namechar2 == "सृ" || namechar2 == "sri" || namechar2 == "शी" || namechar2 == "शि" || namechar2 == "श" || namechar2 == "शु" || namechar2 == "शू" || namechar2 == "शो" || namechar2 == "shee" || namechar2 == "shi" || namechar2 == "sho" || namechar2 == "shu" || namechar2 == "sh") {
    kanyanakshatra = "शतभिषा";
    kanyarashi = "कुम्भ";
    kanyavarn = "शूद्र";
    kanyavashya = "मानव";
    kanyatara = "साधक";
    kanyayoni = "अश्व";
    kanyagraha = "शनि";
    kanyagan = "राक्षस";
    kanyanaadi = "आदि";
  }
  else if (namechar2 == "से " || namechar2 == "सो" || namechar2 == "सै" || namechar2 == "द" || namechar2 == "दा" || namechar2 == "दी" || namechar2 == "दि" || namechar2 == "se" || namechar2 == "so" || namechar2 == "sai" || namechar2 == "d" || namechar2 == "da" || namechar2 == "di" || namechar2 == "daa" || namechar2 == "dee" || namechar2 == "दं" || namechar2 == "dan" || namechar2 == "दृ" || namechar2 == "द्र" || namechar2 == "dr" || namechar2 == "dri") {
    kanyanakshatra = "पूर्वा भाद्रपद";
    kanyatara = "वध";
    kanyayoni = "सिंह";
    kanyagan = "मनुष्य";
    kanyanaadi = "आदि";
    if (namechar2 == "दी" || namechar2 == "दि" || namechar2 == "di" || namechar2 == "dee") {
      kanyarashi = "मीन";
      kanyavarn = "ब्राह्मण";
      kanyavashya = "जलचर";
      kanyagraha = "गुरु";
    }
    else {
      kanyarashi = "कुम्भ";
      kanyavarn = "शूद्र";
      kanyavashya = "मानव";
      kanyagraha = "शनि";
    }
  }
  else if (namechar2 == "दू" || namechar2 == "दु" || namechar2 == "थ" || namechar2 == "था" || namechar2 == "थी" || namechar2 == "थि" || namechar2 == "थू" || namechar2 == "थु" || namechar2 == "झ" || namechar2 == "झा" || namechar2 == "झु" || namechar2 == "झू" || namechar2 == "ञ" || namechar2 == "du" || namechar2 == "jh" || namechar2 == "jha" || namechar2 == "jhu" || namechar2 == "झं" || namechar2 == "jhan") {
    kanyanakshatra = "उत्तरा भाद्रपद";
    kanyarashi = "मीन";
    kanyavarn = "ब्राह्मण";
    kanyavashya = "जलचर";
    kanyatara = "मित्र";
    kanyayoni = "गौ";
    kanyagraha = "गुरु";
    kanyagan = "मनुष्य";
    kanyanaadi = "मध्य";
  }
  else if (namechar2 == "दे" || namechar2 == "दो" || namechar2 == "दौ" || namechar2 == "च" || namechar2 == "चा" || namechar2 == "ची" || namechar2 == "चि" || namechar2 == "de" || namechar2 == "do" || namechar2 == "dau" || namechar2 == "ch" || namechar2 == "cha" || namechar2 == "chaa" || namechar2 == "chi" || namechar2 == "chee" || namechar2 == "चं" || namechar2 == "chan" || namechar2 == "दै" || namechar2 == "dai") {
    kanyanakshatra = "रेवती";
    kanyarashi = "मीन";
    kanyavarn = "ब्राह्मण";
    kanyavashya = "जलचर";
    kanyatara = "अतिमित्र";
    kanyayoni = "गज";
    kanyagraha = "गुरु";
    kanyagan = "देव";
    kanyanaadi = "अन्त";
  }
  else {
  }
}

function findvarnnumber() {
  if (varvarn == "ब्राह्मण" && kanyavarn == "ब्राह्मण") {
    varnnumber = 1;
  }
  else if (varvarn == "ब्राह्मण" && kanyavarn == "क्षत्रिय") {
    varnnumber = 1;
  }
  else if (varvarn == "ब्राह्मण" && kanyavarn == "वैश्य") {
    varnnumber = 1;
  }
  else if (varvarn == "ब्राह्मण" && kanyavarn == "शूद्र") {
    varnnumber = 1;
  }
  else if (varvarn == "क्षत्रिय" && kanyavarn == "ब्राह्मण") {
    varnnumber = 0;
  }
  else if (varvarn == "क्षत्रिय" && kanyavarn == "क्षत्रिय") {
    varnnumber = 1;
  }
  else if (varvarn == "क्षत्रिय" && kanyavarn == "वैश्य") {
    varnnumber = 1;
  }
  else if (varvarn == "क्षत्रिय" && kanyavarn == "शूद्र") {
    varnnumber = 1;
  }
  else if (varvarn == "वैश्य" && kanyavarn == "ब्राह्मण") {
    varnnumber = 0;
  }
  else if (varvarn == "वैश्य" && kanyavarn == "क्षत्रिय") {
    varnnumber = 0;
  }
  else if (varvarn == "वैश्य" && kanyavarn == "वैश्य") {
    varnnumber = 1;
  }
  else if (varvarn == "वैश्य" && kanyavarn == "शूद्र") {
    varnnumber = 1;
  }
  else if (varvarn == "शूद्र" && kanyavarn == "ब्राह्मण") {
    varnnumber = 0;
  }
  else if (varvarn == "शूद्र" && kanyavarn == "क्षत्रिय") {
    varnnumber = 0;
  }
  else if (varvarn == "शूद्र" && kanyavarn == "वैश्य") {
    varnnumber = 0;
  }
  else if (varvarn == "शूद्र" && kanyavarn == "शूद्र") {
    varnnumber = 1;
  }
  else {
  }
}

function findvashyanumber() {
  if (varvashya == "चतुष्पाद" && kanyavashya == "चतुष्पाद") {
    vashyanumber = 2;
  }
  else if (varvashya == "चतुष्पाद" && kanyavashya == "मानव") {
    vashyanumber = 0.5;
  }
  else if (varvashya == "चतुष्पाद" && kanyavashya == "जलचर") {
    vashyanumber = 1;
  }
  else if (varvashya == "चतुष्पाद" && kanyavashya == "वनचर") {
    vashyanumber = 0.5;
  }
  else if (varvashya == "चतुष्पाद" && kanyavashya == "कीट") {
    vashyanumber = 1;
  }
  else if (varvashya == "मानव" && kanyavashya == "चतुष्पाद") {
    vashyanumber = 1;
  }
  else if (varvashya == "मानव" && kanyavashya == "मानव") {
    vashyanumber = 2;
  }
  else if (varvashya == "मानव" && kanyavashya == "जलचर") {
    vashyanumber = 0;
  }
  else if (varvashya == "मानव" && kanyavashya == "वनचर") {
    vashyanumber = 0;
  }
  else if (varvashya == "मानव" && kanyavashya == "कीट") {
    vashyanumber = 0;
  }
  else if (varvashya == "जलचर" && kanyavashya == "चतुष्पाद") {
    vashyanumber = 1;
  }
  else if (varvashya == "जलचर" && kanyavashya == "मानव") {
    vashyanumber = 0;
  }
  else if (varvashya == "जलचर" && kanyavashya == "जलचर") {
    vashyanumber = 2;
  }
  else if (varvashya == "जलचर" && kanyavashya == "वनचर") {
    vashyanumber = 2;
  }
  else if (varvashya == "जलचर" && kanyavashya == "कीट") {
    vashyanumber = 2;
  }
  else if (varvashya == "वनचर" && kanyavashya == "चतुष्पाद") {
    vashyanumber = 0;
  }
  else if (varvashya == "वनचर" && kanyavashya == "मानव") {
    vashyanumber = 0;
  }
  else if (varvashya == "वनचर" && kanyavashya == "जलचर") {
    vashyanumber = 2;
  }
  else if (varvashya == "वनचर" && kanyavashya == "वनचर") {
    vashyanumber = 2;
  }
  else if (varvashya == "वनचर" && kanyavashya == "कीट") {
    vashyanumber = 1;
  }
  else if (varvashya == "कीट" && kanyavashya == "चतुष्पाद") {
    vashyanumber = 1;
  }
  else if (varvashya == "कीट" && kanyavashya == "मानव") {
    vashyanumber = 0.5;
  }
  else if (varvashya == "कीट" && kanyavashya == "जलचर") {
    vashyanumber = 2;
  }
  else if (varvashya == "कीट" && kanyavashya == "वनचर") {
    vashyanumber = 0;
  }
  else if (varvashya == "कीट" && kanyavashya == "कीट") {
    vashyanumber = 2;
  }
  else {
  }
}

function findtaranumber() {
  if (vartara == "जन्म" && kanyatara == "जन्म") {
    taranumber = 3;
  }
  else if (vartara == "जन्म" && kanyatara == "सम्पत") {
    taranumber = 3;
  }
  else if (vartara == "जन्म" && kanyatara == "विपत") {
    taranumber = 1.5;
  }
  else if (vartara == "जन्म" && kanyatara == "क्षेम") {
    taranumber = 1.5;
  }
  else if (vartara == "जन्म" && kanyatara == "प्रत्यरि") {
    taranumber = 1.5;
  }
  else if (vartara == "जन्म" && kanyatara == "साधक") {
    taranumber = 1.5;
  }
  else if (vartara == "जन्म" && kanyatara == "वध") {
    taranumber = 1.5;
  }
  else if (vartara == "जन्म" && kanyatara == "मित्र") {
    taranumber = 1.5;
  }
  else if (vartara == "जन्म" && kanyatara == "अतिमित्र") {
    taranumber = 3;
  }
  else if (vartara == "सम्पत" && kanyatara == "जन्म") {
    taranumber = 3;
  }
  else if (vartara == "सम्पत" && kanyatara == "सम्पत") {
    taranumber = 3;
  }
  else if (vartara == "सम्पत" && kanyatara == "विपत") {
    taranumber = 3;
  }
  else if (vartara == "सम्पत" && kanyatara == "क्षेम") {
    taranumber = 1.5;
  }
  else if (vartara == "सम्पत" && kanyatara == "प्रत्यरि") {
    taranumber = 1.5;
  }
  else if (vartara == "सम्पत" && kanyatara == "साधक") {
    taranumber = 1.5;
  }
  else if (vartara == "सम्पत" && kanyatara == "वध") {
    taranumber = 1.5;
  }
  else if (vartara == "सम्पत" && kanyatara == "मित्र") {
    taranumber = 1.5;
  }
  else if (vartara == "सम्पत" && kanyatara == "अतिमित्र") {
    taranumber = 3;
  }
  else if (vartara == "विपत" && kanyatara == "जन्म") {
    taranumber = 1.5;
  }
  else if (vartara == "विपत" && kanyatara == "सम्पत") {
    taranumber = 3;
  }
  else if (vartara == "विपत" && kanyatara == "विपत") {
    taranumber = 3;
  }
  else if (vartara == "विपत" && kanyatara == "क्षेम") {
    taranumber = 3;
  }
  else if (vartara == "विपत" && kanyatara == "प्रत्यरि") {
    taranumber = 1.5;
  }
  else if (vartara == "विपत" && kanyatara == "साधक") {
    taranumber = 1.5;
  }
  else if (vartara == "विपत" && kanyatara == "वध") {
    taranumber = 1.5;
  }
  else if (vartara == "विपत" && kanyatara == "मित्र") {
    taranumber = 1.5;
  }
  else if (vartara == "विपत" && kanyatara == "अतिमित्र") {
    taranumber = 1.5;
  }
  else if (vartara == "क्षेम" && kanyatara == "जन्म") {
    taranumber = 1.5;
  }
  else if (vartara == "क्षेम" && kanyatara == "सम्पत") {
    taranumber = 1.5;
  }
  else if (vartara == "क्षेम" && kanyatara == "विपत") {
    taranumber = 3;
  }
  else if (vartara == "क्षेम" && kanyatara == "क्षेम") {
    taranumber = 3;
  }
  else if (vartara == "क्षेम" && kanyatara == "प्रत्यरि") {
    taranumber = 3;
  }
  else if (vartara == "क्षेम" && kanyatara == "साधक") {
    taranumber = 1.5;
  }
  else if (vartara == "क्षेम" && kanyatara == "वध") {
    taranumber = 1.5;
  }
  else if (vartara == "क्षेम" && kanyatara == "मित्र") {
    taranumber = 1.5;
  }
  else if (vartara == "क्षेम" && kanyatara == "अतिमित्र") {
    taranumber = 3;
  }
  else if (vartara == "प्रत्यरि" && kanyatara == "जन्म") {
    taranumber = 1.5;
  }
  else if (vartara == "प्रत्यरि" && kanyatara == "सम्पत") {
    taranumber = 1.5;
  }
  else if (vartara == "प्रत्यरि" && kanyatara == "विपत") {
    taranumber = 1.5;
  }
  else if (vartara == "प्रत्यरि" && kanyatara == "क्षेम") {
    taranumber = 1.5;
  }
  else if (vartara == "प्रत्यरि" && kanyatara == "प्रत्यरि") {
    taranumber = 3;
  }
  else if (vartara == "प्रत्यरि" && kanyatara == "साधक") {
    taranumber = 3;
  }
  else if (vartara == "प्रत्यरि" && kanyatara == "वध") {
    taranumber = 1.5;
  }
  else if (vartara == "प्रत्यरि" && kanyatara == "मित्र") {
    taranumber = 1.5;
  }
  else if (vartara == "प्रत्यरि" && kanyatara == "अतिमित्र") {
    taranumber = 1.5;
  }
  else if (vartara == "साधक" && kanyatara == "जन्म") {
    taranumber = 1.5;
  }
  else if (vartara == "साधक" && kanyatara == "सम्पत") {
    taranumber = 1.5;
  }
  else if (vartara == "साधक" && kanyatara == "विपत") {
    taranumber = 1.5;
  }
  else if (vartara == "साधक" && kanyatara == "क्षेम") {
    taranumber = 1.5;
  }
  else if (vartara == "साधक" && kanyatara == "प्रत्यरि") {
    taranumber = 3;
  }
  else if (vartara == "साधक" && kanyatara == "साधक") {
    taranumber = 3;
  }
  else if (vartara == "साधक" && kanyatara == "वध") {
    taranumber = 3;
  }
  else if (vartara == "साधक" && kanyatara == "मित्र") {
    taranumber = 1.5;
  }
  else if (vartara == "साधक" && kanyatara == "अतिमित्र") {
    taranumber = 3;
  }
  else if (vartara == "वध" && kanyatara == "जन्म") {
    taranumber = 1.5;
  }
  else if (vartara == "वध" && kanyatara == "सम्पत") {
    taranumber = 1.5;
  }
  else if (vartara == "वध" && kanyatara == "विपत") {
    taranumber = 1.5;
  }
  else if (vartara == "वध" && kanyatara == "क्षेम") {
    taranumber = 1.5;
  }
  else if (vartara == "वध" && kanyatara == "प्रत्यरि") {
    taranumber = 1.5;
  }
  else if (vartara == "वध" && kanyatara == "साधक") {
    taranumber = 3;
  }
  else if (vartara == "वध" && kanyatara == "वध") {
    taranumber = 3;
  }
  else if (vartara == "वध" && kanyatara == "मित्र") {
    taranumber = 3;
  }
  else if (vartara == "वध" && kanyatara == "अतिमित्र") {
    taranumber = 1.5;
  }
  else if (vartara == "मित्र" && kanyatara == "जन्म") {
    taranumber = 1.5;
  }
  else if (vartara == "मित्र" && kanyatara == "सम्पत") {
    taranumber = 1.5;
  }
  else if (vartara == "मित्र" && kanyatara == "विपत") {
    taranumber = 1.5;
  }
  else if (vartara == "मित्र" && kanyatara == "क्षेम") {
    taranumber = 1.5;
  }
  else if (vartara == "मित्र" && kanyatara == "प्रत्यरि") {
    taranumber = 1.5;
  }
  else if (vartara == "मित्र" && kanyatara == "साधक") {
    taranumber = 1.5;
  }
  else if (vartara == "मित्र" && kanyatara == "वध") {
    taranumber = 3;
  }
  else if (vartara == "मित्र" && kanyatara == "मित्र") {
    taranumber = 3;
  }
  else if (vartara == "मित्र" && kanyatara == "अतिमित्र") {
    taranumber = 3;
  }
  else if (vartara == "अतिमित्र" && kanyatara == "जन्म") {
    taranumber = 3;
  }
  else if (vartara == "अतिमित्र" && kanyatara == "सम्पत") {
    taranumber = 1.5;
  }
  else if (vartara == "अतिमित्र" && kanyatara == "विपत") {
    taranumber = 1.5;
  }
  else if (vartara == "अतिमित्र" && kanyatara == "क्षेम") {
    taranumber = 1.5;
  }
  else if (vartara == "अतिमित्र" && kanyatara == "प्रत्यरि") {
    taranumber = 1.5;
  }
  else if (vartara == "अतिमित्र" && kanyatara == "साधक") {
    taranumber = 1.5;
  }
  else if (vartara == "अतिमित्र" && kanyatara == "वध") {
    taranumber = 1.5;
  }
  else if (vartara == "अतिमित्र" && kanyatara == "मित्र") {
    taranumber = 3;
  }
  else if (vartara == "अतिमित्र" && kanyatara == "अतिमित्र") {
    taranumber = 3;
  }
  else {
  }
}

function findyoninumber() {
  if (varyoni == "अश्व" && kanyayoni == "अश्व") {
    yoninumber = 4;
  }
  else if (varyoni == "अश्व" && kanyayoni == "गज") {
    yoninumber = 2;
  }
  else if (varyoni == "अश्व" && kanyayoni == "मेष") {
    yoninumber = 3;
  }
  else if (varyoni == "अश्व" && kanyayoni == "सर्प") {
    yoninumber = 2;
  }
  else if (varyoni == "अश्व" && kanyayoni == "स्वान") {
    yoninumber = 2;
  }
  else if (varyoni == "अश्व" && kanyayoni == "विडाल") {
    yoninumber = 3;
  }
  else if (varyoni == "अश्व" && kanyayoni == "मूषक") {
    yoninumber = 3;
  }
  else if (varyoni == "अश्व" && kanyayoni == "गौ") {
    yoninumber = 3;
  }
  else if (varyoni == "अश्व" && kanyayoni == "महिष") {
    yoninumber = 0;
  }
  else if (varyoni == "अश्व" && kanyayoni == "व्याघ्र") {
    yoninumber = 1;
  }
  else if (varyoni == "अश्व" && kanyayoni == "हरिण") {
    yoninumber = 3;
  }
  else if (varyoni == "अश्व" && kanyayoni == "वानर") {
    yoninumber = 2;
  }
  else if (varyoni == "अश्व" && kanyayoni == "नकुल") {
    yoninumber = 2;
  }
  else if (varyoni == "अश्व" && kanyayoni == "सिंह") {
    yoninumber = 1;
  }
  else if (varyoni == "गज" && kanyayoni == "अश्व") {
    yoninumber = 2;
  }
  else if (varyoni == "गज" && kanyayoni == "गज") {
    yoninumber = 4;
  }
  else if (varyoni == "गज" && kanyayoni == "मेष") {
    yoninumber = 3;
  }
  else if (varyoni == "गज" && kanyayoni == "सर्प") {
    yoninumber = 2;
  }
  else if (varyoni == "गज" && kanyayoni == "स्वान") {
    yoninumber = 2;
  }
  else if (varyoni == "गज" && kanyayoni == "विडाल") {
    yoninumber = 3;
  }
  else if (varyoni == "गज" && kanyayoni == "मूषक") {
    yoninumber = 3;
  }
  else if (varyoni == "गज" && kanyayoni == "गौ") {
    yoninumber = 3;
  }
  else if (varyoni == "गज" && kanyayoni == "महिष") {
    yoninumber = 3;
  }
  else if (varyoni == "गज" && kanyayoni == "व्याघ्र") {
    yoninumber = 1;
  }
  else if (varyoni == "गज" && kanyayoni == "हरिण") {
    yoninumber = 3;
  }
  else if (varyoni == "गज" && kanyayoni == "वानर") {
    yoninumber = 2;
  }
  else if (varyoni == "गज" && kanyayoni == "नकुल") {
    yoninumber = 2;
  }
  else if (varyoni == "गज" && kanyayoni == "सिंह") {
    yoninumber = 0;
  }
  else if (varyoni == "मेष" && kanyayoni == "अश्व") {
    yoninumber = 3;
  }
  else if (varyoni == "मेष" && kanyayoni == "गज") {
    yoninumber = 3;
  }
  else if (varyoni == "मेष" && kanyayoni == "मेष") {
    yoninumber = 4;
  }
  else if (varyoni == "मेष" && kanyayoni == "सर्प") {
    yoninumber = 2;
  }
  else if (varyoni == "मेष" && kanyayoni == "स्वान") {
    yoninumber = 2;
  }
  else if (varyoni == "मेष" && kanyayoni == "विडाल") {
    yoninumber = 3;
  }
  else if (varyoni == "मेष" && kanyayoni == "मूषक") {
    yoninumber = 3;
  }
  else if (varyoni == "मेष" && kanyayoni == "गौ") {
    yoninumber = 3;
  }
  else if (varyoni == "मेष" && kanyayoni == "महिष") {
    yoninumber = 3;
  }
  else if (varyoni == "मेष" && kanyayoni == "व्याघ्र") {
    yoninumber = 1;
  }
  else if (varyoni == "मेष" && kanyayoni == "हरिण") {
    yoninumber = 3;
  }
  else if (varyoni == "मेष" && kanyayoni == "वानर") {
    yoninumber = 0;
  }
  else if (varyoni == "मेष" && kanyayoni == "नकुल") {
    yoninumber = 2;
  }
  else if (varyoni == "मेष" && kanyayoni == "सिंह") {
    yoninumber = 1;
  }
  else if (varyoni == "सर्प" && kanyayoni == "अश्व") {
    yoninumber = 2;
  }
  else if (varyoni == "सर्प" && kanyayoni == "गज") {
    yoninumber = 2;
  }
  else if (varyoni == "सर्प" && kanyayoni == "मेष") {
    yoninumber = 2;
  }
  else if (varyoni == "सर्प" && kanyayoni == "सर्प") {
    yoninumber = 4;
  }
  else if (varyoni == "सर्प" && kanyayoni == "स्वान") {
    yoninumber = 2;
  }
  else if (varyoni == "सर्प" && kanyayoni == "विडाल") {
    yoninumber = 1;
  }
  else if (varyoni == "सर्प" && kanyayoni == "मूषक") {
    yoninumber = 1;
  }
  else if (varyoni == "सर्प" && kanyayoni == "गौ") {
    yoninumber = 2;
  }
  else if (varyoni == "सर्प" && kanyayoni == "महिष") {
    yoninumber = 2;
  }
  else if (varyoni == "सर्प" && kanyayoni == "व्याघ्र") {
    yoninumber = 2;
  }
  else if (varyoni == "सर्प" && kanyayoni == "हरिण") {
    yoninumber = 2;
  }
  else if (varyoni == "सर्प" && kanyayoni == "वानर") {
    yoninumber = 1;
  }
  else if (varyoni == "सर्प" && kanyayoni == "नकुल") {
    yoninumber = 0;
  }
  else if (varyoni == "सर्प" && kanyayoni == "सिंह") {
    yoninumber = 2;
  }
  else if (varyoni == "स्वान" && kanyayoni == "अश्व") {
    yoninumber = 2;
  }
  else if (varyoni == "स्वान" && kanyayoni == "गज") {
    yoninumber = 2;
  }
  else if (varyoni == "स्वान" && kanyayoni == "मेष") {
    yoninumber = 2;
  }
  else if (varyoni == "स्वान" && kanyayoni == "सर्प") {
    yoninumber = 2;
  }
  else if (varyoni == "स्वान" && kanyayoni == "स्वान") {
    yoninumber = 4;
  }
  else if (varyoni == "स्वान" && kanyayoni == "विडाल") {
    yoninumber = 1;
  }
  else if (varyoni == "स्वान" && kanyayoni == "मूषक") {
    yoninumber = 2;
  }
  else if (varyoni == "स्वान" && kanyayoni == "गौ") {
    yoninumber = 2;
  }
  else if (varyoni == "स्वान" && kanyayoni == "महिष") {
    yoninumber = 2;
  }
  else if (varyoni == "स्वान" && kanyayoni == "व्याघ्र") {
    yoninumber = 2;
  }
  else if (varyoni == "स्वान" && kanyayoni == "हरिण") {
    yoninumber = 0;
  }
  else if (varyoni == "स्वान" && kanyayoni == "वानर") {
    yoninumber = 2;
  }
  else if (varyoni == "स्वान" && kanyayoni == "नकुल") {
    yoninumber = 2;
  }
  else if (varyoni == "स्वान" && kanyayoni == "सिंह") {
    yoninumber = 1;
  }
  else if (varyoni == "विडाल" && kanyayoni == "अश्व") {
    yoninumber = 3;
  }
  else if (varyoni == "विडाल" && kanyayoni == "गज") {
    yoninumber = 3;
  }
  else if (varyoni == "विडाल" && kanyayoni == "मेष") {
    yoninumber = 3;
  }
  else if (varyoni == "विडाल" && kanyayoni == "सर्प") {
    yoninumber = 1;
  }
  else if (varyoni == "विडाल" && kanyayoni == "स्वान") {
    yoninumber = 1;
  }
  else if (varyoni == "विडाल" && kanyayoni == "विडाल") {
    yoninumber = 4;
  }
  else if (varyoni == "विडाल" && kanyayoni == "मूषक") {
    yoninumber = 0;
  }
  else if (varyoni == "विडाल" && kanyayoni == "गौ") {
    yoninumber = 3;
  }
  else if (varyoni == "विडाल" && kanyayoni == "महिष") {
    yoninumber = 3;
  }
  else if (varyoni == "विडाल" && kanyayoni == "व्याघ्र") {
    yoninumber = 2;
  }
  else if (varyoni == "विडाल" && kanyayoni == "हरिण") {
    yoninumber = 3;
  }
  else if (varyoni == "विडाल" && kanyayoni == "वानर") {
    yoninumber = 2;
  }
  else if (varyoni == "विडाल" && kanyayoni == "नकुल") {
    yoninumber = 2;
  }
  else if (varyoni == "विडाल" && kanyayoni == "सिंह") {
    yoninumber = 1;
  }
  else if (varyoni == "मूषक" && kanyayoni == "अश्व") {
    yoninumber = 3;
  }
  else if (varyoni == "मूषक" && kanyayoni == "गज") {
    yoninumber = 3;
  }
  else if (varyoni == "मूषक" && kanyayoni == "मेष") {
    yoninumber = 3;
  }
  else if (varyoni == "मूषक" && kanyayoni == "सर्प") {
    yoninumber = 1;
  }
  else if (varyoni == "मूषक" && kanyayoni == "स्वान") {
    yoninumber = 2;
  }
  else if (varyoni == "मूषक" && kanyayoni == "विडाल") {
    yoninumber = 0;
  }
  else if (varyoni == "मूषक" && kanyayoni == "मूषक") {
    yoninumber = 4;
  }
  else if (varyoni == "मूषक" && kanyayoni == "गौ") {
    yoninumber = 3;
  }
  else if (varyoni == "मूषक" && kanyayoni == "महिष") {
    yoninumber = 3;
  }
  else if (varyoni == "मूषक" && kanyayoni == "व्याघ्र") {
    yoninumber = 2;
  }
  else if (varyoni == "मूषक" && kanyayoni == "हरिण") {
    yoninumber = 2;
  }
  else if (varyoni == "मूषक" && kanyayoni == "वानर") {
    yoninumber = 2;
  }
  else if (varyoni == "मूषक" && kanyayoni == "नकुल") {
    yoninumber = 1;
  }
  else if (varyoni == "मूषक" && kanyayoni == "सिंह") {
    yoninumber = 2;
  }
  else if (varyoni == "गौ" && kanyayoni == "अश्व") {
    yoninumber = 3;
  }
  else if (varyoni == "गौ" && kanyayoni == "गज") {
    yoninumber = 3;
  }
  else if (varyoni == "गौ" && kanyayoni == "मेष") {
    yoninumber = 3;
  }
  else if (varyoni == "गौ" && kanyayoni == "सर्प") {
    yoninumber = 2;
  }
  else if (varyoni == "गौ" && kanyayoni == "स्वान") {
    yoninumber = 2;
  }
  else if (varyoni == "गौ" && kanyayoni == "विडाल") {
    yoninumber = 3;
  }
  else if (varyoni == "गौ" && kanyayoni == "मूषक") {
    yoninumber = 3;
  }
  else if (varyoni == "गौ" && kanyayoni == "गौ") {
    yoninumber = 4;
  }
  else if (varyoni == "गौ" && kanyayoni == "महिष") {
    yoninumber = 3;
  }
  else if (varyoni == "गौ" && kanyayoni == "व्याघ्र") {
    yoninumber = 0;
  }
  else if (varyoni == "गौ" && kanyayoni == "हरिण") {
    yoninumber = 3;
  }
  else if (varyoni == "गौ" && kanyayoni == "वानर") {
    yoninumber = 2;
  }
  else if (varyoni == "गौ" && kanyayoni == "नकुल") {
    yoninumber = 2;
  }
  else if (varyoni == "गौ" && kanyayoni == "सिंह") {
    yoninumber = 1;
  }
  else if (varyoni == "महिष" && kanyayoni == "अश्व") {
    yoninumber = 0;
  }
  else if (varyoni == "महिष" && kanyayoni == "गज") {
    yoninumber = 3;
  }
  else if (varyoni == "महिष" && kanyayoni == "मेष") {
    yoninumber = 3;
  }
  else if (varyoni == "महिष" && kanyayoni == "सर्प") {
    yoninumber = 2;
  }
  else if (varyoni == "महिष" && kanyayoni == "स्वान") {
    yoninumber = 2;
  }
  else if (varyoni == "महिष" && kanyayoni == "विडाल") {
    yoninumber = 3;
  }
  else if (varyoni == "महिष" && kanyayoni == "मूषक") {
    yoninumber = 3;
  }
  else if (varyoni == "महिष" && kanyayoni == "गौ") {
    yoninumber = 3;
  }
  else if (varyoni == "महिष" && kanyayoni == "महिष") {
    yoninumber = 4;
  }
  else if (varyoni == "महिष" && kanyayoni == "व्याघ्र") {
    yoninumber = 1;
  }
  else if (varyoni == "महिष" && kanyayoni == "हरिण") {
    yoninumber = 2;
  }
  else if (varyoni == "महिष" && kanyayoni == "वानर") {
    yoninumber = 2;
  }
  else if (varyoni == "महिष" && kanyayoni == "नकुल") {
    yoninumber = 2;
  }
  else if (varyoni == "महिष" && kanyayoni == "सिंह") {
    yoninumber = 1;
  }
  else if (varyoni == "व्याघ्र" && kanyayoni == "अश्व") {
    yoninumber = 1;
  }
  else if (varyoni == "व्याघ्र" && kanyayoni == "गज") {
    yoninumber = 1;
  }
  else if (varyoni == "व्याघ्र" && kanyayoni == "मेष") {
    yoninumber = 1;
  }
  else if (varyoni == "व्याघ्र" && kanyayoni == "सर्प") {
    yoninumber = 2;
  }
  else if (varyoni == "व्याघ्र" && kanyayoni == "स्वान") {
    yoninumber = 2;
  }
  else if (varyoni == "व्याघ्र" && kanyayoni == "विडाल") {
    yoninumber = 2;
  }
  else if (varyoni == "व्याघ्र" && kanyayoni == "मूषक") {
    yoninumber = 2;
  }
  else if (varyoni == "व्याघ्र" && kanyayoni == "गौ") {
    yoninumber = 0;
  }
  else if (varyoni == "व्याघ्र" && kanyayoni == "महिष") {
    yoninumber = 1;
  }
  else if (varyoni == "व्याघ्र" && kanyayoni == "व्याघ्र") {
    yoninumber = 4;
  }
  else if (varyoni == "व्याघ्र" && kanyayoni == "हरिण") {
    yoninumber = 1;
  }
  else if (varyoni == "व्याघ्र" && kanyayoni == "वानर") {
    yoninumber = 2;
  }
  else if (varyoni == "व्याघ्र" && kanyayoni == "नकुल") {
    yoninumber = 2;
  }
  else if (varyoni == "व्याघ्र" && kanyayoni == "सिंह") {
    yoninumber = 1;
  }
  else if (varyoni == "हरिण" && kanyayoni == "अश्व") {
    yoninumber = 3;
  }
  else if (varyoni == "हरिण" && kanyayoni == "गज") {
    yoninumber = 3;
  }
  else if (varyoni == "हरिण" && kanyayoni == "मेष") {
    yoninumber = 3;
  }
  else if (varyoni == "हरिण" && kanyayoni == "सर्प") {
    yoninumber = 2;
  }
  else if (varyoni == "हरिण" && kanyayoni == "स्वान") {
    yoninumber = 0;
  }
  else if (varyoni == "हरिण" && kanyayoni == "विडाल") {
    yoninumber = 3;
  }
  else if (varyoni == "हरिण" && kanyayoni == "मूषक") {
    yoninumber = 3;
  }
  else if (varyoni == "हरिण" && kanyayoni == "गौ") {
    yoninumber = 3;
  }
  else if (varyoni == "हरिण" && kanyayoni == "महिष") {
    yoninumber = 2;
  }
  else if (varyoni == "हरिण" && kanyayoni == "व्याघ्र") {
    yoninumber = 1;
  }
  else if (varyoni == "हरिण" && kanyayoni == "हरिण") {
    yoninumber = 4;
  }
  else if (varyoni == "हरिण" && kanyayoni == "वानर") {
    yoninumber = 2;
  }
  else if (varyoni == "हरिण" && kanyayoni == "नकुल") {
    yoninumber = 2;
  }
  else if (varyoni == "हरिण" && kanyayoni == "सिंह") {
    yoninumber = 1;
  }
  else if (varyoni == "वानर" && kanyayoni == "अश्व") {
    yoninumber = 2;
  }
  else if (varyoni == "वानर" && kanyayoni == "गज") {
    yoninumber = 2;
  }
  else if (varyoni == "वानर" && kanyayoni == "मेष") {
    yoninumber = 0;
  }
  else if (varyoni == "वानर" && kanyayoni == "सर्प") {
    yoninumber = 1;
  }
  else if (varyoni == "वानर" && kanyayoni == "स्वान") {
    yoninumber = 2;
  }
  else if (varyoni == "वानर" && kanyayoni == "विडाल") {
    yoninumber = 2;
  }
  else if (varyoni == "वानर" && kanyayoni == "मूषक") {
    yoninumber = 2;
  }
  else if (varyoni == "वानर" && kanyayoni == "गौ") {
    yoninumber = 2;
  }
  else if (varyoni == "वानर" && kanyayoni == "महिष") {
    yoninumber = 2;
  }
  else if (varyoni == "वानर" && kanyayoni == "व्याघ्र") {
    yoninumber = 2;
  }
  else if (varyoni == "वानर" && kanyayoni == "हरिण") {
    yoninumber = 2;
  }
  else if (varyoni == "वानर" && kanyayoni == "वानर") {
    yoninumber = 4;
  }
  else if (varyoni == "वानर" && kanyayoni == "नकुल") {
    yoninumber = 2;
  }
  else if (varyoni == "वानर" && kanyayoni == "सिंह") {
    yoninumber = 1;
  }
  else if (varyoni == "नकुल" && kanyayoni == "अश्व") {
    yoninumber = 2;
  }
  else if (varyoni == "नकुल" && kanyayoni == "गज") {
    yoninumber = 2;
  }
  else if (varyoni == "नकुल" && kanyayoni == "मेष") {
    yoninumber = 2;
  }
  else if (varyoni == "नकुल" && kanyayoni == "सर्प") {
    yoninumber = 0;
  }
  else if (varyoni == "नकुल" && kanyayoni == "स्वान") {
    yoninumber = 2;
  }
  else if (varyoni == "नकुल" && kanyayoni == "विडाल") {
    yoninumber = 2;
  }
  else if (varyoni == "नकुल" && kanyayoni == "मूषक") {
    yoninumber = 1;
  }
  else if (varyoni == "नकुल" && kanyayoni == "गौ") {
    yoninumber = 2;
  }
  else if (varyoni == "नकुल" && kanyayoni == "महिष") {
    yoninumber = 2;
  }
  else if (varyoni == "नकुल" && kanyayoni == "व्याघ्र") {
    yoninumber = 2;
  }
  else if (varyoni == "नकुल" && kanyayoni == "हरिण") {
    yoninumber = 2;
  }
  else if (varyoni == "नकुल" && kanyayoni == "वानर") {
    yoninumber = 2;
  }
  else if (varyoni == "नकुल" && kanyayoni == "नकुल") {
    yoninumber = 4;
  }
  else if (varyoni == "नकुल" && kanyayoni == "सिंह") {
    yoninumber = 2;
  }
  else if (varyoni == "सिंह" && kanyayoni == "अश्व") {
    yoninumber = 1;
  }
  else if (varyoni == "सिंह" && kanyayoni == "गज") {
    yoninumber = 0;
  }
  else if (varyoni == "सिंह" && kanyayoni == "मेष") {
    yoninumber = 1;
  }
  else if (varyoni == "सिंह" && kanyayoni == "सर्प") {
    yoninumber = 2;
  }
  else if (varyoni == "सिंह" && kanyayoni == "स्वान") {
    yoninumber = 1;
  }
  else if (varyoni == "सिंह" && kanyayoni == "विडाल") {
    yoninumber = 1;
  }
  else if (varyoni == "सिंह" && kanyayoni == "मूषक") {
    yoninumber = 2;
  }
  else if (varyoni == "सिंह" && kanyayoni == "गौ") {
    yoninumber = 1;
  }
  else if (varyoni == "सिंह" && kanyayoni == "महिष") {
    yoninumber = 1;
  }
  else if (varyoni == "सिंह" && kanyayoni == "व्याघ्र") {
    yoninumber = 1;
  }
  else if (varyoni == "सिंह" && kanyayoni == "हरिण") {
    yoninumber = 1;
  }
  else if (varyoni == "सिंह" && kanyayoni == "वानर") {
    yoninumber = 1;
  }
  else if (varyoni == "सिंह" && kanyayoni == "नकुल") {
    yoninumber = 2;
  }
  else if (varyoni == "सिंह" && kanyayoni == "सिंह") {
    yoninumber = 4;
  }
  else {
  }
}
function findgannumber() {
  if (vargan == "देव" && kanyagan == "देव") {
    gannumber = 6;
  }
  else if (vargan == "देव" && kanyagan == "मनुष्य") {
    gannumber = 6;
  }
  else if (vargan == "देव" && kanyagan == "राक्षस") {
    gannumber = 0;
  }
  if (vargan == "मनुष्य" && kanyagan == "देव") {
    gannumber = 5;
  }
  else if (vargan == "मनुष्य" && kanyagan == "मनुष्य") {
    gannumber = 6;
  }
  else if (vargan == "मनुष्य" && kanyagan == "राक्षस") {
    gannumber = 0;
  }
  if (vargan == "राक्षस" && kanyagan == "देव") {
    gannumber = 1;
  }
  else if (vargan == "राक्षस" && kanyagan == "मनुष्य") {
    gannumber = 0;
  }
  else if (vargan == "राक्षस" && kanyagan == "राक्षस") {
    gannumber = 6;
  }
  else {
  }
}
function findnaadinumber() {
  if (varnaadi == "आदि" && kanyanaadi == "आदि") {
    naadinumber = 0;
  }
  else if (varnaadi == "आदि" && kanyanaadi == "मध्य") {
    naadinumber = 8;
  }
  else if (varnaadi == "आदि" && kanyanaadi == "अन्त") {
    naadinumber = 8;
  }
  else if (varnaadi == "मध्य" && kanyanaadi == "आदि") {
    naadinumber = 8;
  }
  else if (varnaadi == "मध्य" && kanyanaadi == "मध्य") {
    naadinumber = 0;
  }
  else if (varnaadi == "मध्य" && kanyanaadi == "अन्त") {
    naadinumber = 8;
  }
  else if (varnaadi == "अन्त" && kanyanaadi == "आदि") {
    naadinumber = 8;
  }
  else if (varnaadi == "अन्त" && kanyanaadi == "मध्य") {
    naadinumber = 8;
  }
  else if (varnaadi == "अन्त" && kanyanaadi == "अन्त") {
    naadinumber = 0;
  }
  else {
  }
}

function findgrahanumber() {
  if (vargraha == kanyagraha) {
    if (vargraha != "")
      grahanumber = 5;
    else
      grahanumber = 0;
  }
  else if (vargraha == "सूर्य" && kanyagraha == "चन्द्र") {
    grahanumber = 5;
  }
  else if (vargraha == "सूर्य" && kanyagraha == "मंगल") {
    grahanumber = 5;
  }
  else if (vargraha == "सूर्य" && kanyagraha == "गुरु") {
    grahanumber = 5;
  }
  else if (vargraha == "चन्द्र" && kanyagraha == "सूर्य") {
    grahanumber = 5;
  }
  else if (vargraha == "मंगल" && kanyagraha == "सूर्य") {
    grahanumber = 5;
  }
  else if (vargraha == "मंगल" && kanyagraha == "गुरु") {
    grahanumber = 5;
  }
  else if (vargraha == "बुध" && kanyagraha == "शुक्र") {
    grahanumber = 5;
  }
  else if (vargraha == "गुरु" && kanyagraha == "सूर्य") {
    grahanumber = 5;
  }
  else if (vargraha == "गुरु" && kanyagraha == "मंगल") {
    grahanumber = 5;
  }
  else if (vargraha == "शुक्र" && kanyagraha == "बुध") {
    grahanumber = 5;
  }
  else if (vargraha == "शुक्र" && kanyagraha == "शनि") {
    grahanumber = 5;
  }
  else if (vargraha == "शनि" && kanyagraha == "शुक्र") {
    grahanumber = 5;
  }
  else if (vargraha == "सूर्य" && kanyagraha == "बुध") {
    grahanumber = 4;
  }
  else if (vargraha == "चन्द्र" && kanyagraha == "मंगल") {
    grahanumber = 4;
  }
  else if (vargraha == "चन्द्र" && kanyagraha == "गुरु") {
    grahanumber = 4;
  }
  else if (vargraha == "बुध" && kanyagraha == "शनि") {
    grahanumber = 4;
  }
  else if (vargraha == "मंगल" && kanyagraha == "शुक्र") {
    grahanumber = 3;
  }
  else if (vargraha == "शुक्र" && kanyagraha == "मंगल") {
    grahanumber = 3;
  }
  else if (vargraha == "शनि" && kanyagraha == "गुरु") {
    grahanumber = 3;
  }
  else if (vargraha == "गुरु" && kanyagraha == "शनि") {
    grahanumber = 3;
  }
  else if (vargraha == "चन्द्र" && kanyagraha == "बुध") {
    grahanumber = 1;
  }
  else if (vargraha == "बुध" && kanyagraha == "चन्द्र") {
    grahanumber = 1;
  }
  else if (vargraha == "चन्द्र" && kanyagraha == "शुक्र") {
    grahanumber = 0.5;
  }
  else if (vargraha == "चन्द्र" && kanyagraha == "शनि") {
    grahanumber = 0.5;
  }
  else if (vargraha == "मंगल" && kanyagraha == "शनि") {
    grahanumber = 0.5;
  }
  else if (vargraha == "बुध" && kanyagraha == "मंगल") {
    grahanumber = 0.5;
  }
  else if (vargraha == "बुध" && kanyagraha == "गुरु") {
    grahanumber = 0.5;
  }
  else if (vargraha == "शुक्र" && kanyagraha == "गुरु") {
    grahanumber = 0.5;
  }
  else if (vargraha == "मंगल" && kanyagraha == "बुध") {
    grahanumber = 0.5;
  }
  else if (vargraha == "गुरु" && kanyagraha == "बुध") {
    grahanumber = 0.5;
  }
  else if (vargraha == "गुरु" && kanyagraha == "शुक्र") {
    grahanumber = 0.5;
  }
  else if (vargraha == "शुक्र" && kanyagraha == "चन्द्र") {
    grahanumber = 0.5;
  }
  else if (vargraha == "शनि" && kanyagraha == "चन्द्र") {
    grahanumber = 0.5;
  }
  else if (vargraha == "शनि" && kanyagraha == "मंगल") {
    grahanumber = 0.5;
  }
  else if (vargraha == "सूर्य" && kanyagraha == "शुक्र") {
    grahanumber = 0;
  }
  else if (vargraha == "सूर्य" && kanyagraha == "शनि") {
    grahanumber = 0;
  }
  else if (vargraha == "शुक्र" && kanyagraha == "सूर्य") {
    grahanumber = 0;
  }
  else if (vargraha == "शनि" && kanyagraha == "सूर्य") {
    grahanumber = 0;
  }
  else if (vargraha == "मंगल" && kanyagraha == "चन्द्र") {
    grahanumber = 4;
  }
  else if (vargraha == "बुध" && kanyagraha == "सूर्य") {
    grahanumber = 4;
  }
  else if (vargraha == "गुरु" && kanyagraha == "चन्द्र") {
    grahanumber = 4;
  }
  else if (vargraha == "शनि" && kanyagraha == "बुध") {
    grahanumber = 4;
  }
  else {
  }
}

function findbhkutnumber() {
  if (varrashi == "मेष" && kanyarashi == "कन्या") {
    bhkutnumber = 0;
  }
  else if (varrashi == "कन्या" && kanyarashi == "मेष") {
    bhkutnumber = 0;
    bhakutmitranumber = 4;
  }
  else if (varrashi == "मेष" && kanyarashi == "वृश्चिक") {
    bhkutnumber = 0;
    bhakutmitranumber = 4;
  }
  else if (varrashi == "वृष" && kanyarashi == "धनु") {
    bhkutnumber = 0;
  }
  else if (varrashi == "मिथुन" && kanyarashi == "मकर") {
    bhkutnumber = 0;
    bhakutmitranumber = 4;
  }
  else if (varrashi == "कर्क" && kanyarashi == "कुम्भ") {
    bhkutnumber = 0;
  }
  else if (varrashi == "सिंह" && kanyarashi == "मीन") {
    bhkutnumber = 0;
    bhakutmitranumber = 4;
  }
  else if (varrashi == "तुला" && kanyarashi == "वृष") {
    bhkutnumber = 0;
    bhakutmitranumber = 4;
  }
  else if (varrashi == "वृश्चिक" && kanyarashi == "मिथुन") {
    bhkutnumber = 0;
  }
  else if (varrashi == "धनु" && kanyarashi == "कर्क") {
    bhkutnumber = 0;
    bhakutmitranumber = 4;
  }
  else if (varrashi == "मकर" && kanyarashi == "सिंह") {
    bhkutnumber = 0;
  }
  else if (varrashi == "कुम्भ" && kanyarashi == "कन्या") {
    bhkutnumber = 0;
    bhakutmitranumber = 4;
  }
  else if (varrashi == "मीन" && kanyarashi == "तुला") {
    bhkutnumber = 0;
  }
  else if (varrashi == "वृष" && kanyarashi == "तुला") {
    bhkutnumber = 0;
    bhakutmitranumber = 4;
  }
  else if (varrashi == "मिथुन" && kanyarashi == "वृश्चिक") {
    bhkutnumber = 0;
  }
  else if (varrashi == "कर्क" && kanyarashi == "धनु") {
    bhkutnumber = 0;
    bhakutmitranumber = 4;
  }
  else if (varrashi == "सिंह" && kanyarashi == "मकर") {
    bhkutnumber = 0;
  }
  else if (varrashi == "कन्या" && kanyarashi == "कुम्भ") {
    bhkutnumber = 0;
    bhakutmitranumber = 4;
  }
  else if (varrashi == "तुला" && kanyarashi == "मीन") {
    bhkutnumber = 0;
  }
  else if (varrashi == "वृश्चिक" && kanyarashi == "मेष") {
    bhkutnumber = 0;
    bhakutmitranumber = 4;
  }
  else if (varrashi == "धनु" && kanyarashi == "वृष") {
    bhkutnumber = 0;
  }
  else if (varrashi == "मकर" && kanyarashi == "मिथुन") {
    bhkutnumber = 0;
    bhakutmitranumber = 4;
  }
  else if (varrashi == "कुम्भ" && kanyarashi == "कर्क") {
    bhkutnumber = 0;
  }
  else if (varrashi == "मीन" && kanyarashi == "सिंह") {
    bhkutnumber = 0;
    bhakutmitranumber = 4;
  }
  else if (varrashi == "मेष" && kanyarashi == "सिंह") {
    bhkutnumber = 0;
    bhakutmitranumber = 4;
  }
  else if (varrashi == "कन्या" && kanyarashi == "वृष") {
    bhkutnumber = 0;
    bhakutmitranumber = 4;
  }
  else if (varrashi == "तुला" && kanyarashi == "मिथुन") {
    bhkutnumber = 0;
    bhakutmitranumber = 4;
  }
  else if (varrashi == "वृश्चिक" && kanyarashi == "कर्क") {
    bhkutnumber = 0;
    bhakutmitranumber = 4;
  }
  else if (varrashi == "धनु" && kanyarashi == "सिंह") {
    bhkutnumber = 0;
    bhakutmitranumber = 4;
  }
  else if (varrashi == "मकर" && kanyarashi == "कन्या") {
    bhkutnumber = 0;
    bhakutmitranumber = 4;
  }
  else if (varrashi == "कुम्भ" && kanyarashi == "तुला") {
    bhkutnumber = 0;
    bhakutmitranumber = 4;
  }
  else if (varrashi == "मीन" && kanyarashi == "वृश्चिक") {
    bhkutnumber = 0;
    bhakutmitranumber = 4;
  }
  else if (varrashi == "वृष" && kanyarashi == "कन्या") {
    bhkutnumber = 0;
    bhakutmitranumber = 4;
  }
  else if (varrashi == "मिथुन" && kanyarashi == "तुला") {
    bhkutnumber = 0;
    bhakutmitranumber = 4;
  }
  else if (varrashi == "कर्क" && kanyarashi == "वृश्चिक") {
    bhkutnumber = 0;
    bhakutmitranumber = 4;
  }
  else if (varrashi == "सिंह" && kanyarashi == "धनु") {
    bhkutnumber = 0;
    bhakutmitranumber = 4;
  }
  else if (varrashi == "कन्या" && kanyarashi == "मकर") {
    bhkutnumber = 0;
    bhakutmitranumber = 4;
  }
  else if (varrashi == "तुला" && kanyarashi == "कुम्भ") {
    bhkutnumber = 0;
    bhakutmitranumber = 4;
  }
  else if (varrashi == "वृश्चिक" && kanyarashi == "मीन") {
    bhkutnumber = 0;
    bhakutmitranumber = 4;
  }
  else if (varrashi == "धनु" && kanyarashi == "मेष") {
    bhkutnumber = 0;
    bhakutmitranumber = 4;
  }
  else if (varrashi == "मकर" && kanyarashi == "वृष") {
    bhkutnumber = 0;
    bhakutmitranumber = 4;
  }
  else if (varrashi == "कुम्भ" && kanyarashi == "मिथुन") {
    bhkutnumber = 0;
    bhakutmitranumber = 4;
  }
  else if (varrashi == "मीन" && kanyarashi == "कर्क") {
    bhkutnumber = 0;
    bhakutmitranumber = 4;
  }
  else if (varrashi == "मेष" && kanyarashi == "वृष") {
    bhkutnumber = 0;
  }
  else if (varrashi == "वृष" && kanyarashi == "मेष") {
    bhkutnumber = 0;
  }
  else if (varrashi == "मिथुन" && kanyarashi == "वृष") {
    bhkutnumber = 0;
    bhakutmitranumber = 4;
  }
  else if (varrashi == "कर्क" && kanyarashi == "मिथुन") {
    bhkutnumber = 0;
  }
  else if (varrashi == "सिंह" && kanyarashi == "कर्क") {
    bhkutnumber = 0;
    bhakutmitranumber = 4;
  }
  else if (varrashi == "कन्या" && kanyarashi == "सिंह") {
    bhkutnumber = 0;
  }
  else if (varrashi == "मेष" && kanyarashi == "मीन") {
    bhkutnumber = 0;
    bhakutmitranumber = 4;
  }
  else if (varrashi == "तुला" && kanyarashi == "कन्या") {
    bhkutnumber = 0;
    bhakutmitranumber = 4;
  }
  else if (varrashi == "वृश्चिक" && kanyarashi == "तुला") {
    bhkutnumber = 0;
  }
  else if (varrashi == "धनु" && kanyarashi == "वृश्चिक") {
    bhkutnumber = 0;
    bhakutmitranumber = 4;
  }
  else if (varrashi == "मकर" && kanyarashi == "धनु") {
    bhkutnumber = 0;
  }
  else if (varrashi == "कुम्भ" && kanyarashi == "मकर") {
    bhkutnumber = 0;
    bhakutmitranumber = 4;
  }
  else if (varrashi == "मीन" && kanyarashi == "कुम्भ") {
    bhkutnumber = 0;
  }
  else if (varrashi == "वृष" && kanyarashi == "मिथुन") {
    bhkutnumber = 0;
    bhakutmitranumber = 4;
  }
  else if (varrashi == "मिथुन" && kanyarashi == "कर्क") {
    bhkutnumber = 0;
  }
  else if (varrashi == "कर्क" && kanyarashi == "सिंह") {
    bhkutnumber = 0;
    bhakutmitranumber = 4;
  }
  else if (varrashi == "सिंह" && kanyarashi == "कन्या") {
    bhkutnumber = 0;
  }
  else if (varrashi == "कन्या" && kanyarashi == "तुला") {
    bhkutnumber = 0;
    bhakutmitranumber = 4;
  }
  else if (varrashi == "तुला" && kanyarashi == "वृश्चिक") {
    bhkutnumber = 0;
  }
  else if (varrashi == "वृश्चिक" && kanyarashi == "धनु") {
    bhkutnumber = 0;
    bhakutmitranumber = 4;
  }
  else if (varrashi == "धनु" && kanyarashi == "मकर") {
    bhkutnumber = 0;
  }
  else if (varrashi == "मकर" && kanyarashi == "कुम्भ") {
    bhkutnumber = 0;
    bhakutmitranumber = 4;
  }
  else if (varrashi == "कुम्भ" && kanyarashi == "मीन") {
    bhkutnumber = 0;
  }
  else if (varrashi == "मीन" && kanyarashi == "मेष") {
    bhkutnumber = 0;
    bhakutmitranumber = 4;
  }
  else if (varrashi == "सिंह" && kanyarashi == "मेष") {
    bhkutnumber = 0;
  }
  else if (varrashi == "मेष" && kanyarashi == "धनु") {
    bhkutnumber = 0;
    bhakutmitranumber = 4;
  }
  else if (varrashi == "वृष" && kanyarashi == "मकर") {
    bhkutnumber = 0;
    bhakutmitranumber = 4;
  }
  else if (varrashi == "मिथुन" && kanyarashi == "कुम्भ") {
    bhkutnumber = 0;
    bhakutmitranumber = 4;
  }
  else if (varrashi == "कर्क" && kanyarashi == "मीन") {
    bhkutnumber = 0;
    bhakutmitranumber = 4;
  }
  else if (varrashi == "कर्क" && kanyarashi == "मीन") {
    bhkutnumber = 0;
    bhakutmitranumber = 4;
  }
  else if (varrashi == "कन्या" && kanyarashi == "वृष") {
    bhkutnumber = 0;
    bhakutmitranumber = 4;
  }
  else if (varrashi == "तुला" && kanyarashi == "मिथुन") {
    bhkutnumber = 0;
    bhakutmitranumber = 4;
  }
  else if (varrashi == "वृश्चिक" && kanyarashi == "कर्क") {
    bhkutnumber = 0;
    bhakutmitranumber = 4;
  }
  else if (varrashi == "धनु" && kanyarashi == "सिंह") {
    bhkutnumber = 0;
    bhakutmitranumber = 4;
  }
  else if (varrashi == "मकर" && kanyarashi == "कन्या") {
    bhkutnumber = 0;
    bhakutmitranumber = 4;
  }
  else if (varrashi == "कुम्भ" && kanyarashi == "तुला") {
    bhkutnumber = 0;
    bhakutmitranumber = 4;
  }
  else if (varrashi == "मीन" && kanyarashi == "वृश्चिक") {
    bhkutnumber = 0;
    bhakutmitranumber = 4;
  }
  else if (varrashi !== "" && kanyarashi !== "") {
    bhkutnumber = 7;
  }
  else {
  }
}
function milaanmessage() {
  if (totalnumber > 18) {
    milanresultmessage = "कूट मिलान संतोषजनक है विवाह निर्विघ्न होगा ! पारिवारिक सुख भी मिलेगा! गुण मिलान 18 से ज्यादा है!";
  }
  else if (totalnumber == 18) {
    milanresultmessage = "कूट मिलान संतोषजनक है विवाह निर्विघ्न होगा ! पारिवारिक सुख भी मिलेगा! गुण मिलान 18 है!";
  }
  else if (totalnumber < 18 && totalnumber > 0) {
    milanresultmessage = "कूट मिलान का परिणाम 50% से कम बनता है! सामान्यत: 18 गुण होने चाहिए! इसलिए यह विवाह उपयुक्त नहीं होगा! ";
  }
  else {
  }

  if (bhkutnumber == 0 && naadinumber == 0 && totalnumber > 0) {
    milanresultmessage = milanresultmessage.concat("<br /><br />", bhkutnaadimessage);
    if (bhakutmitranumber == 4)
      milanresultmessage = milanresultmessage.concat("<br />", bhkutmitramessage);
  }
  else if (bhkutnumber == 0 && totalnumber > 0) {
    milanresultmessage = milanresultmessage.concat("<br /><br />", bhkutmessage);
    if (bhakutmitranumber == 4)
      milanresultmessage = milanresultmessage.concat("<br />", bhkutmitramessage);
  }
  else if (naadinumber == 0 && totalnumber > 0) {
    milanresultmessage = milanresultmessage.concat("<br /><br />", naadimessage);
  }
  else {
  }
  if (gannumber == 0 && totalnumber > 0) {
    milanresultmessage = milanresultmessage.concat("<br /><br />", ganmessage);
  }

  if (grahanumber == 0 && totalnumber > 0) {
    milanresultmessage = milanresultmessage.concat("<br /><br />", grahamessage);
  }

  if (yoninumber == 0 && totalnumber > 0) {
    milanresultmessage = milanresultmessage.concat("<br /><br />", yonimessage);
  }

  if (totalnumber == 0) {
    milanresultmessage = "कृपया वर-कन्या का नाम हिन्दी या अंग्रेजी में सही  भरें! ";
  }
}
