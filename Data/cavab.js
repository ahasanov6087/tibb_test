const questions = [
    {
        question: "Həll edilmiş BCJ, qızılca, məxmərək, parotit vaksinlərinin istifadə müddəti maksimum nə qədərdir?",
        answer: "Həll edildikdən sonra +2 +8 temperaturda 6 saatdan çox olmamaq şərti ilə soyuducuda saxlamaq olar, sonra məhv edilməlidir."
    },
    {
        question: "İmmun çatışmazlığı virusuna yoluxmuş uşaqlarda hansı yaşda qızlca əleyhinə peyvəndin aparılması düzgündür?",
        answer: "İmmun çatışmazlığı virusuna yoluxmuş uşaqların immunobioloji müqaviməti çox aşağı olduğuna görə belə uşaqlara qızılcaya qarşı vaksini heç vaxt vurmaq olmaz."
    },
    {
        question: "Cansız vaksinlərin yeridilməsindən sonra hansı yerli reaksiya müşahidə olunur?",
        answer: "Cansız vaksinlərlə vaksinasiyadan sonra bəzən uşaqlarda yüngül reaksiyalar inyeksiya yerində ağrı və şişkinlik baş verir. Bu əlamətlər 2 - 3 günə keçib gedir."
    },
    {
        question: "Uşaqda qlomerulonefritin yaranmasına səbəb olan xəstəlik hansıdır?",
        answer: "Angina və skarlatinanın törədiciləri olan β - hemolitik steplokokklardır."
    },
    {
        question: "Pielonefrit xəstəliyi olan uşağın qidası necə olmalıdır?",
        answer: "Pielonefrit xəstəliyi zamanı bədən zülal itirdiyinə görə belə xəstələrə zülalla zəngin qidalar verilməlidir."
    },
    {
        question: "Hemofiliyanın ən xarakter əlaməti nədir?",
        answer: "Əsas əlaməti qanaxmadır."
    },
    {
        question: "Qlomerulonefrit zamanı Zimnitski sınağının aparılmasında məqsəd nədir?",
        answer: "Xəstəyə dəqiq diaqnoz qoymaq üçün Zimnitski sınağı aparılır."
    },
    {
        question: "Anus ətrafında qaşınma hansı qurd xəstəliyi üçün xarakterikdir?",
        answer: "Anus ətrafında qaşınma bizquyruq qurdların törətdiyi Enterebioz üçün xarakterikdir."
    },
    {
        question: "Difteriya xəstəliyi hansı yolla yayılır?",
        answer: "Difteriya xəstəliyi hava - damcı yolu ilə yayılır."
    },
    {
        question: "Difteriya xəstəliyi zamanı uşaqlarda hansı əlamət baş verir?",
        answer: "Difteriya xəstəliyi olan uşaqlarda tədricən tənəffüsün çətinləşməsi, uzaqdan eşidilən səsli tənəffüs, sianoz, tərləmə, taxikardiya əlamətləri baş verir."
    },
    {
        question: "Su çiçəyi zamanı səpkilər hansı xarakterdə olur?",
        answer: "Su çiçəyi zamanı səpkilər polimorfizm xarakteri daşıyır. Təzə səpkilər papula şəklində, əvvəlki səpkilər isə vezikula və qabıqlanma formasında olur."
    },
    {
        question: "Bağırsaq infeksiyasına yoluxmuş uşağın müalicəsi zamanı ilk tədbir nədir?",
        answer: "Bağırsaq infeksiyaları zamanı ilk tədbir olaraq Çay - su fasiləsi və müalicəvi qida təyin edilir."
    },
    {
        question: "Eksudativ kataral diatezli uşaqlarda hansı əlamətlər olur?",
        answer: "Eksudativ - kataral diatezli uşaqlarda bəzən qidalara qarşı allergiya baş verir. Nəticədə uşağın dəri və selikli qişalarında zədələnmələr baş verir."
    },
    {
        question: "Raxitin hansı dövründə vegetativ sinir sisteminin pozğunluğu baş verir?",
        answer: "Xəstəliyin başlanğıc dövründə uşaqda narahatlıq başlayır. Uşaq ağlağan olur, yuxusu pozulur, çox tərləmə və qaşınma baş verir."
    },
    {
        question: "Raxit bilərzikləri, toyuq döş qəfəsi, kraniotabes raxit xəstəliyinin hansı dövründə əmələ gəlir?",
        answer: "Raxitin kəskin dövründə uşaq fiziki və psixomator inkişafdan geri qalır, tərlilik artır. Uşaqda zəiflik və tez yorulma olur, skeletdə dəyişikliklər meydana çıxır. Skeletdə baş verən bu dəyişiliklər raxit bilərzikləri, toyuq döş qəfəsi və kraniotabes adlanır."
    },
    {
        question: "Uşaqlarda hansı helmint xolesistitin əmələ gəlməsinə səbəb olur?",
        answer: "Lyambliyalar 12 barmaq bağırsaqda və nazik bağırsağın yuxarı hissəsində yaşayır. Öd yollarının diskineziyasını əmələ gətirir və xolesistitin yaranmasına səbəb olur."
    },
    {
        question: "Spazmofiliyanin profilaktikası necə aparılır?",
        answer: "Spazmofiliya xəstəliyinin qarşısını almaq üçün profilaktik tədbirlər aparılmalıdır. İlk növbədə raxitin profilaktikası və müalicəsi düzgün aparılmalı, uşağın qida rejimi düzgün qurulmalıdır."
    },
    {
        question: "Uşaqlarda bronxial astma tutması zamanı hansı preparatdan istifadə etmək olar?",
        answer: "Bronxial astma tutmaları zamanı eufillin, efedrin və digər preparatlardan istifadə edərək xəstənin vəziyyətini yaxşılaşdırmaq lazımdır."
    },
    {
        question: "Uşaqlarda plevrit hansı əlamətlərlə xarakterizə olunur?",
        answer: "Uşaqlarda plevrit plevra boşluğuna maye və irin yığıldığına görə hərarət yüksəlir, dərindən nəfəs aldıqda, nəfəs verdikdə, uşaq öskürdükdə şiddətli ağrı əmələ gəlir."
    },
    {
        question: "Uşaqlarda anadangəlmə ürək qüsurunun yaranmasına səbəb nədir?",
        answer: "Anadangəlmə ürək qüsurlarının əsas səbəblərindən biri bətndaxili infeksiyalardır."
    },
    {
        question: "Uşaqlarda lyambliozun müalicəsində hansı preparat işlədilir?",
        answer: "Lyambliozun müalicəsində furazolidondan istifadə olunur."
    },
    {
        question: "Uşaqlarda laringotraxeitin əlamətləri necə başlayır?",
        answer: "Laringotraxeit zamanı iltihabi proses nəticəsində ödem baş verir, uşağın səsi xırıltılı olur, bəzən batır. Tədricən tənəffüs cətinləşir, boğulma da baş verə bilər."
    },
    {
        question: "Uşaqlarda kəskin bronxitin müalicəsində hansı preparatlar işlədilir?",
        answer: "Uşaqlarda kəskin bronxitin müalicəsində antibiotiklərdən, bəlğəmgətiricilərdən və hərarətsalıcı preparatlardan istifadə olunur."
    },
    {
        question: "Uşaqlarda sadə diarreyanın (dispepsiya) əmələ gəlmə səbəbi nədir?",
        answer: "Sadə diarreya uşağın qida rejimi düzgün qurulmadıqda, onu çox yedizdirdikdə, suyu az verdikdə baş verir."
    },
    {
        question: "Uşaqlarda toksik diarreya (dispepsiya) zamanı çay - su fasiləsi neçə saat təyin olunur?",
        answer: "Uşaqlarda toksiki diarreya zamanı 24 saat çay - su fasiləsi təyin edilir."
    },
    {
        question: "Ensefalopatiyalı uşaqda qıcolmanın qarşısını almaq üçün hansı preparat istifadə edilə bilər?",
        answer: "Qıcolmanın qarşısını almaq üçün uşağa fenobarbital verilir."
    },
    {
        question: "Duodenal zondlama zamanı A, B, C porsiyası nəyi bildirir?",
        answer: "Duodenal zondlama zamanı 3 porsiya öd alınır. Duodenal öd A porsiyası, öd kisəsindən alınan öd B porsiyası, qaraciyər öd yollarından alınan öd isə C porsiyası adlanır."
    },
    {
        question: "Uşaqlarda Hemofiliya xəstəliyini başqa xəstəliklərdən necə fərqləndirmək olar?",
        answer: "Hemofiliyalı xəstələri başqa xəstəliklərdən fərqli olaraq zədələnmədən qorumaq lazımdır. Çünki belə uşaqlar zədələnərkən bədənində göyərmələr baş verir, bu isə qanaxmaya səbəb olur."
    },
    {
        question: "Hemofiliyalı uşaq kim tərəfindən daim nəzarətdə saxlanılmalıdır?",
        answer: "Hemofiliya ilə xəstə olan uşaqlar dispanser qeydiyyata götürülməli və daim hematoluqun nəzarətində olmalıdır."
    },
    {
        question: "Uşaqlara hansı xəstəlik zamanı əlillik verilir?",
        answer: "Hemofiliya xəstəliyi zamanı əlillik verilir."
    },
    {
        question: "Yenidoğulmuşda sepsisin olduğuna şübhə olarsa tibb bacısının taktikası necə olmalıdır?",
        answer: "Əgər tibb bacısı uşaqda sepsis olduğundan şübhələnərsə həkim çağırmalı və xəstəni stasionara köçürmək üçün hazırlamalıdır."
    },
    {
        question: "Uşaqda kəskin qarın sindromu olarsa tibb bacısı nə etməlidir?",
        answer: "Tibb bacısı xəstənin qarın nahiyəsinə soyuq qoyaraq təcili hospitalizasiya etməlidir."
    },
    {
        question: "Uşaqlarda revmatizm residivinin qarşısını almaq üçün tibb bacısı ilk növbədə nəyi məsləhət görməlidir?",
        answer: "Uşaqlarda revmatizm residivinin qarşısını almaq üçün ilk növbədə badamcıqların və digər infeksiya mənbəyinin sanasiyası aparılmalıdır."
    },
    {
        question: "Dizenteriya xəstəliyi olan uşaq nədən şikayət edir?",
        answer: "Dizenteriya xəstəliyi olan uşaq qarnının aşağı hissəsində sancı şəkilli ağrı tutmalarından şikayət edir."
    },
    {
        question: "Yenidoğulmuşlar şöbəsində xəstəxanadaxili salmonelloz xəstəliyinin infeksiya mənbəyi hansıdır?",
        answer: "Yenidoğulmuşlar şöbəsində xəstəxanadaxili salmonelloz xəstəliyinin infeksiya mənbəyi bakteriyagəzdirən tibb bacısının əlləridir."
    },
    {
        question: "Uşağın 2 yaşı var , qriplə xəstələnib. Uşaq öskürür, öskürəklə yanaşı xırıltı və fit verici nəfəsvermə müşahidə edilir. Xəstəyə hansı ilkin diaqnozu qoymaq olar?",
        answer: "Obstruktiv bronxit diaqnozu qoymaq olar."
    },
    {
        question: "Uşağın 7 aylıqdır, inək südü, mannı sıyığı ilə qidalanır. 3200qr. çəki ilə doğulub hazırda 6000 qramdır, oturmur, dişləri yoxdur. Boynunu 3 aylıqdan duz tutur, döş qəfəsi bir qədər batıqdır. Hansı xəstəlikdən şüphələnmək olar?",
        answer: "Uşaq süni qidalanıb, çəkisi pis artıb, döş qəfəsi batıqdır, dişi yoxdur. Boynunu gec saxlayıb. Bunlar raxitə məxsus əlamətlərdir."
    },
    {
        question: "Uşağın 1 yaşı var. Hərarəti 38⁰ C – dir. Tez - tez selikli – qanlı  nəcis ifraz edir. Uşaqda tenezmlər var. Dəri avazımış , əzələ tonusu azalmış, ümumi arıqlama görünür. Hansı xəstəliyin olmasından şüphələnmək olar?",
        answer: "Selik - qanlı nəcis ifrazı və tenezmlər dizenteriya infeksiyasına xas olan əlamətdir."
    },
    {
        question: "5 aylıq uşaqdır. Hərarəti 39⁰ C - dir . Tənəffüsü çətinləşib, ağız - burun ətrafında göyərmə var, dəri solgundur, ağciyər üzərində quru və yaş xırıltılar eşidilir. İlk növbədə hansı xəstəlikdən şüphələnmək olar?",
        answer: "Hərarət, təngnəfəslik, öskürək , ağız – burun ətrafında sianoz, ağciyərlər üzərində xırıltılar pnevmoniya üçün xarakterikdir."
    },
    {
        question: "Uşaq 3 günlükdür. 2000 qr çəki ilə doğulub. Anadangəlmə refleksləri zəifdir, döşü tuta bilmir. Dərisi sianozlu və tüklüdür, Dərialtı piy qatı sifət və ətraflarda azdır. Bu uşaq haqqında aşağıdakı fikirlərdən hansı doğrudur ?",
        answer: "Yuxarıda qeyd edilən əlamətlər vaxtından əvvəl doğulmuş uşağa aiddir."
    },
    {
        question: "5 aylıq uşağın boyu və çəkisi nə qədər olmalıdır?",
        answer: "5 aylıq uşağın çəkisi 6500 - 6600 qr. boyu isə 60 - 65 sm olmalıdır."
    },
    {
        question: "Qəbula 9 yaşlı uşaq gətirilib. Uşaq ürək bulanma, iştahsızlıq və qarında ağrdan şikayət edir. Yuxusu pozulub, əsəbidir, gecələr ağzından su gəlir.Bu zaman uşaqda nədən şübhələnmək olar?",
        answer: "Yuxarıda qeyd edilən əlamətlər helmintəza məxsusdur."
    },
    {
        question: "Qəbula 7 yaşlı uşaq gətirilib, sifətin dərisi solğundur, göz qapaqları şişkindir. Sidik ifrazı azalıb. Ananın dediyinə görə sidiyi bulanıqdır, uşağın iştahası pisdir, ürək bulanma və baş ağrısı var. A/T yüksəlib. Hansı xəstəlikdən şüphələnmək olar?",
        answer: "7 yaşlı uşaqda müşahidə edilən bu əlamətlər qlomerulonefrit xəstəliyinin əlamətləridir."
    },
    {
        question: "Uşağın 8 yaşı var. Ananın dediyinə görə uşağın iştahası pisdir, tez yorulur, nəcisi rəngsizləşib, sidiyi tündləşib. Müayinədə dəridə sarılıq görünür, qaraciyər 3 sm böyüyüb. Hansı xəstəlikdən şüphələnmək olar?",
        answer: "Uşaqda olan əlamətlər – dərinin saralması, qaraciyər böyüməsi, sidik və nəcisdəki dəyişiklik virus hepatitinin əlamətləridir."
    },
    {
        question: "Uşaq 3 aylıqdır. Hər gün uşaqda qaytarma və qusma olur. Uşaq ana südü ilə qidalanır. Çəkisi 3650 qrdır (doğulanda çəkisi 3600 qr ) Belə bir vəziyyətin yaranmasının səbəbi nədir?",
        answer: "Uşaq yedizdirildikdən sonra fəvvarə şəklində qusma baş verir. Belə hal pilorostenoz adlanır. Müalicəsi cərrahi üsulladır."
    },
    {
        question: "Uşağın 7 yaşı var. Yağlı yeməkdən sonra ürəkbulanmadan, sağ qabırğaaltı nahiyədə ağrdan şikayət edir. Hansı xəstəlikdən şübhələnmək olar?",
        answer: "Yağlı yeməkdən sonra ürəkbulanma və sağ qabırğaaltı nahiyyədə ağrı xolesisitit üçün xarakterikdir."
    },
    {
        question: "Qəbula 10 aylıq uşaq gətirilib. Ananın dediyinə görə iştahası, yuxusu pisdir, uşaqda dəri və selikli qişalar solğundur, əzələ tonusu zəifdir. Auskultasiyada ürəkdə sistolik küy eşidilir. Dəri və selikli qişalar qurudur, ağız bucaqlarında çatlar var.",
        answer: "Yuxarıda göstərilən əlamətlər dəmir defisitli anemiya üçün xarakterdir."
    },
    {
        question: "Uşağın 6 yaşı var, 1 gün əvvəl xəstələnib. Boğazında ağrı var. Hərarət 38 0 C - dir . Dəridə nöqtəvari səpkilər var . Hansı xəstəlikdən şüphələnmək olar?",
        answer: "Yuxarıda qeyd edilən əlamətlər skarlatina üçün xarakterdir."
    },
    {
        question: "Xəstəxanaya 5 aylıq uşaq gətirilib. Süni qidalanır. 3 gündür xəstədir. Sutkada 5 - 6 dəfə qusma, 8 - 10 dəfə sulu duru nəcis ifrazı olur. Hərarət 38 0 C. Uşağın vəziyyəti ağrıdır, çəki 800 qr itirilib, əzələ tonusu və dərinin turqoru azalıb. Hansı xəstəlikdən şüphələnmək olar?",
        answer: "Yuxarıda göstərilən əlamətlər toksik dispepsiyaya məxsus klinik əlamətlərdir."
    },
    {
        question: "Xəstəxanaya 10 yaşlı uşaq gətirilib. Huşu itib, nəbzin dəqiqəlik sayı 140, tənəffüsün dəqiqəlik sayı 35- dir. 3 gündür xəstədir. Xəstəlik qusma ilə başlayıb. Sidi yin müayinəsində şəkər və aseton tapilib. Klinik diaqnoz aşağıdakılardan hansı ola bilər?",
        answer: "Uşaqda şəkərli diabet var. Hiperglikomik koma qanda şəkərin miqdarının normadan yüksək olması nəticəsində əmələ gəlir. Bunun baş vermə səbəbi insulin çatışmazlığıdır. Məhz buna görə də ilk yardım olaraq insulin vurulmalıdır."
    },
    {
        question: "Uşaq 3 yaşındadır. Bağçaya gedir. Xəstəliyi kəskin başlayıb, hərarəti 38, 5 0 C, qarnında ağrı var, 1 dəfə qusub. Uşaqda tez - tez selik və qanla qarışıq nəcis ifrazı var, uşaq narahatdır, gücənir, defekasiya ağrılıdır. Uşaq hansı xəstəlikdən əziyyət çəkir?",
        answer: "Qarında ağrı, 1 dəfə qusma, tezləşmiş və selikli - qanlı nəcis ifrazı, gücənmə, narahatlıq və s. əlamətlərə əsasən dizenteriyanın olmasından şübhələnmək olar."
    },
    {
        question: "Ana 5 yaşlı uşağının bədənində səpkilər olduğundan şikayət edir. Uşaq bağçaya gedir, oradakı bütün uşaqlarda da belə səpkilər olduğunu qeyd edir. Uşağın temperaturu normaldır, üzündə, bədənində və ətrafında xırda papulyoz çəhrayı səpkilər var, dərinin rəngi dəyişib. Boyun arası limfa vəziləri əllənir, ağrısızdır. Əsınək qızarmışdır. Hansı xəstəlikdən şübhələnmək olar?",
        answer: "Epidemik vəziyyətə, xəstənin şikayəti və anamnezə əsasən məxmərək diaqnozu qoymaq olar. Bütün bədəndə normal temperaturda xırda papulyoz çəhrayı səpkilərin olması , boyunətrafı limfa vəzilərinin böyüməsi, ağrısız olması kimi simptomlar məxmərək üçün xarakterikdir."
    },
    {
        question: "Pasternatski simptomu hansı üsulla yoxlanılır?",
        answer: "Pasternadski simptomu pielonefrit xəstəliyi zamanı yoxlanılır və müsbət olur. Xəstənin bel nahiyəsini döyəclədikdə bu ağrı daha da artır."
    },
    {
        question: "Qlomerulonefrit xəstəliyi keçirmiş uşaqlar neçə il dispanser nəzarətdə saxlanılır?",
        answer: "Belə uşaqlar stasionar və ambulator müalicədən sonra 5 il müddətində dispanser qeydiyyatında saxlanılır və 3 ayda bir müayinədən keçir."
    },
    {
        question: "Qlomerulonefrit xəstəliyi ilə stasionardan evə yazılan uşaq neçə müddət ambulator müalicə almalıdır?",
        answer: "Belə uşaq stasionardan sonra 6 - 10 aydan 2 - 3 yaşa kimi ambulator müalicə almalıdır. 5 il isə dispanser qeydiyyatında olur."
    },
    {
        question: "Yenidoğulmuş uşağın çəkisi ən az nə neçə qramdan aşağı olduqda bağlı küvezə qoyulur?",
        answer: "Çəkisi 1500qr - dan az olan və ağır vəziyyətdə olan yenidoğulmuş ilk günündən qapalı küvezə qoyulur."
    },
    {
        question: "Uşaqlarda disbakteriozun müalicəsində nə təyin edilir?",
        answer: "Uşaqlarda disbakteriozun müalicəsində bioloji preparatlar: bifidobakterin, bifikol, kolibakterin və s. təyin olunur."
    },
    {
        question: "Fellinq sınağı hansı xəstəliyin diaqnostikası məqsədilə aparılır?",
        answer: "Fellinq sınağı fenilketonuriya xəstəliyinin diaqnostikası məqsədilə aparılır."
    },
    {
        question: "Uşaqlarda revmatik xoreya özünü hansı şəkildə biruzə verir?",
        answer: "Revmatik xoreya zamanı ümumi vəziyyət pisləşir, uşaq ağlağan, əsəbi olur, yuxusu pozulur. Xoreyanın əsas əlaməti olan hiperkinezlər baş verir: ayrı - ayrı əzələ qruplarında qeyri - iradi hərəkətlər edir."
    },
    {
        question: "Revmatizmin ikincili profilaktikası hansı preparatla aparılır?",
        answer: "Revmatizmin ikincili profilaktikası residivlərin qarşısını almaq üçün bisilin - 5 və asetil salisil turşusu təyin edilir."
    },
    {
        question: "İntoksikasiya , qarında və beldə ağrı, Pasternadski simptomunun (+) olması böyük yaşlı uşaqlarda hansı xəstəliyin mövcud olduğunu göstərir.",
        answer: "Bu əlamətlər kəskin pilonefritin mövcud olduğunu göstərir."
    },
    {
        question: "Dehidratasiya zamanı uşağa per os nə təyin olunur?",
        answer: "Dehidratasiya zamanı uşağa Oralit, Rehidron verilir."
    },
    {
        question: "Aşağıdakılardan hansı yenidoğulmuş üçün xarakterikdir?",
        answer: "Yenidoğulmuş uşaqda bükücü əzələlərin hipertoniyası olur."
    },
    {
        question: "Uşaqlarda süd dişlərinin daimi dişlərlə əvəz olunması nə vaxt başa çatır?",
        answer: "Süd dişlərinin daimi dişlərlə əvəz olunması prosesi 11 - 12 yaşda başa çatır."
    },
    {
        question: "Uşaqlarda pankreatit necə xəstəlikdir?",
        answer: "Uşaqlarda pankreatit iltihabi - distrofik xəstəlik olub, tədricən başlayır, uzun gedişli olur və ciddi müalicə tələb edir."
    },
    {
        question: "Sol döş qəfəsinə irradiasiya edən kəmərvari ağrı hansı xəstəlik üçün xarakterikdir?",
        answer: "Sol döş qəfəsinə irradiasiya edən kəmərvari ağrı pankreatit üçün xarakterikdir."
    },
    {
        question: "Pielonefrit zamanı xəstəliyin hansı dövründə ciddi yataq rejimi təyin edilir.",
        answer: "Xəstəliyin kəskin dövründə xəstəyə ciddi yataq rejimi təyin edilir."
    },
    {
        question: "Follikulyar anginanın diaqnostikası məqsədilə nə etmək lazımdır?",
        answer: "Follikulyar angina diaqnozu qoyulubsa , mütləq badamcıqlardan yaxma götürülür."
    },
    {
        question: "Bağırsaq infeksiyası aşkar olunmuş ocaqda neçə gün karantin saxlanılır?",
        answer: "Bağırsaq infeksiyası ilə xəstələnmiş uşaqlə təməsdə olan uşaqlar 7 gün nəzarətə götürülür."
    },
    {
        question: "Uşaqlarda öd kisəsi və öd yollarının birgə iltihabı necə adlanır?",
        answer: "Öd kisəsinin və öd yollarının birgə iltihabı xolesistoxolangit adlanır."
    },
    {
        question: "Qızdırma, təngnəfəslik, öskürək hansı xəstəlik ücün xarakterdir?",
        answer: "Qızdırma, təngnəfəslik və öskürək kəskin pnevmoniya ücün xarakterikdir."
    },
    {
        question: "Doğuş travması nəticəsində mərkəzi sinir sisteminin zədələnməsinin əsas səbəbi nədir?",
        answer: "Doğuş travması nəticəsində mərkəzi sinir sisteminin zədələnməsinin əsas səbəbi hipoksiyadır."
    },
    {
        question: "Döşdə qalan südün sağlmasında məqsəd nədir?",
        answer: "Döşdə qalan südün sağlmasının məqsədi süd ifrazını artırmaqdır."
    },
    {
        question: "Yenidoğulmuş qızlarda sidik kanalının uzunluğu necə sm - dir?",
        answer: "Yenidoğulan qızlarda sidik kanalının uzunluğu 1 - 2 sm. olur."
    },
    {
        question: "Yenidoğulmuş oğlan uşağında sidik kanalının uzunluğu neçə sm olur?",
        answer: "Yenidoğulmuş oğlan uşağında sidik kanalının uzunluğu 5 - 6 sm olur."
    },
    {
        question: "Anadangəlmə ürək qüsurunun əsas müalicəsi necə aparılır?",
        answer: "Anadangəlmə ürək qüsurunun əsas müalicəsi cərrahi yolladır."
    },
    {
        question: "Revmatik endokarditdə ürəyin hansı qapaqları zədələnir?",
        answer: "Endokardit nəticəsində ürəyin mitral qapaqları zədələnir."
    },
    {
        question: "Uşaqda arterial təzyiqin aşağı olması nə ilə əlaqədardır?",
        answer: "Uşaqlarda arterial təzyiqin aşağı olması , ürək - damar sisteminin anatomik - fizioloji xüsusiyyəti ilə əlaqədardır."
    },
    {
        question: "Uşaqlarda döş kifozu necə aylıqda əmələ gəlir?",
        answer: "Döş kifozu uşağın 6 - 7 aylığında baş verir."
    },
    {
        question: "Südəmər uşaqlarda rinit zamanı tənəffüsün pozulması nə ilə müşahidə olunur?",
        answer: "Südəmər uşaqlarda rinit zamanı uşağın burnu tutulduğundan, əmmə zamanı nəfəs alma çətinləşdiyi üçün döşü əmə bilmir."
    },
    {
        question: "Laringotraxeitin ağırlaşması nədir?",
        answer: "Laringotraxeitin ağırlaşması yalançı inaq əmələ gəlməsidir."
    },
    {
        question: "Uşaqlarda burun - udlaq keçəcəyinin iltihabı necə adlanır?",
        answer: "Burun - udlaq keçəcəyinin iltihabı nazofaringit adlanır."
    },
    {
        question: "Mərkəzi sinir sisteminin zədələnməsi zamanı ürək fəaliyyətini tənzimləmək üçün hansı istifadə olunur?",
        answer: "Mərkəzi sinir sisteminin zədələnməsi zamanı ürək fəaliyyətini normallaşdırmaq üçün Korqlükon preparatı istifadə olunur."
    },
    {
        question: "Travma zamanı yalnız sınığa xas olan əlamət hansıdır?",
        answer: "Sınıq nahiyəsi palpasiya edildikdə sınmış sümük qırıntıları qar xışıltısına bənzər xarakterik səs yaradır və bu krepitasiya adlanır."
    },
    {
        question: "Bədxassəli şişə məxsus əlamət hansıdır?",
        answer: "Bəd xassəli şişlər ətraf toxumalara sirayət edərək metastaz verir."
    },
    {
        question: "Trizm hansı xəstəliyə məxsusdur?",
        answer: "Tetanus zamanı çeynəmə əzələlərinin qıcolması baş verir ki, bu əlamət trizm adlanır."
    },
    {
        question: "İrinli yaraya drenaj boru nə üçün qoyulur?",
        answer: "İrinli yaraların sağalması üçün yara möhtəviyyatı xaric olunmalıdır ki, bu da drenaj borular vasitəsilə həyata keçirilir."
    },
    {
        question: "Eynək simptomu nə zaman baş verir?",
        answer: "Kəllə əsasının sümüklərinin sınığı zamanı göz çuxurlarına qansızma baş verir və bu eynək simptomu adlanır."
    },
    {
        question: "III dərəcəli donma üçün xarakterik xüsusivvətlər hansıdır?",
        answer: "III0 - li dərəcəli donmalarda dərinin üst qatlarında nekrotik proses əmələ gəlir."
    },
    {
        question: "Paronixiya nəyin iltihabıdır?",
        answer: "Paronixiya dırnaqətrafı yastıqda, dırnaq və dırnaq yatağında olan iltihabdır."
    },
    {
        question: "Kəskin ostemiolit nədir?",
        answer: "Sümük və sümük iliyində baş verən iltihabı proses osteomielit adlanır."
    },
    {
        question: "II dərəcəli yanıqların fərqləndirici xüsusivvəti hansıdır?",
        answer: "II dərəcəli yanıqlarda hiperemiya fonunda suluqlar əmələ gətir."
    },
    {
        question: "Kəllə əsası sümüklərinin sınıqları nə ilə müşayət olunur?",
        answer: "Kəllə əsası sümüklərinin sınıqları zamanı qulaqdan və burundan əvvəlcə qanlı, sonra şəffaf beyin mayesi, likvor xaric olur."
    },
    {
        question: "Hidrodenit hansı vəzilərin irinli iltihabıdır?",
        answer: "Hidrodenit tər vəzilərinin irinli iltihabıdır."
    },
    {
        question: "Abses nədir?",
        answer: "Abses məhdud nahiyyədə irinli iltihabdır."
    },
    {
        question: "Hansı hallarda qanqrena əleyhinə zərdabdan istifadə olunur?",
        answer: "Aşağı ətrafın çirklənmiş yaralanmalarında anaerob infeksiya təhlükəsi olduğuna görə qanqrenanın profilaktikası məqsədilə qanqrena əleyhinə zərdab vurulmalıdır."
    },
    {
        question: "Paranefral blokada üçün növokainin neçə % - li məhlulundan istifadə olunur?",
        answer: "Paranefral blokada zamanı novakainin 0, 25% - li məhlulundan istifadə olunur."
    },
    {
        question: "Furunkul nədir?",
        answer: "Furunkul tük follikulunun iltihabdır."
    },
    {
        question: "Fleqmonanın yumşalma mərhələsində hansı müalicə növündən istifadə olunur?",
        answer: "Fleqmonanın yumşalma stadiyasında irinin xaric olunması üçün geniş kəşik aparılır və drenaj qoyulur."
    },
    {
        question: "Hidrodenit ən çox harada lokalizə olunur?",
        answer: "Hidrodenit tər vəzilərinin ən çox yerləşdiyi qoltuqaltı nahiyədə daha çox rast gəlinir."
    },
    {
        question: "Karbunkul zamanı kəsik apardıqda anesteziyanın hansı növündən istifadə olunur?",
        answer: "Karbunkul zamanı kəsik aparılarkən anesteziya məqdasilə venadaxili narkozdan istifadə olunur."
    },
    {
        question: "Flukutasiya nədir?",
        answer: "Yumşalma nahiyyəsinə ehtiyatla əllə toxunduqda zəif dalğavari hərəkət əmələ gəlir ki, bu fluktasiya adlanır."
    },
    {
        question: "Pandaktilit nəyin iltihabdır?",
        answer: "Pandaktilit barmağın bütün toxumalarının iltihabdır."
    },
    {
        question: "Paraproktit zamanı hansı yerli əlamət olur?",
        answer: "Paraproktit anus ətrafı vəzilərin iltihabı xəstəliyidir. Anus ətrafında defekasiya zamanı güclənən ağrı ilə müşayiət olunur."
    },
    {
        question: "Donmaların hansı dərəcələri ambulator şəraitdə müalicə oluna bilər?",
        answer: "I və II dərəcəli donmalar ambulator şəraitdə müalicə oluna bilər."
    },
    {
        question: "Donor qanına laxtalanmaması məqsədi ilə nə əlavə olunur?",
        answer: "Donor qanının konservləşdirilməsi zamanı laxtalanmaması məqsədilə qana 2, 6% - li Natrium - sitrat əlavə olunur."
    },
    {
        question: "Süd vəzisinin xərçənginə şübhə olduqda hansı müayinə aparılır?",
        answer: "Süd vəzinin xərçəngində şübhə olduqda xəstə biopsiya, mamoqrafiya, palpasiya, həmçinin ultra səs müayinəsi aparılmalıdır."
    },
    {
        question: "Qatranvari nəcisi olan xəstəyə nə etmək lazımdır?",
        answer: "Qatranvari nəcis mədə qanaxmasının əlaməti olduğuna görə xəstə təcili hospitalizasiya olunmalıdır."
    },
    {
        question: "2% - li Lizetol - AF məhlulunda metal alətlər neçə dəqiqə saxlanılmalıdır?",
        answer: "Metal və şüşədən hazırlanmış alətlər 60 dəqiqə müddətində 2% - li lizetol məhlulunda saxlanılmalıdır."
    },
    {
        question: "Lizetol məhlulundan neçə gün istifadə etmək olar?",
        answer: "Lizetol məhlulu müvafiq faizlə hazırlandıqdan sonra 7 gün istifadə üçün yararlıdır."
    },
    {
        question: "Metal alətləri sterilizasiyaya hazırlayarkən korroziya əleyhinə nədən istifadə edilir?",
        answer: "Korroziya əleyhinə 1% - li natrium benzoat məhlulundan istifadə edilir."
    },
    {
        question: "70 % - li spirt neçə gündən bir dəyişdirilməlidir?",
        answer: "Spirt hər 3 gündən bir dəyişdirilməlidir."
    },
    {
        question: "Ağzı bağlı qabda steril spirtli pambıq kürəciklərdən neçə gün istifadə etmək olar?",
        answer: "Bu spirtli kürəciklərdən 1 gündən artıq istifadə etmək düzgün deyil."
    },
    {
        question: "Xəstəxananın aptekində hazırlanmış steril məhlullar hansı rənglə nişanlanır?",
        answer: "Steril məhlullar mavi rənglə rənglənir."
    },
    {
        question: "Ağciyərin süni ventilyasiya aparatına qoşulmuş xəstədə tənəffüsün sayı bir dəqiqədə neçə olmalıdır?",
        answer: "Uzanıqlı, sakit vəziyyətdə insanın 1 dəqiqə ərzində tənəffüsün sayı 12 - yə bərabər , bu da təxminən hər 5 saniyədən bir baş verir. Bu prinsip nəzərə alınmaqla süni tənəffüs aparatına qoşulmuş xəstələrdə bu qayda ilə aparılır."
    },
    {
        question: "Ətraflara yumşaq bint sarğıları qoyularkən ilk dövrə hansı sarğı ilə başlanır?",
        answer: "Sarğının növündən asılı olmayaraq ilk dövrə dairəvi - sirkulyar sarğı ilə başlanır."
    },
    {
        question: "Diz və dirsək oynağına qoyulan tısbağavari sarğının neçə forması var?",
        answer: "Tısbağavari sarğının 2 forması: yaxınlaşan və uzaqlaşan formaları işlədilir."
    },
    {
        question: "Koxer üsulu ilə çıxıq yerinə salınarkən neçə ardıcıl mərhələ var?",
        answer: "Çıxmış sümüyün yerinə salınma təxnikası 4 ardıcıl mərhələ yerinə yetirilir."
    },
    {
        question: "Appendektomiya əməliyyatına neçə metr tənzif işlədilir?",
        answer: "Appendektomiya əməliyyatı üçün 7 - 8 metr tənzifdən istifadə edilir."
    },
    {
        question: "Kəsici cərrahi alətləri əməliyyatdan əvvəl neçə saat spirtdə saxlamaq lazımdır?",
        answer: "Kəsici cərrahi alətlər 30 dəq müddətində 96% - li etil spirtində saxlanılır."
    },
    {
        question: "Biksin əməliyyat üçün yığımının neçə üsulu var?",
        answer: "Biksin əməliyyat üçün yığımının 3 üsulu var. 1. Universal yığım 2. Məqsəd yönlü yığım 3. Çeşidlənmiş yığım"
    },
    {
        question: "Termiki üsulla sterilizasiya olunmayan endoskopik alətlər necə sterilizasiya olunur?",
        answer: "Termiki üsulla sterilizasiyası mümkün olmayan endoskopik, torakoskopik, laparoskopik alət və vasitələr xüsusi qaz sterilizatorlarında 16 saat 18˚C - də sterilizə olunur."
    },
    {
        question: "Adi ketqut sapları neçə vaxtdan sonra sorulur?",
        answer: "Adi ketqut saplarının sorulma müddəti 15 - 20 gündür."
    },
    {
        question: "Çıxığın yerinə salınmasında anesteziya məqsədilə novokainin neçə faizli məhlulu işlədilir?",
        answer: "Çıxığın yerinə salınmasından əvvəl yerli anesteziya məqsədilə 40 - 60 ml 1% - li novokain məhlulu işlədilir."
    },
    {
        question: "Optik alətlərin paraformalin şkaflarda sterilizasiya müddəti neçə saatdan az olmamalıdır?",
        answer: "Optik alətlər paraformalin şkaflarda 48 saatdan az olmayaraq saxlanmalıdır."
    },
    {
        question: "Xromosistoskopiya zamanı vena daxilinə aşağıdakılardan hansı işlədilir?",
        answer: "Xromosistoskopiya zamanı vena daxilinə göy rəngli maddə - indiqokarmin yeridilməsi əlavə edilir."
    },
    {
        question: "Dolu sidik kisəsindən sidik ləngimələrində sidik kateterlə neçə dəqiqə müddətinə boşaldılmalıdır?",
        answer: "Dolu sidik kisəsindən sidik porsiyalarla 15 - 20 dəqiqə müddətində boşaldılır."
    },
    {
        question: "Yemək borusunun yanıqlarında rentgenoloji müayinə nə vaxt aparılır?",
        answer: "Yemək borusu yanıqlarında rentgenoloji müayinə 15 - 20 gündən sonra aparılır."
    },
    {
        question: "Kəskin appendisit zamanı həkiməqədərki tibbi yardıma aiddir?",
        answer: "Kəskin appendisit zamanı həkiməqədərki tibbi yardım sağ qalça çuxuruna buz qovuğu qoyub, təcili cərrahi şöbəyə çatdırmaq lazımdır."
    },
    {
        question: "Boyun venalarından qanaxma zamanı təhlükəli, zərərçəkmişin ölümünə səbəb nədir?",
        answer: "Boyun venalarından qanaxma zamanı təhlükəli ağırlaşma hava emboliyasıdır."
    },
    {
        question: "İlan sancması zamanı hansı tədbiri həyata keçirmək olmaz?",
        answer: "İlan sancması zamanı heparin işlədilməsi əks göstərişdir."
    },
    {
        question: "Yanıq şoku zamanı ağırkəsici təsirli narkotik preparatların hansı nahiyyəyə yeridilməsi məqsədəuyğundur?",
        answer: "Yanıq şoku zamanı ağırkəsici narkotiklər vena daxilinə yeridilməsi məqsədə uyğundur."
    },
    {
        question: "Qələvilərlə yanıq sahəsini neytrallaşdırmaq məqsədilə sirkə turşusunun neçə faizli məhlulundan istifadə edilir?",
        answer: "Qələvilərlə yanıq sahəsini neytrallaşdırmaq məqsədilə sirkə turşusunun 1% - li məhlulundan istifadə edilir."
    },
    {
        question: "Bayılmanın obyektiv əlamətlərinə hansı aid deyil?",
        answer: "Dəri örtüyünün qızarması (hiperemiya) bayılma üçün xarakterik dеyil."
    },
    {
        question: "Kimyəvi yanığın ağırlığı hansı faktordan asılı deyil?",
        answer: "Kimyəvi yanığın ağırlıq dərəcəsi havanın temperaturundan asılı deyil."
    },
    {
        question: "Yaranın birincili sağalması neçə gün davam edir?",
        answer: "Yaranın birincili sağalması 5 - 8 günə qədər davam edir."
    },
    {
        question: "Ağciyərin zədələnmələrində hansı simptoma rast gəlinmir?",
        answer: "Ağciyərin zədələnməsində disfagiya simptomuna rast gəlinmir."
    },
    {
        question: "Sınıqların ümumi klinik əlamətlərinə aid deyil?",
        answer: "Sınıqların ümumi klinik əlamətlərinə asfiksiya aid deyil."
    },
    {
        question: "Dərinin funksiyasına nə aid deyil?",
        answer: "Dərinin funksiyasına hormonal tənzimləmə aid deyil."
    },
    {
        question: "Dərinin hansı sahələrində piy vəziləri mövcud deyil?",
        answer: "Piy vəziləri dəri örtüyünün ovuc və ayaqaltı istisna olmaqla hər yerində rast gəlir."
    },
    {
        question: "Dəri səpkiləri neçə yerə bölünür?",
        answer: "Dəri səpkiləri birincili və ikincili olmaqla 2 yerə bölünür."
    },
    {
        question: "Dərinin elastikliyini itirməsi nəticəsində aşağıdakılardan hansı əmələ gəlir?",
        answer: "Dərinin elastikliyini itirməsi nəticəsində çat əmələ gəlir."
    },
    {
        question: "Qartmaq nədir?",
        answer: "Qovuq, qovuqcuq, eroziya, habelə eroziya və yara ifrazatı – eksudasiya məhsulları quruduqda qartmaq əmələ gəlir."
    },
    {
        question: "Epidermis və derma arasında az miqdarda maye toplanması ilə xarakterizə olunur.",
        answer: "Qovuçuq epidermis və derma arasında az miqdarda maye toplanması ilə xarakterizə olunur."
    },
    {
        question: "Dəri xəstəliklərinin müalicə üsullarına aiddir.",
        answer: "Elektrokoter dəri xəstəliklərinin müalicə üsullarına aiddir."
    },
    {
        question: "Kəpəklənən (rəngbərəng) dəmrov hansı xəstəlikdir?",
        answer: "Kəpəklənən (rəngbərəng) dəmrov - kera-tomikozlar qrupundan olan göbələk xəstəliyidir."
    },
    {
        question: "Pedikulyoz törədicisinin hansı mikroorqanizmlərə aid olduğunu göstərin.",
        answer: "Pedikulyoz törədicisi baş biti (Pediculus capitis) adlı parazit həşəratdır."
    },
    {
        question: "Sadə herpesin müalicəsində daha effektlidir:",
        answer: "Sadə herpesin müalicəsində asiklovir preparatı daha effektlidir."
    },
    {
        question: "Vulqar (adi) sızanaqların lokalizasiya yerlərini göstərin.",
        answer: "Vulqar (adi) sızanaqlar piy vəziləri ətrafında səthi və dərin yerləşir."
    },
    {
        question: "Qonoreyanın inkubasiya dövrü orta hesabla neçə gündür?",
        answer: "Qonoreyanın inkubasiya dövrü orta hesabla 3 - 5 gündür."
    }
];