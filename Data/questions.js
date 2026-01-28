// questions.js - Complete Azerbaijani Nursing Exam Questions (640 questions)

const questions = [
    // Question 1
    {
        question: "Skarlatina zamanı İlk əsas klinik əlamət hansıdır?",
        options: [
            "Hipervolemiya",
            "Travmatik şok",
            "Hemoliz",
            "Anemiya",
            "Anqina"
        ],
        correct: 4
    },
    // Question 2
    {
        question: "Cansız vaksinlərin yeridilməsindən sonra hansı yerli reaksiya müşahidə olunur?",
        options: [
            "İnyeksiya yerində abses",
            "3 gündən çox yüksək hərarət",
            "İnyeksiya yerində ağrı və şişkinlik",
            "Qusma, ishal",
            "2 gün ərzində subfebril temperatur"
        ],
        correct: 2
    },
    // Question 3
    {
        question: "Qlomerulonefrit zamanı Zimnitski sınağının aparılmasında məqsəd nədir?",
        options: [
            "Sidiyin xüsusi çəkisini, gecə və gündüz sidiyinin fərqini və sutkalıq sidiyi təyin etmək",
            "Sidikdə leykositlərin olmasını təyin etmək",
            "Sidikdə zülalın olmasını təyin etmək",
            "Sidiyin ümumi müayinəsini aparmaq",
            "Sidikdə şəkərin olmasını təyin etmək"
        ],
        correct: 0
    },
    // Question 4
    {
        question: "Anus ətrafında qaşınma aşağıdakılardan hansı üçün daha çox xarakterikdir?",
        options: [
            "Opistorxoz",
            "Trixosefalyoz",
            "Askaridioz",
            "Enterebioz",
            "Tenidoz"
        ],
        correct: 3
    },
    // Question 5
    {
        question: "Su çiçəyi zamanı səpkilər hansı xarakterdə olur?",
        options: [
            "Qaşınma",
            "Polimorfizm (ləkə - papula - vezikula - qabıq)",
            "Lokalizasiya edici",
            "Etaplı səpmə",
            "Qabıqvermə"
        ],
        correct: 1
    },
    // Question 6
    {
        question: "Uşaqlarda hansı helmint xolesistitin əmələ gəlməsinə səbəb olur?",
        options: [
            "Bizquyruq qurdlar",
            "Lyambliyalar",
            "Lentəbənzər qurdlar",
            "Askarid",
            "Tükbaş qurdlar"
        ],
        correct: 1
    },
    // Question 7
    {
        question: "Fellinq sınağı hansı xəstəliyin diaqnostikası məqsədilə aparılır?",
        options: [
            "Daun xəstəliyi",
            "Anemiya",
            "Şəkərli diabet",
            "Fenilketonuriya",
            "Hemofiliya"
        ],
        correct: 3
    },
    // Question 8
    {
        question: "Follikulyar anginanın diaqnoztikası məqsədilə nə etmək lazımdır?",
        options: [
            "Badamcıqlardan Löffler çöpünü aşkar etmək üçün yaxma götürmək",
            "Qanın ümumi müayinəsi",
            "Qanın biokimyəvi müayinəsi",
            "Elektokardioqramma",
            "Bəlğəmin müayinəsi"
        ],
        correct: 0
    },
    // Question 9
    {
        question: "Anadangəlmə ürək qüsurunun əsas müalicəsi necə aparılır?",
        options: [
            "Hormonlarla",
            "Vitaminlərlə",
            "Ürək qlukozidləri ilə",
            "Diuretiklərlə",
            "Cərrahi yolla"
        ],
        correct: 4
    },
    // Question 10
    {
        question: "'Qatranvari' nəcisi olan xəstəyə nə etmək lazımdır?",
        options: [
            "Təcili hospitalizasiya etmək (mədə qanaxması)",
            "Vanna etmək",
            "Pəhriz təyin etmək",
            "Təmizləyici imalə etmək",
            "Qarın üzərinə isitqac qoymaq"
        ],
        correct: 0
    },
    // Question 11
    {
        question: "Ətraflara yumşaq bint sarğıları qoyularkən ilk dövrə hansı sarğı ilə başlanır?",
        options: [
            "Sünbül şəkilli",
            "Spiral şəkilli",
            "Səkkizvari",
            "Dairəvi -- sirkulyar",
            "Sürünən"
        ],
        correct: 3
    },
    // Question 12
    {
        question: "Biksin əməliyyat üçün yığımının neçə üsulu var?",
        options: [
            "5",
            "6",
            "3",
            "1",
            "2"
        ],
        correct: 2
    },
    // Question 13
    {
        question: "Adi ketqut sapları neçə vaxtdan sonra sorulur?",
        options: [
            "15 - 20 gün",
            "2 - 3 gün",
            "30 - 40 gün",
            "1 gün",
            "5 - 10 gün"
        ],
        correct: 0
    },
    // Question 14
    {
        question: "İlan sancması zamanı aşağıdakı hansı tədbiri həyata keçirmək olmaz?",
        options: [
            "İlan zəhərinə qarşı zərdab",
            "Zədələnmiş ətrafa kalium permanqanatla sarğı",
            "Tetanus əleyhinə zərdab",
            "Ətrafın immobilizasiyası",
            "1 ml heparin əzələ daxilinə"
        ],
        correct: 4
    },
    // Question 15
    {
        question: "Dərinin funksiyasına aşağıdakılardan hansı aid deyil?",
        options: [
            "Piqment əmələ gətirmə",
            "Hormonal tənzimləmə",
            "İmmun müdafiə",
            "İstilik tənzimləmə",
            "D vitamininin sintezi"
        ],
        correct: 1
    },
    // Question 16
    {
        question: "Aktinomikozun törədicisi nədir?",
        options: [
            "Streptokoklar",
            "Bağırsaq çöpləri",
            "Stafilokoklar",
            "Löfler çöpləri",
            "Şüa göbələyi"
        ],
        correct: 4
    },
    // Question 17
    {
        question: "Aşağı ətrafın qasıq bitişməsinin içəri nahiyyəsində hansı arteriya palpasiya edilir?",
        options: [
            "Bud arteriyası",
            "Aşağı ətraflarda topuq nahiyəsi",
            "Mil arteriyası",
            "Yuxu arteriyası",
            "Gicgah arteriyası"
        ],
        correct: 0
    },
    // Question 18
    {
        question: "Hemotoraks zamanı qan hara yığılır?",
        options: [
            "Qarın boşluğuna",
            "Sidik kisəsinə",
            "Toxumaların arasına",
            "Plevra boşluğuna",
            "Oynaq kapsuluna"
        ],
        correct: 3
    },
    // Question 19
    {
        question: "Sınığı təsdiq edən əsas müayinə üsulu hansıdır?",
        options: [
            "Rentgenoqrafiya",
            "Flüoroqrafiya",
            "Sistoqrafiya",
            "USM",
            "Angioqrafiya"
        ],
        correct: 0
    },
    // Question 20
    {
        question: "I, II dərəcəli termiki yanıqlar zamanı ilk tibbi yardım nədən ibarətdir?",
        options: [
            "Turna qoymaq",
            "Suluqları kəsmək",
            "Streptosid tozu səpmək",
            "Vişnevski məlhəmi ilə sarğı qoymaq",
            "Aseptik sarğı qoymaq"
        ],
        correct: 4
    },
    // Question 21
    {
        question: "Travmalarda ilk yardım məqsədilə yuxarı ətraflara rahatlıq vermək üçün hansı sarğı növündən istifadə olunur?",
        options: [
            "Dezo",
            "Sünbül",
            "Ləçəkvari",
            "Səkkizvari",
            "Spiral"
        ],
        correct: 2
    },
    // Question 22
    {
        question: "Sınıqların əsas müalicə üsuluna hansı aid deyil?",
        options: [
            "İnhalyasiya",
            "Funksional müalicə",
            "Dartma",
            "İmmobilizasiya",
            "Cərrahi üsulla müalicə"
        ],
        correct: 0
    },
    // Question 23
    {
        question: "Anafilaktik şoka xas olmayan əlaməti göstərin",
        options: [
            "Qirtlağın ödemi",
            "Bronxospazm",
            "Arterial təzyiqin yüksəlməsi",
            "Arterial təzyiqin enməsi",
            "Beyinin ödemi"
        ],
        correct: 2
    },
    // Question 24
    {
        question: "Kəskin pnevmoniyanın əsas əlamətləri hansılardır?",
        options: [
            "Qanhayxırma",
            "Nəfəsvermənin çətinləşməsi",
            "Yüksək temperatur, tənəffüs çatmamazlığı, ağız-burun üçbucağının sianozu",
            "Quru xırıltılar",
            "'Hürücü' öskürək"
        ],
        correct: 2
    },
    // Question 25
    {
        question: "Aşağıdakılardan hansı kəskin sadə bronxitin əlamətləridir?",
        options: [
            "'Hürücü' öskürək",
            "Reprizli tutmaşəkilli öskürək",
            "Fitsəsli xırıltılı öskürək",
            "Quru öskürəyin tədricən yaş öskürəyə keçməsi",
            "Boğulma ilə müşaiyət olunan öskürək"
        ],
        correct: 3
    },
    // Question 26
    {
        question: "Streptokok mənşəli tonzillitin (angina) fəsadları hansıdır?",
        options: [
            "Piodermiya",
            "Pnevmoniya",
            "Revmatizm, qlomerulonefrit",
            "Pankreatit",
            "Meningit"
        ],
        correct: 2
    },
    // Question 27
    {
        question: "Doğuşdan sonra ağız südü (molozivo) neçə müddət ifraz olunur?",
        options: [
            "İlk 3 həftə",
            "İlk 3 gün",
            "İlk 7-8-ci gün",
            "İlk 10-12 gün",
            "İlk 15-18-ci gün"
        ],
        correct: 1
    },
    // Question 28
    {
        question: "Yenidoğulmuşun vəziyyətinin Apqar şkalası ilə qiymətləndirilməsi nə vaxt aparılır?",
        options: [
            "Yenidoğulmuşlar şöbəsinə köçürülərkən",
            "10-cu dəqiqədə",
            "30 dəqiqədən sonra",
            "Həyatının 1-ci və 5-ci dəqiqələrində",
            "Doğum evindən evə yazılarkən"
        ],
        correct: 3
    },
    // Question 29
    {
        question: "Süni passiv immunitet nə vaxt yaranır?",
        options: [
            "Vaksinlərin yeridilməsindən sonra",
            "Antibakterial terapiyadan sonra",
            "Hormonal terapiyadan sonra",
            "İmmunoqlobulin və ya zərdabların yeridilməsindən sonra",
            "Antihistamin preparatların yeridilməsindən sonra"
        ],
        correct: 3
    },
    // Question 30
    {
        question: "Süni aktiv immunitet nə vaxt yaranır?",
        options: [
            "Vaksinlərin yeridilməsindən sonra",
            "Hormonal terapiyadan sonra",
            "Vitaminoterapiyadan sonra",
            "İmmunoqlobulinlərin yeridilməsindən sonra",
            "Antibakterial terapiyadan sonra"
        ],
        correct: 0
    },
    // Question 31
    {
        question: "Vaksinlərin anbarlardan tibb müəssisəsinə daşınması zamanı nədən istifadə olunur?",
        options: [
            "Polietilen torbalardan",
            "Kağız torbalardan",
            "Bikslərdən",
            "Adi çantalardan",
            "Termoçantalardan"
        ],
        correct: 4
    },
    // Question 32
    {
        question: "Uşaqlarda həqiqi inaq nə vaxt yarana bilər?",
        options: [
            "Laringit zamanı",
            "Follikulyar angina zamanı",
            "Virus infeksiyaları zamanı",
            "Faringit amanı",
            "Qırtlağın difteriyası zamanı"
        ],
        correct: 4
    },
    // Question 33
    {
        question: "Enterobiozun diaqnostikası üçün hansı material daha çox məlumat verir?",
        options: [
            "Qan",
            "Sidik",
            "Tüpürcək",
            "Bəlğəm",
            "Anusətrafı yaxma"
        ],
        correct: 4
    },
    // Question 34
    {
        question: "Hansı əlamət enterobioza xasdır?",
        options: [
            "Hipertermiya",
            "Perianal nahiyədə qaşınmanın olması",
            "Sarılıq",
            "Oynaqlarda ağrı",
            "Öskürək"
        ],
        correct: 1
    },
    // Question 35
    {
        question: "Qızılca xəstəliyinin inkubasiya dövrü nə qədərdir?",
        options: [
            "1 ay",
            "6 saat",
            "3 gün",
            "1-2 gün",
            "7-17 gün"
        ],
        correct: 4
    },
    // Question 36
    {
        question: "Qızılca xəstəliyi ilk 3 gündə hansı simptomlarla müşayiət olunur?",
        options: [
            "Fotofobiya, konyuktivit, Filatov ləkələri",
            "'Moruğu dil', Filatov üçbucağı",
            "Tüpürcək vəzilərinin böyüməsi",
            "Çoğrafi dil",
            "Başın tüklü hissəsində səpgilər"
        ],
        correct: 0
    },
    // Question 37
    {
        question: "'Soyuq Zəncir' sisteminin təlabatlarına riayət etmək lazımdır:",
        options: [
            "Yalnız vaksinlərin daşınması zamanı",
            "Yalnız vaksinlərin saxlanılması zamanı",
            "Vaksinlərin daşınması, saxlanılması və istifadəsi zamanı",
            "Vaxtı keçmiş vaksinlərin məhv edilməsi zamanı",
            "Yalnız vaksinlərin istifadəsi zamanı"
        ],
        correct: 2
    },
    // Question 38
    {
        question: "Təhlükəsiz qutu nə üçün nəzərdə tutulmuşdur?",
        options: [
            "Rezin əlcəklər üçün",
            "İstifadə olunmuş inyeksiya alətləri və vaksin flakonları üçün",
            "Tənzif kürəcikləri atmaq üçün",
            "Pambıq tamponlar üçün",
            "Şprisin ucluğunu və kağız qablamasını atmaq üçün"
        ],
        correct: 1
    },
    // Question 39
    {
        question: "Təhlükəsiz qutunu (TQ) hansı üsullarla məhv etmək lazımdır?",
        options: [
            "Sadalanan üsulların hər birindən istifadə edilir",
            "Xüsusi çalada basdırılma",
            "İnsinerasiya sobasında yandırılma",
            "Konteynerdə yandırılma",
            "Xüsusi quyuda yandırılma"
        ],
        correct: 0
    },
    // Question 40
    {
        question: "Vaksin flakonunun üzərində olan nəzarət indikatoru nəyi göstərir?",
        options: [
            "Vaksinin fiziki vəziyyətinin dəyişdiyini (topalar, bulanıqlıq)",
            "Vaksinin uzun müddət yüksək temperaturda qaldığını",
            "Vaksinin yararlılıq müddətinin bitdiyini",
            "Vaksinin donmaya məruz qaldığını",
            "Vaksin flakonunun tamlığının pozulduğunu"
        ],
        correct: 1
    },
    // Question 41
    {
        question: "Yenidoğulmuşlarda hemoqlobinin miqdarı nə qədər olmalıdır?",
        options: [
            "110-140 q/l",
            "80-120 q/l",
            "90-110 q/l",
            "180-240 q/l",
            "100-160 q/l"
        ],
        correct: 3
    },
    // Question 42
    {
        question: "Lyamblioza xas olan əlamətlər hansılardır?",
        options: [
            "Sadalananların hamısı",
            "Meteorizm, qarında 'qurultu' əlaməti",
            "Dəridə səpgilər, piqmentasiya",
            "Qəbzliklə ishalın növbələşməsi",
            "Ürəkbulanma, qusma"
        ],
        correct: 0
    },
    // Question 43
    {
        question: "Dizenteriyanın törədicisi hansıdır?",
        options: [
            "Bakteriyalar",
            "Viruslar",
            "Şigellalar",
            "Göbələklər",
            "Helmintlər"
        ],
        correct: 2
    },
    // Question 44
    {
        question: "Lyambliozun törədicisi hansıdır?",
        options: [
            "Göbələklər",
            "Çöplər",
            "Birhüceyrəli parazit",
            "Viruslar",
            "Bakteriyalar"
        ],
        correct: 2
    },
    // Question 45
    {
        question: "Raxit xəstəliyinin kəskin dövründən sonra sümüklərdə hansı dəyişiklik baş verir?",
        options: [
            "Alın və təpə qabarları, kub formalı baş quruluşu",
            "Toyuq və ya çəkməçi döş qəfəsi",
            "X və O şəkilli ayaqlar",
            "Raxitik 'bilərziklər', 'təsbehlər'",
            "Sadalananların hamısı"
        ],
        correct: 4
    },
    // Question 46
    {
        question: "D vitamini orqanizmda hansı rol oynayır?",
        options: [
            "Su mübadiləsini tənzimləyir",
            "Kreatinin səviyyəsini tənzimləyir",
            "Ca və F mübadiləsini tənzim edir",
            "Bilirubinin səviyyəsini tənzimləyir",
            "Qlükozanın miqdarını azaldır"
        ],
        correct: 2
    },
    // Question 47
    {
        question: "7 yaşlı uşağın boyu nə qədər olmalıdır?",
        options: [
            "130 sm",
            "118 sm",
            "91 sm",
            "104 sm",
            "145 sm"
        ],
        correct: 1
    },
    // Question 48
    {
        question: "3 yaşda uşağın boyu nə qədər olmalıdır?",
        options: [
            "92 sm",
            "120 sm",
            "81 sm",
            "78 sm",
            "110 sm"
        ],
        correct: 0
    },
    // Question 49
    {
        question: "HbS (Hepatit B) virusunun daşıyıcısı olan anadan doğulmuş yenidoğulmuşa profilaktik məqsədlə spesifik immunoqlobulin nə vaxt yeridilir?",
        options: [
            "Doğum evindən evə yazılarkən",
            "2 həftəliyində",
            "1 aylığında",
            "Həyatının ilk saatlarında",
            "Həyatının II-III günündə"
        ],
        correct: 3
    },
    // Question 50
    {
        question: "IPV vaksini uşağı hansı xəstəlikdən qoruyur?",
        options: [
            "Poliomielit",
            "Məxmərək",
            "Qızılca",
            "Pnevmoniya",
            "Vərəm"
        ],
        correct: 0
    },
    // Question 51
    {
        question: "Hansı simptom Qızılca xəstəliyi zamanı diaqnostik əhəmiyyətə malikdir?",
        options: [
            "Pasternatski simptomu",
            "Filatov üçbucağı",
            "Belski-Filatov-Koplik ləkələri",
            "Coğrafi dil",
            "Şotkin-Blumberq simptomu"
        ],
        correct: 2
    },
    // Question 52
    {
        question: "Perinatal dövr hansı müddəti əhatə edir?",
        options: [
            "Yenidoğulmuşun həyatının ilk 7 günü",
            "Hamiləliyin 28-ci həftəsindən yenidoğulmuşun 7-ci gününədək",
            "Mayalanmadan doğuşa qədər",
            "Hamiləliyin 28-ci həftəsindən doğuşadək",
            "Doğuşun başlanmasından sonunadək"
        ],
        correct: 1
    },
    // Question 53
    {
        question: "Yenidoğulmuşa vurulan BCG peyvəndinə əks göstəriş aşağıdakılardan hansıdır?",
        options: [
            "İmmunçatmamazlığı halları",
            "Toksiki eritema",
            "Anadangəlmə fermentopatiyalar",
            "Fizioloji sarılıq",
            "Üz-çənə anomaliyaları"
        ],
        correct: 0
    },
    // Question 54
    {
        question: "Sağlam yenidoğulmuşa doğum evində təqvim üzrə hansı peyvəndlər vurulmalıdır?",
        options: [
            "Hepatit B, OPV, QPM",
            "Hepatit B, BCG, OPV",
            "BCG, İPV, Hib",
            "Hepatit B, PkV, İPV",
            "BCG, QPM, OPV"
        ],
        correct: 1
    },
    // Question 55
    {
        question: "Çəkisi 4000 q-dan çox olan yenidoğulmuşlarda qanda nəyin səviyyəsini nəzarətdə saxlamaq lazımdır?",
        options: [
            "Azotun",
            "Şəkərin",
            "Kaliumun",
            "Natriumun",
            "Kalsiumun"
        ],
        correct: 1
    },
    // Question 56
    {
        question: "Yenidoğulmuş uşaqlarda qazçıxarıcı borunu düz bağırsaqda nə qədər saxlamaq olar?",
        options: [
            "7-10 dəq",
            "5-7 dəq",
            "3-5 dəq",
            "11-15 dəq",
            "14-16 dəq"
        ],
        correct: 2
    },
    // Question 57
    {
        question: "Yenidoğulmuşun pilorostenozu zamanı hansı hallar yaranır?",
        options: [
            "Ödemlər",
            "Qıcolma",
            "Qanaxma",
            "Hipertermiya",
            "Bədən kütləsinin azalması, fontan şəklində qusma"
        ],
        correct: 4
    },
    // Question 58
    {
        question: "Yenidoğulmuşa ilk saatlarda vurulan Vitamin K-nın inyeksiyası hansı məqsəd daşıyır?",
        options: [
            "Tənəffüsü normallaşdırmaq üçün",
            "Qanaxma və qansızmaların qarşısını almaq üçün",
            "Qışqırıq mexanizmi yaratmaq üçün",
            "Ürək döyüntülərinin sayını artırmaq üçün",
            "Əmmə refleksi yaratmaq üçün"
        ],
        correct: 1
    },
    // Question 59
    {
        question: "Hemofiliya üçün aşağıdakılardan hansı xarakterik deyil?",
        options: [
            "Laxtalanmanın pozulması",
            "Hemolitik anemiya",
            "Burun qanaxmaları",
            "Yenidoğulmuşlarda göbəkdən qanaxma",
            "Hemartroz-oynaqdaxili qansıxmalar"
        ],
        correct: 1
    },
    // Question 60
    {
        question: "Talassemiya xəstəliyi zamanı qanda hansı dəyişiklik baş verir?",
        options: [
            "Hiperqlikemiya",
            "Hiperazotemiya",
            "Hemoqlobin sintezinin pozulması-hemoqlobinopatiyalar",
            "Laxtalanmanın pozulması",
            "Hiperbilirubinemiya"
        ],
        correct: 2
    },
    // Question 61
    {
        question: "Talassemiya xəstəliyi zamanı qanda hansı elementin miqdarı artır?",
        options: [
            "Xlor",
            "Natrium",
            "Kalium",
            "Dəmir",
            "Kalsium"
        ],
        correct: 3
    },
    // Question 62
    {
        question: "Talassemiya hansı xəstəliklər qrupuna aiddir?",
        options: [
            "Endokrin xəstəliklər",
            "Allergik xəstəliklər",
            "Onkoloji xəstəliklər",
            "Genetik xəstəliklər",
            "İnfeksion xəstəliklər"
        ],
        correct: 3
    },
    // Question 63
    {
        question: "Aşağıdakılardan hansı Talassemiya xəstəliyinin əlaməti deyil?",
        options: [
            "Dalaq və qaraciyərin böyüməsi",
            "Üst çənənin ölçülərinin böyüməsi",
            "Monqoloid göz yarığı",
            "Əlin ovuc səthində köndələn xəttin olması",
            "Kvadrat formalı kəllə"
        ],
        correct: 3
    },
    // Question 64
    {
        question: "Dölün ölüdoğulma hallarında aşağıdakılardan hansı ola bilər?",
        options: [
            "Göbək ciyəsinin pulsasiyası",
            "Tənəffüsün olması",
            "Ürək döyüntülərinin olması",
            "Əzələ tonusunun olması",
            "Dərinin çəhrayı rəngi"
        ],
        correct: 0
    },
    // Question 65
    {
        question: "PkV vaksini uşağı hansı xəstəlikdən qoruyur?",
        options: [
            "Suçiçəyi",
            "Skarlatina",
            "Pnevmoniya",
            "Vərəm",
            "Poliomielit"
        ],
        correct: 2
    },
    // Question 66
    {
        question: "Fizioloji olaraq yenidoğulmuşa xarakterik deyil?",
        options: [
            "Ürək döyüntülərinin dəqiqədə 140 olması",
            "Çəhrayı dəri örtüyü",
            "Əzələ hipotoniyası",
            "Əzələ hipertoniyası",
            "Əmmə-udma refleksinin olması"
        ],
        correct: 2
    },
    // Question 67
    {
        question: "Hansı çəkidə doğulmuş yenidoğulmuş uşağa peyvənd etmək olmaz?",
        options: [
            "Çəkisi 1800q-dan aşağı olan",
            "Çəkisi 3000q-dan aşağı",
            "Çəkisi 2500q-dan aşağı",
            "Çəkisi 2000q-dan aşağı",
            "Çəkisi 2700q-dan aşağı"
        ],
        correct: 0
    },
    // Question 68
    {
        question: "Yenidoğulmuş uşaqlarda fototerapiya hansı məqsədlə aparılır?",
        options: [
            "Qanda bilirubinin səviyyəsinin aşağı salınması",
            "Bədən temperaturunun tənzimlənməsi",
            "Qanda hemoqlobinin səviyyəsinə nəzarət",
            "Çəki itkisinin qarşısının alınması",
            "Qanda şəkərin səviyyəsinin tənzimlənməsi"
        ],
        correct: 0
    },
    // Question 69
    {
        question: "Aşağıdakılardan hansı bədxassəli qan xəstəliklərinə aiddir?",
        options: [
            "Hemofiliya",
            "Talassemiya",
            "Leykoz",
            "Posthemorragik anemiya",
            "Hemolitik anemiya"
        ],
        correct: 2
    },
    // Question 70
    {
        question: "Leykozun başlanğıcı üçün xarakterik olan əlamət hansıdır?",
        options: [
            "Bronxospazm, təngnəfəslik",
            "Ağız-burun üçbucağının sianozu",
            "İshal və qəbzliyin əvəz olunması",
            "Ürəkbulanma, qusma",
            "Yorğunluq, artralgiya, temperaturun yüksəlməsi, iştahanın itməsi"
        ],
        correct: 4
    },
    // Question 71
    {
        question: "Aşağıdakı vəziyyətlərdən hansı erkən döşə qoyulmaya əks göstərişdir?",
        options: [
            "Subfebril temperatur",
            "Asfiksiya",
            "Çəkisi 2000q olan yenidoğulmuş",
            "Çəkinin normadan çox olması",
            "Qısa dil yüyəni"
        ],
        correct: 1
    },
    // Question 72
    {
        question: "Yenidoğulmuş qızlarda sidik kanalının uzunluğu neçə sm-dir?",
        options: [
            "1-2 sm",
            "3-4 sm",
            "4-5 sm",
            "7-8 sm",
            "9-10 sm"
        ],
        correct: 0
    },
    // Question 73
    {
        question: "Yenidoğulmuş oğlan uşaqlarında sidik kanalının uzunluğu neçə sm-dir?",
        options: [
            "1-2 sm",
            "10-11 sm",
            "5-6 sm",
            "8-9 sm",
            "2-3 sm"
        ],
        correct: 2
    },
    // Question 74
    {
        question: "Skarlatina səpgiləri solduqdan sonra dəridə hansı dəyişiklik müşahidə olunur?",
        options: [
            "Hiperpiqmentasiya",
            "Güclü qabıqlanma-hiperkeratoz",
            "Heç bir dəyişiklik olmur",
            "Hiperemiya",
            "Çapıq"
        ],
        correct: 1
    },
    // Question 75
    {
        question: "Məxmərək səpgiləri solduqdan sonra dəridə hansı dəyişiklik müşahidə olunur?",
        options: [
            "Qabıqlanma",
            "Hiperpiqmentasiya",
            "Heç bir iz qalmır",
            "Hiperemiya",
            "Çapıq"
        ],
        correct: 2
    },
    // Question 76
    {
        question: "Qızılca səpgiləri solduqdan sonra dəridə hansı dəyişiklik olur?",
        options: [
            "Çapıqlaşma",
            "Heç bir iz qalmır",
            "Güclü qabıqlanma",
            "Eritema",
            "Hiperpiqmentasiya"
        ],
        correct: 4
    },
    // Question 77
    {
        question: "Suçiçəyi səpgiləri soldudan sonra dəridə hansı dəyişiklik müşahidə olunur?",
        options: [
            "Qabıq",
            "Heç bir iz qalmır",
            "Hiperpiqmentasiya",
            "Hiperkeratoz",
            "Hiperemiya"
        ],
        correct: 0
    },
    // Question 78
    {
        question: "Aşağıdakılardan hansı skarlatina xəstəliyinə xas əlamət deyil?",
        options: [
            "Filatov üçbucağı",
            "Hiperkeratoz",
            "'Moruğu dil'",
            "Filatov ləkələri",
            "Nöqtəvari səpgilər"
        ],
        correct: 3
    },
    // Question 79
    {
        question: "Aşağıdakılardan hansı qızılca xəstəliyinə xas əlamət deyil?",
        options: [
            "Filatov ləkələri",
            "Konyuktivit",
            "Filatov üçbucağı",
            "İşıqdan qorxma",
            "Hiperemiya"
        ],
        correct: 2
    },
    // Question 80
    {
        question: "Aşağıdakılardan hansı suçiçəyinə xas olan əlamət deyil?",
        options: [
            "Başın tüklü hissəsində səpgi",
            "'Moruğu dil'",
            "Polimorfizm",
            "Hipertermiya",
            "Güclü qaşınma"
        ],
        correct: 1
    },
    // Question 81
    {
        question: "Eksudativ diatezli uşaqlarda hansı əlamətlər olur?",
        options: [
            "Çəkinin normadan artıq olması",
            "Yanaq dərisinin eriteması və qabıqlanması",
            "Başın tüklü hissəsində Qneys-seboreya",
            "Sadalananların hamısı",
            "Xırdadüyünlü qaşınan səpgilər-strofulyuz"
        ],
        correct: 3
    },
    // Question 82
    {
        question: "Uşaqlarda plevrit zamanı hansı əlamət olmur?",
        options: [
            "Döş qəfəsində ağrı, ağırlıq, sıxılma hissi",
            "Əziyyətverici öskürək",
            "Tutmaşəkilli öskürək",
            "Yüksək temperatur",
            "Səthi tənəffüs"
        ],
        correct: 2
    },
    // Question 83
    {
        question: "Aşağıdakılardan hansı anadangəlmə ürək qüsurunun səbəbi deyil?",
        options: [
            "Yenidoğulmuşun Kesariyyə kəsiyi əməliyyatı ilə doğulması",
            "Bətndaxili infeksiyalar",
            "İrsiyyət faktoru",
            "Valideynlərin zərərli vərdişləri",
            "Valideynlərin yaşının çox olması"
        ],
        correct: 0
    },
    // Question 84
    {
        question: "Difteriya xəstəliyi zamanı badamcıqlarda olan ərp hansı xarakterdə olur?",
        options: [
            "Bozumtul, sürətlə qalınlaşan və yayılan, çətinliklə qopan və qopartmada qanaxma verən",
            "Asanlıqla qopan",
            "Sarımtıl nöqtəvari ərp",
            "Ərp olmur",
            "Ancaq badamcıqlarda məhdudlaşan sarımtıl ərp"
        ],
        correct: 0
    },
    // Question 85
    {
        question: "Aşağıdakılardan hansı meningit xəstəliyini törədə bilər?",
        options: [
            "Meninqokoklar",
            "Sadalananların hamısı",
            "Vərəm çöpləri",
            "Pnevmokoklar",
            "b hemolitik çöplər"
        ],
        correct: 1
    },
    // Question 86
    {
        question: "Meningit xəstəliyinin diaqnozunu təsdiqləyən əlamət hansıdır?",
        options: [
            "Qarında ağrı",
            "Qəbzlik",
            "Dəri və selikli qişaların saralması",
            "Zökəm",
            "Boyun əzələlərinin rigidliyi"
        ],
        correct: 4
    },
    // Question 87
    {
        question: "Meningit xəstəliyi zamanı hansı laborator müayinə üsulu zəruridir?",
        options: [
            "Onurğa beyni mayesinin müayinəsi",
            "Sidiyin ümumi analizi",
            "Nəcisin ümumi analizi",
            "Bəlğəmin ümumi müayinəsi",
            "Qanın ümumi analizi"
        ],
        correct: 0
    },
    // Question 88
    {
        question: "Poliomilelit xəstəliyinin törədicisi hansıdır?",
        options: [
            "Bakteriyalar",
            "Streptokoklar",
            "Stafiloklar",
            "Viruslar",
            "Göbələklər"
        ],
        correct: 3
    },
    // Question 89
    {
        question: "1 yaşda uşaqlarda ürək döyüntülərinin sayı nə qədərdir?",
        options: [
            "90-100",
            "110-130",
            "140-160",
            "130-150",
            "80-100"
        ],
        correct: 1
    },
    // Question 90
    {
        question: "Spazmofiliya xəstəliyinə xas əlamət deyil?",
        options: [
            "Narahatlıq",
            "Əzələ hipotoniyası",
            "Larinqospazm",
            "Karpo-pedal spazm",
            "'Akuşer əli'"
        ],
        correct: 1
    },
    // Question 91
    {
        question: "Kəskin ürək çatmamazlığı əlamətlərinə aid deyil?",
        options: [
            "Sapvari nəbz",
            "Hipertermiya",
            "Dəri örtüyünün avazıması",
            "'Mərmər dəri'",
            "Arterial təzyiqin enməsi"
        ],
        correct: 1
    },
    // Question 92
    {
        question: "Aşağıdakılardan hansı məxmərək xəstəliyinə xas əlamət deyil?",
        options: [
            "Boyun və ənsə limfa düyünlərinin böyüməsi",
            "Ləkəli səpgilər",
            "Faringit və konyuktivitin olması",
            "Səpgilərin başın tüklü hissəsində olması",
            "Səpgilərin əsasən ətrafların açıcı səthlərində, üzdə, beldə olması"
        ],
        correct: 3
    },
    // Question 93
    {
        question: "Göyöskürək xəstəliyinin törədicisi hansıdır?",
        options: [
            "Borde-Janqu çöpləri",
            "Viruslar",
            "Parazitlər",
            "b hemolitik streptokoklar",
            "Löffler çöpləri"
        ],
        correct: 0
    },
    // Question 94
    {
        question: "Aşağıdakılardan hansı göyöskürək xəstəliyinə xas əlamət deyil?",
        options: [
            "Dəridə səpgilər",
            "Kataral əlamətlər",
            "Repriz",
            "Tutmaşəkilli öskürək",
            "Üz dərisinin sianozu"
        ],
        correct: 0
    },
    // Question 95
    {
        question: "Aşağıdakılardan hansı epidemik parotit xəstəliyinə xas əlamət deyil?",
        options: [
            "Hipertermiya",
            "Tutmaşəkilli öskürək",
            "Tüpürcək vəzilərinin iltihabı",
            "Çeynəmə və udqunmanın çətinləşməsi",
            "Vəzili orqanlarda fəsadların əmələ gəlməsi"
        ],
        correct: 1
    },
    // Question 96
    {
        question: "Qreqq triadası hansı xəstəliyə xarakterikdir?",
        options: [
            "Anadangəlmə sifilis",
            "Anadangəlmə məxmərək",
            "Anadangəlmə herpes",
            "Anadangəlmə sitomeqaliya",
            "Anadangəlmə toksolazmoz"
        ],
        correct: 1
    },
    // Question 97
    {
        question: "Mədə-bağırsaq qanaxmalarında hansı əlamət müşahidə olunmur?",
        options: [
            "Qanlı qusma",
            "Hipertermiya",
            "Melena",
            "Kollaps",
            "Dəri səthinin avazıması"
        ],
        correct: 1
    },
    // Question 98
    {
        question: "Xəstəxanaya 10 yaşlı uşaq gətirilib. Huşu itib, nəbzin dəqiqəlik sayı 140, tənəffüsün dəqiqəlik sayı 35- dir. 3 gündür xəstədir. Xəstəlik qusma ilə başlayıb. Sidiyin müayinəsində şəkər və aseton tapilib. Klinik diaqnoz aşağıdakılardan hansı ola bilər?",
        options: [
            "Bayılma",
            "Uremik koma",
            "Hiperqlikemik koma",
            "Hipoqlikemik koma",
            "Kollaps"
        ],
        correct: 2
    },
    // Question 99
    {
        question: "Aşağıdakılardan hansı revmatik xoreyanın əlamətlərinə aid deyil?",
        options: [
            "Psixi pozğunluq",
            "Əzələ zəifliyi",
            "Poliartrit",
            "Hiperkinezlər-qeyri ixiyari hərəkətlər",
            "Qıcolma"
        ],
        correct: 4
    },
    // Question 100
    {
        question: "Hemofiliyalı uşaq hansı mütəxəssis tərəfindən daim nəzarətdə olmalıdır?",
        options: [
            "Hematoloq",
            "Nevroloq",
            "Qastroenteroloq",
            "Cərrah",
            "Dermatoloq"
        ],
        correct: 0
    },
    // Question 101
    {
        question: "Aşağıdakılardan hansı dizenteriya xəstəliyinin əlaməti deyil?",
        options: [
            "Yüksək temperatur",
            "Poliartrit",
            "Ürəkbulanma, qusma",
            "Yaşılımtıl və tərkibində qan olan nəcis ifrazı",
            "Tenezm (yalançı defekasiya hissi)"
        ],
        correct: 1
    },
    // Question 102
    {
        question: "Uşaq 3 aylıqdır. Hər gün uşaqda qusma əlamətləri olur. Uşaq ana südü ilə qidalanır. Çəkisi 3650 qrdır (doğulanda çəkisi 3600 qr ) Belə bir vəziyyətin yaranmasının səbəbi nədir?",
        options: [
            "Sadə dispepsiya",
            "Toksiki diareya",
            "Pilorostenoz",
            "Qastroenterit",
            "Pilorospazm"
        ],
        correct: 2
    },
    // Question 103
    {
        question: "Uşağın 7 yaşı var. Yağlı yeməkdən sonra ürəkbulanmadan, sağ qabırğaaltı nahiyədə ağrıdan şikayət edir. Hansı xəstəlikdən şübhələnmək olar?",
        options: [
            "Qastrit",
            "Kolit",
            "Xolesistit",
            "Ezofagit",
            "Enterit"
        ],
        correct: 2
    },
    // Question 104
    {
        question: "Qəbula 10 aylıq uşaq gətirilib. Ananın dediyinə görə iştahası, yuxusu pisdir, uşaqda dəri və selikli qişalar solğundur, əzələ tonusu zəifdir. Auskultasiyada ürəkdə sistolik küy eşidilir. Dəri və selikli qişalar qurudur, ağız bucaqlarında çatlar var.",
        options: [
            "Eksudativ kataral diatez",
            "Hemofiliya",
            "Dəmir defisitli anemiya",
            "Ensefalopatiya",
            "Ürək qüsuru"
        ],
        correct: 2
    },
    // Question 105
    {
        question: "Qəbula 9 yaşlı uşaq gətirilib. Uşaq ürək bulanma, iştahasızlıq və qarında ağrıdan şikayət edir. Yuxusu pozulub, əsəbidir, gecələr ağzından su axır. Bu zaman uşaqda nədən şübhələnmək olar?",
        options: [
            "Qida toksikoinfeksiyası",
            "Sadə dispepsiya",
            "Helmintozlar",
            "Xolesistit",
            "Appendisit"
        ],
        correct: 2
    },
    // Question 106
    {
        question: "Qəbula 7 yaşlı uşaq gətirilib, sifətin dərisi solğundur, göz qapaqları şişkindir. Sidik ifrazı azalıb. Ananın dediyinə görə sidiyi bulanıqdır, uşağın iştahası pisdir, ürək bulanma və baş ağrısı var. A/T yüksəlib. Hansı xəstəlikdən şübhələnmək olar?",
        options: [
            "Kəskin ürək çatmamazlığı",
            "Pankreatit",
            "Xolesistit",
            "Qlomerulonefrit",
            "Uremik koma"
        ],
        correct: 3
    },
    // Question 107
    {
        question: "Uşağın 8 yaşı var. Ananın dediyinə görə uşağın iştahası zəifdir, tez yorulur, nəcisi rəngsizləşib, sidiyi tündləşib. Müayinədə dəridə sarılıq görünür, qaraciyər 3 sm böyüyüb. Hansı xəstəlikdən şüphələnmək olar?",
        options: [
            "Pankreatit",
            "Xolesistit",
            "Dəmir defisitli anemiya",
            "Qastrit",
            "Hepatit"
        ],
        correct: 4
    },
    // Question 108
    {
        question: "Qızılca xəstəliyinin inkubasiya dövrü neçə müddətdir?",
        options: [
            "3-6 gün",
            "8-17 gün",
            "12 saat",
            "35 gün",
            "2-3 gün"
        ],
        correct: 1
    },
    // Question 109
    {
        question: "Məxmərək xəstəliyinin inkubasiya dövrü nə qədərdir?",
        options: [
            "3-7 günədək",
            "35 günədək",
            "6-12 saat",
            "16-21 günədək",
            "7-14 gün"
        ],
        correct: 3
    },
    // Question 110
    {
        question: "Epidemik parotit xəstəliyinin inkubasiya dövrü nə qədərdir?",
        options: [
            "18-21 gün",
            "35 gün",
            "2-3 gün",
            "3-6 gün",
            "12-18 saat"
        ],
        correct: 0
    },
    // Question 111
    {
        question: "Göyöskürək xəstəliyinin inkubasiya dövrü nə qədərdir?",
        options: [
            "12 saat",
            "2-14 gün",
            "35 gün",
            "3-6 gün",
            "2-3 gün"
        ],
        correct: 1
    },
    // Question 112
    {
        question: "Poliomilet xəstəliyinin inkubasiya dövrü nə qədərdir?",
        options: [
            "5-12 gün",
            "14 gün",
            "2-3 gün",
            "3-6 gün",
            "12 saat"
        ],
        correct: 0
    },
    // Question 113
    {
        question: "Dizenteriya xəstəliyinin inkubasiya dövrü nə qədərdir?",
        options: [
            "4-5 saat",
            "7-17 gün",
            "2-3 gün",
            "5-10 gün",
            "35 gün"
        ],
        correct: 2
    },
    // Question 114
    {
        question: "Vaxtından əvvəl doğulmuş uşaq öz çəkisini ilk günlər neçə % itirə bilər?",
        options: [
            "20-30%",
            "3-5%",
            "1-3%",
            "9-14%",
            "14-16%"
        ],
        correct: 3
    },
    // Question 115
    {
        question: "Difteriya xəstəliyinin inkubasiya dövrü nə qədərdir?",
        options: [
            "1 ay",
            "1,5 ay",
            "7 gün",
            "2-10 gün",
            "2 ay"
        ],
        correct: 3
    },
    // Question 116
    {
        question: "1 yaşadək uşaqlarda qanda şəkərin miqdarı nə qədər olmalıdır?",
        options: [
            "5,0-7,2 mmol/l",
            "5,5-6,5 mmol/l",
            "3,3-5,5 mmol/l",
            "4,4-6,6 mmol/l",
            "2,8-4,4 mmol/l"
        ],
        correct: 4
    },
    // Question 117
    {
        question: "7 yaşlı uşağın çəkisi nə qədər olmalıdır?",
        options: [
            "24 kq",
            "23 kq",
            "15 kq",
            "25 kq",
            "18 kq"
        ],
        correct: 0
    },
    // Question 118
    {
        question: "5 yaşlı uşaqda A/T (arterial təzyiq) neçə millimetr civə sütunu olmalıdır?",
        options: [
            "100 mm/c.st.",
            "80 mm/c.st.",
            "90 mm/c.st.",
            "95 mm/c.st.",
            "85 mm/c.st."
        ],
        correct: 2
    },
    // Question 119
    {
        question: "Hipoqalaktiya zamanı laktasiyanı artırmaq üçün aşağıdakılardan hansı məsləhət görülür?",
        options: [
            "Uşağı ananın döşündə məhdud müddət saxlamaq",
            "Gecələr ancaq şüşə qablardan istifadə etməkə qidalandırmaq",
            "Gecələr əmizdirməmək",
            "Gecə əmizdirmələri mütləq olmaqla tez-tez döşə qoymaq",
            "Gec-gec döşə qoymaq"
        ],
        correct: 3
    },
    // Question 120
    {
        question: "Meyvə şirəsi uşağa nə vaxt verilir?",
        options: [
            "Yemək vaxtı",
            "Yeməkdən 1 saat sonra",
            "Yeməkdən qabaq",
            "Səhər tezdən",
            "Ancaq gecə"
        ],
        correct: 1
    },
    // Question 121
    {
        question: "Yenidoğulmuşlarda nəbzin tezliyi bir dəqiqədə neçə olur?",
        options: [
            "70-80",
            "80-90",
            "70-80",
            "140-150",
            "90-100"
        ],
        correct: 3
    },
    // Question 122
    {
        question: "Yenidoğulmuşlarda çəki itkisi neçə faiz % təşkil edir?",
        options: [
            "20-30%",
            "3-5%",
            "10-12%",
            "10-15%",
            "5-8%"
        ],
        correct: 4
    },
    // Question 123
    {
        question: "Dəri xəstəliklərinin müalicə üsullarına aşağıdakılardan hansı aiddir?",
        options: [
            "Appendektomiya",
            "Endoskopiya",
            "Elektrokardioqrafiya",
            "Diatermokaoqulyasiya",
            "Qastroskopiya"
        ],
        correct: 3
    },
    // Question 124
    {
        question: "Vulqar (adi) sızanaqların lokalizasiya yerlərini göstərin.",
        options: [
            "İri və xırda büküşlər",
            "Cinsiyyət orqanların dərisi və selikli qişası",
            "Üz, sinə və kürək",
            "Əl və ayaq barmaqları",
            "Dodağın qırmızı haşiyəsi və ağızın selikli qişası"
        ],
        correct: 2
    },
    // Question 125
    {
        question: "Təmizləyici imaləyə əks göstəriş hansıdır?",
        options: [
            "Qanayan babasil olduqda",
            "Qarın boşluğundakı əməliyyatlardan əvvəl",
            "Bağırsaq keçməməzliyi olduqda",
            "Doğuşdan əvvəl",
            "Dərman imaləsindən əvvəl"
        ],
        correct: 0
    },
    // Question 126
    {
        question: "Mədə qanaxmasında həkiməqədər yardıma nə daxildir?",
        options: [
            "Aclıq və buz qovuğunun tətbiqi",
            "Qansaxlayıcı preparatlar, buz qovuğunun tətbiqi",
            "Mədənin yuyulması, buz qovuğunun tətbiqi",
            "Aclıq və qansaxlayıcı preparatların tətbiqi",
            "Spazmolitik preparatlar, buz qovuğunun tətbiqi"
        ],
        correct: 0
    },
    // Question 127
    {
        question: "1 Təsir Vahidi ( TV) insulin 5 qr qlükozanı qlikogenə çevirirsə, 200 qr qlükozanı qlukogenə çevirmək üçün neçə TV insulin götürülməlidir?",
        options: [
            "10 TV",
            "20 TV",
            "60 TV",
            "25 TV",
            "40 TV"
        ],
        correct: 4
    },
    // Question 128
    {
        question: "Sidik ifrazının azalması necə adlanır?",
        options: [
            "Opsouriya",
            "Oliquriya",
            "Anuriya",
            "Nikturiya",
            "Poliuriya"
        ],
        correct: 1
    },
    // Question 129
    {
        question: "Sidikdə qanın olması necə adlanır?",
        options: [
            "Albuminuriya",
            "Piuriya",
            "Hematuriya",
            "Nikturiya",
            "Qlükozuriya"
        ],
        correct: 2
    },
    // Question 130
    {
        question: "Qazçıxarıcı borunu bağırsaqda maksimum nə qədər saxlamaq olar?",
        options: [
            "3 saat",
            "45 dəqiqə",
            "30 dəqiqə",
            "1,5 saat",
            "1 saat"
        ],
        correct: 4
    },
    // Question 131
    {
        question: "Onikibarmaq bağırsaq xorasında ağrılar nə vaxt müşahidə edilir?",
        options: [
            "Qida qəbulundan 15 - 30 dəqiqə sonra",
            "Qida qəbulu zamanı",
            "Qida qəbulundan 2 - 3 saat sonra",
            "Gecə və acqarına",
            "Qida qəbulundan dərhal sonra"
        ],
        correct: 3
    },
    // Question 132
    {
        question: "Duodenal zondlama zamanı neçə pay öd götürülür?",
        options: [
            "1",
            "2",
            "5",
            "4",
            "3"
        ],
        correct: 4
    },
    // Question 133
    {
        question: "Aşağıdakılardan hansı instrumental müayinəyə aid deyil?",
        options: [
            "Ultrasəs müayinəsi",
            "EKQ (elektrokardioqrafiya)",
            "Palpasiya",
            "Exo KQ (exokardioqrafiya)",
            "Kompüter tomoqrafiyası"
        ],
        correct: 2
    },
    // Question 134
    {
        question: "Əzələdaxili inyeksiya hansı bucaq altında aparılır?",
        options: [
            "75°",
            "45°",
            "90°",
            "30°",
            "60°"
        ],
        correct: 2
    },
    // Question 135
    {
        question: "Aktiv xəstənin yataq ağlarını neçə gündən bir dəyişdirmək lazımdır?",
        options: [
            "7 gündən bir",
            "Gündə bir dəfə",
            "Ayda bir dəfə",
            "14 gündən bir",
            "Ayda iki dəfə"
        ],
        correct: 0
    },
    // Question 136
    {
        question: "Bayılma zamanı ilk yardım nədən ibarətdir?",
        options: [
            "Ürək nahiyəsinə isitqac qoymaq",
            "Xəstəyə üfüqi vəziyyət vermək",
            "Ətraflara turna qoymaq",
            "Xəstəni otuzdurmaq",
            "Ürək nahiyəsinə soyuq kompres qoymaq"
        ],
        correct: 1
    },
    // Question 137
    {
        question: "Yoğun bağırsağın selikli qişasının endoskopik müayinəsi necə adlanır?",
        options: [
            "Kolonoskopiya",
            "Sistoskopiya",
            "Duodenoskopiya",
            "Qastroskopiya",
            "Ezofaqoskopiya"
        ],
        correct: 0
    },
    // Question 138
    {
        question: "Alimentar yolla orqanizmə daxil olan zəhərli maddələri çıxarmaq üçün hansı imalə istifadə olunur?",
        options: [
            "Dərman",
            "Qidalandırıcı",
            "Sifon",
            "Təmizləyici",
            "Yağlı"
        ],
        correct: 2
    },
    // Question 139
    {
        question: "Ağ ciyər qanaxması zamanı tibb bacısının sərbəst müdaxiləsi nədən ibarətdir?",
        options: [
            "Vena daxilinə kalsium - xlorid məhlulu yeritmək",
            "Vena daxilinə natrium - xlorid məhlulu yeritmək",
            "Döş qəfəsinə soyuq kompres qoymaq",
            "Vena daxilinə aminokapron turşusu məhlulu yeritmək",
            "Döş qəfəsinə isitqac qoymaq"
        ],
        correct: 2
    },
    // Question 140
    {
        question: "1 ml -- də neçə vahid insulin var?",
        options: [
            "25 vahid",
            "20 vahid",
            "30 vahid",
            "40 vahid",
            "10 vahid"
        ],
        correct: 3
    },
    // Question 141
    {
        question: "Tibbi bankaları hansı nahiyəyə qoymaq olmaz?",
        options: [
            "Kürəkaltı nahiyəyə",
            "Onurğaya",
            "Onurğa ətrafı nahiyəyə",
            "Döş qəfəsinin yan tərəflərinə",
            "Döş qəfəsinin aşağı hissəsinə"
        ],
        correct: 1
    },
    // Question 142
    {
        question: "Şəkərli diabet zamanı qanda nə müşahidə edilir?",
        options: [
            "Hipoproteinemiya",
            "Hipoqlikemiya",
            "Hiperproteinemiya",
            "Hiperbilirubinemiya",
            "Hiperqlikemiya"
        ],
        correct: 4
    },
    // Question 143
    {
        question: "Dərman maddələrinin vena daxilinə yeridilməsinin əsas üstünlüyü nədən ibarətdir?",
        options: [
            "Təxirəsalınmaz yardım zamanı effektin tez əldə edilməsi",
            "Yeridilməsinin asan olması",
            "Qaraciyərin baryer rolunun kənarda qalması",
            "Müxtəlif dərman preparatlarının yeridilə bilməsi",
            "Allergik reaksiyanın olmaması"
        ],
        correct: 0
    },
    // Question 144
    {
        question: "Qara ciyər sirrozu olan xəstəyə tibb bacısı hansı yeməyi qadağan etməlidir?",
        options: [
            "Suda bişmiş ət",
            "Yulaf yarmasından bişmiş sıyıq",
            "Yağlı yemək (qızardılmış ət)",
            "Kefir, qatıq",
            "Buxarda bişmiş balıq"
        ],
        correct: 2
    },
    // Question 145
    {
        question: "Qastroskopiya müayinəsinin aparılması üçün xəstə müayinəyə necə gəlməlidir?",
        options: [
            "Nəzarət yeməyi yedikdən sonra",
            "Yeməkdən dərhal sonra",
            "Acqarına",
            "Yeməkdən 1 saat sonra",
            "'Almagel' qəbul etdikdən sonra"
        ],
        correct: 2
    },
    // Question 146
    {
        question: "Endemik urun profilaktikası üçün hansı məhsullar yodlaşdırılır?",
        options: [
            "Ət məhsulları",
            "Xörək duzu",
            "Bitki yağları",
            "Süd məhsulları",
            "Qənnadı məmulatları"
        ],
        correct: 1
    },
    // Question 147
    {
        question: "Qanın ümumi analizində nəyi müəyyən etmək olmur?",
        options: [
            "Eritrositlərin çökmə sürətini",
            "Leykositləri",
            "Hormonları",
            "Hemoqlobini",
            "Eritrositləri"
        ],
        correct: 2
    },
    // Question 148
    {
        question: "UYT (ultra yüksək tezlikli) cərəyan ilə müalicə zamanı xəstə nə hiss edir?",
        options: [
            "Sancma",
            "Yüngül istilik",
            "Qarışqa gəzintisi",
            "Titrətmə",
            "Vibrasiya"
        ],
        correct: 1
    },
    // Question 149
    {
        question: "Abdominal punksiyadan sonra xəstənin qarnını nə üçün dəsmalla sıxırlar?",
        options: [
            "Hipertonik kriz baş verməsin",
            "Qarın boşluğuna maye yenidən yığılmasın",
            "Beyin qansızması baş verməsin",
            "Ağciyər ödemi baş verməsin",
            "Xəstə bayılmasın"
        ],
        correct: 4
    },
    // Question 150
    {
        question: "Masaj qaydalarına uyğun gəlməyən nədir?",
        options: [
            "Masaj otağının hərarəti 35° - 37° olmalıdır",
            "Hava quru olmalıdır",
            "İşıqlı olmalıdır",
            "1 çarpayı üçün 8 m² sahə ayrılmalıdır",
            "Ventilyasiyalı olmalıdır"
        ],
        correct: 0
    },
    // Question 151
    {
        question: "Masaj zamanı dərinin qıcıqlanmaması üçün aşağıdakılardan hansını istifadə etmək olmaz?",
        options: [
            "Talk tozu",
            "Su",
            "Uşaq pudrası",
            "Bitki yağı",
            "Vazelin"
        ],
        correct: 1
    },
    // Question 152
    {
        question: "Bədən temperaturu hansı dərəcəyə qalxdıqda xəstənin huşu pozula bilər (C°)?",
        options: [
            "40,5 - 41,0",
            "37,0 - 38,0",
            "38,5 - 39,0",
            "38,0 - 38,5",
            "36,6 - 37,0"
        ],
        correct: 0
    },
    // Question 153
    {
        question: "Hipoqlikemik koma zamanı nəyin vena daxilinə yeridilməsi təxirəsalınmaz yardımdan ibarətdir?",
        options: [
            "Qlükoza",
            "Heparin",
            "İnsulin",
            "Kofein",
            "Dibazol"
        ],
        correct: 0
    },
    // Question 154
    {
        question: "Yoluxmuş iynə ilə öz əlini zədələyən tibb bacısı nəyi düz etmir?",
        options: [
            "Furasillinlə yaralanan yeri işləyir",
            "Yod məhlulu ilə işləyir",
            "Əllərini sabunla yuyur",
            "70 % - li spirtlə silir",
            "Bir damcı qan çıxarır"
        ],
        correct: 0
    },
    // Question 155
    {
        question: "İsti vannaları hansı halda tətbiq etmək olmaz?",
        options: [
            "Yüksək hərarət",
            "Xroniki rinit",
            "Xroniki bronxit",
            "Kəskin respirator xəstəlik",
            "Xroniki pnevmoniya"
        ],
        correct: 0
    },
    // Question 156
    {
        question: "Uremik koma zamanı xəstənin nəfəsindən hansı iy gəlir?",
        options: [
            "Lax yumurta",
            "Ammonyak",
            "Aseton",
            "Alkoqol",
            "Tütün"
        ],
        correct: 1
    },
    // Question 157
    {
        question: "Hansı halda masaj etmək olmaz?",
        options: [
            "Oynaq xəstəlikləri zamanı",
            "Bağların dartınması zamanı",
            "Piylənmə zamanı",
            "Spastik iflic zamanı",
            "Limfa düyünləri şişdikdə"
        ],
        correct: 4
    },
    // Question 158
    {
        question: "Bunlardan hansı masajın əsas metodu deyil?",
        options: [
            "Sürtmə",
            "Kəsmələmə",
            "Sığallama",
            "Döyəcləmə",
            "Basmalama"
        ],
        correct: 4
    },
    // Question 159
    {
        question: "Hirudoterapiya nədir?",
        options: [
            "Qanburaxma",
            "Su ilə müalicə",
            "Zəli ilə müalicə",
            "İşıqla müalicə",
            "İqlimlə müalicə"
        ],
        correct: 2
    },
    // Question 160
    {
        question: "Plevral punksiya zamanı aşağıda göstərilənlərdən hansı tibb bacısının funksiyasına aid deyil?",
        options: [
            "Plevral punksiya etmək",
            "Ürək - qan - damar sisteminə təsir edən preparatları əl altına qoymaq",
            "Lazım gəldikdə xəstəyə naşatır spirti iylətmək",
            "Xəstənin dəri örtüklərinə və nəbzinə nəzarət etmək",
            "Punksiya yerinə yod sürtmək"
        ],
        correct: 0
    },
    // Question 161
    {
        question: "Göstərilənlərdən hansı nəbzin xüsusiyyətlərindən biridir?",
        options: [
            "Atoniya",
            "Hipertoniya",
            "Taxipnoe",
            "Ritm",
            "Hipotoniya"
        ],
        correct: 3
    },
    // Question 162
    {
        question: "Arterial hipertoniyalı xəstələr qida rasionunda ilk növbədə nəyi azaltmalıdırlar?",
        options: [
            "Un məmulatlarını",
            "Zülalları",
            "Şəkəri",
            "Xörək duzunu",
            "Tərəvəzləri"
        ],
        correct: 3
    },
    // Question 163
    {
        question: "Uzun müddət yataqda qaldıqda xəstənin vəziyyətini nə ağırlaşdıra bilər?",
        options: [
            "Kollaps",
            "Arterial təzyiqin qalxması",
            "Baş gicəllənmə",
            "Yataq yarası",
            "İştahasızlıq"
        ],
        correct: 3
    },
    // Question 164
    {
        question: "Döş sümüyünün arxasında sıxıcı ağrılar zamanı həkimə qədərki ilk yardım hansıdır?",
        options: [
            "Əzələdaxilinə analgin - dimedrol qarışığının yeridilməsi",
            "Əzələdaxilinə dimedrolun yeridilməsi",
            "Əzələdaxilinə analginin yeridilməsi",
            "Dil altına nitroqliserinin qoyulması",
            "Əzələdaxilinə morfinin yeridilməsi"
        ],
        correct: 3
    },
    // Question 165
    {
        question: "Xəstənin nəbzi bir dəqiqədə 118 vurğudursa, bu nəyi göstərir?",
        options: [
            "Taxipnoe",
            "Taxikardiya",
            "Aritmiya",
            "Bradipnoe",
            "Bradikardiya"
        ],
        correct: 1
    },
    // Question 166
    {
        question: "Yağlı məhlulun hansı üsulla yeridilməsi yağ emboliyasına səbəb olur?",
        options: [
            "Əzələdaxili",
            "Dəriiçi",
            "Venadaxili",
            "Dərialtı",
            "Per os (ağızdan)"
        ],
        correct: 2
    },
    // Question 167
    {
        question: "Havanın məhlulla birgə necə yeridilməsi hava emboliyasına səbəb ola bilər?",
        options: [
            "Dəri içi",
            "Dəri altı",
            "Əzələ - daxili",
            "Vena - daxili",
            "Bronx daxili"
        ],
        correct: 3
    },
    // Question 168
    {
        question: "Xəstənin ağız boşluğuna qulluq zamanı hansı məhlul istifadə olunur?",
        options: [
            "1) 2 % - li natrium - bikarbonat turşusu, 2) 5% - li borat turşusu",
            "3) 0,25 % - li novokain məhlulu, 6) 0,9 % - li natrium-xlorid məhlulu",
            "2) 5% - li borat turşusu, 5) 3 %-li hidrogen - peroksid məhlulu",
            "3) 0,25 % - li novokain məhlulu, 5) 3 %-li hidrogen - peroksid məhlulu",
            "1) 2 % - li natrium - bikarbonat turşusu, 4) Furasillin məhlulu"
        ],
        correct: 0
    },
    // Question 169
    {
        question: "Əzələdaxili inyeksiya üçün iynənin uzunluğu necə mm olmalıdır?",
        options: [
            "40 - 50 mm",
            "50 mm",
            "60 mm",
            "30- 40 mm",
            "80 -- 90 mm"
        ],
        correct: 4
    },
    // Question 170
    {
        question: "Mədənin yuyulmasına göstəriş hansıdır?",
        options: [
            "Xroniki enterit",
            "Xroniki kolit",
            "Kəskin kolit",
            "Kəskin xolesistit",
            "Kəskin qastrit"
        ],
        correct: 4
    },
    // Question 171
    {
        question: "Anafilaktik şok zamanı təxirəsalınmaz yardım mütləq surətdə harada göstərilməlidir?",
        options: [
            "Qəbul şöbəsində",
            "Palatada",
            "Hadisə baş verdiyi yerdə",
            "Prosedur otağında",
            "Təcili yardım maşınında"
        ],
        correct: 2
    },
    // Question 172
    {
        question: "Xardal yaxmasının dəri üzərində qalma müddəti nə qədərdir?",
        options: [
            "3 - 5 dəqiqə",
            "20 - 25 dəqiqə",
            "10 -- 15 dəqiqə",
            "20 - 30 dəqiqə",
            "30 - 40 dəqiqə"
        ],
        correct: 2
    },
    // Question 173
    {
        question: "Sifon imaləsi üçün neçə litr su götürülməlidir?",
        options: [
            "1- 2",
            "4 - 6",
            "10 - 12",
            "6 - 8",
            "5 - 7"
        ],
        correct: 2
    },
    // Question 174
    {
        question: "Spastik qəbizlik zamanı təmizləyici imalənin temperaturu necə dərəcə olmalıdır?",
        options: [
            "15° - 20°C",
            "20° - 25°C",
            "38° - 40°C",
            "30° - 32°C",
            "45° - 50°C"
        ],
        correct: 2
    },
    // Question 175
    {
        question: "Arterial hipertenziya nədir?",
        options: [
            "Arterial təzyiqin azalması",
            "Mərkəzi venoz təzyiqin artması",
            "Arterial təzyiqin artması",
            "Damar tonusunun azalması",
            "Mərkəzi venoz təzyiqin azalması"
        ],
        correct: 2
    },
    // Question 176
    {
        question: "Biokimyəvi müayinə üçün qan nə vaxt götürülür?",
        options: [
            "Qida qəbulundan 30 dəqiqə sonra",
            "Ac qarına, səhər",
            "Qida qəbulundan asılı olmayaraq",
            "Qida qəbulundan 45 dəqiqə sonra",
            "Qida qəbulundan 15 dəqiqə sonra"
        ],
        correct: 1
    },
    // Question 177
    {
        question: "HİV/AİDS - QİÇS (qazanılmış immun çatışmazlıq sidromu) mümkün olan yoluxma yolu hansıdır?",
        options: [
            "Həşəratların dişləməsi",
            "Əl ilə təmas",
            "Yoluxmuş qanın köçürülməsi",
            "Eyni qabdan qida qəbulu",
            "Hava - damcı yolu"
        ],
        correct: 2
    },
    // Question 178
    {
        question: "Vərəm əleyhinə BCJ vaksininin yararlılıq müddəti nə qədərdir?",
        options: [
            "6 ay",
            "1 il",
            "3 ay",
            "2 il",
            "1 il 6 ay"
        ],
        correct: 3
    },
    // Question 179
    {
        question: "Plevral punksiya üçün tibb bacısı nəyi hazırlamalıdır?",
        options: [
            "Arterial sıxıcı",
            "Mikuliç sıxıcısı",
            "Uzunluğu 8 -10 sm olan iynə",
            "Troakar",
            "Kassirski iynəsi"
        ],
        correct: 2
    },
    // Question 180
    {
        question: "Qanhayxırma nədir?",
        options: [
            "Paslı bəlğəm ifrazı",
            "Bəlğəmdə nöqtələr və saplar şəklində qanın olması",
            "Öskürək zamanı al qan və ya qanlı bəlğəm ifrazı",
            "Qan lifləri olan köpüklü bəlğəm",
            "'Qəhvə xıltı' şəklində qusma"
        ],
        correct: 2
    },
    // Question 181
    {
        question: "Qanhayxırma zamanı tibb bacısı sərbəst olaraq hansı tədbiri görə bilməz?",
        options: [
            "Xəstəyə yarımoturaq vəziyyət vermək",
            "Qansaxlayıcı preparatlar yeritmək",
            "Xəstəni sakitləşdirmək",
            "Xəstəyə danışmağı qadağan etmək",
            "Həkim çağırmaq"
        ],
        correct: 1
    },
    // Question 182
    {
        question: "Xəstə civəli termometri sındırdıqda tibb bacısı nə etməlidir?",
        options: [
            "Qaqlıqları yaş tamponla yığıb, zibil qutusuna atmalı",
            "Qalıqları hermetik qaba yığmalı və Gigiyena Epidemiologiya Mərkəzinə (GEM) xəbər verməli",
            "Qalıqları su ilə axıtmalı",
            "Qalıqları tozsoran ilə yığmalı",
            "Civə dağılan yeri furasillin məhlulu ilə silməli"
        ],
        correct: 1
    },
    // Question 183
    {
        question: "Rektoromanoskopiya hansı orqanın müayinə üsuludur?",
        options: [
            "Onikibarmaq bağırsağın",
            "Düz bağırsağın",
            "Qida borusunun",
            "Öd yollarının",
            "Mədənin"
        ],
        correct: 1
    },
    // Question 184
    {
        question: "Anafilaktik şok dərman preparatlarının ən çox hansı yolla yeridilməsi zamanı baş verir?",
        options: [
            "Xaricə (məlhəm şəklində)",
            "Parenteral",
            "Per os (ağızdan)",
            "İnhalyasiya yolu ilə",
            "Sublinqval (dilaltına)"
        ],
        correct: 1
    },
    // Question 185
    {
        question: "Kolonoskopiya hansı orqanın müayinə üsuludur?",
        options: [
            "Yoğun bağırsağın",
            "Düz bağırsağın",
            "Öd yollarının",
            "Onikibarmaq bağırsağın",
            "Qida borusunun"
        ],
        correct: 0
    },
    // Question 186
    {
        question: "Yağ imaləsi nə vaxt aparılır?",
        options: [
            "Ağır xəstələri qidalandırmaq lazım gəldikdə",
            "Doğuşdan qabaq",
            "Zəhərlənmələrdə",
            "Uzun sürən qəbizlikdə",
            "Qarın boşluğunda aparılacaq əməliyyatdan əvvəl"
        ],
        correct: 3
    },
    // Question 187
    {
        question: "İnhalyasiya dərman maddələrinin hansı yolla orqanizmə daxil edilmə üsuludur?",
        options: [
            "Tənəffüs yolu ilə",
            "Vena - daxili yolla",
            "Mədə - bağırsaq traktı ilə",
            "Əzələ - daxili yolla",
            "Dərialtı yolla"
        ],
        correct: 0
    },
    // Question 188
    {
        question: "Kişilər üçün istifadə olunan kateterin uzunluğu nə qədərdir?",
        options: [
            "10 sm",
            "30 sm",
            "5 sm",
            "15 sm",
            "40 sm"
        ],
        correct: 1
    },
    // Question 189
    {
        question: "Aşağıda sadalananlardan hansı böyük tibb bacısının vəzifəsinə aid deyil?",
        options: [
            "Orta və kiçik tibb işçilərinə rəhbərlik etmək",
            "Şöbəyə dərman almaq",
            "Xəstəxananın ümumi mətbəxindən gətirilən yeməyə nəzarət etmək",
            "Şöbənin iş cədvəlini tərtib etmək",
            "Xəstənin müayinə materiallarını laboratoriyaya aparmaq"
        ],
        correct: 4
    },
    // Question 190
    {
        question: "Öd kisəsinin rentgen müayinəsi üçün göstərilən maddələrdən hansı istifadə edilmir?",
        options: [
            "Biliqnost",
            "Xolevid",
            "Biliqrafin",
            "Bilitrast",
            "Barium"
        ],
        correct: 4
    },
    // Question 191
    {
        question: "Hansı vitamin suda həll olur?",
        options: [
            "K",
            "A",
            "D",
            "C",
            "E"
        ],
        correct: 3
    },
    // Question 192
    {
        question: "Hansı vitamin çatışmadıqda xəstədə 'gecə və ya toyuq korluğu' olur?",
        options: [
            "C",
            "A",
            "D",
            "E",
            "K"
        ],
        correct: 1
    },
    // Question 193
    {
        question: "Hansı duz sümüklərin normal inkişafı üçün əsas əhəmiyyət daşıyır?",
        options: [
            "Kalium",
            "Natrium",
            "Barrium",
            "Maqnezium",
            "Kalsium"
        ],
        correct: 4
    },
    // Question 194
    {
        question: "Meteorizm hansı sistemin xəstəliklərinin əsas simptomlarındandır?",
        options: [
            "Tənəffüs sistemi",
            "Sidik - ifrazat sistemi",
            "Həzm sistemi",
            "Cinsiyyət sistemi",
            "Ürək - qan - damar sistemi"
        ],
        correct: 2
    },
    // Question 195
    {
        question: "Nikturiya nədir?",
        options: [
            "Gecikmiş sidiyin xaric olması",
            "Gecə sidiyinin miqdarının çox olması",
            "Sidikdə irinin olması",
            "Sidikdə qanın olması",
            "Sidiyin xüsusi çəkisinin sabit qalması"
        ],
        correct: 1
    },
    // Question 196
    {
        question: "Tibb bacısının sərbəst fəaliyyəti nədən ibarətdir?",
        options: [
            "Həkimin verdiyi təyinatlara əlavələr etmək",
            "Həkimin verdiyi təyinatların vaxtını dəyişmək",
            "Gün ərzində xəstənin aktivliyinə, istirahətinə nəzarət etmək və məsləhətlər vermək",
            "Xəstənin müalicəyə göstərdiyi reaksiyanı müşahidə etmək",
            "Həkimin müalicə - diaqnostik təyinat planını yerinə yetirmək"
        ],
        correct: 2
    },
    // Question 197
    {
        question: "Sidikdə şəkərin miqdarını təyin etmək üçün sidik necə toplanır?",
        options: [
            "Steril sınaq şüşəsinə 10 ml sidik yığılır",
            "Səhər yuxudan durduqdan sonra 100 - 200 ml toplanır",
            "Yalnız gecə saat 22-dən səhərə qədər ifraz etdiyi sidik toplanır",
            "Xəstəyə acqarına 1,5 l maye içirdikdən sonra ilk 4 saat ərzində toplanır",
            "Bir sutka ərzində toplanır"
        ],
        correct: 4
    },
    // Question 198
    {
        question: "Zimnitski sınağı aparmaq üçün sidik neçə payda yığılır?",
        options: [
            "2",
            "6",
            "4",
            "3",
            "8"
        ],
        correct: 4
    },
    // Question 199
    {
        question: "Böyrək daşı sancısı zamanı ilk yardım göstərərkən tibb bacısı xəstəyə hansı vanna tətbiq edə bilər?",
        options: [
            "Radon vannası",
            "Soyuq vanna",
            "İsti vanna",
            "Naftalan vannası",
            "Sərin vanna"
        ],
        correct: 2
    },
    // Question 200
    {
        question: "Qəbizlik zamanı xəstəyə hansı qidadan istifadə etmək məsləhət görülür?",
        options: [
            "Kartof",
            "Yumurta",
            "Çuğundur",
            "Noxud",
            "Ağ çörək"
        ],
        correct: 2
    },
    // Question 201
    {
        question: "Stasionarda terapiya şöbəsində aşağıda göstərilən otaqlardan hansı olmur?",
        options: [
            "Xəstələr üçün palata",
            "Prosedur otağı",
            "Yeməkxana və bufet",
            "Gips otağı",
            "Sanitariya qovşağı"
        ],
        correct: 3
    },
    // Question 202
    {
        question: "Tibb bacısı zəliləri bankadan nə ilə götürməlidir?",
        options: [
            "Əl ilə",
            "Şpatel ilə",
            "Kornsanq ilə",
            "Pinset ilə",
            "Çubuq ilə"
        ],
        correct: 0
    },
    // Question 203
    {
        question: "Göstərilənlərdən hansı stasionar tipli müalicə müəssisəsidir?",
        options: [
            "Poliklinika",
            "Qadın məsləhətxanası",
            "Təcili yardım stansiyası",
            "Həkim məntəqəsi",
            "Xəstəxana"
        ],
        correct: 4
    },
    // Question 204
    {
        question: "Xəstəxanada palatanın havası neçə saatdan bir dəyişdirilməlidir?",
        options: [
            "Səhər, axşam",
            "Gündə 3 dəfə",
            "Hər bir saatdan",
            "Hər 3 saatdan",
            "Yalnız səhər"
        ],
        correct: 2
    },
    // Question 205
    {
        question: "Kəskin damar çatışmazlığı olan xəstə xərəkdə hansı vəziyyətdə nəql edilməlidir?",
        options: [
            "İstənilən vəziyyətdə",
            "Sağ böyrü üstə",
            "Başın səviyyəsi aşağı vəziyyətdə",
            "Oturaq vəziyyətdə",
            "Yarımoturaq vəziyyətdə"
        ],
        correct: 2
    },
    // Question 206
    {
        question: "Göstərilənlərdən hansı palata tibb bacısının səlahiyyətinə aid deyil?",
        options: [
            "Həkimin təyinatına dəyişiklik etmək",
            "Sutkalıq sidiyi və bəlğəmi ölçmək",
            "Xəstənin nəbzini saymaq",
            "Səhər və axşam xəstənin temperaturunu ölçmək",
            "Xəstənin tənəffüsünü saymaq"
        ],
        correct: 0
    },
    // Question 207
    {
        question: "Göstərilənlərdən hansı poliklinika tibb bacısının vəzifəsi deyil?",
        options: [
            "Həkim xəstəni qəbul edənə qədər lazım olan alətləri hazırlamaq",
            "Həmin gün qəbul ediləcək xəstələrin xəstəlik tarixlərini ayırmaq",
            "Xəstəlik tarixində gündəlik yazmaq",
            "Xəstəni başqa həkimin müayinəsinə göndərilməsi ilə əlaqədar bütün yazı işlərini görmək",
            "Növbə talonu yazmaq"
        ],
        correct: 2
    },
    // Question 208
    {
        question: "Xəstəlik tarixçəsində olan temperatur vərəqində aşağıda göstərilənlərdən hansıları qeyd olunmalıdır?",
        options: [
            "Arterial təzyiq",
            "Xəstənin hərarətinin dəyişməsi",
            "Nəbz və tənəffüsün sayı",
            "Diurezin miqdarı",
            "Hamısı"
        ],
        correct: 4
    },
    // Question 209
    {
        question: "Rektal süni qidalanma nə vaxt əks - göstəriş sayılır?",
        options: [
            "Massiv yanıqlar zamanı",
            "Anusda çatlar olduqda",
            "Orqanizm çox su itirdikdə",
            "Mədədə aparılan əməliyyatdan sonra",
            "Qida borusunun tam keçməzliyində"
        ],
        correct: 1
    },
    // Question 210
    {
        question: "Xəstənin dərmana həssaslığını yoxlamaq üçün iynə hansı nahiyəyə vurulur?",
        options: [
            "Dərialtına",
            "Vena - daxilinə",
            "Dəri içinə",
            "Arteriya daxilinə",
            "Əzələ - daxilinə"
        ],
        correct: 2
    },
    // Question 211
    {
        question: "Dərialtı inyeksiyadan sonra inyeksiya yeri bərkidikdə aşağıda sadalanan tədbirlərdən hansı əks - göstəriş sayılır?",
        options: [
            "Bərkiyən nahiyəyə buz qovuğu qoymaq",
            "Bərkiyən nahiyəyə yod sürtmək",
            "Bərkiyən nahiyəyə isitqac qoymaq",
            "Bərkiyən nahiyəyə isti duzlu kompres qoymaq",
            "Bərkiyən nahiyəyə 40 % - li spirtlə isidici kompres qoymaq"
        ],
        correct: 0
    },
    // Question 212
    {
        question: "Tibb bacısının işinin məqsədi nədən ibarətdir?",
        options: [
            "Xəstə ilə aktiv əməkdaşlıq etmək",
            "Xəstəyə qulluq tədbirlərinin ardıcıllığını təmin etmək",
            "Xəstənin sağalmasına zəmanət vermək",
            "Xəstəlik zamanı müalicənin mümkün keyfyyətini təmin etmək",
            "Xəstəliyə düzgün diaqnoz qoymaq və müalicə etmək"
        ],
        correct: 1
    },
    // Question 213
    {
        question: "Xəstənin başının tüklü hissəsində pedikulyoz tapıldıqda hansı məhlul istifadə olunur?",
        options: [
            "Xloramin məhlulu",
            "Pervomur məhlulu",
            "Furasillin məhlulu",
            "Sirkə turşusu məhlulu",
            "Hidrogen - peroksid məhlulu"
        ],
        correct: 3
    },
    // Question 214
    {
        question: "Pedikulyozlu xəstənin müayinəsindən sonra otağın dezinfeksiyası üçün istifadə olunan məhlul hansıdır?",
        options: [
            "3 % - li xloramin məhlulu",
            "6 % - li hidrogen - peroksid məhlulu",
            "8 % - li lizol məhlulu",
            "3 % - li xlorlu əhəng",
            "0,02 % - li furasillin məhlulu"
        ],
        correct: 2
    },
    // Question 215
    {
        question: "Xəstənin qəbul otağından şöbəyə nəql olunma üsulunu kim təyin edir?",
        options: [
            "Kiçik tibb bacısı",
            "Qəbul şöbəsinin tibb bacısı",
            "Qəbul şöbəsinin böyük tibb bacısı",
            "Qəbul şöbəsinin həkimi",
            "Baş həkim"
        ],
        correct: 3
    },
    // Question 216
    {
        question: "Tibb bacısı xəstəyə və onun ailəsinə qulluq qaydalarını öyrədərkən nəyə fikir verməlidir?",
        options: [
            "Böyük tibb bacısından icazə almalıdır",
            "Həkimdən icazə almalıdır",
            "Böyük tibb bacısına xəbərdarlıq etməlidir",
            "Baş həkimdən icazə almalıdır",
            "Xəstənin və onun ailəsinin bilməli və bacarmalı olduğu qaydaları izah etməlidir"
        ],
        correct: 4
    },
    // Question 217
    {
        question: "Stasionarın qəbul şöbəsinin tibb bacısı hansı sənədi doldurmalıdır?",
        options: [
            "Xəstəlik tarixini",
            "Həkimin təyinat vərəqini",
            "Əmək qabiliyyətini itirmə vərəqini",
            "Temperatur vərəqini",
            "Tibbi kartın titul vərəqini"
        ],
        correct: 4
    },
    // Question 218
    {
        question: "Sidik qəbulediciləri (ifrazat qabları) boşaltdıqdan sonra onları xloraminin hansı məhlulunda və neçə dəqiqə saxlamaq lazımdır?",
        options: [
            "120 dəq 1 % - li xloramin məhlulunda",
            "5 dəq 1 % - li xloramin məhlulunda",
            "60 dəq 3 % - li xloramin məhlulunda",
            "15 dəq 1 % - li xloramin məhlulunda",
            "30 dəq 3 % - li xloramin məhlulunda"
        ],
        correct: 3
    },
    // Question 219
    {
        question: "Ağır xəstələrin dərisini silmək üçün hansı məhlul istifadə olunur?",
        options: [
            "10 % - li kalium - permanqanat məhlulu",
            "10 % -li naşatır spirti",
            "0,05 % - li kalium - permanqanat məhlulu",
            "Furasillin məhlulu",
            "10 % - li kamfora spirti"
        ],
        correct: 4
    },
    // Question 220
    {
        question: "Ağır xəstələrin yataq ağlarını nə vaxt dəyişmək lazımdır?",
        options: [
            "Üç gündə bir dəfə",
            "Çirkləndikcə",
            "İki həftədə bir dəfə",
            "Həftədə bir dəfə",
            "Gündə iki dəfə"
        ],
        correct: 1
    },
    // Question 221
    {
        question: "Qızdırmanın üçüncü dövründə aşağıdakılardan hansının tətbiq edilməsi vacibdir?",
        options: [
            "İsitqac",
            "Çoxlu miqdarda tünd şirin çay və ya kofe qəbulu",
            "Yaş bürümə",
            "Sərin vitaminli içkilərin qəbulu",
            "Buz qovuğu"
        ],
        correct: 1
    },
    // Question 222
    {
        question: "Qızdırmanın inkişafında neçə dövr ayırd edilir?",
        options: [
            "2",
            "3",
            "4",
            "1",
            "5"
        ],
        correct: 1
    },
    // Question 223
    {
        question: "Aşağıdakılardan hansı dəri içinə yeridilir?",
        options: [
            "Klofelin",
            "Tuberkulin",
            "No-spa",
            "Kordiamin",
            "Ampisillin"
        ],
        correct: 1
    },
    // Question 224
    {
        question: "Dərialtı inyeksiya hansı bucaq altında aparılır?",
        options: [
            "90°",
            "70°",
            "60°",
            "45°",
            "15°"
        ],
        correct: 3
    },
    // Question 225
    {
        question: "Venadaxili inyeksiyadan əvvəl turnanın düzgün qoyulmasının göstəricisi nədir?",
        options: [
            "Turnadan aşağı hissədə dərinin qızarması",
            "Mil arteriyasında nəbzin olmaması",
            "Turnadan aşağı hissədə dəri örtüyünün avazıması",
            "Turnadan aşağı hissədə dərinin göyərməsi",
            "Turna qoyulan nahiyədə qansızmaların olması"
        ],
        correct: 3
    },
    // Question 226
    {
        question: "Meteorizm zamanı qaz çıxarıcı borunun yeridilmə dərinliyi nə qədər olmalıdır (sm - lə)?",
        options: [
            "10 - 15",
            "20 -- 30",
            "10 - 12",
            "2 - 4",
            "50"
        ],
        correct: 1
    },
    // Question 227
    {
        question: "Yağ imaləsini aparmaq üçün bitki yağının miqdarı (ml - lə) nə qədər olmalıdır?",
        options: [
            "100",
            "10",
            "50",
            "1000",
            "500"
        ],
        correct: 0
    },
    // Question 228
    {
        question: "Göstərilən inyeksiyalardan hansını tibb bacısı aparmamalıdır?",
        options: [
            "Arteriya daxilinə",
            "Əzələdaxilinə",
            "Venadaxilinə",
            "Dərialtına",
            "Dəriiçinə"
        ],
        correct: 0
    },
    // Question 229
    {
        question: "Xəstəyə oksigen verilməsi üçün ən çox hansı üsul istifadə olunur?",
        options: [
            "Burun kanyulası",
            "Duodenal zond",
            "Oksigen yastığının qıfı",
            "Mədə zondu",
            "Burun kateteri"
        ],
        correct: 4
    },
    // Question 230
    {
        question: "Xəstənin hərarəti yüksək olduqda (qızdırmanın II dövründə) tibb bacısı ona aşağıda sadalanan yardımlardan hansını göstərməlidir?",
        options: [
            "Xəstənin alnına soyuq kompres qoyub, içməyə maye verməlidir",
            "Xəstənin ayaqlarına isitqac qoymalıdır",
            "Ayaqlarına isti vanna etməlidir",
            "Xəstənin üstünü yorğanla örtməlidir",
            "Xəstəyə isti çay verməlidir"
        ],
        correct: 0
    },
    // Question 231
    {
        question: "10 saatda 5 litr mayeni damara yeritmək üçün tibb bacısı 1 saatda damara neçə litr maye yeritməlidir?",
        options: [
            "500 ml",
            "1000 ml",
            "50 ml",
            "100 ml",
            "150 ml"
        ],
        correct: 0
    },
    // Question 232
    {
        question: "Aşağıda göstərilən temperaturlardan hansı subfebril temperaturdur?",
        options: [
            "37° - 38,0°",
            "36° - 36,5°",
            "40° - 41,0°",
            "39° - 40,0°",
            "38° - 39,0°"
        ],
        correct: 0
    },
    // Question 233
    {
        question: "Venepunksiya apararkən tibb bacısı aşağıda göstərilənlərdən nəyi düz etmir?",
        options: [
            "Bazunun ortasından turnanı elə bağlayır ki, mil arteriyasında pulsasiya kəsilsin",
            "Iynə venaya düşən kimi turnanı açır",
            "Xəstəyə əlini açıb-yummağı təklif edir",
            "Xəstənin dirsəyi altına kiçik yastıq qoyur",
            "İnyeksiya nahiyəsini 2 dəfə spirtli tamponla silir"
        ],
        correct: 0
    },
    // Question 234
    {
        question: "Aşağıdakı hansı dərman forması orqanizmə enteral yolla qəbul edilmir?",
        options: [
            "Məlhəm",
            "Mikstura",
            "Kapsul",
            "Draje",
            "Həb"
        ],
        correct: 0
    },
    // Question 235
    {
        question: "Stasionarda A və B siyahısına daxil olan, xüsusi seyflərdə saxlanılan dərmanlar hansılardır?",
        options: [
            "Antibiotiklər",
            "Vaksinlər",
            "Narkotik analgetiklər, trankvilizatorlar",
            "Zərdablar",
            "Hipotenziv təsirli preparatlar"
        ],
        correct: 2
    },
    // Question 236
    {
        question: "Stasionarda xəstələrə dərman paylayarkən sadalananlardan hansı tibb bacısının səlahiyyətinə aid deyil?",
        options: [
            "Dərmanları yalnız xəstənin çarpayısının yanında vermək",
            "Dərmanı xəstəyə mütləq öz yanında qəbul etdirmək",
            "'Acqarına' qəbul edilməli preparatları səhər yeməyindən 20 - 60 dəqiqə əvvəl vermək",
            "Təyinat vərəqi ilə dərmanın etiketini tutuşdurmaq",
            "Həkimin təyin etdiyi dərmanı özbaşına dəyişmək"
        ],
        correct: 4
    },
    // Question 237
    {
        question: "Hansı üsul dərmanların xaricə tətbiq edilməsinə aid deyil?",
        options: [
            "4, 6 (dilin altına qoymaq, dəri içinə yeritmək)",
            "2, 6",
            "3, 5",
            "2, 4",
            "1, 4"
        ],
        correct: 0
    },
    // Question 238
    {
        question: "Hansı halda tibb bacısı xəstəyə qızdırıcı kompres qoymalıdır?",
        options: [
            "Yüksək qızdırma olduqda",
            "Dəridə allergik səpgilər olduqda",
            "İrinli proses olduqda",
            "İnyeksiyadan sonra yerli infiltrat olduqda",
            "Dərinin tamlığı pozulduqda"
        ],
        correct: 3
    },
    // Question 239
    {
        question: "Xəstəyə xardal yaxması qoyarkən tibb bacısı aşağıda göstərilənlərdən hansını düz etmir?",
        options: [
            "Xardal kağızını götürdükdən sonra dərini ilıq suda isladılmış dəsmalla silir",
            "Xardal qoyulacaq nahiyənin üstünü açır",
            "Xardal kağızını 5 - 15 dəqiqə xəstənin bədənində saxlayır",
            "Xardal kağızının üstünü dəsmalla örtüb, xəstəni yorğana bürüyür",
            "Tibb bacısı xardal kağızını soyuq suda isladıb, xəstənin bədəninə qoyur"
        ],
        correct: 4
    },
    // Question 240
    {
        question: "Aşağıda göstərilən vəziyyətlərdən hansında tibb bacısı xəstəyə buz qovuğu tətbiq edə bilməz?",
        options: [
            "Əzilmələr zamanı 3-cü gün",
            "Böyrək sancılarında",
            "Daxili qanaxmalar olduqda",
            "Kəskin appendisit zamanı",
            "Yüksək qızdırma olduqda"
        ],
        correct: 1
    },
    // Question 241
    {
        question: "Stasionarda müalicə alan xəstəyə narkotik maddə tətbiq etdikdə tibb bacısının səhvi hansıdır?",
        options: [
            "Narkotik maddənin boş ampulunu baş tibb bacısına təhvil verir",
            "Yalnız həkimin xəstəlik tarixindəki qeydiyyatından sonra narkotik maddəni yeridir",
            "Narkotikin maddənin boş ampulunu zibil qabına atır",
            "Narkotik maddənin boş ampulunu narkotik jurnaldakı dərmanlarla tutuşdurur",
            "İstifadə olunan və olunmayan ampulların sayını narkotik jurnalda dəqiqləşdirir"
        ],
        correct: 2
    },
    // Question 242
    {
        question: "Stasionarda səhər növbəni təhvil verməzdən əvvəl tibb bacısı hansı formanı doldurmalıdır?",
        options: [
            "Forma 007/ azs",
            "Forma 003/ azs",
            "Forma 1 - 84/ azs",
            "Forma 006/ azs",
            "Forma 001/ azs"
        ],
        correct: 0
    },
    // Question 243
    {
        question: "Bədən temperaturu 1 dərəcə artdıqda ürək döyüntüsü necə dəyişir?",
        options: [
            "Dəyişmir",
            "10 vurğu azalır",
            "20 vurğu azalır",
            "20 vurğu artır",
            "10 vurğu artır"
        ],
        correct: 4
    },
    // Question 244
    {
        question: "Spastik qəbizlik zamanı xəstəyə hansı imalə edilir?",
        options: [
            "Sifon",
            "Yağlı",
            "Hipertonik",
            "Adi təmizləyici",
            "Qidalandırıcı"
        ],
        correct: 1
    },
    // Question 245
    {
        question: "Spirometriya hansı məqsədlə istifadə olunur?",
        options: [
            "Döş çevrəsinin ölçülməsi",
            "Ağciyərlərin tənəffüs həcminin ölçülməsi",
            "Əzələ gücünün ölçülməsi",
            "Boyun ölçülməsi",
            "Bədən kütləsinin ölçülməsi"
        ],
        correct: 1
    },
    // Question 246
    {
        question: "Sifon imaləsini aparmaq üçün hansı məhlulu hazırlamaq lazımdır?",
        options: [
            "100 ml natrium - xlorid məhlulu",
            "10 litr təmiz su",
            "1- 2 litr təmiz su",
            "100 ml natrium - hidrokarbonat məhlulu",
            "100 ml 25 % - li maqnezium - sulfat məhlulu"
        ],
        correct: 1
    },
    // Question 247
    {
        question: "Yoğun bağırsaqda iltihabi proses olduqda yerli müalicə kimi hansı imalədən istifadə olunur?",
        options: [
            "Dərman imaləsindən",
            "Hipertonik imalədən",
            "Təmizləyici imalədən",
            "Sifon imaləsindən",
            "Yağ imaləsindən"
        ],
        correct: 0
    },
    // Question 248
    {
        question: "Hirudoterapiya zamanı hansı nahiyələrə zəli qoymaq olmaz?",
        options: [
            "Əlin ovuc səthinə və ayağın altına",
            "Qaraciyər nahiyəsinə",
            "Qulaq seyvanının arxasına",
            "Ayaqlara",
            "Ənsə nahiyəsinə"
        ],
        correct: 0
    },
    // Question 249
    {
        question: "Qadınlarda sidik kisəsini kateterizasiya etmək üçün hansı kateterdən istifadə olunur?",
        options: [
            "Yalnız yumşaq",
            "İstənilən",
            "Metal",
            "Yarım sərt",
            "Sərt"
        ],
        correct: 0
    },
    // Question 250
    {
        question: "Dərialtı inyeksiya zamanı maksimum nə qədər maye yeritmək olar?",
        options: [
            "8 ml",
            "2 ml",
            "10 ml",
            "5 ml",
            "4 ml"
        ],
        correct: 1
    },
    // Question 251
    {
        question: "Xəstənin rektoromanoskopiyaya hazırlanmasında aşağıdakılardan hansından istifadə olunur?",
        options: [
            "Müayinədən bir gün əvvəl təmizləyici imalə",
            "Düz bağırsaqda temperaturun ölçülməsi",
            "Düz bağırsağa qidalandırıcı məhlulların yeridilməsi",
            "Axşam - səhər təmizləyici imalə",
            "Kontrast maddənin yeridilməsi"
        ],
        correct: 3
    },
    // Question 252
    {
        question: "Damcı üsulu ilə venaya məhlul yeridilən zaman iynənin ucu trombla tutularsa tibb bacısı nə etməlidir?",
        options: ["Kanyulanı təmizləməlidir", "Sistemdə təzyiqi qaldırmalıdır", "Proseduru tamamilə dayandırmalıdır", "İynəni dəyişdirməlidir", "Dərhal həkimi çağırmalıdır"],
        correct: 3
    },
    // Question 253
    {
        question: "Xəstədə gəyirmə baş verərsə bu nəyi göstərir?",
        options: ["Qazların bağırsaq vasitəsilə xaric olmasını", "Mədə möhtəviyyatının qida borusuna keçməsini", "Mədə möhtəviyyatının ağızdan xaric olmasını", "Mədədəki qazların qida borusu vasitəsilə ağızdan xaric olmasını", "Bağırsaqlarda patoloji qaz əmələ gəlməsini"],
        correct: 2
    },
    // Question 254
    {
        question: "Xəstədə meteorizm olduqda aşağıda sadalanan yardımlardan hansı efekt vermir?",
        options: ["Qazçıxarıcı boru qoymaq", "Xəstənin mədəsinin yuyulması", "Çobanyastığı dəmləməsi ilə imalə etmək", "Qara çörək, kələm, süd və s. qaz əmələ gətirən qidaları yeməyi qadağan etmək", "Xəstəyə aktivləşdirilmiş kömür vermək"],
        correct: 1
    },
    // Question 255
    {
        question: "Göstərilənlərdən hansı dərmanların enteral yolla yeridilməsinə aiddir?",
        options: ["Dəriiçi inyeksiya", "Dəriyə sürtmək", "Vena daxili inyeksiya", "Həb şəklində qəbul etmək", "Gözə damızdırmaq"],
        correct: 3
    },
    // Question 256
    {
        question: "Əzələ daxili inyeksiya sağrının hansı nahiyəsində(kvadrantında) aparılır?",
        options: ["Aşağı içəri", "Sağrının orta hissəsində", "Yuxarı içəri", "Yuxarı xarici", "Aşağı xarici"],
        correct: 3
    },
    // Question 257
    {
        question: "Mədənin yuyulmasına əks-göstəriş hansıdır?",
        options: ["Qida zəhərlənmələri", "Dərman zəhərlənmələri", "Mədə turşuluğunun artması", "Qida borusundan olan qanaxmalar", "Alkoqolla zəhərlənmələr"],
        correct: 3
    },
    // Question 258
    {
        question: "Aşağıda göstərilənlərdən hansı zondun ucunun mədədə olmadığını göstərir?",
        options: ["Xəstə hıçqırır", "Xəstə öyüyür", "Zondla mədəyə maye yeridilir", "Zonddan mədə möhtəviyyatı xaric olur", "Xəstə göyərir, narahat olur"],
        correct: 4
    },
    // Question 259
    {
        question: "İnyeksiyadan dərhal sonra xəstədə təngnəfəslik, taxikardiya, huşun itməsi baş verərsə bu hansı ağırlaşmanın baş verdiyini göstərir?",
        options: ["Sepsis", "Sinir kötüklərinin zədələnməsi", "Tromboflebit", "Anafilaktik şok", "Abses"],
        correct: 3
    },
    // Question 260
    {
        question: "Lipodistrofiya (inyeksiya yerində piy toxumasının itməsi) əsasən hansı dərmanın yeridilməsindən sonra müşahidə olunur?",
        options: ["Narkotiklər", "Antibiotiklər", "Vaksinlər", "Vitaminlər", "İnsulin"],
        correct: 4
    },
    // Question 261
    {
        question: "Müayinə üçün əsnəkdən material götürərkən tibb bacısı aşağıda sadalananlardan hansını düz etmir?",
        options: ["Yaxmanı xəstə ağzını dezinfeksiyaedici məhlulla yaxaladıqdan dərhal sonra götürür", "Əsnəkdən yaxma götürərkən dili şpatellə tutub saxlayır", "Yaxmanı zədələnmiş nahiyə ilə sağlam selikli qişa arasındakı sərhəddən götürür", "Analiz üçün materialı əsnəkdən steril pambıq tamponla götürür", "Əsnəkdən götürülən yaxma tez quruduğuna görə laboratoriyaya tez çatdırır"],
        correct: 0
    },
    // Question 262
    {
        question: "Nəbzi hansı arteriyalarda saymaq mümkündür?",
        options: ["Mil arteriyasında", "Gicgah arteriyasında", "Sadalanan bütün arteriyalarda", "Yuxu arteriyasında", "Bud arteriyasnda"],
        correct: 2
    },
    // Question 263
    {
        question: "Stasionarda müalicə alan zaman yataq rejimində olan xəstəyə aşağıda sadalananlardan hansına icazə verilir?",
        options: ["Yalnız ayaqyoluna getmək", "Şöbədə gəzmək", "Yalnız çarpayıda hərəkət etmək", "Xəstəxananın həyətində gəzmək", "Xəstəxananın ərazisindən kənarda gəzmək"],
        correct: 2
    },
    // Question 264
    {
        question: "Böyüklərdə mədənin yuyulması üçün neçə litr təmiz su lazımdır?",
        options: ["10", "2", "1", "0,5", "4"],
        correct: 0
    },
    // Question 265
    {
        question: "Sadalanan simptomlardan hansı həzm sistemi xəstəliklərinin əsas simptomlarındandır?",
        options: ["Qusma", "Bəlğəm ifrazı", "Boğulma", "Təngnəfəslik", "Öskürək"],
        correct: 0
    },
    // Question 266
    {
        question: "Yataq yaralarının profilaktikasına nə aiddir? 1) Yataq ağlarının tez-tez dəyişdirilməsi 2) Xəstəyə tənəffüs gimnastikası etdirmək 3) Yataq ağlarının həftədə bir dəfə dəyişdirilməsi 4) Xəstənin dərisinin dezinfeksiya edici məhlullarla silinməsi 5) Xəstəni rejimlə qidalandırmaq",
        options: ["1,4", "2,5", "1,3", "2,4", "4,5"],
        correct: 0
    },
    // Question 267
    {
        question: "Qusuntu kütləsinin laboratoriyaya göndərmək lazım gəldikdə tibb bacısı aşağıda sadalananlardan nəyi düz etmir?",
        options: ["Qusuntunu dərhal laboratoriyaya göndərmək mümkün deyilsə onu isti yerdə saxlayır", "Xəstə sutkada bir neçə dəfə qusursa, hər dəfə qusuntunu ayrıca qaba yığır", "Xəstə barədə lazımi məlumatları və analizin məqsədini yazıb bankaya yapışdırır", "Qusuntunu ağzı enli bankaya töküb, ağzını bağlayır", "Qusuntunu üzərində miqdarı dərəcələnmiş bankaya yığır"],
        correct: 0
    },
    // Question 268
    {
        question: "Növbətçilik (növbəni qəbul etmək və təhvil vermək) zamanı aşağıda göstərilənlərdən hansı tibb bacısının səhvidir?",
        options: ["Növbəni qəbul edən tibb bacısı narkotik maddələrin yerində olub olmadığını yoxlayır, jurnala qol çəkir", "Növbəni qəbul edən tibb bacısı termometrləri, dərmanları, A və B şkafının açarlarını təhvil alır", "Təyinatların və laborator göndərişlərin siyahısını alır", "Tibb bacısı öz növbəsi bitdikdə onu əvəz edən şəxsi gözləmədən gedir", "Növbəni qəbul edən tibb bacısı özündən əvvəlki tibb bacısı ilə palataları gəzir, ağır xəstələri xüsusi jurnalda qeyd edir"],
        correct: 3
    },
    // Question 269
    {
        question: "Bədənin hansı nahiyələrində temperatur digər nahiyələrdən 1 dərəcə yüksək olur? 1) Düz bağırsaqda 2) Uşaqlıqda 3) Qoltuqaltında 4) Qasıqda 5) Dizaltı çuxurda",
        options: ["1,2", "2,3", "2,4", "1,3", "1,4"],
        correct: 0
    },
    // Question 270
    {
        question: "Yetkin şəxsdə sakit halda tənəffüs hərəkətlərinin sayı 1 dəqiqədə neçə olur?",
        options: ["16 -- 20", "25 - 30", "10 - 16", "35 - 40", "30 - 40"],
        correct: 0
    },
    // Question 271
    {
        question: "Təngnəfəsliyi olan xəstəyə yardım edərkən aşağıdakılardan hansı tibb bacısının səlahiyyətinə aid deyil?",
        options: ["Təmiz hava gəlməsi üçün nəfəsliyi açır", "Xəstəyə nəmləndirilmiş oksigen verir", "Xəstənin üstündən ağır ortüyü götürür", "Xəstənin başının və ya kürəyinin altına bir neçə yastıq qoyur", "Xəstəyə təngnəfəsliyi aradan qaldıran dərmanlar təyin edir"],
        correct: 4
    },
    // Question 272
    {
        question: "Ev şəraitində tibb bacısı xəstəyə hansı əməliyyatı apardıqda mütləq həkimin icazəsi olmalıdır?",
        options: ["Venadaxili inyeksiya etdikdə", "İmalə etdikdə", "Xardal yaxması, zəli, banka qoyduqda", "Əzələ daxilinə inyeksiya etdikdə", "Dərialtına inyeksiya etdikdə"],
        correct: 0
    },
    // Question 273
    {
        question: "Palata tibb bacısı müayinə üçün xəstədən hansı materialı götürə bilməz?",
        options: ["Sidik", "Bəlğəm", "Nəcis", "Plevral maye", "Selik"],
        correct: 3
    },
    // Question 274
    {
        question: "Sadalananlardan hansı məktəb tibb bacısının vəzifəsi deyil?",
        options: ["Məktəbliləri auskultasiya etmək", "Antropometriya aparmaq", "Profilaktik peyvəndlər etmək", "Məktəbdə aşkar edilən yoluxucu xəstəlik barədə sanitar-epidemioloji stansiyaya xəbər vermək", "Məktəblilərlə sanitariya-maarifləndirmə mövzusunda söhbətlər aparmaq"],
        correct: 0
    },
    // Question 275
    {
        question: "Tibb işçisinin şəxsi gigiyenasının pozulmasıə aşağıda göstərilənlərdən hansı aiddir?",
        options: ["İş paltarında xəstəxananın ərazisindən kənara çıxmaq", "Dırnaqlarını qısa kəsmək və təmiz saxlamaq", "Hər bir əməliyyatdan əvvəl və sonra əllərini yumaq", "Yoluxucu şöbəyə getdikdən sonra iş paltarını dəyişib,yenisini geymək", "Dezinfeksiya edici məhlullarla əllərini silmək"],
        correct: 0
    },
    // Question 276
    {
        question: "Uzun muddət yataqda olan xəstədə yataq yaraları hansı nahiyədə müşahidə edilmir?",
        options: ["Kürəkdə", "Ənsədə", "Omada", "Qarın nahiyəsində", "Dabanda"],
        correct: 3
    },
    // Question 277
    {
        question: "Hansı xəstəliklər zamanı xəstə passiv vəziyyətdə olmalıdır?",
        options: ["Miokard infarktı", "Ağciyər vərəmi", "Xolesistit", "Xroniki qastrit", "Pielonefrit"],
        correct: 0
    },
    // Question 278
    {
        question: "Xəstəlik tarixi yazarkən göstərilənlərdən hansı tibb bacısının vəzifəsinə aid deyil?",
        options: ["Bədən temperaturunu, tənəffüsün sayını xəstəlik tarixində gündəlik qeyd etmək", "Nəbzi, arterial təzyiqi ölçüb xəstəlik tarixində gündəlik qeyd etmək", "Bütün müalicə müddətində xəstənin üzərində aparılan müşahidələri xəstəlik tarixinə yazmaq", "Analizlərin cavablarını və rentgenoloji məlumatları xəstəlik tarixinə yapışdırmaq", "EKQ məlumatlarını xronoloji qaydada xəstəlik tarixinə yapışdırmaq"],
        correct: 2
    },
    // Question 279
    {
        question: "Poliklinikada ambulator karta tibb bacısı aşağıda göstərilənlərdən nəyi qeyd edə bilər?",
        options: ["Xəstəliyin baş verməsi barədə əsas məlumatları", "Xəstənin həyat anamnezini", "Dərman təyinatını", "Laborator müayinələrin nəticələrini, dispanserizasiyanın hesabatını", "Xəstənin evində apardığı ambulator müalicələrin nəticəsini"],
        correct: 3
    },
    // Question 280
    {
        question: "Qusma zamanı tibb bacısı xəstəyə necə yardım göstərilməlidir? 1) Xəstənin alnına əli ilə dayaq verməlidir 2) Mədəni yumalıdır 3) Ağız boşluğunu təmizləməlidir 4) Epiqastral nahiyəyə buz qovuğu qoymalıdır 5) Təmizləyici imalə aparmalıdır",
        options: ["2, 5", "3, 4", "1, 3", "1, 5", "2 ,4"],
        correct: 2
    },
    // Question 281
    {
        question: "Xəstəxanada aşağıda göstərilən dərman maddələrindən hansını soyuducuda saxlamağa ehtiyac yoxdur?",
        options: ["Vaksinləri", "Zərdabları", "Narkotikləri", "Dərman şamlarını", "Məlhəmləri"],
        correct: 2
    },
    // Question 282
    {
        question: "Xroniki böyrək çatışmazlığı zamanı qidada hansı maddələri məhdudlaşdırmaq lazımdır?",
        options: ["Yağları", "Zülalları", "Duzları", "Karbohidratları", "Vitaminləri"],
        correct: 1
    },
    // Question 283
    {
        question: "Xəstənin qidalanması zamanı göstərilən üsullardan hansı süni qidalanmaya aid deyil?",
        options: ["Qida maddələrini düz bağırsaqdan yeritmək", "Fistula vasitəsilə yedizdirilmə", "Parenteral yolla qidalanma", "Qidanın zondla yeridilməsi", "Xəstənin qaşıqla yedizdirilməsi"],
        correct: 4
    },
    // Question 284
    {
        question: "Xəstədə tənəffüs hərəkətlərini sayarkən tibb bacısının taktikası nədən ibarətdir?",
        options: ["Tibb bacısı xəstəyə tapşırır ki,sakit dayansın", "Tənəffüs hərəkətlərini 5 dəqiqə müddətində sayır", "Tənəffüs hərəkətlərini sayarkən xəstəyə dərindən nəfəs alıb, verməyi tapşırır", "Tibb bacısı tənəffüs hərəkətlərini saymağı xəstənin özünə tapşırır", "Tibb bacısı tənəffüs hərəkətlərini sayarkən çalışmalıdır ki,xəstə bunu hiss etməsin"],
        correct: 4
    },
    // Question 285
    {
        question: "Miokard infarktı olan xəstəyə tibb bacısı nəyi qadağan edə bilər?",
        options: ["Meyvə şirələrini", "Suda bişmiş balığı", "Buxarda bişmiş kotleti", "Suda bişmiş əti", "Qaz əmələ gətirən qidaları (lobya,kartof,qara çörək və s.)"],
        correct: 4
    },
    // Question 286
    {
        question: "Kəskin böyrək xəstəlikləri zamanı sadalananlardan hansı tibb bacısının vəzifəsi deyil?",
        options: ["Xəstənin yataq rejimində olmasına nəzarət etmək", "Xəstənin sidik müayinələrinin cavablarını xəstəlik vərəqində qeyd etmək", "Xəstənin pəhriz saxlamasına nəzarət etmək", "Paranefral blokada aparmaq", "Həkimin təyin etdiyi dərmanları xəstənin qəbul etməsinə nəzarət etmək"],
        correct: 3
    },
    // Question 287
    {
        question: "Əzələ daxilinə inyeksiya zamanı ən çox nə qədər məhlul yeritmək olar?",
        options: ["2 ml", "5 ml", "3 ml", "10 ml", "20 ml"],
        correct: 3
    },
    // Question 288
    {
        question: "Sadalananlardan hansı inyeksiyanın ağırlaşması deyil?",
        options: ["Abses", "Dəridə damar ulduzcuqlarının olması", "Hematoma", "Fleqmona", "İnfiltrat"],
        correct: 1
    },
    // Question 289
    {
        question: "Xəstəni nəcisdə gizli qana görə müayinəyə hazırlayarkən qidadan hansı ərzaq çıxarılmalıdır?",
        options: ["Süd", "Çörək", "Südlü sıyıq", "Yağ", "Ət"],
        correct: 4
    },
    // Question 290
    {
        question: "Daxili qanaxmalar zamanı xəstələri nəql edərkən onlara hansı vəziyyət verilməlidir?",
        options: ["Xəstəni xərəyə baş hissəsi aşağı salınmış vəziyyətdə uzanmalıdır", "Xəstə xərəkdə arxası üstə, başı yana çevrilmiş vəziyyətdə uzanmalıdır", "Xəstəyə xərəkdə yarımoturaq vəziyyət verilməlidir", "Xəstə xərəkdə arxası üstə, ayaqları dizdən bükülmüş vəziyyətdə uzanmalıdır", "Xəstə xərəkdə bir tərəfi üstdə uzanmalıdır"],
        correct: 3
    },
    // Question 291
    {
        question: "Qida zəhərlənmələri zamanı göstərilən təxirəsalınmaz yardım nə ilə başlanılır?",
        options: ["İmalə ilə", "Mədənin yuyulması ilə", "Dəri altına və ya venaya məhlul yeritməklə", "Dəri altına atropin vurmaqla", "Ürək-damar preparatları yeritməklə"],
        correct: 1
    },
    // Question 292
    {
        question: "Elektrotravma zamanı aşağıda göstərilən yardımlardan hansı qəti qadağandır?",
        options: ["Xəstəni dərhal cərəyan mənbəyindən ayırmaq", "Elektrik vurma nəticəsində əmələ gələn yanıq nahiyəsinə aseptik sarğı qoymaq", "Xəstəni ən yaxın xəstəxanaya aparmaq", "Dərialtına kofein, kordiamin, kamfora vurmaq (damar çatışmazlığı olarsa)", "Elektrik vurmuş şəxsi torpağa basdırmaq"],
        correct: 4
    },
    // Question 293
    {
        question: "Poliuriya nədir?",
        options: ["Sidik ifrazının olmaması", "Tez - tez az miqdarda sidik ifrazının olması", "Sidik kisəsinin boşalmasının mümkün olmaması", "Gün ərzində ifraz olunan sidiyin miqdarının azalması", "Gün ərzində ifraz olunan sidiyin miqdarının artması"],
        correct: 4
    },
    // Question 294
    {
        question: "Taxikardiya zamanı aşağıda göstərilən yardımlardan hansını tibb bacısı ancaq həkimin göstərişindən sonra edə bilər?",
        options: ["Venaya novokainamid, inderal və s. antiaritmik preparat yeridər", "Qarında günəş kələfi nahiyəsinə təzyiq edər", "Göz almalarına barmaqla təzyiq edər", "Süni qusdurma tətbiq edər", "Yuxu arteriyası nahiyəsinə təzyiq edər"],
        correct: 0
    },
    // Question 295
    {
        question: "Kəskin sol mədəcik çatışmazlığı(ürək astması) zamanı tibb bacısı xəstəyə yardım edərkən aşağıda göstərilənlərdən nəyi düz etmir?",
        options: ["Həkimin göstərişi ilə qanburaxma aparır", "Venaya sürətlə strofantin və ya korqlükon yeridir", "Xəstənin ayaqlarını salladaraq rahat oturmasına kömək edir", "Oksigenoterapiya aparır", "Xəstənin ətraflarına turna qoyur"],
        correct: 1
    },
    // Question 296
    {
        question: "Sadalananlardan hansı vərəm dispanserində işləyən sahə tibb bacısının səlahiyyətinə aid deyil?",
        options: ["Vərəm tapılmış yeni xəstə barədə sanitar - epidemioloji stansiyaya xəbər verir", "Rentgen və laborator müayinələrin nəticələrini xronoloji qaydada xəstəlik tarixinə yapışdırır", "Xəstənin müalicəsi ilə əlaqədar məlumatları kartotekaya yazır", "Dispanserə müraciət edən xəstəni müayinə edir, lazım olan analizləri və müalicəni təyin edir", "Təzə xəstə üçün sahə tibb bacısının vərəqini açir"],
        correct: 3
    },
    // Question 297
    {
        question: "Mədə qanaxması zamanı tibb bacısının taktikası nədən ibarətdir?",
        options: ["Təcili həkimə xəbər vermək", "Xəstəni sakitləşdirmək", "Epiqastral nahiyyəyə isitqac qoymaq", "Mədəni yumaq", "Xəstəyə ağrıkəsici vermək"],
        correct: 0
    },
    // Question 298
    {
        question: "Hipoqlikemik koma zamanı həkim gələnədək tibb bacısının göstərdiyi yardımlardan hansı xəstənin vəziyyətini daha da ağırlaşdırar?",
        options: ["Xəstəyə şirin çay vermək", "Dərialtına insulin vurmaq", "Venaya 20-40 ml 40% -li qlükoza məhlulu yeritmək", "Xəstəyə bir neçə parça qənd vermək", "Xəstəyə bir qaşıq bal vermək"],
        correct: 1
    },
    // Question 299
    {
        question: "Nəbz kəsiri nədir?",
        options: ["Nəbzin sayının normadan az olması", "Nəbzin sayının normadan çox olması", "Nəbzin ritminin pozulması", "Periferik nəbzin sayı ilə ürək yığılmalarının sayı arasındakı fərq", "Sağ və sol qolda nəbzin sayının müxtəlif olması"],
        correct: 3
    },
    // Question 300
    {
        question: "Bakterioloji müayinə üçün sidik toplayarkən tbb bacısı nəyi düzgün etmir?",
        options: ["Sidiyi götürən kimi dərhal analizə göndərir", "Sidik götürməzdən əvvəl uretranı şırınqalıyır", "Sidiyin ilk porsiyasını tullayıb, ikinci porsiyadan toplayır", "Sidiyi kateterlə götürür", "Sidiyi ilk porsiyası ilə birgə qaba toplayır"],
        correct: 4
    },
    // Question 301
    {
        question: "Disfagiya nədir?",
        options: ["Udma aktının pozulması", "Qidanın mədədən 12 barmaq bağırsağa keçməsinin ləngiməsi", "Mədə möhtəviyyatının ağızdan xaric olması", "Yoğun bağısaqların distal hissəsinin boşalması", "Mədə möhtəviyyatının qida borusuna keçməsi"],
        correct: 0
    },
    // Question 302
    {
        question: "Hipertonik imalə hansı məhlullarla aparılır? 1) 10%-li natrium-xloridlə 2) 20-30%-li maqnezium sulfat məhlulu 3) Çobanyastığı dəmləməsi ilə 4) Nişasta ilə 5) Xloral-hidrat ilə 6) Bitki yağı ilə",
        options: ["1, 6", "3, 4", "5, 6", "2, 5", "1, 2"],
        correct: 4
    },
    // Question 303
    {
        question: "Anuriya nədir?",
        options: ["Gün ərzində sidik ifrazının azalması", "Tez - tez az miqdarda sidik ifrazının olması", "Sidik ifrazının ağrılı olması", "Sidik ifrazının olmaması", "Gün ərzində sidik ifrazının artması"],
        correct: 3
    },
    // Question 304
    {
        question: "Işuriya nədir?",
        options: ["Sidik kisəsinin boşalmasının mümkün olmaması", "Gün ərzində sidik ifrazının artması", "Tez - tez az miqdarda sidik ifrazının olması", "Gün ərzində sidik ifrazının azalması", "Sidik ifrazının tam olmaması"],
        correct: 0
    },
    // Question 305
    {
        question: "Sonuncu qida qəbulu mədə zondlanmasından nə qədər əvvəl olmalıdır?",
        options: ["Müayinə olunan gün səhər", "Müayinədən əvvəlki gün günorta", "Müayinədən əvvəlki gün axşam", "Müayinədən iki saat əvvəl", "Müayinədən əvvəlki gün səhər"],
        correct: 2
    },
    // Question 306
    {
        question: "Döş sümüyü arxasında deşici, yandırıcı ağrıların olması zamanı tibb bacısının taktikası?",
        options: ["Narkotiklərdən istifadə etmək", "Ayaqlarını isti vanna etmək", "Xəstənin hərəkətsizliyini təmin etmək", "Analgetiklərdən istifadə etmək", "Mədəsini yumaq"],
        correct: 2
    },
    // Question 307
    {
        question: "Stenokardiya tutması zamanı təxirəsalınmaz yardım?",
        options: ["Dil altına nitroqliserin", "Dəri altına morfin", "Əzələ daxilinə baralgin", "Vena daxilinə prednizolon", "Vena daxilinə dimedrol"],
        correct: 0
    },
    // Question 308
    {
        question: "Xolesistoqrafiya hansı orqanın rentgenoloji müayinə metodudur?",
        options: ["Süd vəzisinin", "Ağciyərlərin", "Qaraciyərin", "Mədənin", "Öd kisəsinin"],
        correct: 4
    },
    // Question 309
    {
        question: "Uroqrafiya hansı orqanın rentgenoloji müayinə metodudur?",
        options: ["Öd kisəsinin", "Sidik sisteminin", "Ağciyərlərin", "Süd vəzisinin", "Qaraciyərin"],
        correct: 1
    },
    // Question 310
    {
        question: "Qəbul şöbəsində sanitar işləmə zamanı xəstə qəflətən huşunu itirdikdə tibb bacısının taktikası nədən ibarətdir?",
        options: ["Tənəffüsü sayır", "Ürək - ağciyər reanimasiyası tədbirlərinə başlayır", "Kordiamin inyeksiyası edir, həkimi çağırır", "Arterial təzyiqi ölçür", "Xəstəni uzandırıb, naşatır spiriti ilə isladılmış pambığı iylədir və həkimi çağırır"],
        correct: 4
    },
    // Question 311
    {
        question: "Hipertonik kriz zamanı göstərilən qulluq elementləri hansılardır?",
        options: ["Termometriya", "Nəmləndirilmiş oksigenin verilməsi", "Su balansının təyini", "Qanın müayinə edilməsi", "Qusma zamanı yardım"],
        correct: 4
    },
    // Question 312
    {
        question: "Ürəyin işemik xəstəliyi zamanı xəstənin qidasında hansı məhsullar məhdudlaşdırılır?",
        options: ["Meyvə-tərəvəz", "Şəkər", "Ədviyyatlar", "Bitki mənşəli yağlar", "Xörək duzu"],
        correct: 4
    },
    // Question 313
    {
        question: "Arterial hipertoniya xəstəliyi zamanı hansı pəhriz məsləhət görülür?",
        options: ["Maye və duzların məhdudlaşdırılması", "Yağların və zülalların artırılması", "Yağların və karbohidratların məhdudlaşdırılması", "Maye və zülalların istifadəsinin artırılması", "Maye və yağların məhdudlaşdırılması"],
        correct: 0
    },
    // Question 314
    {
        question: "Nitroqliserinin effektiv təsiri qəbul edildikdən neçə dəqiqə sonra başlayır?",
        options: ["10 - 15", "40 - 50", "20 - 25", "3 -- 5 dəqiqə 2-3damcı 1%li", "30 - 40"],
        correct: 3
    },
    // Question 315
    {
        question: "Ağ ciyər qanaxması zamanı tibb bacısının taktikası nədən ibarətdir?",
        options: ["Oksigenoterapiya aparmaq", "Tam sakitliyi təmin etmək, həkimi çağırmaq", "Qanəvəzedicilər vurmaq", "Xardal və banka qoymaq", "Ayaqları vanna etmək"],
        correct: 1
    },
    // Question 316
    {
        question: "Bəlğəmi ümumi analizə görə yığmaq üçün xəstə nə ilə təmin olunmalıdır?",
        options: ["Quru sınaq borusu ilə", "Steril sınaq borusu ilə", "İçində su olan banka ilə", "Quru banka ilə", "Plastmas qab ilə"],
        correct: 3
    },
    // Question 317
    {
        question: "Xəstəni mədə zondlanmasına hazırlayarkən təmizləyici imalə nə zaman aparılır?",
        options: ["Müayinədən 5 dəqiqə əvvəl", "Müayinədən əvvəlki axşam", "Axşam və səhər", "Aparılmır.", "Müayinə olunan gün səhə"],
        correct: 3
    },
    // Question 318
    {
        question: "Xəstənin mədə zondlanmasına hazırlanması necə həyata keçirilir?",
        options: ["Axşam - yüngül şam yeməyi, səhər -- acqarına", "Səhər və axşam sifon imaləsi müayinə aparılan gün isə heç bir qida, maye, dərman qəbul etməməli və siqaret çəkməməlidir.", "Axşam - təmizləyici imalə", "Səhər- sifon imaləsi", "Səhər və axşam təmizləyici imalə"],
        correct: 0
    },
    // Question 319
    {
        question: "Xəstənin qida borusu, mədə və 12 barmaq bağırsağın endoskopik müayinəsinə hazırlanması necə həyata keçirilir?",
        options: ["Səhər - sifon imaləsi", "Səhər və axşam sifon imaləsi", "Axşam - yüngül şam yeməyi, səhər -- acqarına", "Səhər və axşam təmizləyici imalə", "Axşam - təmizləyici imalə"],
        correct: 2
    },
    // Question 320
    {
        question: "Xəstənin mədə rentgenoqrafiyasına hazırlanması necə həyata keçirilir?",
        options: ["Səhər və axşam təmizləyici imalə", "Axşam - yüngül şam yeməyi, səhər - acqarına", "Müayinədən üç gün əvvəl tərkibində dəmir olan qidaları rasiondan çıxarmaq", "Səhər - sifon imaləsi", "Axşam - təmizləyici imalə"],
        correct: 0
    },
    // Question 321
    {
        question: "Sidiyin ümumi kliniki müayinəsi zamanı tibb bacısı sidiyi laboratoriyaya hansı müddətdə çatdırmalıdır?",
        options: ["4 saata", "1 saata", "3 saata", "7 saata", "5 saata"],
        correct: 1
    },
    // Question 322
    {
        question: "Qidada yod çatmamazlığı hansı xəstəliyin əmələ gəlməsinə səbəb olur?",
        options: ["Piylənmə", "Kəskin qastrit", "Şəkərli diabet", "Diffuz toksiki ur", "Endemik ur"],
        correct: 4
    },
    // Question 323
    {
        question: "Aşağıdakılardan hansı kliniki ölümün əsas əlamətlərinə aiddir?",
        options: ["Tənəffüsün dayanması, genəlmiş bəbəklərin işığa reaksiyasının olmaması", "Huşun itməsi, yuxu arteriyasında nəbzin itməsi", "Huşun itməsi, sianoz, bəbəklərin genişlənməsi", "Sapvari nəbz, bəbəklərin genişlənməsi, sianoz", "Huşun itməsi, bəbəklərin genişlənməsi,iri arteriyalarda nəbzin itməsi"],
        correct: 4
    },
    // Question 324
    {
        question: "Anafilaktik şokun əsas əlamətlərinə hansı aid deyil?",
        options: ["Mədə qıcqırması, gəyirmə, hipertoniya", "Gözlərin, dodaqların, dilin ödemi (şişkinliyi)", "Dəridə qaşınma, səpgi və qızartı", "Təngnəfəslik, boğulma, dərinin avazıması hətta göyərməsi", "Taxikardiya, başgicəllənmə, arterial təzyiqin enməsi"],
        correct: 0
    },
    // Question 325
    {
        question: "Aşağıdakılardan hansı xüsusi qulluğa aid deyil?",
        options: ["Xəstənin sarğısının dəyişdirilməsi", "Dərman maddələrinin paylanması", "Sidik kisəsinin yuyulması (instillyasiya)", "Uşaqlıq yolunun yuyulması", "Xəstənin gözünə dərman damcısının tökülməsi"],
        correct: 1
    },
    // Question 326
    {
        question: "Sadalananlardan hansı kəskin miokard infarktı zamanı həkiməqədərki yardıma aiddir? 1) Nitroqliserin vermək; 2) Fiziki sakitliyi təmin etmək; 3) Təcili qospitalizasiya etmək 4) Kardioloji briqada çağırmaq; 5) Spazmolitiklər vermək",
        options: ["3, 2, 5", "1, 3", "4, 1, 3", "1, 2, 4", "3, 4, 5"],
        correct: 3
    },
    // Question 327
    {
        question: "Dərman maddələrinin sublinqval qəbulu dedikdə dərman maddələrinin necə qəbul edilməsi nəzərdə tutulur?",
        options: ["Dəriyə", "Tənəffüs yoluna", "Dilaltı", "Uşaqlıq yoluna", "Düz bağırsağa"],
        correct: 2
    },
    // Question 328
    {
        question: "Dərman maddələrinin xaricə işlənmə üsulu hansıdır?",
        options: ["Düz bağırsaqdan", "Dərialtı", "Dəriiçi", "Ağızdan", "Dəriyə, selikli qişaya"],
        correct: 4
    },
    // Question 329
    {
        question: "Qazçıxarıcı borunu nə üçün bağırsaqda çox saxlamaq olmaz?",
        options: ["Xəstəni narahat edir", "Qeyri - iradi nəcis ifraz olunur", "Bağırsaq divarında yara əmələ gələ bilər", "Sterilliyi pozulur", "Müalicə effekti olmur"],
        correct: 2
    },
    // Question 330
    {
        question: "Kateterizasiyadan əvvəl kateterə nə sürtülür?",
        options: ["Steril vazelin yağı", "Qliserin", "Antiseptik məhlul", "Təmiz su", "Bitki yağı"],
        correct: 0
    },
    // Question 331
    {
        question: "İnhalyasiya üsulu ilə hansı dərman maddələri yeridilir?",
        options: ["Qaz halında olan", "Maye halda olan", "Bərk halda olan", "Suspenziyalar", "Məlhəmlər"],
        correct: 0
    },
    // Question 332
    {
        question: "Kapsula daxilə necə qəbul olunmalıdır?",
        options: ["Suda həll edərək içmək", "Xırda hissələrə bölərək", "Dilin üzərinə səpilmiş", "Dəyişilməmiş halda", "Çeynənmiş halda"],
        correct: 3
    },
    // Question 333
    {
        question: "\"Acqarnına\" təyin olunmuş dərmanlar nə vaxt qəbul edilir?",
        options: ["Yeməkdən 30 dəqiqə əvvəl", "Yeməkdən 15 - 20 dəqiqə əvvəl", "Yeməkdən 1 saat əvvəl", "Yeməkdən 10 dəqiqə əvvəl", "Bilavasitə yeməkdən əvvəl"],
        correct: 0
    },
    // Question 334
    {
        question: "Dərman maddələri hansı yolla yeridilməsi inhalyasiya adlanır?",
        options: ["Qarın boşluğuna", "Toxumalara", "Tənəffüs yoluna", "Dilaltına", "Selikli qişalara"],
        correct: 2
    },
    // Question 335
    {
        question: "\"B\" siyahısına aid dərman maddələri hansıdır?",
        options: ["Yuxugətirici", "Antibiotiklər", "Bahalı", "Zəhərli", "Güclü təsir göstərən"],
        correct: 4
    },
    // Question 336
    {
        question: "\"A\" siyahısına aid dərman maddələri hansıdır?",
        options: ["Yuxugətirici", "Desensibilizasiyaedici", "Güclü təsir göstərən", "Hipotenziv", "Zəhərli"],
        correct: 4
    },
    // Question 337
    {
        question: "Dəriiçi inyeksiya hansı nahiyədə aparılır?",
        options: ["Budun bayır səthi", "Bazunun içəri səthi", "Göbək ətrafı nahiyyəyə", "Sağrı", "Saidin içəri səthi"],
        correct: 4
    },
    // Question 338
    {
        question: "Hansı nahiyəyə dərman maddələri əzələdaxili yeridilir?",
        options: ["Saidin bayır səthi", "Saidin içəri səthi", "Qarnın ön divarı", "Kürəkaltı nahiyyə", "Sağrı əzələsi və Deltayabənzər əzələ"],
        correct: 4
    },
    // Question 339
    {
        question: "Əzələdaxili inyeksiya zamanı baş verə biləcək ağırlaşma hansıdır?",
        options: ["Qanaxma", "Tromboflebit", "Yağ emboliyası", "Hava emboliyası", "İnfiltrat"],
        correct: 4
    },
    // Question 340
    {
        question: "Əzələdaxili inyeksiya zamanı iynənin uzunluğu nə qədər olmalıdır (mm-lə)?",
        options: ["30", "40", "80mm", "10", "20"],
        correct: 2
    },
    // Question 341
    {
        question: "Venadaxilinə damcı üsulu ilə dərman yeridilərkən xəstənin vəziyyəti necə olmalıdır?",
        options: ["Ayaq üstə", "Sağ və ya sol tərəfi üstə uzanmış", "Oturmuş", "Arxası üstə uzanmış", "Qarnı üstə uzanmış"],
        correct: 3
    },
    // Question 342
    {
        question: "İnsulinlə müalicə zamanı baş verə biləcək ağırlaşma hansıdır?",
        options: ["Hepatit", "Nekroz", "Lipodistrofiya", "Qanaxma", "Tromboflebit"],
        correct: 2
    },
    // Question 343
    {
        question: "İnyeksiya yerini işləmək üçün neçə dərəcəli spirtdən istifadə edilir?",
        options: ["96", "75", "80", "70", "60"],
        correct: 3
    },
    // Question 344
    {
        question: "Venadaxili inyeksiyanın ani ölümlə nəticələnən ağırlaşması hansıdır?",
        options: ["Hava emboliyası", "Qanaxma", "Nekroz", "Sepsis", "Hematoma"],
        correct: 0
    },
    // Question 345
    {
        question: "Mədə-bağırsağı qıcıqlandıran dərman maddələrini nə vaxt qəbul etmək lazımdır?",
        options: ["Yeməkdən sonra, su ilə", "Yeməkdən əvvəl", "2 yemək arasında", "Yeməkdən 2 saat sonra", "Yemək vaxtı"],
        correct: 0
    },
    // Question 346
    {
        question: "İnyeksiya (dərialtı, əzələdaxili) yerində infiltrat əmələ gələrsə nə etmək vacibdir?",
        options: ["İnyeksiya yerindən aşağıda turna qoymaq", "Yerli isidici compress", "İnyeksiya yerindən yuxarıda turna qoymaq", "Buz qovuğu", "Aseptik sarğı"],
        correct: 1
    },
    // Question 347
    {
        question: "Yağlı steril məhlulları hansı üsulla yeritmək olmaz?",
        options: ["Dəri içi", "Düz bağırsağa", "Əzələdaxili", "Dərialtı", "Venadaxili"],
        correct: 4
    },
    // Question 348
    {
        question: "Dərman maddələrinin parenteral yeridilməsinə aiddir:",
        options: ["Düz bağırsağa", "Əzələdaxili, venadaxili", "Uşaqlıq yolu ilə", "Tənəffüs yolları ilə", "Dilaltı"],
        correct: 1
    },
    // Question 349
    {
        question: "Havanın damar mənfəzinə keçməsi hansı ağırlaşmaya səbəb olur?",
        options: ["Ödem", "Nekroz", "Tromboflebit", "İnfiltrat", "Hava emboliyası"],
        correct: 4
    },
    // Question 350
    {
        question: "Dərman maddələrinin venadaxili yeridilməsinin əsas üstünlüyü nədən ibarətdir?",
        options: ["Xəstədə narahatlıq yaratmaması", "Təxirəsalınmaz tibbi yardım zamanı effektivliyin yüksək olması", "Qaraciyərin baryer rolunun kənarda qalması", "Müxtəlif preparatların yeridilməsinin mümkün olmaması", "Asan olması"],
        correct: 1
    },
    // Question 351
    {
        question: "Venadaxili inyeksiya zamanı iynə damara hansı dərinlikdə yeridilir?",
        options: ["İynənin 1/3 (üçdə biri) yeridilir", "İynənin bütün uzunluğu yeridilir", "Yalnız iynənin en kəsiyi yeridilir", "Damarın necə yerləşməsindən asılıdır", "İynənin 2/3 (üçdə ikisi) yeridilir"],
        correct: 3
    },
    // Question 352
    {
        question: "Vena daxili yeridilən 10%-li kalsium-xlorid səhvən dəri altına düşərsə tibb bacısı həmin nahiyəyə nə yeritməlidir?",
        options: ["40 % - li qlükoza", "10 % - li natrium - xlorid", "Fizioloji məhlul", "5 % - li qlükoza", "3 % - li hidrogen - peroksid"],
        correct: 2
    },
    // Question 353
    {
        question: "Təmizləyici imalənin aparılması üçün nədən istifadə olunur?",
        options: ["Esmarx parçından", "Armudabənzər balondan", "Qazçıxarıcı borudan", "Jane şprisindən", "Ucunda qıf olan zonddan"],
        correct: 0
    },
    // Question 354
    {
        question: "Təmizləyici imalə qoyulan zaman ucluq hansı dərinliyə yeridilməlidir (sm-lə)?",
        options: ["2 - 4", "30", "40", "10 -- 12 sm", "20"],
        correct: 3
    },
    // Question 355
    {
        question: "Təmizləyici imalə qoyulan zaman xəstə hansı vəziyyətdə olmalıdır?",
        options: ["Arxası üstə", "Sağ tərəfi üstə", "Dizləri və dirsəkələri yerə dyanmış vəziyyətdə halda", "Sol tərəfi üstə", "Qarnı üstə"],
        correct: 3
    },
    // Question 356
    {
        question: "Ağır xəstənin dərisini hər gün hansı məhlulla silmək lazımdır?",
        options: ["10 % - li naşatır spirti ilə", "10 % - li kamfora spirti ilə", "96 % - li etil spirti ilə", "0, 1 % - li kalium permanqanatla", "0 , 02 % - li furasillin məhlulu ilə"],
        correct: 1
    },
    // Question 357
    {
        question: "Xəstənin dodaqlarında çatlar əmələ gəldikdə tibb bacısı nə ilə işləməlidir?",
        options: ["10 % - li kamfora spirti ilə", "Vazelin ilə", "70 % - li etil spirti ilə", "3 % - li hidrogen - peroksidlə", "5 % - li kalium - permanqanat ilə"],
        correct: 1
    },
    // Question 358
    {
        question: "Ikinci dərəcəli yataq yarasının əlaməti hansıdır?",
        options: ["Qızartı", "Nekroz", "Yara", "Ödem və suluqlar", "Avazıma"],
        correct: 3
    },
    // Question 359
    {
        question: "Üçüncü dərəcəli yataq yarasının müalicəsi necə aparılmalıdır?",
        options: ["Vazelin sürtmək", "Cərrahi üsulla", "70 % - li etil spirti ilə silmək", "Masaj etmək", "10 % - li kamfora spirti ilə silmək"],
        correct: 1
    },
    // Question 360
    {
        question: "Soyuq kompresi neçə dəqiqədən bir dəyişirlər?",
        options: ["10", "60", "30", "2 -- 3", "40"],
        correct: 3
    },
    // Question 361
    {
        question: "İsti kompresi neçə dəqiqədən bir dəyişirlər?",
        options: ["2-3", "60", "50", "30", "10 -15"],
        correct: 4
    },
    // Question 362
    {
        question: "Gün ərzində bədən temperaturu hansı həddə dəyişir (C°)?",
        options: ["0, 1-0, 3", "0, 8-1, 0", "0, 3 -0, 8", "1, 0-1, 5", "1, 5-2, 0"],
        correct: 2
    },
    // Question 363
    {
        question: "Febril bədən temperaturu hansı həddə dəyişir (C°)?",
        options: ["37, 1-38,0", "38, 1-39, 0", "36, 5-37, 5", "36, 0-37, 0", "39, 0-41, 0"],
        correct: 1
    },
    // Question 364
    {
        question: "Dərman maddələrinin hansı üsulla yeridilməsi enteral qəbul adlanır?",
        options: ["Peroral (ağızdan)", "Intraspinal (onurğa kanalına)", "Venadaxili", "Əzələdaxili", "Dərialtı"],
        correct: 0
    },
    // Question 365
    {
        question: "Bir xörək qaşığının tutumu nə qədərdir (ml-lə)?",
        options: ["30", "15", "5", "20", "10"],
        correct: 1
    },
    // Question 366
    {
        question: "Bir desert qaşığının tutumu nə qədərdir (ml-lə)?",
        options: ["20", "5", "15", "30", "10"],
        correct: 4
    },
    // Question 367
    {
        question: "Bir çay qaşığının tutumu nə qədərdir (ml-lə)?",
        options: ["15", "30", "5", "10", "20"],
        correct: 2
    },
    // Question 368
    {
        question: "Həzmi asanlaşdıran ferment preparatlarını nə vaxt qəbul etmək lazımdır?",
        options: ["Yemək vaxtı", "Yemək arasında", "Yeməkdən əvvəl", "Yeməkdən 1 saat sonra", "Yeməkdən 2 saat sonra"],
        correct: 0
    },
    // Question 369
    {
        question: "Yuxugətirici dərman maddələrini yatmazdan neçə dəqiqə əvvəl qəbul etmək lazımdır?",
        options: ["50", "40", "60", "30", "80"],
        correct: 3
    },
    // Question 370
    {
        question: "Sidikdə zülalın olması necə adlanır?",
        options: ["Disproteinemiya", "Bakteriemiya", "Hipoproteinemiya", "Proteinuriya", "Piuriya"],
        correct: 3
    },
    // Question 371
    {
        question: "Böyrək sancısı zamanı bağırsağın peristaltikası necə dəyişir?",
        options: ["Kəskin artır", "Artır", "Dəyişmir", "Azalır", "Olmur"],
        correct: 3
    },
    // Question 372
    {
        question: "Sidik kanalının strikturası dedikdə nə nəzərdə tutulur?",
        options: ["Tutulması", "Deşilməsi", "Daralması", "Genişlənməsi", "Qısalması"],
        correct: 2
    },
    // Question 373
    {
        question: "Sistit hansı orqanın iltihabıdır?",
        options: ["Böyrəklərin", "Böyrək ləyəninin", "Sidik kanalının", "Sidik axarlarının", "Sidik kisəsinin"],
        correct: 4
    },
    // Question 374
    {
        question: "Ürək yığılmalarının sayı dəqiqədə 110 vurğudur - bu nədir?",
        options: ["Taxikardiya", "Səyrici aritmiya", "Ekstrasistoliya", "Norma", "Bradikardiya"],
        correct: 0
    },
    // Question 375
    {
        question: "Arterial təzyiq 180-110 mm civə st-dur - bunu aşağıdakı hansı terminlə ifadə etmək olar?",
        options: ["Şok", "Kollaps", "Hipotenziya", "Norma", "Hipertenziya"],
        correct: 4
    },
    // Question 376
    {
        question: "Ürək yığılmalarının sayı dəqiqədə 54 vurğudur -- bu nədir?",
        options: ["Ekstrasistoliya", "Bradikardiya", "Səyrici aritmiya", "Taxikardiya", "Norma"],
        correct: 1
    },
    // Question 377
    {
        question: "Xronik qastritin kəskinləşməsi zamanı rasiondan hansı qidalar çıxarılır?",
        options: ["Tərəvəzlər", "Sıyıqlar", "Yağlı, qızardılmış", "Süd məhsulları", "Meyvələr"],
        correct: 2
    },
    // Question 378
    {
        question: "Hansı bağırsağın qanaxması zamanı nəcisin rəngi qara olur?",
        options: ["Enən çənbər bağırsağın", "Siqmayabənzər bağırsağın", "Köndələn çənbər bağırsağın", "12 barmaq bağırsağın", "Düz bağırsağın"],
        correct: 3
    },
    // Question 379
    {
        question: "Nəcisdə gizli qanın müayinəsinə xəstəni hazırlayarkən hansı preparatların qəbulu dayandırılmalıdır?",
        options: ["Natrium", "Kalium", "Maqnezium", "Kalsium", "Dəmir"],
        correct: 4
    },
    // Question 380
    {
        question: "Sutkalıq diurezin 350 ml-ə qədər azalması necə adlanır?",
        options: ["Oliquriya", "Poliuriya", "Anuriya", "Nikturiya", "Nollakiuriya"],
        correct: 0
    },
    // Question 381
    {
        question: "Gecə diurezinin gündüz diurezindən çox olması necə adlanır?",
        options: ["Oliquriya", "Poliuriya", "Anuriya", "Nikturiya", "Pollakiuriya"],
        correct: 3
    },
    // Question 382
    {
        question: "Sutkalıq diurezin 2000 ml-dən çox olması necə adlanır?",
        options: ["Poliuriya", "Anuriya", "Nikturiya", "Oliquriya", "Pollakiuriya"],
        correct: 0
    },
    // Question 383
    {
        question: "Dəriiçi inyeksiyanı aparmaq üçün iynə hansı dərinlikdə yeridilir?",
        options: ["İynənin bütün uzunluğu", "Damarın yerləşməsindən asılıdır", "İynənin ucu- kəsik hissəsi", "İynənin 1/3 hissəsi", "İynənin 2/3 hissəsi"],
        correct: 2
    },
    // Question 384
    {
        question: "Steril yağlı məhlulu bədənə yeritmək üçün necə dərəcəyə qədər qızdırmaq lazımdır?",
        options: ["40°", "28°", "34°", "38°", "25°"],
        correct: 3
    },
    // Question 385
    {
        question: "Dəriiçi inyeksiyanı aparmaq üçün hansı uzunluqda iynə istifadə olunur (mm-lə)?",
        options: ["20", "30", "25", "15 mm", "10"],
        correct: 3
    },
    // Question 386
    {
        question: "Dərialtına nə qədər yağlı məhlul yeritmək olar (ml-lə)?",
        options: ["6", "3", "5", "4", "2"],
        correct: 4
    },
    // Question 387
    {
        question: "Dərman maddələrinin yeridilməsi zamanı baş verən allergik reaksiyanın ən ağır forması hansıdır?",
        options: ["Övrə", "Ekzema", "Anafilaktik şok", "Qızartı", "Kvinke ödemi"],
        correct: 2
    },
    // Question 388
    {
        question: "Parenteral yerdilmə zamanı dərman maddələrinin hansı forması istifadə olunur?",
        options: ["Drajelər", "Həblər", "Tozlar", "Kapsullar", "Steril məhlullar"],
        correct: 4
    },
    // Question 389
    {
        question: "İnsulin yeridildikdən sonra tibb bacısı xəstəyə hansı qulluğu göstərir?",
        options: ["İnyeksiya yerinə isitqac qoyur", "Tənəffüsü və nəbzi sayır", "Uzandırır", "30 dəqiqədən sonra yedizdirir", "Arterial təzyiqi ölçür"],
        correct: 3
    },
    // Question 390
    {
        question: "İnsulin artıq dozada yeridildikdə hansı ağırlaşma baş verə bilər?",
        options: ["Ketoasidotik koma", "Kvinke ödemi", "Hipoqlikemik koma", "Arterial təzyiqin artması", "Ortostatik kollaps"],
        correct: 2
    },
    // Question 391
    {
        question: "Hipertonik krizə şübhə olduqda tibb bacısı ilk növbədə nə etməlidir?",
        options: ["Xəstəni uzatmalıdır", "Xəstənin mədəsini yumalıdır", "Dərhal xəstənin arterial təzyiqini ölcməlidir", "Xəstəyə ağrıkəsici verməlidir", "Xəstəni sakitləşdirməlidir"],
        correct: 2
    },
    // Question 392
    {
        question: "Stasionarın qəbul şöbəsinə ağır xəstə daxil olduqda tibb bacısı ilk növbədə nə etməlidir?",
        options: ["Təcili növbətçi həkimi çağırmalı", "Xəstəni reanimasiya şöbəsinə nəql etməli", "Baş həkimə xəbər verməli", "Lazımi tibbi sənədləri doldurmalı", "Sanitar işləməni aparmalı"],
        correct: 0
    },
    // Question 393
    {
        question: "Yüksək kalorili və güclü qidalanma hansı xəstəlik zamanı təyin edilir?",
        options: ["Kəskin pielonefrit", "Ürəyin işemik xəstəliyi", "Hepatit B", "Kəskin qastrit", "Ağciyər vərəmi"],
        correct: 4
    },
    // Question 394
    {
        question: "Sıfır pəhriz nə zaman təyin olunur?",
        options: ["Mədə və 12 barmaq bağırsaq əməliyyatlarından sonrakı ilk günlərdə", "Hepatit zamanı", "Piylənmə zamanı", "Podaqra zamanı", "Şəkərli diabetdə"],
        correct: 0
    },
    // Question 395
    {
        question: "Isidici kompress üçün neçə qatlı tənzif salfetlərdən istifadə edilir?",
        options: ["2", "5", "8", "3", "1"],
        correct: 2
    },
    // Question 396
    {
        question: "İsitqaca göstəriş hansıdır?",
        options: ["İnsult", "Qanaxma", "Travma", "Soyuqlama", "Kəskin appendisit"],
        correct: 3
    },
    // Question 397
    {
        question: "Xəstə dərman preparatlarını qəbul edir:",
        options: ["Xəstələrin nəzarəti ilə", "Sərbəst", "Həkimin nəzarəti ilə", "Qohumlarının nəzarəti ilə", "Tibb bacısının nəzarəti ilə"],
        correct: 4
    },
    // Question 398
    {
        question: "Stasionarda dərman maddələrinin apteklərdən alınmasına kim cavabdehlik daşıyır?",
        options: ["Şöbə müdiri", "Baş həkim", "Baş tibb bacısı", "Prosedur tibb bacısı", "Müalicə həkimi"],
        correct: 2
    },
    // Question 399
    {
        question: "Qanburaxma zamanı turna nə zaman açılır?",
        options: ["İynə venaya yeridildikdən sonra", "Lazımi miqdarda qan götürüldükdən sonra, lakin iynə venadan çıxarılmazdan əvvəl", "İynə venadan çıxarıldıqdan sonra", "İstənilən vaxt", "Lazımi miqdarda qan götürüb iynə çıxarıldıqdan sonar"],
        correct: 1
    },
    // Question 400
    {
        question: "Ağ ciyərlərin kütləvi müayinə metodu hansıdır?",
        options: ["Bronxoqrafiya", "Xolesistoqrafiya", "Uroqrafiya", "Rentgenoqrafiya", "Flüoroqrafiya"],
        correct: 4
    },
    // Question 401
    {
        question: "Sidik kisəsini boşaltmaq üçün istifadə olunan alət necə adlanır?",
        options: ["Pinset", "Şpris", "Kateter", "Skalpel", "Turna"],
        correct: 2
    },
    // Question 402
    {
        question: "Sidik axarlarında daş olduqda bu əlamətlərdən hansı olmur?",
        options: ["Bel nahiyəsində ağrılar", "Sidik ifrazının artması", "Tutma şəkilli böyrək sancıları", "Hematuriya", "Xırda daşların sidiklə düşməsi"],
        correct: 1
    },
    // Question 403
    {
        question: "Vərəm əleyhinə əsas preparat kimi istifadə edilən antibiotik hansıdır?",
        options: ["Metasiklin", "Streptomisin", "Tetrasiklin", "Bisillin", "Penisillin"],
        correct: 1
    },
    // Question 404
    {
        question: "Bronxial astma tutmaların yüngül formalarında işlədilən preparat hansıdır?",
        options: ["Prednizolon", "Adrenalin", "Salbutamol", "Promedol", "Atropin"],
        correct: 2
    },
    // Question 405
    {
        question: "Hansı məhsulun tərkibində zülal yoxdur?",
        options: ["Süd", "Balıq", "Yumurta", "Ət", "Kələm"],
        correct: 4
    },
    // Question 406
    {
        question: "Yağların tərkibinə hansı vitaminlər daxildir?",
        options: ["E, B1, B2", "A, B1, B2", "A, B1, PP", "D, B1, B2", "A, D, E"],
        correct: 4
    },
    // Question 407
    {
        question: "Hansı qida məhsulları Ca mənbəyidir?",
        options: ["Kolbasa", "Balıq", "Ət", "Un və un məmulatları", "Süd və süd məhsulları"],
        correct: 4
    },
    // Question 408
    {
        question: "Dimedrolun əlavə təsiri nədir?",
        options: ["Yuxu gətirici", "Piylənmə", "Aclıq", "Saçın tökülməsi", "Qəbizlik"],
        correct: 0
    },
    // Question 409
    {
        question: "Qanın tərkibində daim hansı karbohidrat mövcud olur?",
        options: ["Fruktoza", "Saxaroza", "Laktoza", "Qalaktoza", "Qlükoza"],
        correct: 4
    },
    // Question 410
    {
        question: "Qanın laxtalanmasında hansı vitamin iştirak edir?",
        options: ["D vitamini", "E vitamini", "K vitamini", "A vitamini", "B1 vitamini"],
        correct: 2
    },
    // Question 411
    {
        question: "Uşaqlarda bronxial astma tutması zamanı hansı preparatdan istifadə etmək olar?",
        options: ["Antibiotiklər", "Qan əvəzedicilər", "Eufillin, efedrin", "Vitaminlər", "Ürək qlikozidləri"],
        correct: 2
    },
    // Question 412
    {
        question: "Uşaqda təngnəfəslik zamanı hansı preparat istifadə edilə bilər?",
        options: ["Vitamin C", "Qlükoza", "Dimedrol", "Kofein", "Lobelin"],
        correct: 4
    },
    // Question 413
    {
        question: "Uşaqda kəskin qarın sindromu olarsa tibb bacısı nə etməlidir?",
        options: ["Soyuq qoymalı, təcili hospitalizasiya etməlidir", "Ağrıkəsici vurmalıdır", "İsti qoymalıdır", "Mədəni yumalıdır", "Təmizləyici imalə etməlidir"],
        correct: 0
    },
    // Question 414
    {
        question: "Pasternatski simptomu hansı üsulla yoxlanılır?",
        options: ["Auskultasiya", "Sidiyin müayinəsi", "Palpasiya", "Qanın müayinəsi", "Döyəcləmə"],
        correct: 4
    },
    // Question 415
    {
        question: "Revmatizmin ikincili profilaktikası hansı preparatla aparılır?",
        options: ["Biseptol", "Penisillin", "Dimedrol", "Korqlikon", "Bisilin -- 5"],
        correct: 4
    },
    // Question 416
    {
        question: "Süd vəzisi xərçənginə şübhə olduqda hansı müayinə üsulları aparılır?",
        options: ["Sadalananların hamısı", "Punksion biopsiya", "Palpasiya", "Mamoqrafiya", "Süd vəzinin USM"],
        correct: 0
    },
    // Question 417
    {
        question: "İlk qışqırıq mexanizmi nə ilə bağlıdır?",
        options: ["Cinsi krizlə", "Hipertermiya ilə", "Hipoksiya ilə", "Hiperbilirubinemiya ilə", "Anemiya ilə"],
        correct: 2
    },
    // Question 418
    {
        question: "Anadangəlmə ürək qüsuru verən bətndaxili infeksiya hansıdır?",
        options: ["Listerioz", "Məxmərək", "Qızılca", "Sifilis", "Toksoplazmoz"],
        correct: 1
    },
    // Question 419
    {
        question: "Yenidoğulmuş uşaqların palatasında bakteriosid lampadan nə vaxt istifadə edilir?",
        options: ["Uşaqlara baxış vaxtı", "Uşaqlar yatanda", "Uşaqlar bələnəndə", "Uşaqlar yedizdiriləndə", "Uşaqlar palatada olmayanda"],
        correct: 4
    },
    // Question 420
    {
        question: "Yarımçıq doğulmuş uşağın zondla qidalanmasına göstəriş nədir?",
        options: ["Donor südü ilə qidalanma", "Hipertermiya", "Pnevmopatiya", "Əmmə - udma refleksinin zəif olması", "Bətndaxili infeksiya"],
        correct: 3
    },
    // Question 421
    {
        question: "Vaxtından əvvəl doğulmuş uşaqlarda konyuqasion(fizioloji) sarılıq hansı əlamətlə səciyyələnir?",
        options: ["Gedişi uzun müddətli olur", "Sarılıq gec əmələ gəlir", "Əlamətləri cüzi olur", "Anadangəlmə olur", "Gedişi qısa müddətli olur"],
        correct: 0
    },
    // Question 422
    {
        question: "Yenidoğulmuşun gözünün təmizlənməsində nədən istifadə edilir?",
        options: ["96 %-li spirt məhlulu", "Qaynanmış su, 1 %-li tetrasiklin məlhəmi", "Bitki yağı", "5 %-li yod məhlulu", "3 %-li hidrogen - peroksid məhlulu"],
        correct: 1
    },
    // Question 423
    {
        question: "Sepsis nədir?",
        options: ["Qan dövranı pozğunluğu", "Konstitusional anomaliyalar", "Bakterial infeksiyanın qanda dövr etməsi", "Rh - konflikt", "Mübadilə pozğunluğu"],
        correct: 2
    },
    // Question 424
    {
        question: "BCJ vaksinasiyasından sonra ilkin immun reaksiya nə vaxt yaranır?",
        options: ["4 aya", "6 aya", "8 həftəyə", "3 həftəyə", "10 həftəyə"],
        correct: 2
    },
    // Question 425
    {
        question: "Qarışıq qidalanma nə vaxt tətbiq edilir?",
        options: ["Təbii qidalanmada", "Yarımçıq doğulmuşlarda", "Ana südü çatmadıqda", "Sünii qidalanmada", "İlin isti fəslində"],
        correct: 2
    },
    // Question 426
    {
        question: "Bətndaxili infeksiyalara hansılar aiddir? 1) Sitomeqalovirus 2) B hepatit virusu 3) Məxmərək virusu 4) Herpes virusu 5) A hepatit virusu 6) Adenovirus",
        options: ["1, 3, 4", "2, 4, 6", "1, 3, 5", "3, 5, 6", "2, 5, 6"],
        correct: 0
    },
    // Question 427
    {
        question: "Yenidoğulmuşlarda cinsi krizin əlamətləri hansı müddətdən sonra yox olur?",
        options: ["2-3 həftəyə", "3 aya", "2 aya", "5-6 günə", "2-3 günə"],
        correct: 0
    },
    // Question 428
    {
        question: "Omfolit nəyin iltihabıdır?",
        options: ["Dalağın", "Mədənin", "Qaraciyərin", "Dərinin", "Göbəyin"],
        correct: 4
    },
    // Question 429
    {
        question: "Hipoqalaktiya nədir?",
        options: ["Mədə-bağırsaq pozğunluğu", "Qida çatışmazlığı", "Qan azlığı", "Ana südünün çatışmazlığı", "Vitamin çatışmazlığı"],
        correct: 3
    },
    // Question 430
    {
        question: "Yenidoğulmuşlarda tranzitor hipertermiyanın səbəbi hansıdır?",
        options: ["Yenidoğulmuşların asfiksiyası", "Fizioloji sarılıq", "Yenidoğulmuşların dəri xəstəlikləri", "Istilik mərkəzinin tam inkişaf etməməsi", "Hormonal kriz"],
        correct: 3
    },
    // Question 431
    {
        question: "Yenidoğulmuşlarda ilkin çəkinin itməsinin səbəbi nədir?",
        options: ["Fizioloji mastit", "Virus infeksiyası", "Pis qulluq", "Fizioloji sarılıq", "Maye itkisi və süd azlığı"],
        correct: 4
    },
    // Question 432
    {
        question: "Yenidoğulmuşlarda hormonal krizə nə aiddir?",
        options: ["Tranzitor qızdırma", "Fizioloji mastit və vulvovaginit", "Çəki itkisi", "Fizioloji eritema", "Sidik turşusu infarktı"],
        correct: 1
    },
    // Question 433
    {
        question: "Yenidoğulmuşlarda dəri örtüklərinin tranzitor dəyişkənliyinə nə aiddir?",
        options: ["Bişməcə", "Vezikulopustulez", "Qabıqvermə", "Sadə və toksiki eritema", "Piodermiya"],
        correct: 3
    },
    // Question 434
    {
        question: "Uşaq doğulan kimi hansı infeksiyanın profilaktikası aparılır?",
        options: ["Sistitin", "Qonoblenoreyanın", "Omfolitin", "Dermatitin", "Sepsisin"],
        correct: 1
    },
    // Question 435
    {
        question: "Vərəm əleyhinə peyvəndi kim vurmalıdır?",
        options: ["Həkim", "Sahə həkimi", "Sahə tibb bacısı", "Xüsusi hazırlıq keçmiş tibb bacısı", "Prosedura tibb bacısı"],
        correct: 3
    },
    // Question 436
    {
        question: "Yenidoğulmuşun vəziyyəti doğularkən hansı şkala ilə qiymətləndirilir?",
        options: ["Apqar", "Neçiporenko", "Sinverman", "Duboviç", "Ortner"],
        correct: 0
    },
    // Question 437
    {
        question: "Yenidoğulmuşlarda əmələ gələn doğuş şişi nədir?",
        options: ["Sümük və sümüküstlüyü arasına qansızma", "Dölyanı mayenin aspirasiyası", "Bətndaxili infeksiya", "Dölyanı mayenin toxumalara toplanması", "Öndə gələn hissənin ödemi"],
        correct: 4
    },
    // Question 438
    {
        question: "Yenidoğulmuşlarda baş beyin zədələnməsinin əsas əlaməti nədir?",
        options: ["Hipertermiya", "Qıcolma", "Hipotermiya", "Sarılıq", "Hemorragik sindrom"],
        correct: 1
    },
    // Question 439
    {
        question: "Hemolitik xəstəlik hansı hallarda baş verə bilər?",
        options: ["Həm anada həm də uşaqda Rh (-) qan olduqda", "Anada Rh (-) və uşaqda Rh (+) qan olduqda", "Anada Rh (+) və uşaqda Rh (-)qan olduqda", "Həm anada həm də uşaqda Rh (+) qan olduqda", "Anada anemiya olduqda"],
        correct: 1
    },
    // Question 440
    {
        question: "Doğum evində qonoblenoreyanın profilaktikası nə vaxt aparılır?",
        options: ["Doğuşdan 4 saat sonra", "Doğuşdan 3 saat sonra", "Doğuşdan sonrakı ilk 1 saat ərzində", "Doğuşdan 2 saat sonra", "Doğuşdan 1 saat sonra"],
        correct: 2
    },
    // Question 441
    {
        question: "Hamiləliyin antenatal risk faktoruna nə aid deyil?",
        options: ["Çoxdöllü hamiləlik", "Vaxtı keçmiş hamiləlik", "Doğuş vaxtı narkoz vermə", "Hamiləlik vaxtı qanaxma", "Geçikmiş toksikozlar"],
        correct: 2
    },
    // Question 442
    {
        question: "Yenidoğulmuşların asfiksiyası zamanı orta ağır asfiksiya neçə balla qiymətləndirilir?",
        options: ["8 - 10 bal", "3 - 4 bal", "4 - 5 bal", "1 - 2 bal", "6 - 7 bal"],
        correct: 2
    },
    // Question 443
    {
        question: "Yenidoğulmuşların asfiksiyası zamanı ürək vurğularının sayını artırmaq üçün hansı preparat istifadə edilir?",
        options: ["Noşpa", "Kokarboksilaza", "Vitamin C", "ATF", "Adrenalin"],
        correct: 4
    },
    // Question 444
    {
        question: "Uşaq müəssisələrində əsaslı dezinfeksiya neçə faizli xloraminlə aparılır?",
        options: ["3", "2", "1", "10", "5"],
        correct: 4
    },
    // Question 445
    {
        question: "Yenidoğulmuşlarda yoluxucu dəri xəstəliklərinə nə aiddir?",
        options: ["Tərlilik", "Teleangioektaziya", "Bişməcə", "Omfalit", "Yenidoğulmuşun qovuqcuqlu xəstəliyi"],
        correct: 4
    },
    // Question 446
    {
        question: "Tənəffüs çatışmazlığı sindromu hansı uşaqlar üçün xarakterikdir?",
        options: ["Vaxtında doğulmuşlar", "Vaxtından gec doğulmuşlar", "Vaxtından əvvəl doğulmuşlar", "Çox saylı hamiləlik", "Çox döllü hamiləlik"],
        correct: 2
    },
    // Question 447
    {
        question: "Hepatit B əleyhinə vaksin hansı nahiyyəyə vurulur?",
        options: ["Sağrı nahiyəsinə", "Sağ çiyin nahiyəsinə", "Dəri daxilinə", "Budun ön nahiyəsinə", "Vena - daxilinə"],
        correct: 3
    },
    // Question 448
    {
        question: "Yarımçıq doğulmuşların palatasında hərarət nə qədər olmalıdır?",
        options: ["18° - 20°", "20° - 22°", "26°- 30°", "24° - 26°", "22° - 24°"],
        correct: 3
    },
    // Question 449
    {
        question: "Tənəffüsün dayanması necə adlanır?",
        options: ["Çeyn - Stoks tənəffüsü", "Taxikardiya", "Bradipnoe", "Apnoe", "Kuss - Maul tənəffüsü"],
        correct: 3
    },
    // Question 450
    {
        question: "Apqar şkalasına görə uşağın vəziyyəti neçə balla qiymətləndirildikdə uşaq döşə qoyulur?",
        options: ["4 - 5", "8 -1 0", "6 - 7", "2 - 3", "7 - 8"],
        correct: 1
    },
    // Question 451
    {
        question: "Vaxtından əvvəl doğulmuş uşaq öz çəkisini ilk günlər neçə% itirə bilər?",
        options: ["10-12%", "3-5%", "14-16%", "9-14%", "20-30%"],
        correct: 3
    },
    // Question 452
    {
        question: "Vərəmi aşkar etmək üçün hansı üsul vacibdir?",
        options: ["Tuberkulin diaqnostikası və flüoroqramma", "Qanın ümumi və biokimyəvi müayinəsi", "Klinik əlamətlər,anamnez", "Sidiyin ümumi və bakterioloji müayinəsi", "Qanın biokimyəvi və bakterioloji müayinəsi"],
        correct: 0
    },
    // Question 453
    {
        question: "Hansı halda mantu sınağı müsbət sayılır?",
        options: ["4 - 5 mm", "3 - 4 mm", "5 - 12 mm", "1- 2 mm", "2 - 3 mm"],
        correct: 2
    },
    // Question 454
    {
        question: "Yüksək hərarət zamanı uşağa göstərilən yardıma daxil deyildir?",
        options: ["Dərini spirtlə silmək", "Hərarətsalıcılar vermək", "Başa soyuq qoymaq", "Kalorili qida", "Çoxlu maye vermək"],
        correct: 3
    },
    // Question 455
    {
        question: "Tuberkulinin yeridilmə yolu hansıdır?",
        options: ["Dərialtına", "Dəri içi", "Vena - daxilinə", "Sublinqval", "Əzələ - daxilinə"],
        correct: 1
    },
    // Question 456
    {
        question: "Meninqokok bakteriyaları orqanizmə hansı yolla daxil olur?",
        options: ["Tənəffüs", "Limfogen", "Sidik-ifrazat", "Hematogen", "Mədə - bağırsaq"],
        correct: 0
    },
    // Question 457
    {
        question: "Meningit xəstəliyinin inkubasiya dövrü nə qədərdir?",
        options: ["2-10 gün", "7 gün", "21 gün", "14 gün", "5 gün"],
        correct: 0
    },
    // Question 458
    {
        question: "Difteriya xəstəliyinin törədicisi nədir?",
        options: ["Streptokoklar", "Löffler çöpləri", "Borde - Janqu çöpləri", "Viruslar", "Göbələklər"],
        correct: 1
    },
    // Question 459
    {
        question: "Hansı xəstəlik zamanı antitoksiki zərdab təyin edilir?",
        options: ["Qripp", "Su çiçəyi", "Difteriya", "Skarlatina", "Qızılca"],
        correct: 2
    },
    // Question 460
    {
        question: "Hipoqlikemik komanın əsas yaranma səbəbi?",
        options: ["İnsulinin dozadan az vurulması", "Karbohidratın çox qəbulu", "İnsulinin artıq dozada vurulması", "Aktiv həyat tərzi", "Passiv həyat tərzi"],
        correct: 2
    },
    // Question 461
    {
        question: "Skarlatinanın törədicisi hansıdır?",
        options: ["β hemolitik streptokoklar", "Stafilakoklar", "Göbələklər", "Viruslar", "Löffler çöpləri"],
        correct: 0
    },
    // Question 462
    {
        question: "Skarlatina zamanı əsas əlamət hansıdır?",
        options: ["Travmatik şok", "Hipervolemiya", "Anemiya", "Angina", "Hemoliz"],
        correct: 3
    },
    // Question 463
    {
        question: "Skarlatina xəstəliyinə yoluxan uşaqlar neçə gün izolə edilir?",
        options: ["7 gün", "10 gün", "1, 5 ay", "1 gün", "1 ay"],
        correct: 0
    },
    // Question 464
    {
        question: "Qızılca xəstəliyinin törədicisi hansıdır?",
        options: ["Streptokokk", "Borde-Janqu çöpləri", "Stafilokokk", "Göbələklər", "Virus"],
        correct: 4
    },
    // Question 465
    {
        question: "Su çiçəyinə yoluxmuş uşaqla kontaktda olan uşaq neçə gün izolə (karantində) olmalıdır?",
        options: ["21 gün", "7 gün", "1 ay", "12 gün", "10 gün"],
        correct: 0
    },
    // Question 466
    {
        question: "Bağırsaq infeksiyaları zamanı eksikoz və toksikoz müşahidə olunursa, mübarizə üçün əsas terapevtik prinsip hansıdır?",
        options: ["Hormonterapiya", "Vitaminoterapiya", "Stimuləediciterapiya", "Fitoterapiya", "Parenteral duz məhlullarının yeridilməsi"],
        correct: 4
    },
    // Question 467
    {
        question: "Hepatit A xəstəliyinin yoluxma yolu hansıdır?",
        options: ["Hava-damcı", "Parenteral", "Kontakt-məişət", "Alimentar", "Transfuziya yolu ilə"],
        correct: 2
    },
    // Question 468
    {
        question: "Hepatit B xəstəliyinin yoluxma yolu hansıdır?",
        options: ["Oral-fekal", "Hava-damcı", "Alimentar", "Kontakt-məişət", "Parenteral"],
        correct: 4
    },
    // Question 469
    {
        question: "Hepatit A zamanı inkubasiya dövrü nə qədər davam edir?",
        options: ["1 aya qədər", "3 aya qədər", "1 həftə", "2 gün", "1 il"],
        correct: 0
    },
    // Question 470
    {
        question: "Hepatit B zamanı inkubasiya dövrü nə qədər davam edir?",
        options: ["1 il", "2 il", "1-3 gün", "6 həftə-6 ay", "2-4 həftə"],
        correct: 3
    },
    // Question 471
    {
        question: "Hepatit A xəstəliyi olan uşaqla təmasda olan uşaq üçün karantin neçə gündür?",
        options: ["4 gün", "35 gün", "7 gün", "6 ay", "10 gün"],
        correct: 1
    },
    // Question 472
    {
        question: "Adları cəkilən bakterial infeksiyalardan hansını idarəolunan xəstəliyə aid etmək olar?",
        options: ["Qara yara", "Botulizm", "Difteriya", "Skarlatina", "Salmanelyoz"],
        correct: 2
    },
    // Question 473
    {
        question: "Hansı hallarda difteriyaya şübhəli şəxslərin udlağından bakterioloji müayinə üçün yaxma götürülür?",
        options: ["Diareya olduqda", "Tənəffüs çətinləşdikdə", "Badamcıqlarda ərp olduqda", "Yüksək hərarət olduqda", "Səpgi zamanı"],
        correct: 0
    },
    // Question 474
    {
        question: "Aşağıda sadalanan vaksinlərdən hansı cansız vaksinlərə aiddir?",
        options: ["Difteriya, göyöskürək və tetanusa qarşı kombinə olunmuş vaksin (GDT)", "Qızılca, parotit, məxmərəyə qarşı vaksin (QPM)", "Hepatit B-yə qarşı vaksin", "Vərəm əleyhinə vaksin (BSJ)", "Poliomielitə qarşı oral vaksin (OPV)"],
        correct: 0
    },
    // Question 475
    {
        question: "Aşağıda sadalanan vaksinlərdən hansı canlı vaksinlərə aiddir?",
        options: ["Qızılca, parotit və məxmərəyə qarşı vaksin (QPM)", "Hemofil β çöpləri tərəfindən törədilən xəstəliklərə qarşı vaksin", "Tetanusa qarşı anatoksin (AT)", "Hepatit \"B\" - yə qarşı vaksin", "Göy öskürək, difteriya, tetanusa qarşı vaksin (AGDT)"],
        correct: 0
    },
    // Question 476
    {
        question: "Cansız vaksinlərin əksəriyyəti hansı üsulla orqanizmə yeridilir?",
        options: ["Dəri içi", "Vena daxilinə", "Per oral (ağızdan)", "Dərialtı", "Əzələ daxili"],
        correct: 4
    },
    // Question 477
    {
        question: "Cansız vaksinlərin yeridilməsindən sonra daha çox hansı reaksiyalar müşahidə olunur?",
        options: ["3 gündən sonra hərarət yüksəlir", "Diareya", "İnyeksiya yerində abses", "2 gün ərzində hərarət yüksəlir, vaksinin yerində ağrı və şişkinlik ola bilər", "Ürəkbulanma, qusma"],
        correct: 3
    },
    // Question 478
    {
        question: "Vaksinlər GEM-də (gigiyena və epidemiologiya mərkəzində )və tibb müəssisələrində hansı temperaturda saxlanılır?",
        options: ["+15; +20", "-5; +10", "+2; +8", "-10; +2", "+10; +12"],
        correct: 2
    },
    // Question 479
    {
        question: "Zimnitski sınağı qiymətləndirilən zaman əsas diaqnostik amil hansıdır?",
        options: ["Sidikdə zülalın miqdarı", "Sidikdə formalı elementlər", "Sidiyin xüsusi çəkisi", "Sidikdə şəkərin miqdarı", "Sidik çöküntüsü"],
        correct: 2
    },
    // Question 480
    {
        question: "Qlomerulonefrit patologiyası zamanı duzsuz pəhriz təyin etmənin səbəbi nədir?",
        options: ["Maqnezium duzları sinir sistemini tənzimləyir", "Natrium duzları mayeni toxumalarda saxlayır", "Kalsium duzları osteopoezdə iştirak edir", "Selenium azad radikalları çıxarır", "Kalium duzları ürəyə təsir edir"],
        correct: 1
    },
    // Question 481
    {
        question: "Uşaqda raxit xəstəliyinin profilaktikası üçün vitamin D-nin sutkalıq dozası nə qədərdir?",
        options: ["100 mq", "400 mq", "800 mq", "700 mq", "600 mq"],
        correct: 1
    },
    // Question 482
    {
        question: "Anemiya zamanı qanda nə baş verir?",
        options: ["Leykositlərin miqdarının azalması", "Eritrositlərin sayının artması", "Hemoqlobin və eritrositlərin sayının azalması", "Trombositlərin sayının azalması", "Qanın formalı elementlərinin sayının azalması"],
        correct: 2
    },
    // Question 483
    {
        question: "Hemofiliya xəstəliyinin yaranmasına nə səbəb olur?",
        options: ["Laxtalanmanın pozulması", "Disproteinemiya", "Hipovolemiya", "Hipervolemiya", "Disbakterioz"],
        correct: 0
    },
    // Question 484
    {
        question: "Şəkərli diabet zamanı hansı orqanın funksiyasının pozulması baş verir?",
        options: ["Hipofiz vəzinin", "Epifiz vəzinin", "Qalxanvari vəzinin", "Mədəaltı vəzinin", "Qara ciyərin"],
        correct: 3
    },
    // Question 485
    {
        question: "Uşaqlarda normada sidikdə şəkərin miqdarı nə qədər olmalıdır.",
        options: ["0-3 mmol/l", "Sağlam uşaqda təyin olunmur", "7 mmol/l", "3,3-5,5 mmol/l", "6,5-7,5 mmol/l"],
        correct: 3
    },
    // Question 486
    {
        question: "Eksudativ kataral diatezli uşağın qidalanmasında aşağıdakılardan hansı düzgün deyil? 1) Şəkər-ksilit və ya sorbitlə əvəz edilir. 2) Ət bulyonu verilir. 3) Balıqdan hazırlanmış qidalar verilir 4) Heyvani yağ-bitki yağı ilə əvəz edilir, 5) Xörək duzu azaldılır. 6) İnək südü verilir.",
        options: ["3,5,6", "1,3,5", "2,4,6", "2,3,6", "1,2,6"],
        correct: 3
    },
    // Question 487
    {
        question: "Yenidoğulmuşun ağızında selikli qışada ərp :süd yarası aşkar edilir.Bu bilavasitə nəyə səbəb olur.",
        options: ["Bədən temperaturunun yüksəlməsinə", "Sidik ifrazının pozulmasına", "Tənəffüsün tezləşməsinə", "Əmmənin çətinləşməsinə", "Defekasiya aktının tezləşməsinə"],
        correct: 3
    },
    // Question 488
    {
        question: "Uşağın ilk qidası olan ağız südünün (molozivo) yetişmiş südə nisbətən üstünlüyü nədir?",
        options: ["tərkibində karbohidrat azdır", "tərkibində fermentlər çoxdur", "tərkibində immunoqlobulinlərin miqdarı çoxdur", "tərkibində yağlar azdır", "tərkibində zülal azdır"],
        correct: 2
    },
    // Question 489
    {
        question: "Təbii qidalanan 6 aylıq uşaq doymursa ana südünü əvəzedici nə vermək olar?",
        options: ["Sadə qarışıqlar verilir", "Adaptaolunmuş qarışıqlar", "5% qlükoza məhlulu", "Yalnız ana südü verilir", "Çay,su"],
        correct: 1
    },
    // Question 490
    {
        question: "Südəmər uşaq necə qidalanmalıdır?",
        options: ["4 saatdan bir", "6 saatdan bir", "3 saatdan bir", "2 saatdan bir", "Uşaq tələbatına görə, sərbəst qidalanır"],
        correct: 4
    },
    // Question 491
    {
        question: "Uşaq nə vaxta qədər ana südü ilə qidalanmalıdır?",
        options: ["3 ayadək", "1 yaşınadək", "9 ayadək", "6 ayadək", "1,5-2 yaşınadək"],
        correct: 4
    },
    // Question 492
    {
        question: "Südəmər uşaq əmizdirdikdən sonra qusursa nə etməli?",
        options: ["Üfüqi vəziyyətdə tutub sonra böyrü üstə uzandırılır", "Su verilir,qarına isitqac qoyulur", "Şaquli vəziyyətdə tutub sonra böyrü üstə uzandırılır", "İmalə edilir", "Dərmanlar təyin edilir"],
        correct: 2
    },
    // Question 493
    {
        question: "6 aylığına kimi uşağın qidalanması üçün ən optimal qidalanma üsulu hansıdır?",
        options: ["Təbii,qarışıq", "Süni", "Təbii", "Qarışıq", "Süni,qarışıq"],
        correct: 2
    },
    // Question 494
    {
        question: "Tənzimləyici qidalara hansı qidalar aiddir?",
        options: ["Adaptaolunmuş qarışıqlar", "İnək südü", "Sadə qarışıqlar", "Meyvə və tərəvəz şirələri, kəsmik, yumurta sarısı", "Ana südü"],
        correct: 3
    },
    // Question 495
    {
        question: "Əlavə qida uşağın hansı ayından təyin edilir?",
        options: ["5 ayından", "12 ayından", "6 ayından", "4 ayından", "10 ayından"],
        correct: 2
    },
    // Question 496
    {
        question: "Aşağıdakı qidalardan hansı əlavə qidaya aiddir?",
        options: ["Kəsmik,yumurta sarısı", "Sıyıqlar, tərəvəz püresi, qatıq", "Ət əzməsi", "Yumurta sarısı,qatıq", "Ət bulyonu,kəsmik"],
        correct: 1
    },
    // Question 497
    {
        question: "Raxit xəstəliyi olan və südə allergiyası olan uşaqlar üçün sıyıqlar necə hazırlanır?",
        options: ["Ət bulyonunda", "Süddə", "Tərəvəz həlimində və ya suda", "Düyü həlimində", "Toyuq bulyonunda"],
        correct: 2
    },
    // Question 498
    {
        question: "Hansı uşaqlarda tərəvəz püresi daha erkən müddətdə təyin edilir?",
        options: ["Hipotrofiyalı uşaqlara", "Əkiz doğulmuşlara", "Kesəriyyə əməliyyatı ilə doğulmuş uşaqlara", "Bətndaxili zədələnməsi olan uşaqlara", "Raxit, anemiyası olan uşaqlara, yarımçıq doğulmuşlara"],
        correct: 4
    },
    // Question 499
    {
        question: "Sadə qarışıqlar nə ilə hazırlanır?",
        options: ["Kəsmik və düyü həlimi ilə", "Düyü həlimi və qatıqla, düyü həlimi və südlə", "Tərəvəz həlimi və düyü həlimi ilə", "Mannı yarması və su ilə", "Qatıq və südlə"],
        correct: 1
    },
    // Question 500
    {
        question: "Süni qidalanmaya keçməyin səbəbi ola bilməz?",
        options: ["Yarımçıq doğulmuş uşaq", "Ana südünün çox olması", "Ana südünün yararsız olması", "Uşağın inkişaf qüsurları", "Ana südünün olmaması"],
        correct: 1
    },
    // Question 501
    {
        question: "Doğulduqdan sonra yeni doğulma dövrü hansı müddət hesab edilir?",
        options: ["4 ayadək", "10 ayadək", "1 ayadək", "2 ayadək", "3 ayadək"],
        correct: 2
    },
    // Question 502
    {
        question: "Uşaqda raxit xəstəliyinin yaranmasının səbəbi ?",
        options: ["A vitamininin çatışmazlığı", "Dəmir çatışmazlığı", "C vitaminin çatışmazlığı", "D vitamininin çatışmazlığı", "B qrup vitaminlərinin çatışmazlığı"],
        correct: 3
    },
    // Question 503
    {
        question: "Spazmofiliyaya uşağın hansı yaşlarında təsadüf edilir?",
        options: ["1,5-2 yaşadək", "3 yaşdan yuxarı", "5-7 yaşadək", "4 yaşadək", "6 ayadək"],
        correct: 0
    },
    // Question 504
    {
        question: "İsitqacın yerli təsiri hansıdır?.",
        options: ["Qan dövranını yaxşılaşdırır,iltihabı prosesin sorulmasına kömək edir", "Damarı daraldır.", "Dərini oyadır, qan dövranını yaxşılaşdırır", "Qanaxamanı dayandırır.", "Bədəni soyudur, iltihabı prosesin sorulmasına kömək edir"],
        correct: 0
    },
    // Question 505
    {
        question: "Qanda şəkərin artması necə adlanır ?",
        options: ["Hipoqlikemiya", "Leykopeniya", "Hipoqlükozuriya", "Hiperqlikemiya", "Hiperqlükozuriya"],
        correct: 3
    },
    // Question 506
    {
        question: "Şəkərli diabet hansı üzvün hipofunksyasının nəticəsidir?",
        options: ["Mədəaltı vəzin", "Böyrəyin", "Dalağın", "Hipofizin", "Qaraciyərin"],
        correct: 0
    },
    // Question 507
    {
        question: "Qızılcanın aktiv immunizasiyası nə ilə aparılır?",
        options: ["Askorbin turşusu", "İnsan immunoqlobulini", "Tuberkulin", "BCJ ilə", "Diri qızılca vaksini"],
        correct: 4
    },
    // Question 508
    {
        question: "Bronxial astmalı xəstə tutmalar zamanı hansı məcburi vəziyyət alır?",
        options: ["Ayaq üstə dayanır", "Əlləri dayaq verməklə məcburi oturaq vəziyyət", "Arxası üstə uzanmaq", "Sol tərəf üstə uzanır", "Sağ tərəf üstə uzanır"],
        correct: 1
    },
    // Question 509
    {
        question: "Anafilaktik şok nədir ?",
        options: ["Arterial təzyiqin düşməsi", "Dərman preparatlarının təsirindən əmələ gələn reaksiya", "Arterial təzyiqin qalxması", "Bradikardiya", "Taxikardiya"],
        correct: 1
    },
    // Question 510
    {
        question: "İnağ nədir?",
        options: ["Təngnəfəslik", "Hipotermiya", "Hərarətin artması", "Öskürək", "Boğulma"],
        correct: 4
    },
    // Question 511
    {
        question: "Yalançı inaq tutmasında ilk yardım nədən ibarətdir ?",
        options: ["Vitaminlər, xardal yaxması", "Ürək dərmanları ,ayağa isti vanna", "Antibiotiklər,vitaminlər", "Antihistamin preparatlar", "Təmiz hava , ayağa isti vanna , xardal yaxması"],
        correct: 4
    },
    // Question 512
    {
        question: "Kollaps nədir ?",
        options: ["Mübadilə pozğunluğu", "Böyrək çatışmazlığı", "Kəskin damar çatışmazlığı", "Qaraciyər çatışmazlığı", "Qida çatışmazlığı"],
        correct: 2
    },
    // Question 513
    {
        question: "Alimentar anemiyaya uşaq yaşının hansı dövründə rast gəlinir?",
        options: ["Südəmər dövrdə", "1-3 yaşlı uşaqlarda", "Məktəb yaşında", "3 yaşdan böyük uşaqlarda", "Yeni doğulma dövründə"],
        correct: 0
    },
    // Question 514
    {
        question: "Uşaqlarda enterebiozu nə törədir ?",
        options: ["Askarid", "Lyamblya", "Bizquyruqlar", "Trixosefolioz", "Öküz soliteri"],
        correct: 2
    },
    // Question 515
    {
        question: "Eksudativ -- kataral diatez nədir ?",
        options: ["Bədən quruluşunun anomaliyasıdır.", "Sərbəst xəstəlikdir.", "Sindromdur.", "Dəri allergiyasıdır", "Sağlam vəziyyətdir"],
        correct: 2
    },
    // Question 516
    {
        question: "Yenidoğulmuşların asfiksiyası zamanı ilk tədbir olaraq nə etmək lazımdır ?",
        options: ["Oksigen", "Süni tənəffüs", "Ürəyin masajı", "Ağciyərin süni ventilyasiyası", "Yuxarı tənəffüs yollarının sanasiyası"],
        correct: 4
    },
    // Question 517
    {
        question: "Daun xəstəliyi olan uşaqların görkəmi necə olur ?",
        options: ["Boyunda qanadvari büküşlər , gödək boyunluluq olur.", "Qısa boyun , ayaqlarda , baldırda limfotik ödem olur.", "Sarılıq, splenomeqaliya olur.", "Göz yarığı çəp , ovucda köndələn çatlar , ağız açıq olur , dil böyük olub ağızdan kənara çıxır", "Əqli inkişafın pozğunluğu , ekzema əlamətləri olur"],
        correct: 3
    },
    // Question 518
    {
        question: "Uşaqlarda zəhərlənmədə ilk yardım nədən ibarətdir ?",
        options: ["Mədə-bağırsağın yuyulması", "Vitaminlər", "Antibiotiklər", "Ürək qlikozidləri", "Çay -- su fasiləsi"],
        correct: 0
    },
    // Question 519
    {
        question: "Uşağın ağız boşluğunu hansı barmaqla yoxlamaq olar?",
        options: ["baş barmaqla", "çeçələ barmaqla", "ikinci barmaqla", "şəhadət barmaqla", "orta barmaqla"],
        correct: 1
    },
    // Question 520
    {
        question: "Hipertermik sindrom zamanı uşağı soyuq suda isladılmış dəsmala bükmək üçün suyun temperaturu neçə dərəcə olmalıdır?",
        options: ["35°", "25°", "30°", "27°", "20°"],
        correct: 4
    },
    // Question 521
    {
        question: "Uşaqlarda tənəffüs yollarının obstruksiyasını yaradan səbəb daha çox aşağıdakılardan hansı ola bilər?",
        options: ["qırtlağın şişi", "larinqospazm", "qusma", "yad cisim", "larinqotraxeit"],
        correct: 3
    },
    // Question 522
    {
        question: "Dəm qazı ilə zəhərlənmə zamanı ilkin əlamətlər hansılardır?",
        options: ["ürək bulanma, qusma, qarında ağrılar, baş ağrısı", "mədə və qida borusunda kəskin ağrı, qanla qarışıq qusma, ümumi zəiflik", "gözün selikli qişasının və nəfəs yollarının qıcıqlanması", "bayılma, huşun itməsi, sayıqlama əlamətləri", "ümumi zəiflik hissi, alın və gicgah nahiyəsində ağrı,qulaqda ağırlıq hissiyyatı"],
        correct: 4
    },
    // Question 523
    {
        question: "Bayılma zamanı uşağa hansı vəziyyət verilməlidir ?",
        options: ["Arxası üstə uzandırmaq", "Ayaqlarını sallayaraq oturtmaq", "Uşağı uzadaraq ayaqlarını qaldırmaq", "Böyrü üstə uzandırmaq", "Başını qaldıraraq uzandırmaq"],
        correct: 2
    },
    // Question 524
    {
        question: "Hipertermik sindrom zamanı uşağın bədən temperaturu neçə dəqiqədən bir ölçülməlidir?",
        options: ["90-120 dəq", "60-90 dəq", "15-20 dəq", "20-25 dəq", "30-60 dəq"],
        correct: 4
    },
    // Question 525
    {
        question: "Hemofiliya xəstəliyi zamanı uşağa əsas preparatlar necə yeridilir?",
        options: ["Dəriiçi", "Peroral", "Dərialtı", "Əzələdaxili", "Damardaxili"],
        correct: 4
    },
    // Question 526
    {
        question: "Hemofiliya xəstəliyi olan uşaq soyuqlayarsa hansı dərmanı vermək olmaz?",
        options: ["Antibiotiklər", "Dimedrol", "Mukaltin", "Askorbin turşusu", "Asetilsalisil turşusu"],
        correct: 4
    },
    // Question 527
    {
        question: "Tetanus əleyhinə anatoksin nə üçün vurulur ?",
        options: ["Passiv immunitet yaratmaq üçün", "Aktiv immunitet yaratmaq üçün", "Sepsisin qarşısını almaq üçün", "Hepatit B-nin qarşısını almaq üçün", "İltihabı prosesi aradan qaldırmaq üçün"],
        correct: 1
    },
    // Question 528
    {
        question: "Yenidoğulmuşların palatasında havanın temperaturu neçə dərəcə olmalıdır.?",
        options: ["22-23", "24-25", "25-26", "18-20", "20-21"],
        correct: 0
    },
    // Question 529
    {
        question: "Uşaq praktikasında ən çox istifadə olunan hərarət salıcı dərman hansıdır ?",
        options: ["Parasitamol", "Pipolfen", "Analgin", "Dimedrol", "Baralgin"],
        correct: 0
    },
    // Question 530
    {
        question: "Uşaqlarda mədəni bir dəfəyə yumaq üçün nə qədər su tələb olunur?",
        options: ["10 ml/kq", "4 ml/kq", "5 ml/kq", "1 ml/kq", "2 ml/kq"],
        correct: 1
    },
    // Question 531
    {
        question: "Yenidoğulmuşlar üçün hansı zonddan isitfadə olunur?",
        options: ["17 f -18 f", "5 f -8 f", "16 f -17 f", "14 f -15 f", "12 f -13 f"],
        correct: 1
    },
    // Question 532
    {
        question: "Fimoz nədir?",
        options: ["Pülük dəliyinin əzilməsi", "Sidikliyin şişi", "Pülük dəliyinin iltihabı", "Pülük dəliyinin daralması", "Sidik ifrazat kanalının sıxılması"],
        correct: 3
    },
    // Question 533
    {
        question: "Uşaqlarda revmatizm zamanı oynaqların zədələnməsi necə xarakterizə olunur?",
        options: ["Diz qapaqlarının şişməsi baş verir", "Kiçik oynaqların zədələnməsi baş verir", "Oynaqlarda şişginlik, ağrı və bunun uçucu xarakterdə olması", "Böyük oynaqların eriteması baş verir", "Oynaqların davamlı deformasiyası olur"],
        correct: 2
    },
    // Question 534
    {
        question: "Raxit xəstəliyi zamanı uşaqlarda hansı əlamət olur?",
        options: ["O şəkilli və X-ə bənzər ayaqlar", "Kifoz", "Hemartroz", "Artrit", "Sınıqlar"],
        correct: 0
    },
    // Question 535
    {
        question: "Furozalidon və metronidozolla uşaqlarda hansı xəstəliyin spesifik müalicəsi aparılır?.",
        options: ["Enterobiozun", "Trixosefalyozun", "Lyambliozun", "Tenidozun", "Askaridozun"],
        correct: 2
    },
    // Question 536
    {
        question: "Yenidoğulmuşlarda sepsisin əmələ gəlmə səbəbi hansıdır?",
        options: ["Sklerema", "Hemangioma", "Yenidoğulmuşun qovuqcuqlu xəstəliyi", "Bişməcə", "Allergik dermatit"],
        correct: 2
    },
    // Question 537
    {
        question: "Uşaqlar ən çox hansı yaşda məxmərək xəstəliyinə yoluxur?",
        options: ["6-8", "8-10", "7-8", "10-14", "1-7"],
        correct: 4
    },
    // Question 538
    {
        question: "Polimorfizm (Ləkə-papula-vezikula-qabıq) hansı xəstəlik üçün xarakterikdir?",
        options: ["Su çiçəyi", "Məxmərək", "Skarlatina", "Difteriya", "Qızılca"],
        correct: 0
    },
    // Question 539
    {
        question: "Epidemik parotit zamanı baş verən ikitərəfli orxit nəyə səbəb olur ?",
        options: ["Kişi sonsuzluğuna", "Sistitə", "Pielonefritə", "Qlomerulonefritə", "Meningitə"],
        correct: 0
    },
    // Question 540
    {
        question: "Hepatit keçirmiş uşaq stasionardan sonra neçə ay nəzarətdə olmalıdır ?",
        options: ["3 ay", "6 ay", "5 ay", "2 ay", "4 ay"],
        correct: 0
    },
    // Question 541
    {
        question: "Uşaqda hiperqlikemik komada ilk yardım nədən ibarətdir?",
        options: ["Spazmolitiklər", "Vitaminlər", "Antihistaminlər", "İnsulin", "Qlükoza"],
        correct: 3
    },
    // Question 542
    {
        question: "Uşaqda hipoqlikemik komada ilk yardım nədən ibarətdir?",
        options: ["Vitaminlər", "Qlükoza", "Spazmolitiklər", "Antihistaminlər", "İnsulin"],
        correct: 1
    },
    // Question 543
    {
        question: "Yenidoğulmuşun asfiksiyası zamanı ilk yardım nədən ibarətdir?",
        options: ["Ürəyin qapalı masajı", "Yuxarı tənəffüs yollarının keçiriciliyinin bərpa edilməsi", "Süni tənəffüsün verilməsi", "Oksigen verilməsi", "Ürəyin açıq masajı"],
        correct: 1
    },
    // Question 544
    {
        question: "Hemofiliya xəstəliyinin yaranmasına nə səbəb olur ?",
        options: ["Laxtalanmanın pozulması", "Disbakterioz", "Dəmir-defisitli anemiya", "Vitamin çatışmazlığı", "Hemoqlobinin azalması"],
        correct: 0
    },
    // Question 545
    {
        question: "Eksudativ-kataral diatezin yaranmasının əsas səbəbi hansıdır?",
        options: ["Gigiyenik qaydaların pozulması", "Zülal çatışmazlığı", "Vitamin çatışmazlığı", "İnfeksion xəstəliklər", "Fermentativ çatışmazlıq"],
        correct: 4
    },
    // Question 546
    {
        question: "Eksudativ-kataral diatezin müalicəsində hansı təsirə malik dərmanlardan istifadə edilir?",
        options: ["Ürək qlikozidləri", "Hipotenziv preparatlar", "Diuretiklər", "Antihistamin", "Antimikrob"],
        correct: 3
    },
    // Question 547
    {
        question: "Larinqospazmın təhrik edilməsi nə vaxt daha tez-tez baş verir?",
        options: ["Yuxuda", "Ürəkbulanma zamanı", "Uşaq qışqırıqla ağladıqda", "Yemək zamanı", "Maye qəbul etdikdə"],
        correct: 2
    },
    // Question 548
    {
        question: "Kəskin qastrit zamanı uşaqlarda hansı əlamətlər baş verir?",
        options: ["Hərarətin qalxması", "Epiqastral nahiyyədə ağrı,qusma", "Baş ağrısı,mədə bulanması", "A/T (arterial təzyiqin)artması", "A/T (arterial təzyiqin ) enməsi"],
        correct: 1
    },
    // Question 549
    {
        question: "Anadangəlmə ürək qüsuru ilə doğulmuş uşağın görünüşü necə olur?",
        options: ["Sianoz, təngənəfəslik, göyərmə", "Qıcolma", "Huşsuzluq, A/T-in düşməsi", "Hərarət", "Bayılma"],
        correct: 0
    },
    // Question 550
    {
        question: "Hansı xəstəlik zamanı arxa boyun limfatik vəziləri palpasiya edilir(əllənir)?",
        options: ["Raxit", "Qızılca", "Meningit", "Məxmərək", "Hepatit B"],
        correct: 3
    },
    // Question 551 (Note: The question number 551 seems to be missing in the original text, so I'll use the next available)
    {
        question: "Uşağa oksigen hansı formada verilir?",
        options: ["təmiz oksigen", "ağızdan-buruna", "nəmləşdirilmiş oksigen", "ağızdan-ağıza", "quru oksigen"],
        correct: 2
    },
    // Question 552
    {
        question: "Yenidoğulmuşlarda böyük əmgək hansı sümüklərin arasında yerləşir?",
        options: ["Böyük əmgək bağlanmış olur", "Təpə sümükləri arasında", "Təpə və alın sümükləri arasında", "Ənsə və təpə sümükləri arasında", "Alın və ənsə sümükləri arasında"],
        correct: 2
    },
    // Question 553
    {
        question: "Uşaqlarda raxit hansı vitamin çatışmazlığı nəticəsində yaranır ?",
        options: ["D vitamin", "A vitamini", "B vitamini", "C vitamini", "E vitamini"],
        correct: 0
    },
    // Question 554
    {
        question: "Uşaqlarda tərləmə, ənsə nahiyəsində tükün tökülməsi hansı xəstəlik zamanı baş verir?",
        options: ["Spazmofiliya", "Raxit", "Dəri xəstəlikləri", "Diatezdə", "Bişməcə"],
        correct: 1
    },
    // Question 555
    {
        question: "Hipotireoz hansı üzvün funksional çatışmazlığıdır?",
        options: ["Qalxanvari vəzinin", "Mədəaltı vəzin", "Timus vəzin", "Hipofiz vəzinin", "Böyrəküstü vəzin"],
        correct: 0
    },
    // Question 556
    {
        question: "Dəmir defisitli anemiyanın kliniki əlamətləri nədir?",
        options: ["Qusma, ishal olur, qara ciyər böyüyür", "Ümumi zəiflik stomatit, qlosst,disper əlamətləri olur", "Dəri quru olur qabıq verir, tük tez tökülür, belə uşaq təbaşir, torpaq yeyir", "Dəri və selikli qişalar solğun, qansızmalar və s", "Dəri sarı və boz rəngdə olur, dalaq böyüyür"],
        correct: 2
    },
    // Question 557
    {
        question: "Bətndaxili inkişaf dövrü neçə həftə davam edir.",
        options: ["12 -16", "30 -35", "20-30", "38-40", "28 -30"],
        correct: 3
    },
    // Question 558
    {
        question: "Təmizləyici imalə zamanı uşağın vəziyyəti necə olmalıdır ?",
        options: ["Oturaq vəziyyətdə", "Sağ böyrü və ya arxası üstə", "Qarnı üstə", "Sol böyrü və ya arxası üstə uzadılır", "Sağ böyrü üstə"],
        correct: 3
    },
    // Question 559
    {
        question: "Helmintozların diaqnozu nəyə əsasən qoyulur ?",
        options: ["Nəcisin ümumi müayinəsinə", "Sidiyin müayinəsinə", "Qanın biokimyəvi müayinəsinə", "Qanın müayinəsinə", "Nəcisin bakterialoji müayinəsinə"],
        correct: 0
    },
    // Question 560
    {
        question: "Uşaq bayılarkən nə etmək lazımdır?",
        options: ["Qlükoza, sulfanilamid preparatlar yeritmək", "Vitaminlər vermək", "Antihistaminlər vermək", "Antibiotiklər yeritmək", "Naşatır spirti iylətmək ,kofein, mezaton, kardiamin vermək"],
        correct: 4
    },
    // Question 561
    {
        question: "Doğulduqdan sonra Hepatit B-yə qarşı ilk peyvənd nə vaxt vurulur?",
        options: ["İlk 24 saat ərzində", "Bir gün sonra", "İlk 6 saat ərzində", "İlk 12 saat ərzində", "İki gün sonra"],
        correct: 3
    },
    // Question 562
    {
        question: "Yenidoğulmuşa gigiyenik vanna nə vaxt təyin olunur ?",
        options: ["Doğulandan 8 saat sonra", "Göbək yarası sağalmamış", "İlk patronajdan sonra", "Göbək yarası sağalandan sonra", "Doğulan kimi"],
        correct: 3
    },
    // Question 563
    {
        question: "Ilk patronaj nə vaxt aparılır?",
        options: ["Doğum evindən evə yazılandan bir həftə sonra", "Doğum evindən evə yazılandan 10 gün sonra", "Doğum evindən evə yazılandan sonra 3 gün ərzində", "Doğum evindən evə yazılandan bir ay sonra", "Doğulan kimi"],
        correct: 2
    },
    // Question 564
    {
        question: "Xardal yaxması qoyarkən nəyə fikir verilməlidir ?",
        options: ["Vəziyyətin ağırlığına görə", "Sümük sisteminin vəziyyətinə", "Dərinin vəziyyətinə və həssaslığına", "Vəziyyıtinə və yaşına görə", "Sinir sisteminin vəziyyətinə"],
        correct: 2
    },
    // Question 565
    {
        question: "Hipoksiyanın qısa müddətli dölə təsirindən nə qeyd olunur?",
        options: ["Apnoe", "Taxikardiya", "Bradikardiya", "Taxipnoe", "Bradipnoe"],
        correct: 1
    },
    // Question 566
    {
        question: "Eksikoz dedikdə nə başa düşülür?",
        options: ["Qan çatmamazlığı", "A/T (arterial təzyiqin)düşməsi", "Qusma", "İshal", "Susuzluq"],
        correct: 4
    },
    // Question 567
    {
        question: "Südəmər uşaqlarda hipotrofiya (çəkinin normadan az olması) nə zaman baş verir?",
        options: ["Qan azlığı olduqda", "Mədə-bağırsaq pozğunluğu olduqda", "Süni qidalanma zamanı", "Vitamin çatmamazlığı olduqda", "Xroniki qida pozğunluğu olduqda"],
        correct: 4
    },
    // Question 568
    {
        question: "Süd yarasının törədicisi nədir?",
        options: ["Viruslar", "Göbələklər", "Koklar", "Strepfokoklar", "Stafilakoklar"],
        correct: 1
    },
    // Question 569
    {
        question: "Uşaqlarda yalançı inağ tutması zamanı hansı əlamətlər baş verir?",
        options: ["Qusma, ishal", "Hərarət", "Sianoz", "Hürücü öskürək, boğulma, tənəffüzün çətinləşməsi", "Baş ağrısı"],
        correct: 3
    },
    // Question 570
    {
        question: "Uşaq üçün duodenal zondun uzunluğu necə təyin ounur?",
        options: ["Dildən göbəyə qədər", "Döş sümüyündən göbəyə qədər", "Dişdən göbəyə qədər", "Qaş arasından göbəyə qədər", "Burundan göbəyə qədər"],
        correct: 3
    },
    // Question 571
    {
        question: "Yenidoğulmuş uşağın əmizdirilmə müddəti maksimum necə dəqiqə olmalıdır?",
        options: ["20-30", "50", "40", "15-20", "60"],
        correct: 0
    },
    // Question 572
    {
        question: "Qazanılma ürək qüsurları hansı xəstəlikdən sonra əmələ gəlir?",
        options: ["Revmatizm", "Qlaukoma", "Anemiya", "İrsi xəstəliklər", "Pnevmoniya"],
        correct: 0
    },
    // Question 573
    {
        question: "Revmatizm zamanı uşaqda hansı üzv zədələnir?",
        options: ["Dalaq", "Qaraciyər", "Bağırsaq", "Ürək", "Böyrək"],
        correct: 4
    },
    // Question 574
    {
        question: "Sidiklə xaric olan şəkərə görə insulin hansı miqdarda təyin olunur ?",
        options: ["4-5 qr", "6-8 qr", "5-10 qr", "2-4 qr", "10-15 qr"],
        correct: 0
    },
    // Question 575
    {
        question: "Yenidoğulmuşlarda böyük əmgək hansı formada olur?",
        options: ["Oval formada", "Üçbucaq formasında", "Dairə şəklində", "Romb şəklində", "Bağlı olur"],
        correct: 3
    },
    // Question 576
    {
        question: "Peyvənd otağında vaksinlər saxlanan soyuducularda temperatur neçə dəfə yoxlanılır?",
        options: ["Günaşırı", "Gündə 2 dəfə, səhər işin əvvəlində və axşam iş qurtaranda", "Gündə 1 dəfə", "Temperaturu yoxlamağa ehtiyac yoxdur", "Həftədə 1 dəfə"],
        correct: 1
    },
    // Question 577
    {
        question: "Həll edilmiş AGDT ( göy öskürək, difteriya, tetanus əleyhinə) vaksinin istifadə müddəti nə qədərdir ?",
        options: ["7 günədək", "2-3 saat", "5 günədək", "1 gün", "Vaxt məhdudiyyəti yoxdur"],
        correct: 2
    },
    // Question 578
    {
        question: "Yenidoğulmuşlarda təmizləyici imalə nə vaxt aparılır?",
        options: ["Öskürək olduqda", "Dispeptik əlamətlər olduqda", "Hipotermiya olduqda", "Qusma olduqda", "Qarında ağrı olduqda"],
        correct: 1
    },
    // Question 579
    {
        question: "Yenidoğulmuşların göbək qalığı necə işlənməlidir? 1) 3 % perekis 2) 70 % spirt 3) 5 % kalium permanqanat 4) 0, 5 %-li natrium sulfasil 5) 5 % -li natrium xlorid 6) 2 %-li natrium bikarbonat",
        options: ["1, 2, 3", "3, 4, 5", "2, 5, 6", "4, 5, 6", "1, 4, 5"],
        correct: 0
    },
    // Question 580
    {
        question: "1 yaşda uşağın neçə dişi olmalıdır?",
        options: ["10", "8 (n-4)", "7", "6", "4"],
        correct: 1
    },
    // Question 581
    {
        question: "Yenidoğulmuşlar döşə ilk dəfə nə vaxt qoyulmalıdır?",
        options: ["Doğulduqdan 12 saat sonra", "Doğulduqdan 3 saat sonra", "Doğulduqdan 1 saat sonra", "Doğulduqdan dərhal sonar", "Doğulduqdan 6 saat sonra"],
        correct: 3
    },
    // Question 582
    {
        question: "Raxit xəstəliyinin profilaktikasına nə vaxt başlamaq lazımdır?",
        options: ["5 ayından", "1 yaşından", "Uşaq doğulan kimi", "Ana bətnindən", "6 ayından"],
        correct: 3
    },
    // Question 583
    {
        question: "Tutmaşəkilli spazmatik öskürək hansı xəstəlik üçün xarakterikdir?",
        options: ["Epidemik parotit", "Qızılca", "Su çiçəyi", "Rinovirus infeksiyası", "Göy öskürək"],
        correct: 4
    },
    // Question 584
    {
        question: "Spazmofiliya xəstəliyinin xarakter simptomu hansıdır?",
        options: ["Qansızma", "Şişkinlik", "Qanaxma", "Qəbzlik", "Qıcolma"],
        correct: 4
    },
    // Question 585
    {
        question: "Hansı xəstəlikdə uşaqlarda bədənin bütün əzələlərində tonik-klonik qıcolmalar olur?",
        options: ["Difteriya", "Qızılca", "Spazmofiliya", "Dizenteriya", "Skarlatina"],
        correct: 2
    },
    // Question 586
    {
        question: "Uşaqları difteriya xəstəliyindən qorumaq üçün nə etməli?",
        options: ["Vitaminoterapiya", "Fizioterapiya", "Antibiotikoterpiya", "Hormonterapiya", "Aktiv immunizasiya"],
        correct: 4
    },
    // Question 587
    {
        question: "Tibb bacısı yenidoğulmuşlara neçə dəfə patronaja getməlidir?",
        options: ["2 ayda 1 dəfə", "2 həftədən bir", "Ayda 1 dəfə", "Həftədə 2 dəfə", "Həftədə 1 dəfə"],
        correct: 4
    },
    // Question 588
    {
        question: "Tibb bacısı 1 yaşdan 2 yaşa qədər uşaqlara neçə dəfə patronaja getməlidir?",
        options: ["ildə 1 dəfə", "3 aydan bir", "6 aydan bir", "Ayda 1 dəfə", "2 aydan bir"],
        correct: 3
    },
    // Question 589
    {
        question: "Uşaqların profilaktik peyvənd kitabçası hansıdır?",
        options: ["F- 063", "F- 112", "F-030", "F-286", "F-75 a"],
        correct: 0
    },
    // Question 590
    {
        question: "Uşaqların inkişaf kitabçası hansıdır?",
        options: ["F - 286", "F -116", "F- 75 a", "F- 112", "F-114"],
        correct: 3
    },
    // Question 591
    {
        question: "Uşaqlarda böyük əmgək neçə ayında bağlanır?",
        options: ["4-7", "8-11", "12-15", "8-9", "9-10"],
        correct: 2
    },
    // Question 592
    {
        question: "Uşaqlarda gecə sidiyi saxlaya bilməmək necə adlanır ?",
        options: ["Anuriya", "Oliqouriya", "Enurez", "Proteinuriya", "Qlikozuriya"],
        correct: 2
    },
    // Question 593
    {
        question: "Uşağı döşdən nə zaman ayırmaq məsləhətdir?",
        options: ["Uşaq xəstələndikdə", "Uşağın çəkisi artmadıqda", "İlin isti aylarında", "İlin soyuq aylarında", "Yoluxucu xəstəliklə kontaktda olduqda"],
        correct: 3
    },
    // Question 594
    {
        question: "Neçə həftəliyində doğulmuş uşaq vaxtında doğulmuş hesab edilir?",
        options: ["32-34", "38-39", "35-37", "28-30", "38-42"],
        correct: 4
    },
    // Question 595
    {
        question: "Uşaq necə aylığında başını saxlamağa başlayır?",
        options: ["3-4", "1-2", "7-8", "5-6", "9-10"],
        correct: 1
    },
    // Question 596
    {
        question: "Uşaq necə ayında sərbəst oturur?",
        options: ["2-4", "10-11", "8-9", "6-7", "4-5"],
        correct: 3
    },
    // Question 597
    {
        question: "Südəmər uşaqlarda bir dəqiqədə tənəffüs hərəkətlərinin sayı neçəyə bərabərdir?",
        options: ["20-25", "40-50", "35-40", "55-60", "30-35"],
        correct: 4
    },
    // Question 598
    {
        question: "Döş kifozu uşağın hansı ayında baş verir?",
        options: ["9", "7", "3", "12", "6"],
        correct: 4
    },
    // Question 599
    {
        question: "Uşaqlarda süd dişlərinin sayı hansı formula əsasə təyin olunur?",
        options: ["n-5", "n-1", "n-2", "n-3", "n-4"],
        correct: 4
    },
    // Question 600
    {
        question: "Uşaqlar süd dişlərini hansı yaşda dəyişməyə başlayır?",
        options: ["2-5", "10-11", "7-8", "5-7", "9-10"],
        correct: 3
    },
    // Question 601
    {
        question: "Normal cəkili sağlam uşağa birinci əlavə yemək olaraq nə verilir?",
        options: ["meuvə şirəsi", "düyü həlimi", "kefir", "tərəvəz püresi", "mannı sıyığı"],
        correct: 3
    },
    // Question 602
    {
        question: "6 ayliq uşağa İkinci əlavə qida kimi nə verilir?",
        options: ["düyü həlimi", "qatıq", "Tərəvəz püresi", "Ət kotleti", "Toyuq kotleti"],
        correct: 1
    },
    // Question 603
    {
        question: "Süni qidalanan uşağa ana südünü əvəzedici kimi nə vermək olar?",
        options: ["düyü həlimi", "kefir", "südlü qarışıqlar", "tərəvəz püresi", "meyvə şirəsi"],
        correct: 2
    },
    // Question 604
    {
        question: "Şəkərli diabetlə xəstə olan uşağın qidasından nə çıxarılır?",
        options: ["kefir", "şirniyyat", "yağsız ət", "qarabaşaq", "meyvə"],
        correct: 1
    },
    // Question 605
    {
        question: "Yoluxucu xəstəlik keçirmiş uşaqda hansı formada immunitet yaranır?",
        options: ["aktiv, təbii", "passiv, süni", "aktiv, süni", "yaranmır", "passiv, təbii"],
        correct: 0
    },
    // Question 606
    {
        question: "Kəskin respirator virus infeksiyasından sonra uşaqlarda daha çox hansı ağırlaşma baş verə bilər?",
        options: ["pnevmoniya", "şəkərli diabet", "pielonefrit", "leykoz", "vərəm"],
        correct: 0
    },
    // Question 607
    {
        question: "Uşaq yaşlarında anemiyanın hansı formalarına daha çox rast gəlinir?",
        options: ["hemolitik", "posthemorragik", "vitamindefisitli", "zülaldefisitli", "dəmirdefisitli"],
        correct: 4
    },
    // Question 608
    {
        question: "Yarımçıq doğulmuş uşaqlarda hansı əmgək açıq olur?",
        options: ["böyük, kiçik və yan əmgəklər", "hamısı bağlı olur", "yan əmgəklər", "böyük, yan əmgəklər", "böyük və kiçik"],
        correct: 0
    },
    // Question 609
    {
        question: "Yenidoğulmuşlarda ağır asfiksiya Apqar şkalasına görə necə balla qiymətləndirilir?",
        options: ["4-5", "9-10", "11-12", "6-7", "1-3"],
        correct: 4
    },
    // Question 610
    {
        question: "Boyunun uzunluğu neçə santimetr olan uşaq yarımçıqdoğulmuş sayılır?",
        options: ["53", "45", "47", "49", "50"],
        correct: 1
    },
    // Question 611
    {
        question: "Bişməcənin qarşısını almaq ücün yenidoğulmuşun dərisi nə ilə təmizlənir?",
        options: ["steril bitki yağı ilə", "fizioloji məhlulla", "tetrasiklin məhlulu ilə", "qaynanmış su ilə", "poliqlükin məhlulu ilə"],
        correct: 0
    },
    // Question 612
    {
        question: "Yenidoğulmuşun göbək qalığı adətən neçənci gün düşür?",
        options: ["1-2", "4-5", "3-4", "8-9", "6-7"],
        correct: 1
    },
    // Question 613
    {
        question: "Tibb bacısı poliklinikadan kənarda uşaqda larinqospazm olduğunu görərsə,nə etməlidir?",
        options: ["təcili xəstəxanaya göndərməli", "fizioterapevtik müalicəyə göndərməli", "oksigen verməli", "larinqoskopiya etməli", "ağrıkəsici yeritməli"],
        correct: 0
    },
    // Question 614
    {
        question: "Vərəmin bütün formalarında uşaqda hansı əlamət müşahidə olunur?",
        options: ["döşdə ağrı", "bəlğəmli yaş öskürək", "quru öskürək", "intoksikasiya", "yüksək temperatur"],
        correct: 3
    },
    // Question 615
    {
        question: "Yenidoğulmuş sağlam uşağa BSJ vaksini neçənci gün vurulur?",
        options: ["5-8", "4-7", "9-10", "1-3", "11-12"],
        correct: 1
    },
    // Question 616
    {
        question: "Yenidoğulmuşlarda kefalohematoma zamanı qansızma harada olur?",
        options: ["Beyin maddəsində", "Başın yumşaq toxumasında", "Beynin sərt qişaları arasında", "Sümüklə sümüküslüyü arasında", "Beynin yumuşaq qişaları arasında"],
        correct: 3
    },
    // Question 617
    {
        question: "Qanda şəkəri yoxlamaq üçün uşağı laboratoriyaya nə vaxt göndərmək lazımdır?",
        options: ["yeməkdən 20 dəqiqə sonra", "yeməkdən 30 dəqiqə sonra", "yeməkdən 10 dəqiqə sonra", "yeməkdən 1 saat sonra", "acqarına"],
        correct: 4
    },
    // Question 618
    {
        question: "Su çiçəyi ilə xəstələnmiş uşaqla kontakda olan 3 yaşa qədər uşaq neçənci gündən izolə olunmalıdır?",
        options: ["22-ci gündən 30-cu günəqədər", "1-ci gündən 10-cu günə qədər", "30-cu gündən 40-cı günə qədər", "11-ci gündən 21-ci günə qədər", "izolə olunmur"],
        correct: 3
    },
    // Question 619
    {
        question: "Su çiçəyi səpgilərini işləmək üçün hansı məhluldan istifadə olunur?",
        options: ["dimedrol", "brilyant yaşılı", "yod", "natrium xlorid", "furasilin"],
        correct: 1
    },
    // Question 620
    {
        question: "Uşaqda kəskin otit olduqda tibb bacısı hansı proseduru apara bilər ?",
        options: ["xardal yaxması qoya bilər", "Qulağa qızdırıcı kompres qoya bilər", "Qulağa soyuq kompres qoya bilər", "Antibiotiklərin dozasını artıra bilər", "Antibiotiklər təyin edə bilər"],
        correct: 1
    },
    // Question 621
    {
        question: "Şəkərli diabetlə xəstə uşaq insulin vurulduqdan neçə dəqiqə sonra yemək yeməlidir?",
        options: ["5-10", "15-20", "30-40", "40-50", "50-60"],
        correct: 1
    },
    // Question 622
    {
        question: "Uşaqlarda kəskin qastrit zamanı nə tövsiyyə edilir?",
        options: ["duza qoyulmuş tərəvəz", "yağlı olmayan ət suyu, sıyıqlar", "yumurta, yağlı ət", "kəsmik, qaymaq", "çörək, kolbasa"],
        correct: 1
    },
    // Question 623
    {
        question: "Uşaqda bronxial astma tutması olarsa tibb bacısı nə etməlidir?",
        options: ["yayındırıcı tədbir görməli", "oksigen verməli", "eufillin vurmalı", "antibiotik vurmalı", "vitamin vurmalı"],
        correct: 0
    },
    // Question 624
    {
        question: "Şəkərli diabet xəstəliyi olan uşağın qidasında şəkər nə ilə əvəz edilir?",
        options: ["saxaroza ilə", "bananla", "konfetlə", "mürəbbə ilə", "fruktoza ilə"],
        correct: 4
    },
    // Question 625
    {
        question: "Hipertermik sindrom zamanı uşağa göstərilən təcili tibbi yardıma əks göstəriş nədir?",
        options: ["Dərinin 40-50 % etil spirti ilə silmək", "Litik qarışıq vurmaq", "Kalorili qida", "Böyük damarlar üzərinə buz qovağı qoymaq", "Uşağı soyuq suda islanmış döşəkağına bükmək"],
        correct: 2
    },
    // Question 626
    {
        question: "Tibb bacısı tərəfindən hamilə qadına doğuşa qədər neçə patronaj olmalıdır?",
        options: ["2", "6", "5", "4", "3"],
        correct: 0
    },
    // Question 627
    {
        question: "Uşaq hansı yaşda yeriməyə başlayır?",
        options: ["16-18 ayında", "11-12 ayında", "7-8 ayında", "6-7 ayında", "15-16 ayında"],
        correct: 1
    },
    // Question 628
    {
        question: "Südəmər uşağa ilk əlavə yemək olaraq nə verilməlidir?",
        options: ["Şorbalar", "Meyvə şirəsi", "Mannı sıyığı", "Kefir", "Tərəvəz püresi"],
        correct: 4
    },
    // Question 629
    {
        question: "Uşaqlarda vərəmin bütün kliniki formalarında hansı əlamət müşahidə edilir?",
        options: ["Döşdə ağrı", "İntoksikasiya sindromu", "Kürəkdə ağrı", "Yaş öskürək", "Quru öskürək"],
        correct: 1
    },
    // Question 630
    {
        question: "Südəmər yaş dövründə ilk əlavə yemək hansı ayda verilir?",
        options: ["6 ayında", "2 ayında", "4 ayında", "3 ayında", "7 ayında"],
        correct: 0
    },
    // Question 631
    {
        question: "Südəmər yaşda qida çatışmazlığı nə ilə nəticələnir?",
        options: ["Nəbz vurğuları çoxalır", "Nəcis ifrazı pozulur", "Sidik ifrazı pozulur", "Çəki artımı azalır", "Tənəffüs tezləşir"],
        correct: 3
    },
    // Question 632
    {
        question: "Ana südü ilə qidalanmada əmmə müddətini kim təyin edir?",
        options: ["Uşaq təyin edir", "Tibb bacısı təyin edir", "Süd verən ana təyin edir", "Köməkçi təyin edir", "Həkim təyin edir"],
        correct: 0
    },
    // Question 633
    {
        question: "Hansı çəkidə doğulmuş uşaq orta çəkili hesab edilir?",
        options: ["4000-4500 qr", "3500-4000 qr", "2500-3000 qr", "2000-2500 qr", "3000-3500 qr"],
        correct: 4
    },
    // Question 634
    {
        question: "Yenidoğulmuşda fizioloji çəki itkisi neçənci gün müşahidə edilir?",
        options: ["3-4-cü", "1-2-cü", "8-9-cu", "2-5-cü", "7-8-ci"],
        correct: 0
    },
    // Question 635
    {
        question: "Yenidoğulmuşlarda fizioloji eritema neçə gün davam edir?",
        options: ["1-2", "7-8", "6-7", "5-6", "3-4"],
        correct: 0
    },
    // Question 636
    {
        question: "Yenidoğulmuşlarda konyuqasion(fizioloji) sarılıq neçə gün ərzində itir?",
        options: ["10-15", "4-5", "5-6", "8-10", "3-4"],
        correct: 3
    },
    // Question 637
    {
        question: "Yenidoğulmuşun burun boşluğu nə ilə təmizlənir?",
        options: ["Steril bitki yağında isladılmış pambıq çöplə", "Quru pambıq çöplə", "Tənzif kürəciklərlə", "Suda isladılmış çöplə", "Pambıq kürəciklərlə"],
        correct: 0
    },
    // Question 638
    {
        question: "Erkən yaşlı uşaqlarda xarici qulaq keçəcəyinin təmizlənməsində nədən istifadə edilir?",
        options: ["Quru pambıq çöplər", "Steril bitki yağında isladılmış pambıq çöplər", "Suda isladılmış kürəciklər", "Pambıq kürəciklər", "Tənzif kürəciklər"],
        correct: 0
    },
    // Question 639
    {
        question: "Südəmər uşaqlarda kəskin rinit zamanı əmizdirmədən əvvəl buruna damargenəldici damcının tökülməsində məqsəd nədir?",
        options: ["Bağırsaq peristaltikasını artırmaq", "Burun selikli qişasının ödemini artırmaq", "Bədən hərarətini azaltmaq", "Burunun selikli qişasında ödemi azaltmaq", "Qarında köpü azaltmaq"],
        correct: 3
    },
    // Question 640
    {
        question: "Uşaqda həzm sistemi orqanları xəstəliklərində ilk xəbərdaredici əlamət hansıdır?",
        options: ["İştahanın pozulması", "Qarında köp", "Yuxunun pozulması", "Dispeptik əlamətlər", "Qarında ağrı"],
        correct: 4
    },
    // Question 641
    {
        question: "Uşaqda mədə xorası zamanı qida rasionundan nə çıxarılır?",
        options: ["Süd,kəsmik", "Südlü sıyıqlar", "Ət və balıq bulyonu", "Zeytun yağı", "Kərə yağı"],
        correct: 2
    },
    // Question 642
    {
        question: "Uşaqda mədə bağırsaq qanaxması zamanı tibb bacısının ilk tədbiri nədir?",
        options: ["Mədəni aminkapron turşusu ilə yumaq", "Bağırsaqları təmizləmək", "Uşağı tez stasionara çatdırmaq", "Uşağa duru qida vermək", "Uşağa coxlu maye vermək"],
        correct: 2
    },
    // Question 643
    {
        question: "Uşaqda defekasiya aktını ləngidən qidalar hansılardır?",
        options: ["Əzilmiş qidalar", "Qazlı mineral sular", "Müxtəlif şorbalar", "Müxtəlif sıyıqlar", "Çox şirniyyat qəbulu"],
        correct: 4
    },
    // Question 644
    {
        question: "Uşaqda defekasiya aktını normallaşdıran qidalar hansılardır?",
        options: ["Tünd çay", "Qara çörək, tərəvəz", "Düyü həlimi", "İsti su", "Sıyıqlar"],
        correct: 1
    },
    // Question 645
    {
        question: "Vaxtından əvvəl doğulmuş uşaq üçün ən ideal dəyərli qida nədir?",
        options: ["Kefir", "İnək südü", "Ana südü", "Adaptə olunmuş qarışıqlar", "Keçi südü"],
        correct: 2
    },
    // Question 646
    {
        question: "Hamiləliyin neçə həftəsindən əvvəl doğulan uşaq vaxtından əvvəl doğulmuş sayılır?",
        options: ["41", "40", "37", "39", "42"],
        correct: 2
    },
    // Question 647
    {
        question: "Yeni doğulma dövründə sepsisə səbəb olan giriş qapısı hansıdır?",
        options: ["Dəri", "Göbək yarası", "Konyuktiva", "Burun keçəcəyi", "Ağız boşluğu"],
        correct: 1
    },
    // Question 648
    {
        question: "Aşağıdakılardan hansı yeni doğulmuşun hemolitik xəstəliyində orqanizmə toksiki təsir edir?",
        options: ["Bilurubin", "İnsulin", "Qlükoza", "Melanin", "Xolestrin"],
        correct: 0
    },
    // Question 649
    {
        question: "Uşaqda birinci dərəcəli hipotrofiyada çəki itkisi neçə % təşkil edir?",
        options: ["15-20 %", "5-10 %", "20-30 %", "30-40 %", "10-15 %"],
        correct: 4
    },
    // Question 650
    {
        question: "Uşaqda II dərəcəli hipotrofiyada çəki itkisi neçə % təşkil edir.?",
        options: ["15-20 %", "15-30 %", "20-25 %", "10-15 %", "25-30 %"],
        correct: 1
    },
    // Question 651
    {
        question: "Uşaqda III dərəcəli hipotrofiyada çəki itkisi neçə % təşkil edir?",
        options: ["10-15 %", "15-20 %", "20-25 %", "25-30 %", "30-40 %"],
        correct: 4
    },
    // Question 652
    {
        question: "Südəmər uşaqda qazanılma hipotrofiyanın əsas səbəbi nədir?",
        options: ["Pis qulluq", "Ananın spirtli içki qəbul etməsi", "Ananın papiros çəkməsi", "Anada süd azlığı -- hipoqalaktiya", "Vitamin çatışmazlığı"],
        correct: 3
    },
    // Question 653
    {
        question: "Aşağıdakılardan hansı xromosom xəstəliyidir?",
        options: ["Daun xəstəliyi", "Fenilketonuriya", "Şəkərsiz diabet", "Şəkərli diabet", "Piylənmə"],
        correct: 0
    },
    // Question 654
    {
        question: "Təbii qidalanan sağlam uşağa əlavə qida hansı aydan verilir?",
        options: ["3", "8", "9", "10", "6"],
        correct: 4
    },
    // Question 655
    {
        question: "Hansı çəkidə doğulan uşaq vaxtından əvvəl doğulmuş sayılır.?",
        options: ["2500 qr", "3000 qr", "4000 qr", "2700 qr", "2800 qr"],
        correct: 0
    },
    // Question 656
    {
        question: "Uşaqda burun -- udlaq keçəcəyinin iltihabı necə adlanır?",
        options: ["Nazofaringit", "Faringit", "Rinit", "Traxeit", "Laringit"],
        correct: 0
    },
    // Question 657
    {
        question: "Uşaqda bronxial astma nə ilə xarakterizə olunur.?",
        options: ["Boğulma tutması ilə", "Yüksək hərarətlə", "Göyərmə ilə", "Qıcolma ilə", "Təngnəfəsliklə"],
        correct: 0
    },
    // Question 658
    {
        question: "Südəmər uşaqda rinitin ağırlaşması nədir?",
        options: ["Asfiksiya", "Angina", "Yalançı inaq", "Bronxit", "Otit"],
        correct: 4
    },
    // Question 659
    {
        question: "Uşaqda kəskin otitin əsas əlaməti nədir?",
        options: ["Qulaqda ağrı", "Öskürək", "Təngnəfəslik", "Döş qəfəsində ağrı", "Sianoz"],
        correct: 0
    },
    // Question 660
    {
        question: "Revmatik poliartitdə hansı oynaqlar daha çox zədələnir?",
        options: ["Döş qabırğa oynaqları", "Əl darağı oynaqları", "Onurğa sütunu oynaqları", "Böyük oynaqlar", "Kiçik oynaqlar"],
        correct: 3
    },
    // Question 661
    {
        question: "Uşaqda ac qarına selikli və turş iyli qusma hansı xəstəlikdə çox olur?",
        options: ["Mədə xorasında", "Enterokolitdə", "Pankreatitdə", "Xroniki qastritdə", "Kəskin qastritdə"],
        correct: 4
    },
    // Question 662
    {
        question: "Qızılca infeksiyasında səpgi neçəngi gün əmələ gəlir?",
        options: ["2-3", "1-2", "7-8", "5-6", "4-5"],
        correct: 4
    },
    // Question 663
    {
        question: "Epidemik parotitin törədicisi nədir?",
        options: ["Göbələk", "Bakteriya", "Bağırsaq çöpləri", "Virus", "Salmonellalar"],
        correct: 3
    },
    // Question 664
    {
        question: "Hepatit B-nin infeksiya mənbəyi hansıdır?",
        options: ["Virusdaşıyıcısı və xəstə", "Virusdaşıyıcı", "Sağlam daşıyıcılar", "Xəstə heyvan", "Xəstə"],
        correct: 0
    },
    // Question 665
    {
        question: "Vərəm çöpləri orqanizmə hansı yolla daxil olur?",
        options: ["Ağız boşluğu ilə", "İnyeksiya yolu ilə", "Hematogen yolla", "Dəri ilə", "Yuxarı tənəffüs yolları ilə"],
        correct: 4
    },
    // Question 666
    {
        question: "Uşaqda vərəmin ən çox zədələdiyi orqanı hansıdır?",
        options: ["Böyrəklər", "Ağciyər", "Dəri cə selikli qışalar", "Sümük və oynaqlar", "Qaraciyər"],
        correct: 1
    },
    // Question 667
    {
        question: "Südəmər uşağa əlavə qidanın verilməsində məqsəd böyüyən orqanizmin hansı təlabatının ödənilməsidir?",
        options: ["Karbohidrata olan təlabatını ödəmək", "Duza olan təlabatını ödəmək", "Qida təlabatını ödəmək", "Yağa olan təlabatını ödəmək", "Vitaminlərə olan təlabatını ödəmək"],
        correct: 2
    },
    // Question 668
    {
        question: "Yenidoğulmuşlarda boyun orta uzunluğu neçə sm təşkil edir?",
        options: ["48 -- 52", "55 - 60", "50 - 55", "40 - 42", "40 - 45"],
        correct: 0
    },
    // Question 669
    {
        question: "Südəmər uşağı meyvə şirəsi nə ilə təmin edir?",
        options: ["Zülalla", "Su ilə", "Karbohidratla", "Yağla", "Vitaminlərlə"],
        correct: 4
    },
    // Question 670
    {
        question: "Südəmər uşağı yumurta sarısı əsasən nə ilə təmin edir?",
        options: ["Yağla", "Zülalla", "D vitamini ilə", "Duzlarla", "Karbohidratla"],
        correct: 2
    },
    // Question 671
    {
        question: "Uşağın qanında şəkəri yoxlamaq üçün qan nə vaxt götürülür?",
        options: ["Yeməkdən sonra", "Qidalanmadan 1 saat sonra", "Qida qəbulundan asılı olmayaraq", "Acqarına", "Qidalanmadan15 dəq sonra"],
        correct: 3
    },
    // Question 672
    {
        question: "Zimnitski sınağında sutkalıq sidik neçə saatdan bir yığılır?.",
        options: ["5", "6", "4", "2", "3"],
        correct: 4
    },
    // Question 673
    {
        question: "Qastroenterit zamanı mədənin yuyulmasında məqsəd nədir?",
        options: ["Bağırsağın funksiyasını normallaşdırmaq", "Ağrını azaltmaq", "Mədənin funksiyasını normallaşdırmaq", "Köpü azaltmaq", "Toksinin bədəndən xaric edilməsi"],
        correct: 4
    },
    // Question 674
    {
        question: "Neçənci ayında uşaq anasını başqalarından seçir?",
        options: ["5 - ci", "7 - ci", "4 -- cü", "2 - ci", "6 - cı"],
        correct: 2
    },
    // Question 675
    {
        question: "Uşaqlarda helmintozun törədicisi nədir?",
        options: ["Göbələklər", "Parazit qurdlar", "Streptokoklar", "Bakteriyalar", "Stafilokoklar"],
        correct: 1
    },
    // Question 676
    {
        question: "Südəmər uşağın qida rasionuna ət qiyməsi nə vaxt daxil edilir?",
        options: ["9 - cu Aydan", "12 - ci aydan", "6 - cı aydan", "4 - cü aydan", "5- ci aydan"],
        correct: 0
    },
    // Question 677
    {
        question: "Uşaqda bağırsaq keçməməzliyinə daha çox hansı parazit səbəb olur?",
        options: ["Trixosefalyoz", "Eşerixioz", "Enterebioz", "Lyamblioz", "Askardioz (20-25sm olur)"],
        correct: 4
    },
    // Question 678
    {
        question: "Uşaqlarda sidiyin ümumi müayinəsi üçün hansı sidik götürülür?",
        options: ["İlk sidik", "Sidiyin orta porsiyası", "Son sidik", "Gecə sidiyi", "Sutkalıq sidik"],
        correct: 1
    },
    // Question 679
    {
        question: "Dəri bişməcəsinin profilaktikası üçün dəri nə ilə təmizlənir?",
        options: ["Spirtlə", "Yodla", "Steril bitki yağı ilə", "Fizioloji məhlulla", "Furasilinlə"],
        correct: 2
    },
    // Question 680
    {
        question: "Yeni doğulmuşlarda dəri bişməcələrinin səbəbi nədir?",
        options: ["İnfeksiya", "Pis qulluq", "Bədənin soyuması", "Dərinin quruması", "Bədənin qızması"],
        correct: 1
    },
    // Question 681
    {
        question: "Yenidoğulmuşlarda tərliliyin səbəbi nədir?",
        options: ["İnfeksiya", "Uşağın soyuq saxlanılması", "Uşağın isti saxlanılması", "Dərinin silinməsi", "Dərinin zədələnməsi"],
        correct: 2
    },
    // Question 682
    {
        question: "Uşaqda mədənin təcili yuyulmasına göstəriş nədir?",
        options: ["Xolesistit", "Yemək borusu qanaxması", "Qida zəhərlənməsi", "Mədə qanaxması", "Pankreatit"],
        correct: 2
    },
    // Question 683
    {
        question: "Kəskin böyrək ağrısında yardım üçün hansı preparatdan istifadə edilir?",
        options: ["Aspirin, Analgin", "Noşpa, Baralgin", "Laziks", "Dimedrol, Prednizolon", "Dibazol, Adrenalin"],
        correct: 1
    },
    // Question 684
    {
        question: "Yeni doğulmuşa hansı hepatitə qarşı peyvənd vurulur?",
        options: ["Hepatit A", "Hepatit E", "Hepatit D", "Hepatit C", "Hepatit B +( 12saat ərzində)"],
        correct: 4
    },
    // Question 685
    {
        question: "Profilkatik peyvənd hansı otaqda vurulmalıdır?",
        options: ["Peyvənd otağında", "Həkim-pediatrın otağında", "Həkim-travmatoloqun otağında", "Sarğı otağında", "Baş həkimin otağında"],
        correct: 0
    },
    // Question 686
    {
        question: "Salmanelyozla yoluxma mənbəyi aşağıdakılardan hansı ola bilər?",
        options: ["Çirkli əl", "Xəstə heyvan", "İnfeksiyalaşmış qida və su", "Çirkli əşyalar", "Xəstə insan"],
        correct: 2
    },
    // Question 687
    {
        question: "Uşaqlarda mədənin yuyulmasına əks göstəriş nədir?",
        options: ["Perekislə zəhərlənmə", "Dərman zəhərlənməsi", "Spirtlə zəhərlənmə", "Qida zəhərlənməsi", "Mədə qanaxması"],
        correct: 4
    },
    // Question 688
    {
        question: "Yenidoğulmuşun dərisinin ilkin təmizlənməsi necə aparılır?",
        options: ["2 %-li yodla", "5 %-li kalium permanqanatla", "Furasilinlə", "70 %-li spirtlə", "Steril bitki yağı ilə"],
        correct: 4
    },
    // Question 689
    {
        question: "Yenidoğulmuşlarda Apqar şkalası ilə nə qiymətləndirilir?",
        options: ["Uşağın ümumi vəziyyəti", "Əzələ tonusu, ürək fəaliyyəti", "Dərinin rəngi , reflekslər", "Ürək fəaliyyəti, tənəffüs fəaliyyəti, dərinin rəngi, reflekslər", "Reflekslər, tənəffüs fəaliyyəti"],
        correct: 3
    },
    // Question 690
    {
        question: "Südəmər yaşda süni qidalanmaya keçilməsinə göstəriş nədir?",
        options: ["Ana südünün az olması", "Ana südünün keyfiyyətsiz olması", "Südün çətin ifraz olması", "Ana südünün olmaması", "Südün çox yağlı olması"],
        correct: 3
    },
    // Question 691
    {
        question: "Selikli qanlı nəcis hansı xəstəlik üçün xarakterdir?",
        options: ["Salmanelloz", "Enterit", "Dizenteriya", "Enterovirus infeksiyası", "Eşerixioz"],
        correct: 2
    },
    // Question 692
    {
        question: "Eskikoz və toksikiz hansı infeksion xəstəlik üçün xarakterikdir?",
        options: ["Salmonelyoz", "Skarlatina", "Dizenteriya", "Eşerixioz", "Difteriya"],
        correct: 2
    },
    // Question 693
    {
        question: "Uşaqda sutkalıq sidiyin azalması necə adlanır?",
        options: ["Anuriya", "Dizuriya", "Oliqouriya", "Poliuriya", "Hemoturiya"],
        correct: 2
    },
    // Question 694
    {
        question: "Tibb müəssisələrində,hepatit B və C--nin yoluxma yolları hansılardır?",
        options: ["Kontakt - məişət", "Fekal -- oral", "Parenteral", "Enteral", "Hava damcı"],
        correct: 2
    },
    // Question 695
    {
        question: "Təmizləyici imalə edilərkən yeni doğulmuşun vəziyyəti necə olmalıdır?",
        options: ["Sağ tərəfi üstə", "Sol tərəfi üstə", "İstənilən vəziyyətdə", "Qarnı üstə", "Kürəyi üstə"],
        correct: 4
    },
    // Question 696
    {
        question: "Yenidoğulmuşda bişməcə bədənin hansı hissələrində müşahidə edilir?",
        options: ["Əlin içində", "Təbii büküşlərdə və sağrıda", "Üzdə", "Bütün bədəndə", "Başın tüklü hissəsində"],
        correct: 1
    },
    // Question 697
    {
        question: "Hemofiliya necə xəstəlik sayılır?",
        options: ["Kəskin", "İnfeksion", "Xroniki", "Allergik", "İrsi"],
        correct: 4
    },
    // Question 698
    {
        question: "Rezusu mənfi anadan doğulacaq uşaqda hemolitik xəstəliyin qarşısını almaq üçün anaya nə köçürülür?",
        options: ["Eritrosit kütləsi", "Qammaqlobulin", "Plazma", "Qan", "Antirezus qammaqlobulin"],
        correct: 4
    },
    // Question 699
    {
        question: "Həll edilmiş BCJ, qızılca, məxmərək, parotit vaksinlərinin istifadə müddəti nə qədərdir?",
        options: ["8 - 10 saat", "7 - 8 saat", "6 saata qədər", "Vaxt məhdudiyyəti yoxdur", "10 - 12 saat"],
        correct: 2
    },
    // Question 700
    {
        question: "İmmun çatışmazlığı virusuna yoluxmuş uşaqlarda hansı yaşda qızılca əleyhinə peyvəndin aparılması düzgündür?",
        options: ["12 aylıqda", "Bütün yaşlarda", "Vaksinasiya etmək olmaz", "2 yaşdan tez olmayaraq", "6 - 11 aylıqda"],
        correct: 2
    },
    // Question 701
    {
        question: "Cansız vaksinlərin daşınması və saxlanması zamanı nə qadağandır?",
        options: ["Rütubətli yerdə saxlamaq olmaz", "Bir müəssisədən digərinə daşımaq olar", "Dondurmaq olmaz", "+2 +8 temperaturda daşımaq olar", "Qızdırmaq olar"],
        correct: 4
    },
    // Question 702
    {
        question: "Uşaqda qlomerulonefritin yaranmasına səbəb olan xəstəlik hansıdır?",
        options: ["Pnevmoniya", "Bronxit", "Angina, skarlatina", "Enterebioz", "Yuxarı tənəffüs yollarının katarı"],
        correct: 2
    },
    // Question 703
    {
        question: "Pielonefrit xəstəliyi olan uşağın qidası necə olmalıdır?",
        options: ["Duzlarla zəngin", "Qəbul edilən maye artırılmalı", "Yağla zəngin", "Zülallarla zəngin", "Qəbul edilən maye azaldılmalı"],
        correct: 3
    },
    // Question 704
    {
        question: "Difteriya xəstəliyi hansı yolla yayılır?",
        options: ["Hemotogen", "Limfogen", "Hava -- damcı", "Fekal - oral", "Kontakt - məişət"],
        correct: 2
    },
    // Question 705
    {
        question: "Difteriya xəstəliyi zamanı uşaqlarda hansı əlamət baş verir?",
        options: ["Sarılıq", "Yalancı inaq", "Həqiqi inaq", "Şok", "Bayılma"],
        correct: 2
    },
    // Question 706
    {
        question: "Bağırsaq infeksiyalarına yoluxmuş uşağın müalicəsi zamanı ilk tədbir nədir?",
        options: ["Çay - su fasiləsi, müalicəvi qida", "Hormonlarlarla müalicə", "Vitaminlərlə müalicə", "Fermentlərlə müalicə", "Antiobiotiklərin təyini"],
        correct: 0
    },
    // Question 707
    {
        question: "Eksudativ kataral diatezli uşaqlarda ilk növbədə aşağıdakılardan hansının olması səciyyəvidir?",
        options: ["Çəkinin azalması", "Qan azlığı", "Hərarətin yüksəlməsı", "Dəri və selikli qişaların zədələnməsi", "Qusma, ishal"],
        correct: 3
    },
    // Question 708
    {
        question: "Raxit xəstəliyinin hansı dövründə vegetativ sinir sisteminin pozğunluğu baş verir?",
        options: ["Sarılıq əlamətləri dövründə", "Sağalma dövründə", "Başlanğıc dövrdə", "Kəskin dövrdə", "Residiv verən dövrdə"],
        correct: 2
    },
    // Question 709
    {
        question: "\"Raxit bilərzikləri\",\"toyuq döş qəfəsi\",\"kraniotabes\" raxit xəstəliyinin hansı dövründə əmələ gəlir?",
        options: ["Qalıq əlamətləri dövründə", "Kəskin dövrdə", "Sağalma dövründə", "Bütün dövrlərdə", "Başlanğıc dövrdə"],
        correct: 1
    },
    // Question 710
    {
        question: "Spazmofiliyanin profilaktikası necə aparılır?",
        options: ["Təbii qidalanma, raxitin müalicəsi aparılır", "Masaj və idman təyin edilir", "Polivitamin verilir", "Duz vannaları təyin edilir", "Fermentlər təyin edilir"],
        correct: 0
    },
    // Question 711
    {
        question: "Uşaqlarda plevrit hansı əlamətlərlə xarakterizə olunur?",
        options: ["Arterial təzyiqin və hərarətin aşağı düşməsi", "Qarında küt ağrıların olması", "Hərarətin qalxması, tənəffüs zamanı və öskürdükdə şiddətli ağrının olması", "Ürəkbulanma və qusmanın olması", "Fasiləsiz öskürək, bəlğəm ifrazı"],
        correct: 2
    },
    // Question 712
    {
        question: "Uşaqlarda anadangəlmə ürək qüsurunun yaranmasına səbəb nədir?",
        options: ["Doğuş travması", "Vaxtı keçmiş hamiləlik", "Doğuş vaxtı narkoz alma", "Bətndaxili infeksiya", "Yarımçıq doğulma"],
        correct: 3
    },
    // Question 713
    {
        question: "Uşaqlarda lyambliozun müalicəsində hansı preparat işlədilir?",
        options: ["Vitaminlər", "Tetrasiklin", "Furazolidon", "Ampisillin", "Suprastin"],
        correct: 2
    },
    // Question 714
    {
        question: "Uşaqlarda larinqotraxeitin əlamətləri necə başlayır?",
        options: ["Kəskin başlayır, öskürək olur", "Tədricən başlayır, səs xırıltılı olur,bəzən batır", "Tədricən başlayır, səsi batmır", "Kəskin başlayır, küylü tənəffüs olur", "Tədricən başlayır, səs aydın olur"],
        correct: 1
    },
    // Question 715
    {
        question: "Uşaqlarda kəskin bronxitin müalicəsində hansı preparatlar işlədilir? 1. Antibiotiklər 2. Hemodez 3. Bəlğəmgətiricilər 4. Kalsium xlorid 5. Hərarətsalıcılar 6. Qan preparatları",
        options: ["3, 5, 6", "4, 6, 2", "2, 3, 4", "6, 5, 4", "1, 3, 5"],
        correct: 4
    },
    // Question 716
    {
        question: "Uşaqlarda sadə diarreyanın (dispepsiya) əmələ gəlmə səbəbi nədir?",
        options: ["Ana südünün az olması", "Süni qidalanma", "Uşaqları çox yedizdirmək, suyu az vermək", "Vitaminsiz qidaların qəbulu", "Yarımçıq doğulma"],
        correct: 2
    },
    // Question 717
    {
        question: "Uşaqlarda toksik diarreya (dispepsiya) zamanı çay - su fasiləsi neçə saat təyin olunur?",
        options: ["18", "10", "12", "16", "24"],
        correct: 4
    },
    // Question 718
    {
        question: "Ensefalopatiyalı uşaqda qıcolmanın qarşısını almaq üçün hansı preparat istifadə edilə bilər?",
        options: ["Heparin", "Difenin", "Sulfanilamidlər", "Fenobarbital", "Diakarb"],
        correct: 3
    },
    // Question 719
    {
        question: "Duodenal zondlama zamanı A, B, C porsiyası nəyi bildirir?",
        options: ["12 barmaq bağırsaq və mədə şirəsi", "Qaraciyər möhtəviyyatı", "Mədəaltı vəz və qaraciyər şirəsi", "Mədəaltı vəz və bağırsağın şirəsi", "Duodenal , öd kisəsi, qaraciyər ödü"],
        correct: 4
    },
    // Question 720
    {
        question: "Hemofiliyalı uşaq kim tərəfindən daim nəzarətdə saxlanılmalıdır?",
        options: ["Baş həkim", "Hematoloq", "Uşaq travmatoloqu", "Baş tibb bacısı", "Uşaq cərrahı"],
        correct: 1
    },
    // Question 721
    {
        question: "Uşaqlara hansı xəstəlik zamanı əlillik verilir?",
        options: ["Spazmofiliya", "Hemolitik anemiya", "Qlamerulonefrit", "Hemofiliya", "Dəmirdefisitli anemiya"],
        correct: 3
    },
    // Question 722
    {
        question: "Yenidoğulmuşda sepsisin olduğuna şübhə olarsa tibb bacısının taktikası necə olmalıdır?",
        options: ["Hormonlar vermək", "Vitaminlər vurmaq", "Hərarətsalıcılar vermək", "Həkim çağırmaq, xəstəni stasionara hazırlamaq", "Antibiotiklər vurmaq"],
        correct: 3
    },
    // Question 723
    {
        question: "Uşaqlarda revmatizm residivinin qarşışını almaq üçün tibb bacısı ilk növbədə nəyi məsləhət görməlidir?",
        options: ["Göstərilənlərin hamısı", "İnfeksiya mənbəyinin sanasiyası", "Zülallarla zəngin qidalar", "Vitaminlərlə zəngin qidalar", "Gündəlik rejimə əməl etmək"],
        correct: 1
    },
    // Question 724
    {
        question: "Dizenteriya xəstəliyi olan uşaq nədən şikayət edir?",
        options: ["Yuxusuzluqdan", "Qarnın aşağı hissəsində sancı şəkilli ağrılardan", "Qıcolmadan", "İştahasızlıqdan", "Arasıkəsilməyən qusmadan"],
        correct: 1
    },
    // Question 725
    {
        question: "Yenidoğulmuşlar şöbəsində xəstəxanadaxili salmanelloz xəstəliyinin infeksiya mənbəyi hansıdır?",
        options: ["İnyeksiya", "Tibbi personalın əlləri", "Yataq ağları", "Qida", "Su"],
        correct: 1
    },
    // Question 726
    {
        question: "Uşağın 2 yaşı var , qriplə xəstələnib. Uşaq öskürür, öskürəklə yanaşı xırıltı və fit verici nəfəsvermə müşahidə edilir. Xəstəyə hansı diaqnozu qoymaq olar?",
        options: ["Obstruktiv bronxit", "Pnevmoniya", "Bronxial astma", "Larinqotraxeit", "Kəskin bronxit"],
        correct: 0
    },
    // Question 727
    {
        question: "Aşağıda göstərilən əlamətlərdən hansı 4 aylıq uşaq üçün fizioloji hal hesab edilir?",
        options: ["Meterorizm", "İshal", "Qusma", "Qaytarma", "Ağızdan seliyin axması"],
        correct: 4
    },
    // Question 728
    {
        question: "10 günlük yenidoğulmuşun göbək yarasından irinli ifrazat gəlir. Uşaq döşü zəif götürür. Hərarəti 38°-39°C - dir. Göbək ətrafında qızartı və şişkinlik var. Aşağıdakılardan hansından şübhələnmək olar?",
        options: ["Omfolit", "Fleqmona", "Abses", "Sepsis", "Vezikulopusfulyoz"],
        correct: 0
    },
    // Question 729
    {
        question: "Uşaq 7 aylıqdır, inək südü, mannı sıyığı ilə qidalanır. 3200qr. çəki ilə doğulub hazırda 6000 qramdır, oturmur, dişləri yoxdur. Boynunu 3 aylıqdan düz tutur, döş qəfəsi bir qədər batıqdır. Hansı xəstəlikdən şübhələnmək olar?",
        options: ["Spazmofiliya", "Skalioz", "Raxit", "Hipervitaminoz D", "Osteoparoz"],
        correct: 2
    },
    // Question 730
    {
        question: "Uşağın 1 yaşı var. Hərarəti 38O C -- dir. Tez - tez selikli -- qanlı nəcis ifraz edir. Uşaqda tenezmlər var. Dəri avazımış , əzələ tonusu azalmış, ümumi arıqlama görünür. Hansı xəstəlikdən şübhələnmək olar?",
        options: ["Salmonelloz", "Dizenteriya", "Sadə dispepsiya", "Kolienterit", "Toksik dispepsiya"],
        correct: 1
    },
    // Question 731
    {
        question: "5 aylıq uşaqdır. Hərarəti 390 C - dir . Tənəffüsü çətinləşib, ağız - burun ətrafında göyərmə var, dəri solğundur, ağciyər üzərində quru və yaş xırıltılar eşidilir. İlk növbədə hansı xəstəlikdən şübhələnmək olar?",
        options: ["Plevrit", "Xroniki tonzilit", "Bronxial astma", "Pnevmoniya", "Kəskin bronxit"],
        correct: 3
    },
    // Question 732
    {
        question: "Uşaq 3 günlükdür. 2000 qr çəki ilə doğulub. Anadangəlmə refleksləri zəifdir, döşü tuta bilmir. Dərisi sianozlu və tüklüdür, Dərialtı piy qatı sifət və ətraflarda azdır. Bu uşaq haqqında aşağıdakı fikirlərdən hansı doğrudur ?",
        options: ["Ürək qüsuri ilə doğulub", "Daun xəstəliyi var", "Vaxtında doğulub", "Vaxtından əvvəl doğulub", "Asfiksiya ilə doğulub"],
        correct: 3
    },
    // Question 733
    {
        question: "5 aylıq uşağın boyu və çəkisi nə qədər olmalıdır?",
        options: ["Çəki 9000qr, boyu 85 sm", "Çəki 7000 qr, boyu 45 sm", "Çəki 6500 qr, boyu 60 - 65 sm", "Çəki 5000 qr boyu 50 sm", "Çəki 8000 qr, boyu 80 sm"],
        correct: 2
    },
    // Question 734
    {
        question: "Qəbula 9 yaşlı uşaq gətirilib. Uşaq ürək bulanma, iştahsızlıq və qarında ağrıdan şikayət edir. Yuxusu pozulub, əsəbidir, gecələr ağzından su gəlir. Bu zaman uşaqda aşağıdakılardan hansının olmasından şübhələnmək olar?",
        options: ["Limfadenit", "Xolesistit", "Qastroenterit", "Helmintoz", "Qastrit"],
        correct: 3
    },
    // Question 735
    {
        question: "Qəbula 7 yaşlı uşaq gətirilib, üzün dərisi solğundur, göz qapaqları şişkindir. Sidik ifrazı azalıb. Ananın dediyinə görə sidiyi bulanıqdır, uşağın iştahası pisdir, ürək bulanma və baş ağrısı var. A/T yüksəlib. Hansı xəstəlikdən şübhələnmək olar?",
        options: ["Qlomerulonefrit", "Plevrit", "Sistit", "Pankreatit", "Xolesistit"],
        correct: 0
    },
    // Question 736
    {
        question: "Uşağın 8 yaşı var. Ananın dediyinə görə uşağın iştahası pisdir, tez yorulur, nəcisi rəngsizləşib, sidiyi tündləşib. Müayinədə dəridə sarılıq görünür, qara ciyər 3 sm böyüyüb. Hansı xəstəlikdən şübhələnmək olar?",
        options: ["Pnevmoniya", "Qeyri-infeksion", "Öd daşı xəstəliyi", "Xolesistit", "Virus hepatiti"],
        correct: 4
    },
    // Question 737
    {
        question: "Uşaq 3 aylıqdır. Hər gün uşaqda qaytarma və qusma olur. Uşaq ana südü ilə qidalanır. Çəkisi 3650 qr (doğulanda çəkisi 3600 qr ) belə bir vəziyyətin yaranmasının səbəbi nədir?",
        options: ["Pilorostenoz", "Aerofagiya (hava udma)", "Çox yedizdirmə", "Pilorospazm", "Meterorizm"],
        correct: 0
    },
    // Question 738
    {
        question: "Uşağın 7 yaşı var. Yağlı yeməkdən sonra ürəkbulanmadan, sağ qabırğaaltı nahiyədə ağrıdan şikayət edir. Hansı xəstəlikdən şübhələnmək olar?",
        options: ["Qastrit", "Kolit", "Xolesistit", "Enterit", "Mədə xorası"],
        correct: 2
    },
    // Question 739
    {
        question: "Qəbula 10 aylıq uşaq gətirilib. Ananın dediyinə görə iştahası, yuxusu pisdir, uşaqda dəri və selikli qişalar solğundur, əzələ tonusu zəifdir. Auskultasiyada ürəkdə sistolik küy eşidilir. Dəri və selikli qişalar qurudur, ağız bucaqlarında çatlar var.",
        options: ["Hipotrofiya", "Zülal defisitli anemiya", "Dəmir defisitli anemiya", "Pnevmoniya", "Vitamin defisitli anemiya"],
        correct: 2
    },
    // Question 740
    {
        question: "Uşağın 6 yaşı var, dünən xəstələnib. Boğazında ağrı var. Hərarət 38°C - dir . Dəridə nöqtəvari səpgilər var Hansı xəstəlikdən şübhələnmək olar?",
        options: ["Eksudativ kataral diatez", "Skarlatina", "Hemorragik diatez", "Qızılca", "Su çiçəyi"],
        correct: 1
    },
    // Question 741
    {
        question: "Xəstəxanaya 10 yaşlı uşaq gətirilib. Huşu itib, nəbzin dəqiqəlik sayı 140, tənəffüsün dəqiqəlik sayı 35- dir. 3 gündür xəstədir. Xəstəlik qusma ilə başlayıb. Sidiyin müayinəsində şəkər və aseton tapılıb. Klinik diaqnoz aşağıdakılardan hansı ola bilər?",
        options: ["Hipoqlikemik koma", "Pnevmoniya", "Şəkərli diabet", "Şəkərsiz diabet", "Hiperqlikemik koma"],
        correct: 4
    },
    // Question 742
    {
        question: "Uşaq 3 yaşındadır. Bağçaya gedir. Xəstəliyi kəskin başlayıb, hərarəti 38, 5°C, qarnında ağrı var, 1 dəfə qusub. Uşaqda tez - tez selik və qanla qarışıq nəcis ifrazı var, uşaq narahatdır, gücənir, defekasiya ağrılıdır. Uşaq hansı xəstəlikdən əziyyət çəkir?",
        options: ["Qida toksikoinfeksiyası", "Sadə dispepsiya", "Salmonelloz", "Toksik dispepsiya", "Dizenteriya"],
        correct: 3
    },
    // Question 743
    {
        question: "Qlomerulonefrit xəstəliyi keçirmiş uşaqlar neçə il dispanser nəzarətdə saxlanılır?",
        options: ["2 il", "5 il", "3 il", "Dispanser qeydiyyata götürülmür", "1 il"],
        correct: 1
    },
    // Question 744
    {
        question: "Qlomerulonefrit xəstəliyi ilə stasionardan evə yazılan uşaq neçə müddət ambulator müalicə almalıdır?",
        options: ["6 aydan 8 aya kimi", "6 aydan 10 aya kimi", "10 aydan 6 ilə kimi", "6 - 10 aydan 2 - 3 yaşa kimi", "1 aydan 6 aya kimi"],
        correct: 3
    },
    // Question 745
    {
        question: "Yenidoğulmuş uşağın çəkisi ən az nə neçə qramdan aşağı olduqda bağlı küvezə qoyulur?",
        options: ["1900", "1700", "2000", "2100", "1500"],
        correct: 4
    },
    // Question 746
    {
        question: "Uşaqlarda disbakteriozun müalicəsində təyin edilir.",
        options: ["Biseptol", "Dimedrol", "Panzinorm", "Bifidobakterin", "Penisillin"],
        correct: 3
    },
    // Question 747
    {
        question: "Uşaqlarda revmatik xoreya özünü hansı şəkildə biruzə verir?",
        options: ["Pilorostenoz", "Boğulma ilə", "Larinqospazmla", "Pilorospazmla", "Hiperkinezlərlə"],
        correct: 4
    },
    // Question 748
    {
        question: "İntoksikasiya , qarında və beldə ağrı, Pasternatski simptomunun (+) olması böyük yaşlı uşaqlarda hansı xəstəliyin mövcud olduğunu göstərir.",
        options: ["Vulvovaginit", "Sistit", "Pielonefrit", "Nefropatiya", "Qastrit"],
        correct: 2
    },
    // Question 749
    {
        question: "Oral dehidratasiya məqsədilə uşağa nə təyin olunur.",
        options: ["Poliqlükin, reopoliqlükin", "Vitaminlər", "Poliqlükin, hemodez", "\"Oralit\", \" Rehidron", "Hemodez, fizioloji məhlul"],
        correct: 3
    },
    // Question 750
    {
        question: "Aşağıdakılardan hansı yenidoğulmuş üçün xarakterikdir?",
        options: ["Açıcı əzələnin hipotoniyası", "Bükücü əzələnin hipotoniyası", "Açıcı əzələnin hipertoniyası", "Bükücü əzələnin hipertoniyası", "Əzələ tonusunun normal olması"],
        correct: 3
    },
    // Question 751
    {
        question: "Uşaqlarda süd dişlərinin daimi dişlərlə əvəz olunması nə vaxt başa çatır?",
        options: ["13 - 14 yaşda", "5 - 6 yaşda", "3 - 4 yaşda", "7 - 8 yaşda", "11 - 12 yaşda"],
        correct: 1
    },
    // Question 752
    {
        question: "Uşaqlarda pankreatit necə xəstəlikdir?",
        options: ["İltihabi", "Endokrin", "İltihabi -- distrofik", "İrsi", "İmmun - allergik"],
        correct: 2
    },
    // Question 753
    {
        question: "İrradiasiya edən kəmərvari ağrı hansı xəstəlik üçün xarakterikdir?",
        options: ["Xroniki hepatit", "Kəskin xolesistit", "Öd daşı xəstəliyi", "Kəskin pankreatit", "Kəskin A hepatit"],
        correct: 3
    },
    // Question 754
    {
        question: "Pielonefrit zamanı xəstəliyin hansı dövründə ciddi yataq rejimi təyin edilir.",
        options: ["Bakteriuriya dövründə", "Kəskin dövürdə", "İlk 3 gün", "Təyin olunmur", "Tam sağalana qədər"],
        correct: 1
    },
    // Question 755
    {
        question: "Bağırsaq infeksiyası aşkar olunmuş ocaqda neçə gün karantin saxlanılır?",
        options: ["23 gün", "21 gün", "14 gün", "7 gün", "1 gün"],
        correct: 3
    },
    // Question 756
    {
        question: "Uşaqlarda öd kisəsi və öd yollarının birgə iltihabı necə adlanır?",
        options: ["Xolesist", "Pankreatit", "Enterokolit", "Xolesistoxolangit", "Öd yollarının diskineziyası"],
        correct: 3
    },
    // Question 757
    {
        question: "Qızdırma, təngnəfəslik, öskürək hansı xəstəlik üçün xarakterdir?",
        options: ["Kəskin bronxit", "Kəskin faringit", "Bronxial astma", "Xroniki bronxit", "Kəskin pnevmoniya"],
        correct: 4
    },
    // Question 758
    {
        question: "Doğuş travması nəticəsində mərkəzi sinir sisteminin zədələnməsinin əsas səbəbi nədir?",
        options: ["Hipoksiya", "Hipoproteinemiya", "Hiperqlikemiya", "Hipoqlikemiya", "Hiperkapniya"],
        correct: 0
    },
    // Question 759
    {
        question: "Döşdə qalan südün sağılmasında məqsəd nədir?",
        options: ["Südün azalması üçün", "Hipotrofiyanın profilaktikası", "Hipoqalaktiyanın profilaktikası", "Xəstəliyin profilaktikası", "İmmunitetın artırılması üçün"],
        correct: 2
    },
    // Question 760
    {
        question: "Yenidoğulan qızlarda sidik kanalının uzunluğu necə sm - dir?",
        options: ["5 - 6", "1 -- 2sm", "3 - 4", "6 - 7"],
        correct: 1
    },
    // Question 761
    {
        question: "Revmatik endokarditdə ürəyin hansı qapaqları zədələnir?",
        options: ["Pulmonal qapaq", "Mitral qapaq", "Aortal qapaq", "Aortal və mitral qapaq", "Botal axacaq"],
        correct: 1
    },
    // Question 762
    {
        question: "Uşaqda arterial təzyiqin aşağı olması nə ilə əlaqədardır?",
        options: ["Sol mədəciyin kiçik, arteriyanın mənfəzinin dar olması", "Sol mədəciyin həmçinin kiçik, arteriyanın mənfəzinin geniş olması", "Sol mədəciyin geniş , arteiyanın mənfəzinin dar olması", "Venaların dar olması", "Arteriyanın mənfəzinin dar olması"],
        correct: 1
    },
    // Question 763
    {
        question: "Uşaqlarda döş kifozu necə aylıqda əmələ gəlir?",
        options: ["10 - 11", "8 - 9", "6 -- 7", "14 - 15", "12 - 13"],
        correct: 2
    },
    // Question 764
    {
        question: "Südəmər uşaqlarda rinit zamanı tənəffüsün pozulması nə ilə müşahidə olunur?",
        options: ["Döş əmmənin çətinləşməsi", "Qusma", "Diareya", "Boğulma", "Çəkinin azalması"],
        correct: 3
    },
    // Question 765
    {
        question: "Larinqotraxeitin ağırlaşması nədir?",
        options: ["Bronxit", "Qırtlaq stenozu", "Qırtlağın genişlənməsi", "Otit", "Plevrit"],
        correct: 1
    },
    // Question 766
    {
        question: "Uşaqlarda burun - udlaq keçəcəyinin iltihabı necə adlanır?",
        options: ["Bronxit", "Rinit", "Traxeit", "Nazofaringit", "Laringit"],
        correct: 3
    },
    // Question 767
    {
        question: "Mərkəzi sinir sisteminin zədələnməsi zamanı ürək fəaliyyətini tənzimləmək üçün hansı istifadə olunur?",
        options: ["Kalium", "Heparin", "Kalsium", "Qlükoza", "Korqlükon"],
        correct: 4
    },
    // Question 768
    {
        question: "Travma zamanı yalnız sınığa xas olan əlamət hansıdır?",
        options: ["Patoloji hərəkətlilik", "Qansızma", "Şişkinlik", "Sümük qırıntılarının krepitasiyası", "Ətrafın funksiyasının pozulması"],
        correct: 3
    },
    // Question 769
    {
        question: "Bədxassəli şişə məxsus əlamət hansıdır?",
        options: ["Ətraf toxumalara yayılmır", "Kaxeksiya yaratmır", "Kapsula ilə əhatə olunur", "Kənarları məhduddur", "Ətraf toxumalara sirayət edir"],
        correct: 4
    },
    // Question 770
    {
        question: "İrinli yaraya drenaj boru nə üçün qoyulur?",
        options: ["Sarğı qoymaq üçün", "Epitelizasiyanı tezləşdirmək üçün", "Ağrını azaltmaq üçün", "Qanaxamanı dayandırmaq üçün", "Yara möhtəviyyatının axması üçün"],
        correct: 4
    },
    // Question 771
    {
        question: "\"Eynək\" simptomu nə zaman baş verir?",
        options: ["Beyin sərpməsi zamanı", "Beyin sıxılması zamanı", "Kəllə əsası sümüklərininin sınığı zamanı", "Kəllə tağının sınığı zamanı", "Beyin silkələnməsi zamanı"],
        correct: 2
    },
    // Question 772
    {
        question: "III dərəcəli donma üçün xarakterik xüsusiyyətlər hansıdır?",
        options: ["Dərialtı təbəqənin nekrozu", "Dərinin bütün qatlarının nekrozu", "Dərinin üst qatlarının nekrozu", "Dəridə suluqların yaranması", "Sümüklərdə nekrozu"],
        correct: 2
    },
    // Question 773
    {
        question: "Paronixiya nəyin iltihabıdır?",
        options: ["Falanqaarası oynaqların", "Barmaq toxumalarında", "Mil - bilək oynağının", "Vətərlərin", "Dırnaq yatağının"],
        correct: 4
    },
    // Question 774
    {
        question: "Kəskin ostemiolit nədir?",
        options: ["Diz oynağının iltihabı", "Dırnaq yatağının iltihabı", "Venaların iltihabı", "Sümüyün və sümük iliyinin iltihabı", "Barmağın iltihabı"],
        correct: 3
    },
    // Question 775
    {
        question: "II dərəcəli yanıqların fərqləndirici xüsusiyyəti hansıdır?",
        options: ["Toxumaların ödemi", "Hiperemiya", "Ağrı", "Suluqların əmələ gəlməsi", "Nekrozun əmələ gəlməsi"],
        correct: 3
    },
    // Question 776
    {
        question: "Kəllə əsası sümüklərinin sınıqları nə ilə müşayət olunur?",
        options: ["Qulaqdan və burundan qan və likvorun axması", "Gözlərdə ikigörmə", "Mimiki əzələlərin qıcolması", "Dərialtı emfizema", "Göz qapaqlarının ödemi"],
        correct: 0
    },
    // Question 777
    {
        question: "Hidrodenit hansı vəzilərin irinli iltihabıdır?",
        options: ["Piy vəzilərinin", "Sekresiya vəzilərinin", "Tüpürcək vəzilərinin", "Tər vəzilərinin", "Böyrəküstü vəzilərinin"],
        correct: 3
    },
    // Question 778
    {
        question: "Hansı hallarda qanqrena əleyhinə zərdabdan istifadə olunur ?",
        options: ["Sarğının absesində", "Çanaq sümüklərinin qapalı sınıqlarında", "Ovucun fleqmonasında", "Aşağı ətrafın çirklənmiş yaralanmalarında", "Baldır sümüklərinin qapalı sınıqlarında"],
        correct: 3
    },
    // Question 779
    {
        question: "Fleqmonanın yumşalma mərhələsində hansı müalicə növündən istifadə olunur?",
        options: ["İsidici kompreslər", "Antibiotiklərlə novokain blokadası", "Autohemoterapiya", "İrinciyin punksiyası və antibiotiklərin yeridilməsi", "Geniş kəsiyin aparılması və irinciyin drenajlanması"],
        correct: 4
    },
    // Question 780
    {
        question: "Hidrodenit ən çox harada lokalizasiya edir?",
        options: ["Kürək nahiyəsində", "Qasıq nahiyəsində", "Qoltuqaltı nahiyədə", "Qarın nahiyəsində", "Boyun nahiyəsində"],
        correct: 2
    },
    // Question 781
    {
        question: "Karbunkul zamanı kəsik apardıqda anesteziyanın hansı növündən istifadə olunur?",
        options: ["Nəqledici anesteziya", "Futlyar anesteziya", "İnfiltrasion anesteziya", "Terminal anesteziya", "Venadaxili narkoz"],
        correct: 4
    },
    // Question 782
    {
        question: "Pandaktilit nəyin iltihabıdır?",
        options: ["Dəri və selikli qişanın", "Vətər yatağının", "Barmaq dərisinin", "Sümük iliyinin", "Barmağın bütün toxumalarının iltihabı"],
        correct: 4
    },
    // Question 783
    {
        question: "Aşağıdakı əlamətlərdən yemək borusu xərçənginə aid xarakterik əlamət hansıdır?",
        options: ["Çəkinin azalması", "İştahanın pozulması", "Disfagiya", "Ümumi halsızlıq", "Dərinin quruluğu"],
        correct: 2
    },
    // Question 784
    {
        question: "Donmaların hansı dərəcələri ambulator şəraitdə müalicə oluna bilər?",
        options: ["Yalnız I dərəcəli", "III və IV dərəcəli", "II və III dərəcəli", "I və II dərəcəli", "Yalnız III dərəcəli"],
        correct: 3
    },
    // Question 785
    {
        question: "2% - li \"Lizetol\" - AF məhlulunda metal alətlər neçə dəqiqə saxlanılmalıdır?",
        options: ["60 dəq", "120 dəq", "15 dəq", "20 dəq", "30 dəq"],
        correct: 0
    },
    // Question 786
    {
        question: "Lizetol məhlulundan neçə gün istifadə etmək olar?",
        options: ["10 gün", "7 gün", "3 gün", "20 gün", "15 gün"],
        correct: 1
    },
    // Question 787
    {
        question: "Metal alətləri sterilizasiyaya hazırlayarkən korroziya əleyhinə nədən istifadə edilir?",
        options: ["1% - li xloramin məhlulu", "5% - li xloramin məhlulu", "1% - li natrium - benzoat məhlulu", "0. 1% - li xlorlu əhəng məhlulu", "2% - li hidrogen - peroksid məhlulu"],
        correct: 2
    },
    // Question 788
    {
        question: "70 % - li spirt neçə gündən bir dəyişdirilməlidir?",
        options: ["15 gündən", "20 gündən", "3 gündən", "5 gündən", "30 gündən"],
        correct: 2
    },
    // Question 789
    {
        question: "Xəstəxananın aptekində hazırlanmış steril məhlullar hansı rənglə nişanlanır?",
        options: ["Sarı", "Mavi", "Yaşıl", "Qırmızı", "Bənövşəyi"],
        correct: 1
    },
    // Question 790
    {
        question: "Ağciyərin süni ventilyasiya aparatına qoşulmuş xəstədə tənəffüsün sayı bir dəqiqədə neçə olmalıdır?",
        options: ["12", "20", "25", "50", "30"],
        correct: 0
    },
    // Question 791
    {
        question: "Koxer üsulu ilə çıxıq yerinə salınarkən neçə ardıcıl mərhələ var?",
        options: ["2", "4", "1", "5", "6"],
        correct: 1
    },
    // Question 792
    {
        question: "Appendektomiya əməliyyatına neçə metr tənzif işlədilir?",
        options: ["30 - 40 m", "7 - 8 m+ (eni 1m)", "3 - 4 m", "15 - 20 m", "1 - 2 m"],
        correct: 1
    },
    // Question 793
    {
        question: "Optik alətlərin paroformalin şkaflarda sterilizasiya müddəti neçə saatdan az olmamalıdır?",
        options: ["24 saat", "48 saat", "10 saat", "6 saat", "12 saat"],
        correct: 1
    },
    // Question 794
    {
        question: "Yemək borusunun yanıqlarında rentgenoloji müayinə nə vaxt aparılır?",
        options: ["5 gündən sonra", "15 - 20 gündən sonar", "3 gündən sonra", "30 gündən sonra", "Dərhal"],
        correct: 1
    },
    // Question 795
    {
        question: "Boyun venalarından qanaxma zamanı zərərçəkmişin ölümünə səbəb nədir?",
        options: ["Hava emboliyası", "Anemiya", "Asfiksiya", "Hb - nin azalması", "Hipoksiya"],
        correct: 0
    },
    // Question 796
    {
        question: "Qələvilərlə yanıq sahəsini neytrallaşdırmaq məqsədilə sirkə turşusunun neçə faizli məhlulundan istifadə edilir?",
        options: ["1% - li", "0. 1% - li", "0. 3% - li", "5% - li", "3% - li"],
        correct: 0
    },
    // Question 797
    {
        question: "Kimyəvi yanığın ağırlığı bu faktordan asılı deyil:",
        options: ["Havanın temperaturundan", "Kimyəvi maddənin temperaturundan", "Kimyəvi maddənin tərkibindən", "Kimyəvi maddənin qatılığından", "Təsir müddətindən"],
        correct: 0
    },
    // Question 798
    {
        question: "Yaranın birincili sağalması neçə gün davam edir?",
        options: ["5 - 8 gün", "25 - 30 gün", "2 - 3 gün", "15 - 20 gün", "1 - 2 gün"],
        correct: 0
    },
    // Question 799
    {
        question: "Ağciyərin zədələnmələrində bu simptoma rast gəlinmir?",
        options: ["Dərialtı emfizema", "Disfagiya", "Qanhayxırma", "Pnevmotoraks", "Hemotoraks"],
        correct: 1
    },
    // Question 800
    {
        question: "Sınıqların ümumi klinik əlamətlərinə aid deyil?",
        options: ["Ağrı", "Deformasiya", "Krepitasiya", "Travmatik ödem (şişkinlik)", "Asfiksiya"],
        correct: 4
    },
    // Question 801
    {
        question: "Xəstənin həkimin iştirakı ilə daşınması zamanı feldşerin yeri harada olmalıdır?",
        options: ["Dispetçerin yanında", "Sürücünün yanında", "Xəstəxanaya əvvəlcə gedir", "Fərqi yoxdur", "Xəstənin yanında"],
        correct: 1
    },
    // Question 802
    {
        question: "Köpüşük nədir?",
        options: ["Dəri şişidir", "Epidermisin defektidir", "Kiçik qovuqcuqdur", "Birincili morfoloji elementdir", "Qaşınmanın nəticəsində əmələ gəlir"],
        correct: 3
    },
    // Question 803
    {
        question: "Qartmaq nədir?",
        options: ["Dəri şəklinin (cizgisinin) hamarlanması", "Dəri şəklinin (cizgisinin) kəskin dəyişməsi", "Dəri qüsuru", "Epidermisin buynuz qatından qopan hüceyrələr", "Qurumuş eksudat"],
        correct: 4
    },
    // Question 804
    {
        question: "Epidermis və derma arasında az miqdarda maye toplanması ilə xarakterizə olunur.",
        options: ["Ləkə", "Köpüşük", "Qovuqcuq", "Düyüncük", "Qabarcıq"],
        correct: 2
    },
    // Question 805
    {
        question: "Eroziya hansı səpkilərdən sonra əmələ gələ bilər?",
        options: ["Qovuqcuq, pustul", "Qovuq, qabarcıq", "Köpüşük,ləkə", "Düyün, düyüncük", "Ləkə, düyün"],
        correct: 0
    },
    // Question 806
    {
        question: "Pedikulyoz törədicisinin hansı mikroorqanizmlərə aid olduğunu göstərin.",
        options: ["Göbələklər", "Viruslar", "İbtidailər", "Bakteriyalar", "Parazitlər"],
        correct: 4
    },
    // Question 807
    {
        question: "Sadə herpesin müalicəsində daha effektlidir:",
        options: ["Sintomisin emulsiyası", "Asiklovir məlhəmi", "Flusinar məlhəmi", "Penisillin inyeksıyası", "Diklofenak məlhəmi"],
        correct: 1
    },
    // Question 808
    {
        question: "Vezikul (qovuqcuq) əmələ gəlməsi və sulanma aşağıdakılardan hansı üçün xarakterikdir?",
        options: ["Dermatitə", "Ekzemaya", "Psoriaza", "Follikulitə", "Furunkula"],
        correct: 1
    },
    // Question 809
    {
        question: "Ekzema xəstəliyinin müalicəsində istifadə olunmur.",
        options: ["Prednizolon", "Natrium tiosulfat", "Klaritin", "Tinidazol", "Kalsium qlükonat"],
        correct: 3
    },
    // Question 810
    {
        question: "Qonoreyanın inkubasiya dövrü orta hesabla neçə gündür?",
        options: ["3 - 5 gün", "17 - 19 gün", "21 - 23 gün", "7 - 9 gün", "11 - 13 gün"],
        correct: 0
    },
    // Question 811
    {
        question: "10 % - li məhlul hazırlamaq üçün nə qədər xlorlu əhəng götürmək lazımdır?",
        options: ["10 litr suya 1kq", "5 litr suya 1kq", "9, 9 litr suya 100q", "9 litr suya 100q", "10 litr suya 100q"],
        correct: 0
    },
    // Question 812
    {
        question: "Əməliyyatdan sonra alətləri yuyucu məhlulda neçə dəqiqə saxlamaq lazımdır?",
        options: ["45", "60", "30", "15", "5"],
        correct: 3
    },
    // Question 813
    {
        question: "Qanköçürmədən sonra tibb bacısı hansı göstəricilərə fikir verməlidir?",
        options: ["A/T və temperatura", "Diurez və temperatura", "Nəbz və arterial təzyiqə", "Nəbz və temperatura", "Nəbzə, A/T, diurezə və temperature"],
        correct: 4
    },
    // Question 814
    {
        question: "Hansı mərhələ infeksiyalaşmış yaranın 1-ci fazanı əks etdirir?",
        options: ["Regenerasiya", "Hidrotasiya", "Dehidratasiya", "Epitelizasiya", "Çapıqlaşma"],
        correct: 1
    },
    // Question 815
    {
        question: "Electrotravmalarda ilk görüləcək vacib tədbir hansıdır?",
        options: ["Ağrıkəsici vurmaq", "Cərəyanın təsirini kəsmək", "Spazmolitiklər vurmaq", "Aseptik sarğı qoymaq", "Eufillin vurmaq"],
        correct: 1
    },
    // Question 816
    {
        question: "Zədələnmələrdə hansı müddət ərzində soyuq qoymaq lazımdır?",
        options: ["6 saat", "1 gün", "5 gün", "3 gün", "7 gün"],
        correct: 1
    },
    // Question 817
    {
        question: "Tetanus əleyhinə zərdabın durulaşdırılmış dəri içi sınağı üçün işlədilən nisbəti:",
        options: ["1:500", "1:1000", "1:100", "1:50", "1:10"],
        correct: 0
    },
    // Question 818
    {
        question: "Yarada olan spesifik qoxunu azaltmaq üçün hansı antiseptik məhlul işlədilir?",
        options: ["Yod", "Furasillin", "Kalium permanqanat ( 0.1-0.05%)", "Gümüş nitrat", "Spirt"],
        correct: 2
    },
    // Question 819
    {
        question: "Anaerob infeksiyaların törədiciləri hansılardır?",
        options: ["Streptokoklar", "Klostridilər", "Rikketsiyalar", "Stafilokoklar", "Basillər"],
        correct: 1
    },
    // Question 820
    {
        question: "Hipertonik imalə üçün natrium-xlorun neçə faizli məhlulu işlədilir:",
        options: ["2 %", "20 %", "15 %", "0, 5 %", "10 % (100-200ml)"],
        correct: 4
    },
    // Question 821
    {
        question: "Mədəyə zond salınarkən nə üçün püskürmə (aerozol) şəklində anesteziya etmək olmaz?",
        options: ["Yuxarı tənəffüs yollarını çətinləşdirir", "Burunla tənəffüsü çətinləşdirir", "Zondu udarkən burula bilər", "Qida borusunun əzələsini yumşaldır", "Udma və qusma refleksini zəiflədir"],
        correct: 4
    },
    // Question 822
    {
        question: "Mədənin zondlanmasında hansı anesteziya növündən istifadə olunur?",
        options: ["10 %-li lidokainlə", "5 %-li sovkainlə", "0, 5 %-li novokainlə", "Ümumiyyətlə anesteziya olunmur", "3 %-li trimekainlə"],
        correct: 3
    },
    // Question 823
    {
        question: "İmalə üçün istifadə olunmuş ucluqlar istifadədən sonra nə edilir?",
        options: ["Sterilizasiyaya göndərilir", "Dezinfeksiya edilir", "Salfetlə silinir", "Yandırılır", "Axar su altlnda yuyulur"],
        correct: 1
    },
    // Question 824
    {
        question: "İmalə üçün istifadə olunan ucluqlar neçə faizli xloramin məhlulunda dezinfeksiya olunur?",
        options: ["1 %-li", "10 %-li", "6 %-li", "5 %-li", "3 %-li"],
        correct: 4
    },
    // Question 825
    {
        question: "Qanköçürmədən sonra flakonda müayinə üçün saxlanılan qanın saxlanma müddəti nə qədərdir?",
        options: ["12 saat", "24 saat (5-10ml flakonun dibində saxlanılır)", "48 saat", "2 saat", "6 saat"],
        correct: 1
    },
    // Question 826
    {
        question: "Anamnezində bu xəstəlikləri keçirmiş insanlar donor ola bilməz?",
        options: ["Qızılca", "Hepatit", "Su çiçəyi", "Qrip", "Orxit"],
        correct: 1
    },
    // Question 827
    {
        question: "Hansı dərəcəli yanıqlar dərin yanıqlara aid edilir?",
        options: ["III A - II", "IV - III A", "ΙII B -- IV", "III B - III A", "I - III B"],
        correct: 2
    },
    // Question 828
    {
        question: "Yanıq xəstəliyinin 2 - ci fazası necə adlanır?",
        options: ["Regenerasiya", "Septikotoksemiya", "Toksemiya", "Yanıq şoku", "Rekonvalensensiya"],
        correct: 2
    },
    // Question 829
    {
        question: "Ətraf amputasiya olunduqdan sonra qalan güdülə hansı sarğı qoyulur?",
        options: ["Sünbülvari sarğı", "Spiral sarğı", "Sapand şəkilli sarğı", "Dezo sarğısı", "Qayıdan sarğı"],
        correct: 4
    },
    // Question 830
    {
        question: "Mastit nəyin iltihabıdır?",
        options: ["Limfa damarlarının", "Limfa düyünlərinin", "Süd vəzisinin", "Piy vəzilərinin", "Tər vəzilərinin"],
        correct: 2
    },
    // Question 831
    {
        question: "Əməliyyat tibb bacısı planlı əməliyyatlara hazırlıq məqsədilə neçə saat əvvəl əməliyyat otağında olmalıdır?",
        options: ["30 dəq", "3 saat", "2 saat", "40 dəq", "1, 5 saat"],
        correct: 4
    },
    // Question 832
    {
        question: "Biksi doldurmazdan əvvəl nə ilə silmək lazımdır?",
        options: ["0, 5 %-li naşatır spirti ilə", "Brillyant yaşılı ilə", "Furasillinlə", "Kalium permanqanat məhlulu ilə", "Hidrogen peroksid məhlulu ilə"],
        correct: 0
    },
    // Question 833
    {
        question: "Hansı əməliyyatlarda xəstəyə Trendelenburq vəziyyəti verilir?",
        options: ["Döş qəfəsi orqanlarında", "Qarın boşluğu orqanlarında", "Süd vəzinin əməliyyatlarında", "Neyrocərrahi əməliyyatlarda", "Düz bağırsaq və cinsiyyət orqanlarında aparılan əməliyyatlarda"],
        correct: 4
    },
    // Question 834
    {
        question: "Təzə yaranın xarakterizə edən kliniki simptomlar hansılardır?",
        options: ["Ödem, qızartı, temperatur", "Qızartı, qızartı, iltibah", "Ağrı, qızartı, flüktuasiya", "Ağrı, temperatur, qanaxma", "Ağrı, yara ağzının açıq olması və qanaxma"],
        correct: 4
    },
    // Question 835
    {
        question: "Sınıqları təsbit (fiksə) etmək üçün hansı sarğıdan istifadə olunur?",
        options: ["Tısbağavari", "Sünbül şəkilli", "Qayıdan sarğıdan", "Gips", "Spiral"],
        correct: 3
    },
    // Question 836
    {
        question: "Planlı əməliyyata xəstə bilavasitə nə vaxt hazırlanır?",
        options: ["Əməliyyatdan 3 gün əvvəl", "Əməliyyatdan 4 gün əvvəl", "Əməliyyatdan bir gün əvvəl və əməliyyat günü", "Əməliyyatdan 5 gün əvvəl", "Əməliyyatdan 7 gün əvvəl"],
        correct: 2
    },
    // Question 837
    {
        question: "Qalxanabənzər vəzidə aparılan əməliyyat necə adlanır?",
        options: ["Torakotomiya", "Laparotomiya", "Splenoektomiya", "Strumektomiya", "Rezeksiya"],
        correct: 3
    },
    // Question 838
    {
        question: "Zimnitski sınağı üçün xəstəyə neçə qab verilir?",
        options: ["8", "5", "4", "6", "7"],
        correct: 0
    },
    // Question 839
    {
        question: "Drenaj və tamponları kim dəyişməlidir?",
        options: ["Palata tibb bacısı", "Tibb bacısı", "Baş tibb bacısı", "Baş həkim", "Həkim"],
        correct: 4
    },
    // Question 840
    {
        question: "Sağlam insan hansı yaş həddində qan donoru ola bilər?",
        options: ["16 - 35", "18 - 40", "18 -- 65", "16 - 25", "17 - 50"],
        correct: 2
    },
    // Question 841
    {
        question: "Tetanus əleyhinə anatoksin hansı məqsədlə işlədilir?",
        options: ["Sepsisə qarşı", "Aktiv immunitet yaratmaq (Bezredko üsulu ilə sınaqdan sonra0.5-1ml anatoksin vurulur)", "Passiv immunitet yaratmaq", "Ağrıları azaltmaq", "İltihaba qarşı"],
        correct: 1
    },
    // Question 842
    {
        question: "Eventerasiya nədir?",
        options: ["Bağırsaq möhtəviyyatının yaradan xaric olması", "Qarın boşluğu orqanlarının iltihabı", "Bağırsağın burulması", "Bağırsaqlarda qazın yığılması", "Bağırsaq ilgəyinin və piyliyin əməliyyatdan sonra qarının ön divarından kənara çıxması"],
        correct: 4
    },
    // Question 843
    {
        question: "Əməliyyatda işlədilən sarğı materialı irinlə çirklənibsə nə etmək lazımdır?",
        options: ["Yandırmaq", "Zibil qabına atmaq", "5 %-li lizol məhlulunda 6 saat saxlamaq", "3 %-li xloramin məhlulunda saxlamaq", "1 %-li soda məhlulunda 1 gün saxlayıb,təkrar istifadə etmək"],
        correct: 0
    },
    // Question 844
    {
        question: "Qastroskopiya zamanı hansı anestetik məhluldan istifadə edilir?",
        options: ["Anesteziya edilmir", "3 %-li trimekain vurulur", "0, 5 %-li novakainlə anesteziya edilir", "Udlağa 1 %-li dikain məhlulu sürtülür", "0, 25 % novakain vurulur"],
        correct: 3
    },
    // Question 845
    {
        question: "Sorulan sintetik saplara hansı saplar aid edilir?",
        options: ["Vikril", "Dakron", "Neylon", "Kapron", "Lavsan"],
        correct: 0
    },
    // Question 846
    {
        question: "Əməliyyat blokunda neçə qoruyucu zona vardır",
        options: ["5", "2", "4", "1", "3"],
        correct: 4
    },
    // Question 847
    {
        question: "Əməliyyat tibb bacısı əməliyyat zamanı iri salfetləri neçə dəfə saymalıdır?",
        options: ["saymamalıdır", "1", "2", "3", "5"],
        correct: 3
    },
    // Question 848
    {
        question: "Toxumalar arasına qanın toplanması necə adlanır?",
        options: ["Teratoma", "Mioma", "Qlioma", "Osteoma", "Hematoma"],
        correct: 4
    },
    // Question 849
    {
        question: "Barmaqlarda əməliyyat zamanı tətbiq olunan yerli anesteziya hansıdır?",
        options: ["İnfiltrasiya üsulu", "Onurğa beyni anesteziyası", "Oberst - Lukaşeviç üsulu", "Vişnevski üsulu", "Futlyar anesteziya"],
        correct: 2
    },
    // Question 850
    {
        question: "Körpücük sümüyünün sınıqlarında hansı sarğı qoyulur ?",
        options: ["Sünbülvari sarğı", "Tısbağavari sarğı", "Dezo sarğısı", "Spiral şəkilli sarğı", "Ləçək sarğısı"],
        correct: 2
    },
    // Question 851
    {
        question: "Döş qəfəsinin yaralanmalarında hermetiklik yaradan sarğı hansıdır?",
        options: ["Gips sarğısı", "Bint sarğısı", "Okklüziya sarğısı", "Dezo sarğısı", "Ləçək sarğısı"],
        correct: 2
    },
    // Question 852
    {
        question: "Bərk sarğılara hansı sarğı aiddir?",
        options: ["Kolloid sarğı", "Leykoplastırlı sarğı", "Gips sarğısı", "Yapışqanlı sarğı", "Bint sarğıları"],
        correct: 2
    },
    // Question 853
    {
        question: "Flakonda qanın infeksiyalaşmasını göstərən əlamət hansıdır?",
        options: ["Plazma bulanlıq, fibrin lopalarla", "Qan üç qatlı, plazma isə şəffafdır", "Plazma çəhrayı rəngdə", "Plazma şəffafdır", "Plazma sarı rəngdə, şəffaf"],
        correct: 0
    },
    // Question 854
    {
        question: "Resus amili qanın hansı elementində yerləşir?",
        options: ["Limfositlərlə", "Trombositlərdə", "Plazmada", "Eritrositlərdə", "Leykositlərdə"],
        correct: 3
    },
    // Question 855
    {
        question: "Narkozdan əvvəl xəstəyə premedikasiyanı kim təyin edir ?",
        options: ["Anestezist tibb bacısı", "Qəbul şöbəsinin həkimi", "Həkim anestezioloq", "Müalicə həkimi", "Palata tibb bacısı"],
        correct: 2
    },
    // Question 856
    {
        question: "Yataq yaralarının profilaktikası üçün görülməyən tədbir hansıdır?",
        options: ["Dərinin kamforalı spirtlə silinməsi", "Rezin halqanın qoyulması", "Yataq ağlarının ütülənməsi", "Tənəffüs gimnastikası", "Xəstənin çevrilməsi"],
        correct: 3
    },
    // Question 857
    {
        question: "Kəsilmiş təzə yaranın ən təhlükəli simptomu hansıdır?",
        options: ["İkincili nekroz", "Qanaxma", "Yara ətrafında suluqlar", "İltihab", "Demarkasiya xətti"],
        correct: 1
    },
    // Question 858
    {
        question: "Cərrahi əməliyyatlar zamanı drenajlar nə üçün qoyulur?",
        options: ["Epitelizasiyanı sürətləndirmək üçün", "Çapıq əmələ gəlməsi üçün", "Qanaxmanı dayandırmaq üçün", "Yaranı təftiş etmək üçün", "Yara ifrazatını çıxarmaq üçün"],
        correct: 4
    },
    // Question 859
    {
        question: "I-II dərəcəli termiki yanıq zamanı həkiməqədərki yardım hansıdır?",
        options: ["Yanıq sahəsindən yuxarıda turna qoymaq", "Aseptik sarğı qoyub,təcili yardım çağırmaq", "Antibiotiklər vurmaq", "Süni ağ ciyər aparatına qoşma və ürəyin masajı", "Tənəffüsü yaxşılaşdırmaq üçün analeptiklər vurmaq"],
        correct: 1
    },
    // Question 860
    {
        question: "Limfadenit nəyin iltihabıdır?",
        options: ["Tük follikulunun iltihabı", "Oynaqların iltihabı", "Tər vəzilərinin iltibahı", "Piy vəzinin iltihabı", "Limfa düyünlərinin iltihabı"],
        correct: 4
    },
    // Question 861
    {
        question: "Yaş qanqrena zamanı ilk tibb yardım hansıdır?",
        options: ["Qanəvəzedici köçürmək", "Təcili hospitalizə etmək", "Spirtli kompreslər qoymaq", "Kalium permanqanat məhlulu ilə vanna etmək", "Antibiotiklərdən istifadə etmək"],
        correct: 1
    },
    // Question 862
    {
        question: "Məhdud irinlik necə adlanır?",
        options: ["İnfiltrat", "Fleqmona", "Abses", "Yara", "Fistula"],
        correct: 2
    },
    // Question 863
    {
        question: "Əməliyyatdan sonrakı dövr, neçə fazaya bölünür?",
        options: ["2", "1", "4", "5", "3"],
        correct: 4
    },
    // Question 864
    {
        question: "Əməliyyatdan sonra xəstəyə qulluğun məqsədi nədir?",
        options: ["İkincili qanaxmanın qarşısını almaq", "Yaranın I-li infeksiyalaşmasının qarşısını almaq", "Rentgen və laborator müayinələrin aparılması", "Əməliyyatdan sonrakı dövrün uzadılması", "Regenerasiya prosesini sürətləndirmək"],
        correct: 4
    },
    // Question 865
    {
        question: "Qanın laxtalanma müddəti normada neçə dəqiqədir?",
        options: ["1", "5", "8", "15", "10"],
        correct: 1
    },
    // Question 866
    {
        question: "II dərəcəli donma üçün xarakterik əlamət hansıdır?",
        options: ["Epidermisin nekrozu və suluqların əmələ gəlməsi", "Dəri səthinin avazıması", "Dərinin hipiremiyası", "Bütün dərinin nekrozu", "Bütün toxuma qatlarının və sümüyün nekrozu"],
        correct: 0
    },
    // Question 867
    {
        question: "Pnevmotoraks nədir?",
        options: ["Döş qəfəsinə eksudatın toplanması", "Döş qəfəsinə mayenin toplanması", "Döş qəfəsinə havanın daxil olması", "Döş qəfəsinə qanın toplanması", "Döş qəfəsinə irinin toplanması"],
        correct: 2
    },
    // Question 868
    {
        question: "Çanaq sümüklərinin sınığı zamanı ən təhlükəli sınıq hansı hesab olunur?",
        options: ["Büzdüm sümüyünün sınığı", "Oturaq sümüyünün sınığı", "Qasıq qabarının sınığı", "Çanaq sümüklərinin tamlığının pozulması", "Çanaq sümüklərinin tamlığının pozulmaması"],
        correct: 3
    },
    // Question 869
    {
        question: "Yanığın ən geniş yayılmış növü hansıdır?",
        options: ["Yuxarıda sadalananların hamısı", "Kimyəvi", "Elektrik yanıqları", "Şüa", "Termiki"],
        correct: 4
    },
    // Question 870
    {
        question: "Dəridə suluqların əmələ gəlməsi neçənci dərəcəli yanığa aiddir?",
        options: ["III A", "III B", "IV", "II", "I"],
        correct: 3
    },
    // Question 871
    {
        question: "Sınıqların repozisiyası harada və nə vaxt aparılmalıdır?",
        options: ["Travma baş verdiyi yerdə", "Istənilən yerdə və istənilən vaxt", "Zərərçəkənin daşınma zamanı", "Əməliyyat otağında və tez bir zamanda"],
        correct: 0
    },
    // Question 872
    {
        question: "Bazu oynağının çıxığında ilk tibbi yardım məqsədilə hansı şina qoyulur?",
        options: ["Diteriks şinası", "Yelanski şinası", "Böeler şinası", "Ilizanov şinası", "Kramer şinası"],
        correct: 4
    },
    // Question 873
    {
        question: "Kəllə beyin travmaları zamanı ilk tibbi yardım göstərilərkən xəstə hansı vəziyyətdə olmalıdır?",
        options: ["Xəstəyə oturaq vəziyyət verilməlidir", "Yarımoturaq vəziyyət verməli", "Uzadılmış, başı yana əyilmiş vəziyyətdə", "Burun boşluğu yuyulmalıdır", "Qulaq keçəcəyi yuyulmalıdır"],
        correct: 2
    },
    // Question 874
    {
        question: "Hansısa bir ətrafın donması zamanı ilk tibbi yardım nədən ibarətdir?",
        options: ["Qarla ovuşdurmaq", "Termoizoləedici sarğı qoymaq", "İsti su ilə ovuşdurmaq", "Vişnevski məlhəmi ilə sarğı qoymaq", "Yun parça ilə ovuşdurmaq"],
        correct: 2
    },
    // Question 875
    {
        question: "Uzunmüddətli sıxılma sindromu zamanı ilk tibbi yardım nədən ibarətdir?",
        options: ["Antiseptiklərlə silib sarğı qoymaq", "Turna qoymaq və ətrafları soyutmaq", "Oklüziya sarğısı qoymaq", "Turna qoymaq və ətrafları isitmək", "Sıxıcı sarğı qoymaq"],
        correct: 1
    },
    // Question 876
    {
        question: "Açıq pnevmotoraks zamanı ilk tibbi yardım nədən ibarətdir?",
        options: ["Dezo tipli sarğı qoymaq", "Okklüziya sarğısı qoymaq", "Zərərçəkmişi arxası üstə uzatmaq", "Zərərçəkmişi süni tənəffüs aparatına qoşmaq", "Dəri altına 1 %-li morfin məhlulu yeritmək"],
        correct: 1
    },
    // Question 877
    {
        question: "Qabırğaların sınığı zamanı xəstəni hansı vəziyyətdə daşımaq olar?",
        options: ["Qarnı üstə uzadılmış", "Arxası üstə uzadılmış", "Oturaq", "Yarımoturaq", "Sağlam tərəfə uzadılmış"],
        correct: 3
    },
    // Question 878
    {
        question: "Qanın maksimal saxlanma müddəti neçə gündür?",
        options: ["28 gün", "21 gün", "16 gün", "14 gün", "7 gün"],
        correct: 1
    },
    // Question 879
    {
        question: "Donor qanı soyuducuda hansı temperaturda saxlanmalıdır?",
        options: ["0, -15°C", "0, -2°C", "4 - 6°C", "+17, -20°C", "-2, -0°C"],
        correct: 2
    },
    // Question 880
    {
        question: "Aralıq nahiyyəsində hansı sarğı növündən istifadə olunur?",
        options: ["Sünbülvari", "T-şəkilli", "Spiralvari", "Dairəvari", "Sapandvari"],
        correct: 1
    },
    // Question 881
    {
        question: "Bərk sarğılara hansı sarğı növü aiddir?",
        options: ["Torlu elastiki bint", "Gips", "Yapışqan plastik", "Kolloid", "Kleol"],
        correct: 1
    },
    // Question 882
    {
        question: "Donor kimə deyilir?",
        options: ["İnfuziya yolu ilə maye köçürülən şəxsə", "Qanını və ya orqanını digər insana verən şəxsə", "Qan azlığı olan şəxsə", "Qanaxmaya meyilli şəxsə", "Qan köçürülən şəxsə"],
        correct: 1
    },
    // Question 883
    {
        question: "Resipient kimə deyilir?",
        options: ["Sağalan şəxsə", "Qanaxmaya meyilli şəxsə", "Qan itirməsi olan şəxsə", "Orqan və ya qanını digər insana verən şəxsə", "Qan köçürülən şəxsə"],
        correct: 4
    },
    // Question 884
    {
        question: "Reinfuziya nədir?",
        options: ["Birbaşa qanın köçürülməsi", "Cift qanının köçürülməsi", "Util qanın köçürülməsi", "Auto qanın köçürülməsi", "Conservləşdirilmiş qanın köçürülməsi"],
        correct: 3
    },
    // Question 885
    {
        question: "Aşağıdakı preparatlardan hansı narkozdan əvvəl premidikasiya məqsədilə mütləq işlədilməlidir?",
        options: ["Fentanil 0, 005 %", "Analgin 50 %", "Novakain 0, 5 %", "Atropin 0, 1 %", "Lidokain 1 %"],
        correct: 3
    },
    // Question 886
    {
        question: "Yumuşaq sarğılara hansı aiddir?",
        options: ["İmprovizə olunmuş şinalar", "Kramer şinası", "Kleol", "Borulu elastiki bint", "Gips sarğısı"],
        correct: 3
    },
    // Question 887
    {
        question: "Aşıq daban oynağının zədələnmələrində hansı sarğı qoyulur?",
        options: ["Səkkizvari", "Sünbül", "Qayıdan", "Spiralvari", "Tısbağavari"],
        correct: 0
    },
    // Question 888
    {
        question: "Orqanizmin soyuğa qarşı ilk reaksiyası özünü necə biruzə verir?",
        options: ["Epidermisin nekrozu", "Damarların spazmı", "Temperaturun yüksəlməsi", "Ağrı", "Suluqların olması"],
        correct: 1
    },
    // Question 889
    {
        question: "Filtirli bikslərdə olan sarğı materiallarını sterilizasiyadan sonra maksimum nə qədər saxlamaq olar?",
        options: ["10 gün", "6 saat", "20 gün", "40 gün", "5 gün"],
        correct: 2
    },
    // Question 890
    {
        question: "Kraft-paketlərdən neçə dəfə istifadə etmək olar?",
        options: ["2", "10", "5", "20", "7"],
        correct: 2
    },
    // Question 891
    {
        question: "Alətlərdə sterilizasiyadan əvvəl gizlin qanın olmasını hansı sınaqla yoxlayırlar?",
        options: ["Volkoviç", "Zimnitski", "Benzidin", "Oberst", "Mikuliç"],
        correct: 2
    },
    // Question 892
    {
        question: "Jane şprisi hansı məqsədlər üçün işlədilir?",
        options: ["Dəri içi sınaq üçün", "Vena daxili inyeksiyalar üçün", "Dərialtı inyeksiyalar üçün", "Boşluqları yumaq üçün", "Əzələ daxili inyeksiyalar üçün"],
        correct: 3
    },
    // Question 893
    {
        question: "Endocərrahlıqda işlədilən endoskopik alətlər necə sterilizasiya olunur?",
        options: ["Avtoklavda", "Soyuq üsulla", "Qaynadılmaqla", "Quruducu şkafda", "Alovla"],
        correct: 1
    },
    // Question 894
    {
        question: "Dişlənmiş yaralarda ilkin olaraq tibb bacısı nə etməlidir?",
        options: ["Antibiotik vurmaq", "1 %-li 1, 0 ml promedol vurmaq", "Kip sarğı qoymaq", "Yaranı 1-li cərrahi işləmək", "Yara kənarlarını yodla işləyib,aseptik sarğı qoymaq"],
        correct: 4
    },
    // Question 895
    {
        question: "Yağ tərkibli dərmanlar neçə dərəcəyə qədər qızdırılır?",
        options: ["37º-38º", "15º", "45º", "55º", "10º"],
        correct: 0
    },
    // Question 896
    {
        question: "Troakar nə üçün işlədilir?",
        options: ["Sistoskopiya üçün", "Punksiya üçün", "Duogenal zondlama üçün", "İntuabasiya", "Paranefral blokada üçün"],
        correct: 1
    },
    // Question 897
    {
        question: "Əməliyyatönü dövr hansı vaxtdan başlayır?",
        options: ["Cərrahi şöbəyə daxil olan vaxtdan", "Əməliyyat başlanan vaxtdan", "Xəstəxanaya daxil olan vaxtdan", "Diaqnoz qoyulan vaxtdan", "Xəstəlik başlanan vaxtdan"],
        correct: 0
    },
    // Question 898
    {
        question: "Planlı əməliyyatdan əvvəl təmizləyici imalə nə vaxt aparılır?",
        options: ["İmalə olunmur", "Əməliyat olunan gün səhər", "Əməliyyatdan əvvəlki gün axşam və əməliyyat günü səhər", "Əməliyyatdan 2 saat əvvəl", "Əməliyyatdan 1 sutka əvvəl"],
        correct: 2
    },
    // Question 899
    {
        question: "Təxirəsalınmaz əməliyyatdan əvvəl təmizləyici imalə nə vaxt aparılır?",
        options: ["İmalə olunmur", "Əməliyyatdan 6 saat əvvəl", "Əməliyyatdan 2 saat əvvəl", "Səhər, əməliyyat olunan gün", "Əməliyyatdan olunan gün"],
        correct: 0
    },
    // Question 900
    {
        question: "Planlı əməliyyatdan əvvəl sanitar işlənmənin hansı növündən istifadə olunur?",
        options: ["Sanitar təmizlənmə aparılmır", "Tam sanitar işlənmə", "Hissəvi sanitar təmizlənmə", "Dərinin silinməsi və ağların dəyişdirilməsi", "İmalə və əməliyyat sahəsinin işlənməsi"],
        correct: 1
    },
    // Question 901
    {
        question: "Fövqəladə əməliyyatdan əvvəl sanitar işlənmənin hansı növündən istifadə olunur?",
        options: ["Sanitar işlənmə aparılmır", "Dərinin silinməsi və ağların dəyişdirilməsi", "Hissəvi sanitar işlənmə", "Tam sanitar işlənmə", "Bağırsaqların və sidik kisəsinin boşaldılması"],
        correct: 0
    },
    // Question 902
    {
        question: "Planlı əməliyyatdan əvvəl dərinin tüklərdən təmizlənməsi nə vaxt aparılır?",
        options: ["Əməliyyatdan 1 sutka əvvəl", "Əməliyyat otağında", "Əməliyyat stolunda", "Səhər, əməliyyat olunan gün", "Axşam vaxtı"],
        correct: 3
    },
    // Question 903
    {
        question: "Əməliyyatönü dövrün əsas məqsədi nədir?",
        options: ["Xəstənin vəziyyətinin qiymətləndirilməsi", "Ürək-damar sisteminin müayinəsi", "İnfeksiya ocaqlarının sanasiyası", "Xəstənin vəziyyətinin yaxşılaşdırılması", "Xəstənin əməliyyata hazırlanması"],
        correct: 4
    },
    // Question 904
    {
        question: "Əməliyyatönü dövr nə vaxt qurtarır?",
        options: ["Əməliyyata 30 dəqiqə qalmış", "Xəstəxanaya daxil olan andan", "Əməliyyat başlanan andan", "Xəstəlik başlanan andan", "Diaqnoz dəqiqləşdirilən andan"],
        correct: 2
    },
    // Question 905
    {
        question: "Növbəti gün saat 9.00- a planlaşdırılmış əməliyyat olunacaq xəstənin axırıncı qida qəbulu nə vaxt olmalıdır?",
        options: ["Əməliyyat günü, səhər yeməyi", "Əvvəlki gün ümumiyyətlə qida qəbul etmir", "Əməliyyatdan əvvəlki gün saat 20.00 qədər", "Əməliyyatdan əvvəlki gün saat 22.00", "Əməliyyatdan əvvəlki gün, nahar yeməyi"],
        correct: 2
    },
    // Question 906
    {
        question: "Əməliyyatdan sonrakı dövrdə xəstə ilkin olaraq harada yerləşdirilir?",
        options: ["Operasion blokda", "Təcrid palatasında", "Xəstəxanadan çıxarılır", "Reanimaiya şöbəsində və əməliyyatdan sonrakı palatada", "Ümumi palatada"],
        correct: 3
    },
    // Question 907
    {
        question: "Toxumaların tikilməsi əməliyyatın hansı dövrü sayılır?",
        options: ["Əməliyyatdan sonrakı dövr", "Müdaxilə", "Əməliyyatın gedişi", "Operativ gediş", "Əməliyyatın sonu"],
        correct: 4
    },
    // Question 908
    {
        question: "Qarın boşluğu orqanlarında aparılan əməliyyat zamanı xəstəyə hansı vəziyyət verilir?",
        options: ["Trendlenburq vəziyyəti", "Böyrü üstə vəziyyət", "Arxası üstə horizontal vəziyyət", "Başın arxaya atılmış vəziyyəti", "Qarnı üstə vəziyyət"],
        correct: 2
    },
    // Question 909
    {
        question: "Toxumaları aralayan alət hansıdır?",
        options: ["İtiuclu qayçı", "Koxer sıxıcısı", "Skalpel", "Kəsici iynə", "Farabef qarmağı"],
        correct: 4
    },
    // Question 910
    {
        question: "Əməliyyatdan sonrakı dövrdə sidik ləngiməsinə qarşı aparılan tədbir hansıdır?",
        options: ["Dərialtına 0,1%-li - 1,0 atropin yeritmək", "Sidikqovucular vermək", "Sidik kisəsinə kateter qoymaq", "Qarnın aşağı hissəsinə soyuq qoymaq", "Vena daxilinə 5%-li qlükoza yeritmək"],
        correct: 2
    },
    // Question 911
    {
        question: "Boğulmuş yırtıqlarda ilkin olaraq tibb bacısı nə etməlidir?",
        options: ["Spazmolitik dərman preparatı vurulmalıdrır", "Xəstə təcili hospitalizə olunmalıdır", "Xəstə təmizləyici imalə olumalıdır", "Xəstənin mədəsi yuyulmalıdır", "Yırtıq qapısından içəri salınmalıdır"],
        correct: 1
    },
    // Question 912
    {
        question: "Mədə-bağırsaq qanaxması zamanı həkimə qədər hansı yardım göstərilir?",
        options: ["Sakitlik, soyuq qoymaq, vikasol vurmaq, qospitalizə etmək", "Ürək preparatları", "Analgetiklər, damargenəldicilər", "Soyuq, smazmolitiklər", "Kalsi-xlor, ağrıkəsici preparatlar"],
        correct: 0
    },
    // Question 913
    {
        question: "Hemorroidal qanaxma zamanı ilk yardım hansıdır?",
        options: ["Vanna etmək", "Vikasol həbi qəbul etmək", "Mədəni yumaq", "Təcili hospitalizasiya etmək", "Pəhriz"],
        correct: 3
    },
    // Question 914
    {
        question: "Əllərin pervomurla işlənməsi zamanı 5 lt hazır işçi məhlulundan neçə nəfər istifadə edə bilər?",
        options: ["5", "15", "2", "40", "20"],
        correct: 1
    },
    // Question 915
    {
        question: "Ürəyin qapalı massajı zamanı xəstənin uzadıldığı yer necə olmalıdır?",
        options: ["Nahamar", "Yumşaq", "Sərt", "Maili", "Yaylı çarpyıda"],
        correct: 2
    },
    // Question 916
    {
        question: "Reanimasiya tədbirlərinin effektivlik əlaməti hansıdır?",
        options: ["Döş qəfəsində ekskursiyanın olmaması", "Yuxu arteriyasında nəbz vurğusunun olması, bəbəklərin daralması və sərbəst tənəffüsün bərpası", "Bəbəklərin genəlməsi", "Periferik nəbzin olmaması", "Rəngin avazıması"],
        correct: 1
    },
    // Question 917
    {
        question: "Klinik ölüm vəziyyətindən çıxarmaq üçün əsas tədbirlər hansıdır?",
        options: ["Ürəyin qapalı masajı aparılır", "Ürəyin qapalı massajı aparılır, tənəffüs yollarının keçiriciliyi bərpa olunur, süni tənəffüs verilir", "Naşatır spirti iylədilir", "Ağciyərlər süni tənəffüs aparatına qoşulur", "Qanəvəzedici köçürülür"],
        correct: 1
    },
    // Question 918
    {
        question: "Yetkin şəxslərdə ürəyin vasitəli massajı zamanı döş qəfəsinə təzyiq necə aparılır?",
        options: ["2 əlin barmaqları ilə", "Sol əlin ovucun proksimal hissəsinə sağ əlin ovcunu qoymaqla", "Təkcə sağ əllə", "Sol əlin bütün ovuc səthi ilə", "Əlin 3 barmağı ilə"],
        correct: 1
    },
    // Question 919
    {
        question: "Vena daxili infuziya zamanı hava emboliyasının qarşısını almaq üçün hansı profilaktik tədbir görülür?",
        options: ["İti uclu iynələrdən istifadə olunur", "Kiçik diametrli iynələrdən istifadə olunur", "Sistem və iynə steril olur", "Maye köçürüləcək damarlar dəyişdirilir", "Sistemdən əvvəlcə hava qabarcıqları çıxarılır"],
        correct: 4
    },
    // Question 920
    {
        question: "Təmizləyici imalə zamanı xəstə hansı vəziyyətdə olamalıdır?",
        options: ["Sol böyrü üstə və ayaqlar qarına yığılmış vəziyyətdə", "Diz-dirsək vəziyyətində", "Arxası üstə", "Sağ böyrü üstə", "Qarın üstə"],
        correct: 0
    },
    // Question 921
    {
        question: "Köçürülən qan hansı dərəcəyə qədər qızdırılmalıdır?",
        options: ["42-44o", "40-41o", "38-40o", "33-35o", "37-38°"],
        correct: 4
    },
    // Question 922
    {
        question: "Buz qovuğu əməliyyat sahəsində nə qədər saxlanmalıdır?",
        options: ["1 saat", "Buz əriyənə qədər", "15 dəqiqə", "30 dəqiqə", "45 dəqiqə"],
        correct: 1
    },
    // Question 923
    {
        question: "Venadan qan götürərkən turna nə vaxt açılır?",
        options: ["İynəni çıxarandan sonra", "İynəni çıxarmamışdan qabaq", "İynəni çıxardıqdan bir neçə dəqiqə sonra", "Venapunksiyadan sonra", "3 dəqiqə sonra"],
        correct: 1
    },
    // Question 924
    {
        question: "Hidroadenit əmələ gəlməsində risk faktoru hansıdır?",
        options: ["Çox miqdarada qida qəbulu", "Dəridə quruluq", "Çoxlu maye qəbulu", "Şəxsi gigiyenaya riayət etməmək", "Hipervitaminoz"],
        correct: 3
    },
    // Question 925
    {
        question: "Qazlı qanqrena infeksiyasına yoluxmuş xəstələr hansı palatada yatırlar?",
        options: ["Boksda", "İntensiv terapiya palatasında", "Təcrid palatasında", "Reanimasiya şöbəsində", "Ümumi palatada"],
        correct: 2
    },
    // Question 926
    {
        question: "Bu patologiyaların hansında tetanus əleyhinə zərdab və anatoksin vurulur?",
        options: ["Sarğı nahiyəsinin absesində", "Bazunun çıxığında", "Kəskin irinli plevritdə", "Bazu boynunun qapalı sınığında", "Başın yumşaq toxumalarının yaralanmalarında"],
        correct: 4
    },
    // Question 927
    {
        question: "Kəsilmiş yara üçün hansı xarakterikdir?",
        options: ["Yara ağzının kənarlarında hematomaların olması", "Yara ağzının girintili-çıxıntılı olması", "Yara ağzının kənarlarının hamar olması", "Yara kanalının uzun və dar olması", "Daxili qanaxma"],
        correct: 2
    },
    // Question 928
    {
        question: "Endoskopik müayinədən əvvəl hansı anesteziya növündən istifadə olunur?",
        options: ["Sürtməklə yerli anesteziya", "Xloretil ilə anesteziya", "Regionar anesteziya", "Peridural anesteziya", "İnfiltrasion anesteziya"],
        correct: 0
    },
    // Question 929
    {
        question: "Əməliyyatdan sonrakı gün cərrahi yaranın ilkin sarğısı necə aparılır?",
        options: ["Yara yodonatla işləndikdən sonra quru aseptik sarğı qoyulur", "Yara üzərinə məlhəm qoyulur", "Yara hidrogen peroksid H2O2 məhlulu ilə işlənməsi", "Drenajla yaranın yuyulması", "Tikişlərin bir qisminin sökülməsi"],
        correct: 0
    },
    // Question 930
    {
        question: "Yaralanma zamanı həkimə qədər göstərilən ilkin tibbi yardım hansıdır?",
        options: ["Qanaxmanın dayandırılması və gips sarğısının qoyulması", "Antibiotiklərin yeridilməsi", "Qanaxmanın dayandırılması və məlhəmli sarğının qoyulması", "Hipertonik məhlulun qoyulması", "Ağrıkəsicinin vurulması, qanaxmanın dayandırılması və aseptik sarğı qoyulması."],
        correct: 4
    },
    // Question 931
    {
        question: "Ağ ciyər qanaxmasında xəstəni hansı vəziyyətdə daşımaq olar?",
        options: ["Yarım oturaq", "Böyrü üstə uzanmış", "Arxası üstə uzanmış", "Qarnı üstə uzanmış", "Ayaqlar yuxarı qaldırılmış vəziyyətdə"],
        correct: 0
    },
    // Question 932
    {
        question: "Yuxu arteriyası zədələnərsə qanaxmanı necə saxlamaq olar?",
        options: ["Yaranın üzərinə sıxıcı sarğı qoymaqla", "Yaraya qan saxlayıcı alət qoymaqla", "Yaranı tamponada etməklə", "Boyuna turna qoymaqla", "Yuxu arteriyasını barmaqla VI boyun fəqərəsinin köndələn çıxıntısına sıxmaqla"],
        correct: 4
    },
    // Question 933
    {
        question: "Əməliyyat və sarğı otağının havasını mikrobsuzlaşdırmaq üçün nə edirlər ?",
        options: ["Pəncərələrə tor tuturlar", "Divarları və döşəmələri xloraminlə yuyurlar", "Otaqdakı əşyaların üzərini nəm əski ilə silirlər", "Otağa aerozol çiləyirlər", "Bakteriosid lampalarla şüalandırırlar"],
        correct: 4
    },
    // Question 934
    {
        question: "Əməliyyat bloku əsaslı olaraq neçə gündən bir təmizlənir?",
        options: ["Hər gün", "Ayda bir dəfə", "İldə bir dəfə", "Həftədə bir dəfə", "İki həftədən bir"],
        correct: 3
    },
    // Question 935
    {
        question: "Hava damcı infeksiyasının qarşısını almaq üçün tibb işçiləri nədən istifadə edirlər?",
        options: ["Xalat və əlcək geyinirlər", "Əllərini tez-tez yuyurlar", "Maska taxırlar", "Aerozol çiləyirlər", "Otağın havasını dəyişirlər"],
        correct: 3
    },
    // Question 936
    {
        question: "Qida borusunun kimyəvi preparatla yanığında ilk tibbi yardım kimi nə etmək lazımdır?",
        options: ["Mədə ilıq su ilə yuyulur və ağrı kəsici preparat vurulur", "Zərənçəkənə artıq miqdarda soyuq su içirdilir", "Zərərçəkən qusdurulur", "Kimyəvi preparatı zərərsizləşdirən maddə içirdilir", "Süd içirdilir"],
        correct: 0
    },
    // Question 937
    {
        question: "Nəqliyyat şinalarından hansı məqsədlə istifadə eidilir?",
        options: ["Zədələnmiş nahiyyəni imobilizə etməq məqsədi ilə", "Zərərçəkmişi daşımaq məqsədi ilə", "Çıxıqları yerinə salmaq məqsədi ilə", "Sınıqları müalicə etmək məqsədi ilə", "Qanaxmanı saxlamaq məqsədi ilə"],
        correct: 0
    },
    // Question 938
    {
        question: "Çıxıqlar zamanı göstərilən ilk tibbi yardım hansıdır?",
        options: ["oynağa isti kompres qoyulur.", "Çıxmış oynaq yerinə salınır.", "Oynağa gips sarğısı qoyulur.", "Ətraf fiksasiya olunur, ağrıkəsici preparat verilir, oynağa soyuq kompres qoyulur", "Oynağa aseptik sarğı qoyulur."],
        correct: 3
    },
    // Question 939
    {
        question: "Aşağı çənənin çıxığında oynağı fiksasiya etmək üçün hansı sarğı növündən istifadə olunur?",
        options: ["Sapandvari sargi", "Səkkizvari sarğıdan", "Yüyəntipli sarğıdan", "Qayıdan sarğıdan", "Spiralvari sarğıdan"],
        correct: 0
    },
    // Question 940
    {
        question: "Tısbağavari sarğı hansı nahiyələrə qoyulur?",
        options: ["Ayağa", "Bazu oynağına", "Boyuna", "Diz və dirsək oynaqlarına", "Aşıq-daban oynağına"],
        correct: 3
    },
    // Question 941
    {
        question: "Sapandvari sarğını hansı nahiyələrə qoyurlar?",
        options: ["Gözə,qulağa", "Dizə, dirsəyə", "Gövdəyə", "Boyuna,ələ", "Buruna, çənəyə, başa"],
        correct: 4
    },
    // Question 942
    {
        question: "Diş çəkildikdən sonra qanaxmanı saxlamaq üçün nədən istifadə edirlər?",
        options: ["Çənəyə soyuq kompres qoyulur.", "Ağız hidrogen - peroksidlə qarqara olunur", "Vikasol tabletkası verilir.", "Diş yuvasına steril bintdən hazırlanmış tampon qoyurlar.", "Yemək yeməmək məsləhət görülür."],
        correct: 3
    },
    // Question 943
    {
        question: "Endoskopiyada işlədilən optik ucluqlar necə sterilizasiya edilir?",
        options: ["Avtoklavda", "Pervomur məhlulunda saxlamaqla", "İsti hava axını ilə işləyən quruducu şkaflarda", "Formalin buxarlarıda", "Qaynatmaqla"],
        correct: 2
    },
    // Question 944
    {
        question: "İsti hava axını ilə işləyən quruducu şkafda optimal t°-nə qədər olur?",
        options: ["160-180°", "100-120°", "180-220°", "150-160°", "120-140°"],
        correct: 2
    },
    // Question 945
    {
        question: "Sterilləşdirilmiş tikiş sapları işlədilənə qədər necə saxlanılır?",
        options: ["Yodonatda", "Pervomurda", "Süleymani məhlulunda", "Briliant yaşılında", "70°-li etil spirtində"],
        correct: 4
    },
    // Question 946
    {
        question: "Dezinfeksiya nədir?",
        options: ["Mikrobların yaraya düşməsinin qarşısının alınması", "Bütün mikrobların hətta sporəmələgətirənlərin məhv edilməsi", "Bütün mikrobların,virusların məhv edilməsi", "Patogen mikrobların zərərsizləşdirilərək məhv edilməsi", "Yarada olan mikrobların məhv edilməsi"],
        correct: 3
    },
    // Question 947
    {
        question: "Sterilizasiya nədir?",
        options: ["Bütün mikrobların sporları ilə məhvidir", "Mikrobların yarada məhvidır", "Mikrobların yaraya düşmə yollarında məhvidır", "Mikrobların yaraya düşməsinin qarşısının alınmasıdır", "Patogen mikroqanizmlərin məhvidir"],
        correct: 0
    },
    // Question 948
    {
        question: "Antiseptika nədir?",
        options: ["Yaradakı mikrobların məhvidir", "Patogen mikrobların məhvidır", "mikrobların yaraya düşmə yollarında məhvidir", "Alətlərin dezinfeksiyasıdır", "Alətlərin sterilizasiyasıdır"],
        correct: 2
    },
    // Question 949
    {
        question: "Aseptika nədir?",
        options: ["Alətlərin dezoinfeksiyası", "Yaradakı mikrobların məhv olunması tədbirləri kompleksi", "Alətlərin sterilizasiyası", "Mikrobların yaraya düşməsinin qarşısını alan profilaktik tədbirlərdir", "Patogen mikrobların məhvi deməkdir"],
        correct: 3
    },
    // Question 950
    {
        question: "Əməliyyatda iştirak edən tibb heyəti hansı geyimdə olmalıdır?",
        options: ["Steril xalat, kalpak, maska və baxildə", "Fərqi yoxdur", "Təmiz xalatda", "Steril xalatda", "Xüsusi geyimdə"],
        correct: 0
    },
    // Question 951
    {
        question: "Tez bərkiməsi üçün gipsli langeti hansı temperaturlu suda islatmaq lazımdır?",
        options: ["Qliserin qatılmış suda", "Soyuq suda", "Bitki yağı tökülmüş suda", "İlıq suda", "Fərqi yoxdur"],
        correct: 3
    },
    // Question 952
    {
        question: "Bud sınıqlarında neçə qatlı langet hazırlamaq lazımdır?",
        options: ["2-3 qatlı", "3-4 qatlı", "10-12 qatlı", "1-2 qatlı", "9-10 qatlı"],
        correct: 1
    },
    // Question 953
    {
        question: "Biksin universal yığımı necə olmalıdır?",
        options: ["Bir neçə əməliyyata lazım olan sarğı materialları, əməliyyat ağları və iştirakçıların paltarları bir biksə yığılır", "sarğı otağına lazım olan bütün materiallar bir biksə yığılır", "Əməliyyat ağları və iştirakçıların paltarları bir biksə yığılır", "Bir əməliyyat üçün lazımolan sarğı materialları,əməliyyat ağları və əməliyyatın iştirakçılarının paltarları bir biksə yığılır", "Bir əməliyy atda lazım olan ancaq sarğı materialları bir biksə yığılır"],
        correct: 3
    },
    // Question 954
    {
        question: "Qanın uyğunlaşma sınağı planlı hemotransfuziya zamanı necə aparılır?",
        options: ["Donorun və resipientin qan zərdabları qarışdırılır", "Donorun qan damarına resipientin qanı vurulur", "Donorun qanı üzərinə resipientin qanı tökülür", "Donorun qanı üzərinə resipientin zərdabı tökülür", "Resipientin qan zərdabı ilə donorun qanı qarışdırılır"],
        correct: 4
    },
    // Question 955
    {
        question: "Şüa yanıqları zamanı ilk tibbi yardım necə başlanılır?",
        options: ["Zərərçəkənə ürək dərmanları verilir", "Şüalanmış sahə aseptik sarğı ilə örtülür", "Zərərçəkənə ağrıkəsici öreparat verilir", "Şüalanmış sahənin üzərinə məlhəm qoyulur", "Şüalanmış sahə çoxlu miqdarda soyuq su ilə yuyulur"],
        correct: 4
    },
    // Question 956
    {
        question: "Yalnız bir sarğı otağı varsa yaraların sarınma ardıcıllığı necə olmalıdır?",
        options: ["Ardıcııllığa riayət olunmur", "Əvvəlcə təmiz sonra isə irinli yaralara sarğı əməliyyatı aparılır", "Təmiz və irinl yaralar eyni vaxtda sarınır", "Əvvəl irinli sonra təmiz yaralar sarınır", "Irinli yaralar palatada sarğı əməliyyatından keçirilir"],
        correct: 1
    },
    // Question 957
    {
        question: "Arterial turna düzgün qoyulduqda nə baş verir?",
        options: ["Ətraf sianozlaşır", "Turnadan aşağı nahiyədə bütün hissiyat itir", "Turnadan aşağı nahiyədə temperatur yüksəlir", "Turnadan aşağı nahiyədə nəbz vurur", "Qanaxma dayanır və periferik nəbz itir"],
        correct: 4
    },
    // Question 958
    {
        question: "Əllərini əməliyyata hazırlamış cərraha əməliyyat paltarını kim geyindirir?",
        options: ["Cərrahın assisteti", "Cərrah geyindikdən sonra əllərini yuyur", "Əməliyyat paltarını geyinmiş əməliyyat tibb bacısı geyindirir", "Cərrah özü geyinir", "Əməliyyat otağının xadiməsi"],
        correct: 2
    },
    // Question 959
    {
        question: "Qarnın ön divarı yaralanmış zərərçəkəni necə daşımaq məqsədə uyğundur?",
        options: ["Zərərçəkən arxası üstə uzanmış, ayaqlar qarına yığılmış vəziyyətdə daşınır", "Arxası üstə uzanmış və ayaqlarını uzatmış vəziyyətdə daşınır", "Zərərçəkən böyrü üstə uzanmış vəziyyətdə daşınır", "Zərərçəkən qarnıüstə uzanmış vəziyyətdə daşınır", "Zərərçəkən başıaşağı, ayaqları yuxarı qaldırılmış vəziyyətdə daşınır"],
        correct: 0
    },
    // Question 960
    {
        question: "Kolostoma qoyulmuş xəstəyə tibb bacısı nəyi başa salmalıdır?",
        options: ["Polietilen kisəni dəyişmək üçün tibb bacısına müraciət etməyi", "Vaxtaşırı polietilen kisəni dəyişməyi və kolostoma ilə davranmağı", "Kolostomanı haradan almağı.", "Vaxtaşırı kolostomanı dəyişməyi", "Vaxtaşırı kolostomanı təmizləməyi"],
        correct: 1
    },
    // Question 961
    {
        question: "Döş qəfəsi yaralanmaları zamanı hansı hermetik sarğı istifadə edilir?",
        options: ["Okklüziya edici", "Bint", "Ləçəkvari", "Gips", "Yapışqan plastirli"],
        correct: 0
    },
    // Question 962
    {
        question: "Qış fəslində Esmarx turnasının saxlanma müddəti nə qədərdir?",
        options: ["45 dəqiqə", "2 saat", "3 saat", "1-1,5 saat", "0,5 saat"],
        correct: 3
    },
    // Question 963
    {
        question: "Yerli anesteziyanın üstün cəhətləri hansılardır?",
        options: ["Tənəffüs orqanlarının fəaliyyətini artırır.", "Tənəffüs pozğunluqları zamanı istifadə oluna bilər.", "Ürəyin fəaliyyətini artırır.", "Uzunmüddətli əməliyyat önü hazırlıq lazım deyil.", "Hemodinamikaya nəzarəti asanlaşdırır."],
        correct: 3
    },
    // Question 964
    {
        question: "İnfiltrasiya anesteziyası zamanı hansı preparat istifadə edilir?",
        options: ["Lidokain 10%", "Novakain 0,5-0,25%", "Novakain 2%", "Sofkain 1%", "Dikain 0,25%"],
        correct: 1
    },
    // Question 965
    {
        question: "Onurğa beyin anesteziyasından sonra xəstənin daşınması hansı vəziyyətdə olmalıdır?",
        options: ["Arxası üstə uzanmış və başı yana əyilmiş vəziyyətdə", "Yarımoturaq vəziyyətdə", "Ayaqüstə", "Böyrü üstə uzanmış vəziyyətdə", "Qarnı üstə uzanmış vəziyyətdə"],
        correct: 0
    },
    // Question 966
    {
        question: "İki atmosfer təzyiqdə ağların avtoklavda strelizasiya müddəti nə qədərdir?",
        options: ["15 dəqiqə", "20 dəqiqə (132°C)", "60 dəqiqə", "30 dəqiqə", "45 dəqiqə"],
        correct: 1
    },
    // Question 967
    {
        question: "Ağların steriliyinə ən dəqiq nəzarət üsulu hansıdır?",
        options: ["Fiziki üsulla nəzarət", "Kimyəvi üsulla nəzarət", "Texniki nəzarət", "Bakterioloji nəzarət", "Bioloji müayinə üsulu"],
        correct: 3
    },
    // Question 968
    {
        question: "Sterilizasiyanın fiziki üsuluna hansı aiddir?",
        options: ["70o-li etil spirtində saxlamaq", "6%-li hidrogen-peroksid məhlulunda saxlamaq", "Avtoklavlaşdırma", "Antibiotiklərdən istifadə etmək", "Formalik buxarı ilə təsir etmək"],
        correct: 2
    },
    // Question 969
    {
        question: "Əməliyyat sahəsinin işlənməsində hansı antiseptik məhluldan istifadə olunur?",
        options: ["Pervomor", "Kalium-permanqanat məhlulu", "Yodonat", "Hidrogen-peroksid", "10%-li natrium-xlorid"],
        correct: 2
    },
    // Question 970
    {
        question: "Əllərin işlənməsində hansı antiseptik maddədən istifadə edilir?",
        options: ["Formalin", "Benzoy turşusu", "Pervomur (C-4)", "Lyuqol məhlulu", "Brilliyant yaşılı"],
        correct: 2
    },
    // Question 971
    {
        question: "Tikiş materialını yağsızlaşdırmaq üçün hansı məhlulda saxlayırlar?",
        options: ["5%-li yodun spirtli məhlulu", "Efir", "Karbol turşusu", "3%-li hidrogen peroksid", "Pervomur"],
        correct: 1
    },
    // Question 972
    {
        question: "Quruducu şkafda sterilizasiyaya nəzarət üçün nədən istifadə olunur?",
        options: ["Kükürd", "Aspirin", "Benzoy turşusu", "Nişasta", "Tiomoçevina (180-220°)"],
        correct: 4
    },
    // Question 973
    {
        question: "Halloidlər qrupuna hansı aiddir?",
        options: ["Hidrogen-peroksid", "Metilen abısı", "Yodonat", "Brilliyant yaşılı", "Furasilin"],
        correct: 2
    },
    // Question 974
    {
        question: "Arterial qanaxma üçün xarakterik əlamət hansıdır?",
        options: ["Qanın daxilə axması", "Qanın yavaş axması", "Nəbzvari al rəngdə qanın axması", "Qanın yara səthini örtməsi", "Qanın damcı ilə axması"],
        correct: 2
    },
    // Question 975
    {
        question: "Daxili qanaxmanın xarakter əlaməti hansıdır?",
        options: ["Temperaturun yüksəlməsi", "Dərinin hiperemiyası", "Diurezin çoxalması", "Arterial təzyiqin artması", "Dəri örtüyünün avazıması"],
        correct: 4
    },
    // Question 976
    {
        question: "Arterial qanaxmanın müvəqqəti dayandırılmasında hansı üsuldan istifadə olunur?",
        options: ["Damara tikilməsi", "Damarların sklet sümüklərinə sıxılması", "Buz qovuqcuğunun qoyulması", "Damar protezinin qoyulması", "Ətrafa yuxarı vəziyyətin verilməsi"],
        correct: 1
    },
    // Question 977
    {
        question: "Onkologiyada ən etibarlı diaqnostik üsul hansıdır?",
        options: ["Perkusiya", "Rentgenoloji", "USM", "Histoloji", "Endoskopik"],
        correct: 3
    },
    // Question 978
    {
        question: "Metastaz nədir?",
        options: ["Şişin yayılması", "Şişin böyüməsi", "Şişin böyüməməsi", "Şişin geriyə inkişafı", "Şişin parçalanması"],
        correct: 0
    },
    // Question 979
    {
        question: "Bədxassəli şişlərin radikal müalicəsi nə vaxt mümkündür?",
        options: ["II-III mərhələdə", "IV mərhələdə", "III mərhələdə", "III-IV mərhələdə", "I-II mərhələdə"],
        correct: 4
    },
    // Question 980
    {
        question: "Kalkulyoz xolesistitdə ağrı necə başlayır?",
        options: ["Sağ qabırqaaltında qəfləti ağrılarla", "Sağ qabırğaaltında daimi ağrılarla", "Sol qalça nahiyəsində küt ağrılarla", "Sağ qalça çuxurunda qəfləti ağrılarla", "Göbək nahiyəsində küt ağrılarla"],
        correct: 0
    },
    // Question 981
    {
        question: "Mədə xorası üçün xəstənin xarakterik vəziyyəti hansıdır?",
        options: ["Hərəkətsiz, yarımoturaq", "Hərəki narahatlıq", "Başı aşağı vəziyyət", "Dizləri qarına yığılmış (sıxılmış) vəziyyət", "Opistotonus"],
        correct: 3
    },
    // Question 982
    {
        question: "Mexaniki antiseptikaya aiddir:",
        options: ["Yaraların spirtlə dezinfeksiyası", "Yaraların I-li cərrahi işlənməsi", "Eyni qrupdan qan köçürmək", "Yaraya sarğı qoyulması", "Yaraya bakteriofaq vurmaq"],
        correct: 1
    },
    // Question 983
    {
        question: "Uzunmüddətli sıxılma sindromu zamanı ilk yardıma aid olmayan əlamət hansıdır?",
        options: ["Turnanın qoyulması", "Zədələnmiş ətrafın immobilizasiyası", "Ağrısızlaşdırıcı maddələrin təyini", "Sedadiv maddələrin təyini", "Ətrafların qızdırılması"],
        correct: 4
    },
    // Question 984
    {
        question: "Yumşaq toxumaların zədələnməsində ilk yardım hansıdır?",
        options: ["İsti qoymaq", "Soyuq və aseptik sarğı qoymaq", "Masaj etmək", "Kəsik aparmaq", "Kompres etmək"],
        correct: 1
    },
    // Question 985
    {
        question: "Kəskin qarın simptomuna şübhə varsa tibb bacısı nə etməlidir?",
        options: ["İmalə etməli", "Soyuq qoyub təcili yardım çağırmalı", "Masaj etməli", "İsitqac qoymalı", "Ağrıkəsici vurmalı"],
        correct: 1
    },
    // Question 986
    {
        question: "Körpücük sümüyü zədələnmələrində hansı sarğıdan istifadə olunur?",
        options: ["Tısbağavari sarğı", "Səkkizvari sarğı", "Sürünən sarğı", "Dezo sarğısı", "T-şəkilli sarğı"],
        correct: 3
    },
    // Question 987
    {
        question: "Çanaq zədələnmələri zamanı xəstə hansı vəziyyətdə daşınmalıdır?",
        options: ["Üzü üstə", "Qarın üstə", "Arxası üstə", "Qurbağa vəziyyəti", "Yarım oturmuş"],
        correct: 3
    },
    // Question 988
    {
        question: "Tısbağavari sarğı yuxarı ətrafın hansı zədələnmələrində qoyulur?",
        options: ["Ələ", "Bazu nahiyyəsinə", "Dirsək nahiyyəsinə", "Mil bilək oynağı nahiyyəsinə", "Barmaqlara"],
        correct: 2
    },
    // Question 989
    {
        question: "Gips sarğısı qoyulmuş xəstələrdə şiddətli ağrı olarsa tibb bacısı nə etməli?",
        options: ["Gips sarğısını kəsməli", "Narkotik maddə vurmalı", "Həkimə xəbər verməli", "Novakain blokadası etməli", "Ətrafın vəziyyətini dəyişməli"],
        correct: 2
    },
    // Question 990
    {
        question: "\"Diteriks\" şinası ilk yardım kimi hansı sınıqlarda qoyulur?",
        options: ["Çanaq sınıqlarında", "Onurğa sınıqlarında", "Aşağı ətraf sınıqlarında", "Qabırğa sınıqlarında", "Yuxarı ətraf sınıqlarında"],
        correct: 2
    },
    // Question 991
    {
        question: "Sınıqlar zamanı şokun profilaktikası üçün həkimə qədər ilk yardım zamanı nə etmək olmaz?",
        options: ["Xəstənin immoblizasiyası", "Soyuq qoymaq", "Xəstəni hərəkət etdirmək", "Qanaxmanı dayandırmaq", "Ağrıkəsicilərin tətbiqi"],
        correct: 2
    },
    // Question 992
    {
        question: "Əməliyyat zamanı qanaxmanı müvəqqəti saxlamaq məqsədilə tibb bacısı hansı aləti verməlidir?",
        options: ["Tutqac", "Damar sıxıcısını", "Cərrahi pinseti", "Farabef qarmağını", "Koxer zondunu"],
        correct: 1
    },
    // Question 993
    {
        question: "Gün ərzində əməliyyat otağı necə dəfə yığışdırılmalıdır?",
        options: ["Heç yığışdırılmamalıdır", "2 dəfə", "3 dəfə", "1 dəfə", "Hər gərək olduqca"],
        correct: 4
    },
    // Question 994
    {
        question: "Diz oynağının əzilməsində ilk yardım hansıdır?",
        options: ["Isti qoymaq", "Hərəkət etdirmək", "Soyuq və sıxıcı sarğı qoymaq", "Maye içirtmək", "Masaj etmək"],
        correct: 2
    },
    // Question 995
    {
        question: "Aşağı ətrafların borulu sümüklərinin sınığı zamanı hadisə yeridə ilk yardım nədən ibarətdir?",
        options: ["Narkotik vurmaq", "Xəstəyə qurbağa vəziyyəti vermək", "Ətrafı nəqliyyat şinası ilə immobilizasiya", "Sınıq nahiyyəsinin ağrısızlaşdırmaq", "Sınıq fraqmentlərinin repozisiyası"],
        correct: 2
    },
    // Question 996
    {
        question: "Hansı sarğı növü paltar və ayaqqabı üzərindən qoyulur?",
        options: ["Bint sarğıları", "Plastırlı sarğılar", "Gips sarğıları", "Nəqliyyat şinası ilə sarğılar", "Yapışqanlı sarğılar"],
        correct: 3
    },
    // Question 997
    {
        question: "Qanəvəzediciləri köçürülərkən hansı fəsadlar törənir?",
        options: ["Pirogen reaksiya", "Yerli reaksiya", "Allergik reaksiya", "Sadalananların hamısı", "Toksiki reaksiya"],
        correct: 3
    },
    // Question 998
    {
        question: "Bioloji antiseptikaya hansı aiddir?",
        options: ["Sulfanilamidlərdən istifadə", "Zərdabların vurulması", "Drenajların qoyulması", "Yaraların I-li cərrahi işlənməsi", "Hidrogen-peroksiddən istifadə"],
        correct: 1
    },
    // Question 999
    {
        question: "Fiziki antiseptikaya hansı aiddir?",
        options: ["Furasillindən istifadə", "Yaraların drenajlanması", "Zərdablardan vurulması", "Yaraların spirtlə işlənməsi", "Antibiotiklərin vurulması"],
        correct: 1
    },
    // Question 1000
    {
        question: "Əl barmaqlarının zədələnmələri zamanı hansı sarğı növündən istifadə olunur?",
        options: ["Tısbağavari", "Sünbülvari", "\"Cəngavər əlcəyi\"", "İlanvari", "Xaçvari"],
        correct: 2
    },
    // Question 1001
    {
        question: "Qan köçürən zaman xəstənin halı pisləşirsə tibb bacısı nə etməlidir?",
        options: ["Nəbzə diqqət etməli", "Köçürməni dayandırıb, həkimi çağırmalı", "Termometr qoymalı", "Buz qoymalı", "Qanəvəzedici köçürməli"],
        correct: 1
    },
    // Question 1002
    {
        question: "Diz oynağının zədələnməsi zamanı hansı sarğı qoyulur?",
        options: ["Səkkizvari sarğı", "Sürünən sarğı", "Spiralvari sarğı", "Tısbağavari sarğı", "T-şəkilli sarğı"],
        correct: 3
    },
    // Question 1003
    {
        question: "Əməliyyatdan sonrakı dövrdə tibb bacısının müstəqil hərəkəti nədən ibarətdir?",
        options: ["Antibiotiklərin inyeksiyası", "Özünə qulluqda xəstəyə yardım etmək", "Rasional pəhrizi təyin etmək", "Drenajın dəyişilməsi", "Qanəvəzedici köçürmək"],
        correct: 1
    },
    // Question 1004
    {
        question: "Təxirəsalınmaz əməliyyatdan əvvəl sanitar işlənmə harada aparılır?",
        options: ["Əməliyyat ərəfəsində aparılır", "Bir gün əvvəl aparılır", "Aparılmır", "Əməliyyat stolunda aparılır", "Əməliyyatdan əvvəl sanitar otağında aparılır"],
        correct: 3
    },
    // Question 1005
    {
        question: "Bint sarğısı qoymazdan əvvəl tibb bacısı nəyə nəzər yetirməlidir?",
        options: ["Bədənin hərarətinə", "Nəbzin sayına", "Tənəffüs aktlarının sayına", "Patoloji prosesin xarakterinə", "Arterial təzyiqə"],
        correct: 3
    },
    // Question 1006
    {
        question: "Inhalyasiya anesteziyası zamanı dərman maddələri hara yeridilir?",
        options: ["Dəri altına", "Selikli qişalara", "Əzələ daxilinə", "Tənəffüs yollarına", "Dil altına"],
        correct: 3
    },
    // Question 1007
    {
        question: "Anestezist tibb bacısının vəzifələrinə nə aid deyil?",
        options: ["İntubasiya vaxtı həkimə kömək etmək", "Ağ ciyərin süni ventilyasiya aparatına nəzarət etmək", "Arterial təzyiq və nəbzə nəzarət etmək", "Narkoz aparatının göstəricilərinə nəzarət etmək", "Əməliyyat otağının temperaturuna nəzarət etmək"],
        correct: 4
    },
    // Question 1008
    {
        question: "Punksiya nədir?",
        options: ["Boşluqların, orqan və toxumaların yoğun iynə və ya troakarla deşilməsi", "Boşluqlara,orqan və toxumalara rezin borunun yeridilməsi", "Dərman maddələrinin periferik venalara yeridilməsi", "Dərin yaraların və boşluqların antiseptik maddələrlə yuyulması", "Boşluqlu orqanlara süni fistulanın qoyulması"],
        correct: 0
    },
    // Question 1009
    {
        question: "Qastrostoma ətrafındakı dərini qorumaq məqsədi ilə nədən istifadə olunur?",
        options: ["Vazelin yağı", "Kamfora spirti", "Yod", "Brilliyant yaşılı", "Lassar pastası"],
        correct: 4
    },
    // Question 1010
    {
        question: "Kolostomalı xəstələrdə meteorizmin qarşısını almaq məqsədilə tibb bacısı xəstəyə nəyi məsləhət görür?",
        options: ["Ədviyyatlı qidaların qəbulu", "Aktivləşmiş kömürün qəbulu", "Mineral suların qəbulu", "Süd məhsullarının qəbulu", "Hisə verilmiş qidaların qəbulu"],
        correct: 1
    },
    // Question 1011
    {
        question: "Əməliyyat sahəsi nə ilə işlənilir?",
        options: ["33%-li hidrogen peroksid", "0.5%-li xlorheksidin biqlükonat", "1:5000 furasilin", "5%-li kalium permanqanat", "96%-li spirt"],
        correct: 1
    },
    // Question 1012
    {
        question: "Immobilizasiya nədir?",
        options: ["Zədənənmiş nahiyəyə buz qoymaq", "Bədənin zədələnmiş hissəsini hərəkətsizləşdirmək", "Zədələnmiş nahiyəyə dərman maddəsini yeritmək", "Zədənənmiş nahiyədə əməliyyat aparmaq", "Zədənənmiş nahiyədə skelet dartması həyata keçirmək"],
        correct: 1
    },
    // Question 1013
    {
        question: "Nəqliyyat immobolizasiyasında nədən istifadə olunmur?",
        options: ["Diterixs şinası", "Ləçəkvari sarğı", "Kramer şinası", "Beler şinası", "Pnevmatik şina"],
        correct: 3
    },
    // Question 1014
    {
        question: "Sorulmayan sintetik tikiş materialı hansıdır?",
        options: ["Poliqlekapron", "Lavsan", "Tantal", "İpək", "Ketqut"],
        correct: 1
    },
    // Question 1015
    {
        question: "Sorulan təbii tikiş materialı hansıdır?",
        options: ["Lavsan", "Neylon", "Poliester", "Ketqut", "İpək"],
        correct: 3
    },
    // Question 1016
    {
        question: "Hansı sorulan sintetik saplar oftalmologiyada istifadə olunur?",
        options: ["İpək", "Neylon", "Ketqut", "Dakron", "Poliqlekapron"],
        correct: 4
    },
    // Question 1017
    {
        question: "Toxumanı kəsən alətlərə nə aiddir?\n1) Skalpel; 2) Pinset; 3.Qayçı; 4) Kornsanq; 5) Mişar; 6. Payer jomu",
        options: ["1,2,4", "3,4,5", "2,3,6", "2,4,6", "1,3,5"],
        correct: 4
    },
    // Question 1018
    {
        question: "Bütün cərrahi alətlər neçə qrupa bölünür?",
        options: ["Birləşdirici və qoruyucu", "Ümumi və xüsusi", "Sıxıcı və birləşdirici", "Sıxıcı və kəsici", "Qoruyucu və kəsici"],
        correct: 1
    },
    // Question 1019
    {
        question: "Yaranın cərrahi işlənməsində hidrogen peroksidin neçə faizli məhlulundan istifadə olunur?",
        options: ["33%", "6%", "30%", "3%", "10%"],
        correct: 3
    },
    // Question 1020
    {
        question: "Bioloji antiseptikaya nə aiidir?\n1) Antibiotiklər; 2) Səthi-aktiv maddələr; 3) Vaksinlər; 4) Immunoqlobulinlər; 5) Oksidləşdiricilər; 6) Turşular",
        options: ["3,2,5", "2,4,5", "1,3,6", "1,3,4", "1,2,6"],
        correct: 3
    },
    // Question 1021
    {
        question: "Kimyəvi antiseptikada nədən istifadə olunur?\n1) Spirtlər; 2) Vaksinlər; 3) Səthi aktiv maddələr; 4) Antibiotiklə;r 5) Oksidləşdiricilər; 6) Proteolitik fermentlər",
        options: ["1,2,6", "3,5,6", "2,4,6", "1,3,5", "1,4,6"],
        correct: 3
    },
    // Question 1022
    {
        question: "Cərrahi metal alətlərin sterilizasiyasının daha mükəmməl üsulu hansıdır?",
        options: ["Quruducu şkafda sterilizasiya etmək", "Qaynatmaq", "Formalin buxarı sterilizasiya etmək", "Yandırmaq", "Avtoklav"],
        correct: 0
    },
    // Question 1023
    {
        question: "Əllərin C-4(pervomur) məhlulunda işlənməsinə nə qədər vaxt lazımdır?",
        options: ["2-3 dəq.", "5 dəq", "3-4 dəq.", "4-5 dəq.", "1 dəq."],
        correct: 4
    },
    // Question 1024
    {
        question: "Əllərin xlorheksidin biqlyukonatın spirtli məhlulu ilə işlənməsinə nə qədər vaxt lazımdır?",
        options: ["5 dəq.", "1-2 dəq.", "1 dəq", "3-4 dəq.", "3 dəq."],
        correct: 4
    },
    // Question 1025
    {
        question: "Cərrahiyədə ekzogen infeksiya hansı yollarla yayılır?\n1) Hava-damcı 2) Limfogen 3) Kontakt 4) İmplantasiya yolu ilə 5) Hematogen",
        options: ["1,3,5", "1,4,5", "3,4,5", "2,4,5", "1,3,4"],
        correct: 4
    },
    // Question 1026
    {
        question: "Yaranın yuyulmasında kalium permanqanatın neçə faizli məhlulundan istifadə olunur?",
        options: ["0.02%.", "5%", "1%", "2%", "0.1%"],
        correct: 4
    },
    // Question 1027
    {
        question: "Palliativ əməliyyatın aparılmasında məqsəd nədir?",
        options: ["Xəstənin vəziyyətini yüngülləşdirmək", "Xəstəni sağaltmaq", "Diaqnozu dəqiqləşdirmək", "Bir neçə orqanda əməliyyat aparmaq", "Çoxmomentli əməliyatı başa çatdırmaq"],
        correct: 0
    },
    // Question 1028
    {
        question: "Xəstəni periferik venanın kateterizasiyasına hazırladıqda ona hansı vəziyyət verilməlidir?",
        options: ["Oturaq", "Böyrü üstə", "Arxası üstə, uzanmış", "Qarnı üstə, uzanmış", "Ayaq üstə"],
        correct: 2
    },
    // Question 1029
    {
        question: "Periferik vena üçün kateterin seçimində tibb bacısı nəyi nəzərə almır?",
        options: ["Venanın diametrini", "Yeridilən mayenin sürətini", "Xəstənin fizioloji vəziyyətini", "Yeridilən mayenin tərkibini", "Kateterin venada qalma müddətini"],
        correct: 2
    },
    // Question 1030
    {
        question: "Periferik venada kateterin yeri neçə saatdan bir dəyişilməlidir?",
        options: ["24-48", "1-12", "48-72", "24-36", "12-24"],
        correct: 2
    },
    // Question 1031
    {
        question: "Periferik venaya kateter qoyulduqdan sonra damarda hansı ağırlaşmaya rast gəlmək olar?",
        options: ["Flebit", "Limfangit", "Limfadenit", "Anaflaktik şok", "Allergik reaksiyalar"],
        correct: 0
    },
    // Question 1032
    {
        question: "Periferik venaya kateter qoyulduqdan sonra tromboflebitin profilaktikası üçün nədən istifadə olunur?\n1) Troksevazin; 2) Levamikol; 3) Tripsin; 4) Traumel; 5) Sintomisin; 6) Heparin",
        options: ["4,5,6", "3,4,6", "2,4,6", "1,4,6", "1,3,5"],
        correct: 3
    },
    // Question 1033
    {
        question: "Periferik venadaki kateterdən dərman maddəsi yeridildikdə orqanizmdə baş verən ümumi ağırlaşma hansıdır?",
        options: ["Tromboflebit", "Abses", "Flebit", "Allergik reaksiya", "Toxuma nekrozu"],
        correct: 3
    },
    // Question 1034
    {
        question: "Mərkəzi venalara kateterin yeridilməsi nə vaxt həyata keçirilir?",
        options: ["Aşağı ətrafların qızıl yelində", "Flebit və tromboflebitlərdə", "Xəstə koma vəziyyətində olduqda", "Yuxarı ətrafın zədələnmələrində", "İnfeksiyadan sonra baş verən hematomalarda"],
        correct: 2
    },
    // Question 1035
    {
        question: "Periferik venanın punksiyasında kateterin iynəsi neçə dərəcəli bucaq altında yeridilməlidir?",
        options: ["10-40", "20-40", "15-30", "10-20", "5-10"],
        correct: 2
    },
    // Question 1036
    {
        question: "Periferik venanın punksiyasında iynənin kəsiyi dəri səthinə münasibətdə hansı istiqamətə yönəldilməlidir?",
        options: ["Aşağı", "Köndələn", "Sola", "Yuxarı", "Sağa"],
        correct: 3
    },
    // Question 1037
    {
        question: "Periferik venaya kateter yeridilən zaman iynə-stilet daxili konyula ilə minimum hansı məsafəyə yeridilir?",
        options: ["4 ml.", "6 ml.", "2 ml.", "3 ml.", "5 ml."],
        correct: 4
    },
    // Question 1038
    {
        question: "Sidik kisəsinin kateterizasiyası dedikdə nə başa düşülür?",
        options: ["sidik kisəsinə borunun yeridilməsi", "Sidik kanalına borunun yeridilməsi", "Boşluğa borunun yeridilməsi", "Sistostomaya borunun yeridilməsi", "Sidik kanalı ilə sidik kisəsinə borunun yeridilməsi"],
        correct: 4
    },
    // Question 1039
    {
        question: "Sistostomalı xəstələrdə sidik kisəsi neçə ml. furasilin məhlulu ilə yuyulur?",
        options: ["100-200", "500-1000", "20-50", "100-150", "200-300"],
        correct: 1
    },
    // Question 1040
    {
        question: "Kişilərdə kateter sidik kanlına hansı məsafəyə qədər yeridilir?",
        options: ["12 sm.", "19-20 sm.(sidik xaric olana qədər)", "15 sm.", "14 sm.", "10 sm."],
        correct: 1
    },
    // Question 1041
    {
        question: "Qadınlarda kateter sidik kanalına hansı məsafəyə qədər yeridilir?",
        options: ["2 sm.", "3 sm.", "4 sm.", "8 sm.", "5-6sm.(sidik xaric olana qədər)"],
        correct: 4
    },
    // Question 1042
    {
        question: "Qastrostomalı xəstənin qidalandırılması gündə neçə dəfə həyata keçirilir?",
        options: ["2-3", "3", "4-6", "1-3", "1-2"],
        correct: 2
    },
    // Question 1043
    {
        question: "Autoimmoblizasiya nədir?",
        options: ["Zədələnmiş nahiyənin karton parçasına təsbit edilməsi", "Zədələnmiş nahiyənin şinaya təsbit edilməsi", "Zədələnmiş nahiyəyə gips sarğısının qoyulması", "Zədələnmiş nahiyənin taxta parçasına təsbit edilməsi", "Zədələnmiş nahiyənin sağlam tərəfə təsbit edilməsi"],
        correct: 4
    },
    // Question 1044
    {
        question: "Sidik kisəsinə qoyulan sistostomadan sonra tibb bacısı xəstəyə nəyi başa salmalıdır?",
        options: ["Traxeostomaya qulluğu", "Yeyunostomaya qulluğu", "Sistostomaya qulluğu", "Qastrostomaya qulluğu", "Kolostomaya qulluğu?"],
        correct: 2
    },
    // Question 1045
    {
        question: "Borulu drenajlar istifadədən əvvəl nə ilə yuyulmalıdır?",
        options: ["0.9%-li natrium xlorla", "1.5%-li xlorheksidin biqlyukonat", "3%-li hidrogen peroksidlə", "70%-li spirtlə", "1%-li yodonatla"],
        correct: 0
    },
    // Question 1046
    {
        question: "Yaradan,boşluqlardan möhtəviyyatın xaric edilməsi və dərman maddələri ilə yuyulması necə adlanır?",
        options: ["Anesteziya", "Hemostaz", "İnfuziya", "Biopsiya", "Drenajlanma"],
        correct: 4
    },
    // Question 1047
    {
        question: "Yanıqlar zamanı ilkin tibbi yardıma aşağıdakılardan hansı aid deyil ?",
        options: ["Xəstəni qusdurmaq", "Yanmış sahəni soyutmaq", "Termiki amilin dəriyə təsirini dayandırmaq", "Ağrısızlaşdırmaq", "Aseptik sarğı qoymaq"],
        correct: 0
    },
    // Question 1048
    {
        question: "Yanığı olan xəstələr sarğıya necə hazırlanır?",
        options: ["Yara təmizləndikdən sonra", "Xəstənin paltarı dəyişdirildikdən sonra", "Arteriyal təzyiq və bədən hərarəti ölçüldükdən sonra", "Antiseptiklərlə ümumi və yerli vannaların qəbulundan sonar", "Anesteziyadan sonra"],
        correct: 3
    },
    // Question 1049
    {
        question: "Drenaja nə aiddir?",
        options: ["Turunda", "Salfet", "Bint yumağı", "Tənzif-balışcıq", "Kürəcik"],
        correct: 0
    },
    // Question 1050
    {
        question: "Aşağı ətrafın tromboflebiti zamanı tibb bacısı iltihab nahiyəsindəki ağrını azaltmaq üçün nə etməlidir?",
        options: ["Bədən hərarətini ölçməli", "Arterial təzyiqi ölçməli,nəbz sayılmalı", "Xəstəyə çarpayıda rahat vəziyyət verməli", "Iltihab olan nahiyədə hərəkətsizliyi təmin etməli", "Xəstənin vəziyyətini müşahidə etməli"],
        correct: 3
    },
    // Question 1051
    {
        question: "Xəstənin fizioloji sakitliyini təmin etmək üçün tibb bacısı nə etməlidir?",
        options: ["Əməliyyatdan sonrakı sarğının dəyişdirilməsi", "Həkimin təyinatı ilə xəstəyə ağrıkəsicilərin yeridilməsi", "Arterial təzyiqi ölçülməsi,nəbzin sayılması", "Xəstəyə çarpayıda lazımı vəziyyətin verilməsi və otağın havasının dəyişdirilməsi", "Bədən hərarətinin gündə iki dəfə ölçülməsi"],
        correct: 3
    },
    // Question 1052
    {
        question: "\"Kəskin qarın\" sindromunda ilkin tibbi yardım zamanı nədən istifadə etmək olmaz?",
        options: ["Ağrıkəsicilərin yeridilməsi", "Xəstəyə horizontal vəziyyətin verilməsi", "Xəstənin xəstəxanaya çatdırılması", "Qarın nahiyəsinə buz qovuğunun qoyulması", "Təxirə salınmaz yardımın çağırılması"],
        correct: 3
    },
    // Question 1053
    {
        question: "Əməliyyatdan sonrakı ağırlaşmaya hansı aid deyil?",
        options: ["Yara ətrafında qızartı", "Tikişlərin aralanması", "Ağrının olması", "Yaradan qanaxma", "Yaranın çapıqlaşması"],
        correct: 4
    },
    // Question 1054
    {
        question: "Yerli anesteziaydan sonra əməliyyat sahəsində qanaxmanı saxlamaq məqsədilə tibb bacısı nə etməlidir?",
        options: ["Xəstənin çarpayıda vəziyyətini dəyişdirmək", "Xəstəyə yuxugətirici preparat təyin etmək", "Palatanın havasını dəyişdirmək", "Xəstəni xəstəxana mühitinə uyğunlaşdırmaq", "Əməliyyat sahəsinə buz qovuğunu qoymaq"],
        correct: 4
    },
    // Question 1055
    {
        question: "Üz-çənə nahiyəsinin zədələnməsində tibb bacısı ağız boşluğuna qulluq zamanı hansı məhluldan istifadə edir?",
        options: ["0.1%-li kalium permanqanat", "33%-li hidrogen peroksid", "70%-li spirt", "2%-li kalium permanqanat", "0.5-li xlorheksidin biqlyukonat"],
        correct: 0
    },
    // Question 1056
    {
        question: "Qastrostomaya qulluq tibb bacısı tərəfindən gündə neçə dəfə aparılmalıdır?",
        options: ["Gündə üç dəfə", "Bir gündən bir", "Hər qidalanmadan sonar", "Sutkada bir dəfə", "Səhər və axşam"],
        correct: 2
    },
    // Question 1057
    {
        question: "Reanimasiya tədbirləri zamanı dil kökünün qatlanmaması üçün xəstənin başına hansı vəziyyət verilir?",
        options: ["Önə əyilmiş", "Sağa, yana çevrilmiş", "Arxaya əyilmiş", "İlkin vəziyyətdə saxlanılmış", "Sola, yana çevrilmiş"],
        correct: 2
    },
    // Question 1058
    {
        question: "Müalicəvi immobilizasiyaya nə aiddir?",
        options: ["Kramer şinası", "Diteriks şinası", "Ləçəkvari sarğı", "Pnevmatik şina", "Gips sarğısı"],
        correct: 4
    },
    // Question 1059
    {
        question: "Natamam gips sarğısına hansı aiddir?",
        options: ["Dairəvi", "Gips korseti", "Longet", "Gips yaxalığı", "Pəncərəli"],
        correct: 2
    },
    // Question 1060
    {
        question: "Yenidoğulmuş oğlan uşağında sidik kanalının uzunluğu neçə sm olur?",
        options: ["5 -- 6sm (qız 1-2sm)", "3 - 4", "7 - 8", "1 - 2", "9 - 10"],
        correct: 0
    },
    // Question 1061
    {
        question: "Trizm hansı xəstəliyə məxsusdur?",
        options: ["Furunkulyoza", "Qazlı qanqrenaya", "Sepsisə", "Tetanusa (çeynəmə əzlələrinin qıcolması)", "Qızılyel iltihabına"],
        correct: 3
    },
    // Question 1062
    {
        question: "Abses nədir?",
        options: ["Toxumaların məhdud irinli iltihabı", "Dərialtı toxumanın iltihabı", "Sümük iliyinin iltihabı", "Dırnaq yatağının iltihabı", "Dırnaq ətrafı toxumanın iltihabı"],
        correct: 0
    },
    // Question 1063
    {
        question: "Tetanus üçün xarakterik olmayan əlamət hansıdır?",
        options: ["\"Sardonik gülüş\"", "Sümüklərin və onurğanın sınığı", "\"Kip sarğı\" hissiyatı (qazlı qanqrenanın əlaməti)", "Tənəffüs əzələlərinin qıcolması", "Trizm"],
        correct: 2
    },
    // Question 1064
    {
        question: "Paranefral blokada üçün novokainin neçə % - li məhluldan istifadə olunur?",
        options: ["0, 5%", "0, 25%", "1%", "10%", "5%"],
        correct: 1
    },
    // Question 1065
    {
        question: "Furunkul nədir?",
        options: ["Limfatik düyünlərin iltihabı", "Tər vəzilərinin iltihabı", "Tük follikulunun iltihabı", "Piy vəzilərinin iltihabı", "Dərialtı toxumanın iltihabı"],
        correct: 2
    },
    // Question 1066
    {
        question: "Fluktuasiya nədir?",
        options: ["Dərinin qızarması", "İnfiltrasiyanın mərkəzində yumşalmanın əmələ gəlməsi", "Çapıq toxumanın əmələ gəlməsi", "Suluqların əmələ gəlməsi", "Çeynəmə əzələlərinin qıcolması"],
        correct: 1
    },
    // Question 1067
    {
        question: "Paraproktit zamanı hansı yerli əlamət olur?",
        options: ["Qəbizlik", "Qanaxma", "İshal", "Anus ətrafında defekasiya zamanı güclənən ağrı", "Xora"],
        correct: 3
    },
    // Question 1068
    {
        question: "Donor qanına laxtalanmaması məqsədi ilə nə əlavə olunur?",
        options: ["2, 3% natrium sitrat", "5% - li qlükoza", "70% - li spirt", "natrium bikarbonat", "10% - li kalsium xlorid"],
        correct: 0
    },
    // Question 1069
    {
        question: "Ağzı bağlı qabda steril spirtli pambıq kürəciklərdən neçə gün istifadə etmək olar?",
        options: ["1 gün", "20 gün", "10 gün", "3 gün", "2 gün"],
        correct: 0
    },
    // Question 1070
    {
        question: "Diz və dirsək oynağına qoyulan tısbağavari sarğının neçə forması var?",
        options: ["4", "2", "3", "6", "1"],
        correct: 1
    },
    // Question 1071
    {
        question: "Əməliyyatdan əvvəl kəsici cərrahi alətləri etil spirtinin neçə faizli məhlulunda və nə qədər saxlamaq lazımdır?",
        options: ["96%, 30 dəq", "70%, 3 dəq", "96%, 15 dəq", "70%, 5 dəq", "70%,10 dəq"],
        correct: 0
    },
    // Question 1072
    {
        question: "Termiki üsulla sterilizasiya olunmayan endoskopik alətlər necə sterilizasiya olunur?",
        options: ["Qaz sterilizatorlarında 18˚C - də 16 saat", "0. 5% - li xloramində", "3% - li hidrogen - peroksiddə", "33% - li perhidrolda", "0. 1% - li kalium permanqanatda"],
        correct: 0
    },
    // Question 1073
    {
        question: "Çıxığın yerinə salınmasında anesteziya məqsədilə novokainin neçə faizli məhlulu işlədilir?",
        options: ["2% - li", "1% - li + 40-90ml", "5% - li", "10% - li", "0. 5% - li"],
        correct: 1
    },
    // Question 1074
    {
        question: "Xromosistoskopiya zamanı vena daxilinə aşağıdakılardan hansı işlədilir?",
        options: ["0. 1% - li brilyant yaşılı", "0. 4% - li indiqokarmin məhlulu", "0. 2% - li fenolftalin məhlulu", "0. 4% - li maqnezium sulfat", "0. 5% - li novokain məhlulu"],
        correct: 1
    },
    // Question 1075
    {
        question: "Dolu sidik kisəsindən sidik ləngimələrində sidik kateterlə neçə dəqiqə müddətinə boşaldılmalıdır?",
        options: ["15 - 20 dəq", "3 dəq", "5 dəq", "60 dəq", "30 - 40 dəq"],
        correct: 0
    },
    // Question 1076
    {
        question: "Kəskin appendisit zamanı həkiməqədərki tibbi yardıma aiddir?",
        options: ["Sağ qalça çuxuru nahiyəsinə buz qovuğu qoyub cərrahi şöbəyə çatdırmaq", "Ağrıkəsicilər vermək", "Sağ qalça nahiyəsinə isitqac qoymaq", "Təmizləyici imalə etmək", "Spazmolitiklər vermək"],
        correct: 0
    },
    // Question 1077
    {
        question: "Yanıq şoku zamanı ağrıkəsici təsirli narkotik preparatların hansı nahiyyəyə yeridilməsi məqsədəuyğundur?",
        options: ["Əzələ daxilinə", "Vena daxilinə", "Əzələ daxili, dəri - altı", "Dəri altına", "Dəri içinə"],
        correct: 1
    },
    // Question 1078
    {
        question: "Bayılmanın obyektiv əlamətlərinə hansı aid deyil?",
        options: ["Arterial təzyiqin aşağı düşməsi", "Dəri örtüyünün kəskin avazıması", "Bəbəyin genişlənməsi", "Dəri örtüyünün qızarması", "Ətrafların soyuması"],
        correct: 3
    },
    // Question 1079
    {
        question: "Aptekdə hazırlanmış göz məlhəminin saxlanma müddəti neçə gündür?",
        options: ["7", "20", "10", "2", "15"],
        correct: 2
    },
    // Question 1080
    {
        question: "Hansı üsulun köməyi ilə gözün periferik görmə sahəsi müayinə edilir?",
        options: ["Tonometriya", "Biomirkoskopiya", "Qonioskopiya", "Oftalmoskopiya", "Perimetriya"],
        correct: 4
    },
    // Question 1081
    {
        question: "Aşağıda sadalananlardan hansı göz xəstəliklərinin müayinəsi proseduruna aiddir.?",
        options: ["Gözə sarğının qoyulması", "Gözün yuyulması", "Göz daxili təzyiqin ölçülməsi", "Konyuktivial kisəyə dərman pereparatlarının damızdırılması.", "Konyuktivial kisəyə məlhəmlərin sürtülməsi"],
        correct: 2
    },
    // Question 1082
    {
        question: "Normada gözdaxili təzyiq neçə mm c. sütununa bərabərdir?",
        options: ["18 -- 26", "28 - 35", "7 - 10", "26 - 30", "35 - 40"],
        correct: 0
    },
    // Question 1083
    {
        question: "Konyuktivadan yad cism nə ilə xaric edilir?",
        options: ["Nəm pambıq tamponla", "Rezin baloncuqla", "Konik zondla", "Əşya şüşəsi ilə", "Xüsusi steril iynə ilə"],
        correct: 0
    },
    // Question 1084
    {
        question: "Qırtlaq xəstəlikləri zamanı müşahidə edilən əsas simptom hansıdır?",
        options: ["Səsin dəyişməsi", "Hərarətin yüksəlməsi", "Baş ağrısı", "Başgicəllənmə", "Qusma"],
        correct: 0
    },
    // Question 1085
    {
        question: "Gözün dəlib keçən yaralanmalarında xəstəyə hansı vəziyyət verilir?",
        options: ["Zədələnən tərəfdə yanı üstə", "Oturaq vəziyyətdə", "Sağlam tərəfdə yanı üstə", "Arxası üstə", "Üzü üstə"],
        correct: 2
    },
    // Question 1086
    {
        question: "Gözün termomexaniki zədələnmələrində ilkin tibbi yardım nədən ibarətdir?",
        options: ["Gözə 1 %-li pilokarpin məhlulunun damızdırılması", "Gözə 30 %-li natrium-sulfasil məhlulunun damızdırılması", "Gözə 15-20 %-li dimeksid məhlulunun damızdırılması", "Gözə 1 %-li tetrasiklin məlhəminin sürtülməsi", "Ağrı kəsici verib,hər iki gözə sargının qoyulması"],
        correct: 4
    },
    // Question 1087
    {
        question: "Oftolmoloji cərrahi alətlərin sterilizasiyası hansı üsulla aparılır?",
        options: ["Abtoklavda", "Quruducu şkaflarda (140 °tem/ 1 saat)", "Qaynatmaqla", "Pervomur məhlulunda", "Yandırmaqla"],
        correct: 1
    },
    // Question 1088
    {
        question: "Göz kabinetində iştirak edən tibb bacısı nəyi bacarmalıdır ?",
        options: ["Görmə sahəsini təyin etmək", "Görmə itiliyini təyin etmək", "Sadalananlardan hamısını", "Göz daxili təzyiqi ölçmək", "Sadə eynəkləri seçmək"],
        correct: 2
    },
    // Question 1089
    {
        question: "Gözün davamlı yuyulması hansı hallarda həyata keçirilir ?",
        options: ["Qlaukomada", "Kimyəvi yanıqlarda", "Konyuktivitlərdə", "Göz qapaqlarının kontuziyasında", "Donmalarda"],
        correct: 1
    },
    // Question 1090
    {
        question: "Kirpiklərin və göz qapağının təmizlənməsində hansı məhluldan istifadə olunur?",
        options: ["3 %-li hidrogen peroksid", "2 %-li natrium hidrokarbonat", "1 %-li salisil turşusu", "5 %-li kalium permanqanat", "0, 02 %-li furasilin"],
        correct: 4
    },
    // Question 1091
    {
        question: "Görmə itiliyi neçə metr məsafədə yoxlanılır?",
        options: ["4", "3", "8", "7", "5"],
        correct: 4
    },
    // Question 1092
    {
        question: "Göz daxili təzyiqin artması hansı xəstəlikdə müşahidə olunur?",
        options: ["Blefarit", "Konyuktivit", "Katarakta", "Qlaukoma", "Traxoma"],
        correct: 4
    },
    // Question 1093
    {
        question: "Göz daxili təzyiqin ölçülməsi necə adlanır?",
        options: ["Kampimetriya", "Tonometriya", "Oftalmoskopiya", "Perimetriya", "Qonioskopiya"],
        correct: 1
    },
    // Question 1094
    {
        question: "Gözün turşu ilə yanıqları zamanı hansı maddələrlə gözü yumaq lazımdır?",
        options: ["2 % - li natrium-hidrokarbonat", "0, 25 %-li dikain", "20 % - li natrium - sulfasil", "0, 1 % - li sirkə turşusu", "2 % - li bor turşusu"],
        correct: 0
    },
    // Question 1095
    {
        question: "Gözün qələvi ilə yanıqları zamanı hansı maddələrlə gözü yumaq lazımdır?",
        options: ["4 %-li taufon", "2 %-li natrium-hidrokarbonat", "0, 1%-li deksametazon", "2 %-li bor turşusu", "5 %-li tanin"],
        correct: 3
    },
    // Question 1096
    {
        question: "Konyuktivitlər zamanı gözə nə məqsədlə sarğı qoyulmur?",
        options: ["İfrazatın konyuktival boşluqdan evakuasiyasının qarşısını alır və büllurda iltihab törədir", "Skleranı zədələyir", "Torlu qişanı zədələyir", "İfrazatın konyuktival boşluqdan evakuasiyasının qarşısını alır və buynuz qişada iltihab törədir", "Buynuz qişa ilə büllur zədələnir"],
        correct: 3
    },
    // Question 1097
    {
        question: "Konyuktivadan yaxma hansı əşya ilə götürülür ?",
        options: ["Pipetka", "Konik zond", "Tənzif kürəcik", "Şüşə çubuq", "Pambıq tampon"],
        correct: 4
    },
    // Question 1098
    {
        question: "Konyuktival kisəyə yad cism düşdükdə tibb bacısı gözün yuyulmasından əvvəl nə etməlidir ?",
        options: ["Konyuktivaaltı sahəyə dərman maddələrini yeritməli", "Konyutivial kisəyə damcı damızdırmalı", "Göz məlhəmlərini yeritməli", "Kiprik kənarını antiseptik maddələrlə işləməli", "Konyuktivial kisədə olan bərk hissəcikləri xaric etməli"],
        correct: 4
    },
    // Question 1099
    {
        question: "Gözün ağlı qişasının iltihabı necə adlanır?",
        options: ["Rinit", "Blefarit", "Keratit", "Sklerit", "Araxnoidit"],
        correct: 3
    },
    // Question 1100
    {
        question: "Hansı hallarda gözə sarğı qoyulmur ?",
        options: ["Blefaritlərdə", "Zədələnmələrdə", "Yanıqlarda", "Konyuktivitlərdə", "Donmalarda"],
        correct: 3
    },
    // Question 1101
    {
        question: "Binokulyar sarğı gözə nə məqsədlə qoyulur?",
        options: ["Möhtəviyyatın ifrazı", "Gözə sakitlik vermək", "Çirklənməkdən qorumaq", "Soyuqdan qorunmaq", "İşıqdan qorunmaq"],
        correct: 1
    },
    // Question 1102
    {
        question: "Gözün qurğuşunla zədələnməsi zamanı ilkin tibbi yardım nədən ibarətdir?",
        options: ["Konyuktivanın yuyulması", "Ağrıkəsici maddələrin damızdırılması", "Dezinfeksiyaedici göz məlhəminin sürtülməsi", "Təcili mədənin yuyulması", "Aseptik sarğının qoyulması"],
        correct: 3
    },
    // Question 1103
    {
        question: "Gözün selikli qişasının iltihabı necə adlanır?",
        options: ["Qlaukoma", "Blefarit", "Traxoma", "Katarakta", "Konyuktivit"],
        correct: 4
    },
    // Question 1104
    {
        question: "Gözün görmə sahəsinin müayinəsi nə adlanır?",
        options: ["Tonometriya", "Perimetriya", "Oftalmoskopiya", "Mikroskopiya", "Refraktometriya"],
        correct: 1
    },
    // Question 1105
    {
        question: "Gözə sarğı hansı halda qoyulur?",
        options: ["Gözün yaralanması", "Konyuktivit", "Keratit", "Traxoma", "Blefarit"],
        correct: 0
    },
    // Question 1106
    {
        question: "Qlaukomanın profilaktik tədbirlərinə nə aiddir?",
        options: ["Vaxtaşırı tonometriya", "Gözün yuyulması", "Görmə itiliyinə nəzarət", "Şəxsi gigiyenaya qulluq", "İdmanla məşğul olmaq"],
        correct: 0
    },
    // Question 1107
    {
        question: "Görmə itiliyi aşağıdakılardan hansının köməyi ilə müayinə edilir?",
        options: ["Y. B. Rabkinin cədvəli", "Tonometr", "Refraktometr", "Perimetr", "S. S. Qolovinin cədvəli"],
        correct: 4
    },
    // Question 1108
    {
        question: "Polixromatik cədvəlin köməyi ilə gözün hansı funksiyası müayinə olunur?",
        options: ["Rəng duyumu", "İşıq duyumu", "Gözün refraksiyası", "Görmə itiliyi", "Görmə sahəsi"],
        correct: 0
    },
    // Question 1109
    {
        question: "Gözün dəlib keçən yaralanmalarında parenteral olaraq xəstəyə hansı preparatın yeridilməsi vacibdir?",
        options: ["1 %-li nikotik turşusu", "0, 1 %-li adrenalin", "40 %-li qlükoza", "Geniş spektrə malik antibiotic", "25 %-li maqnium-sitrat"],
        correct: 3
    },
    // Question 1110
    {
        question: "Burunun müayinəsi necə adlanır?",
        options: ["Rinoskopiya", "Otoskopiya", "Farinqoskopiya", "Larinqoskopiya", "Bronxoskopiya"],
        correct: 0
    },
    // Question 1111
    {
        question: "Burun qanaxması zamanı ilk tibbi yardım hansıdır?",
        options: ["Burunun ön tamponadasını etmək", "Xəstəni uzandırmaq", "Xəstənin başını arxaya əymək", "Hərarəti ölçmək", "Xəstənin başını önə əymək"],
        correct: 0
    },
    // Question 1112
    {
        question: "Burun boşluğundan yaxma nə məqsədlə götürülür?",
        options: ["Bakterioloji tədqiqat üçün material götürmək", "İnfeksiya ilə yoluxma təhlükəsizliyini təmin etmək", "Terapevtik effekti təmin etmək", "Burun boşluğunun hava keçiriciliyini təmin etmək", "Burun boşluğundan patoloji möhtəviyyatı götürmək"],
        correct: 0
    },
    // Question 1113
    {
        question: "Buruna yumşaq sarğının hansı növü qoyulur?",
        options: ["Sapandvarı", "Spiralvarı", "Sümbülvarı", "Monokulyar", "Dairəvi"],
        correct: 0
    },
    // Question 1114
    {
        question: "Burun ciblərindən irinin xaric edilməsi hansı qayda ilə aparılır?",
        options: ["Asqırmaqla", "Fınxırmaqla", "Massaj etməklə", "Tampon yeritməklə", "Məlhəm qoymaqla"],
        correct: 1
    },
    // Question 1115
    {
        question: "Arterial hipertenziyalı xəstələrdə burun qanaxmaları zamanı tamponu hansı məhlulda islatmaq olmaz?",
        options: ["Aminokapron", "Fizioloji məhlul", "Efedrin", "Hidrogen-peroksid", "Atropin"],
        correct: 2
    },
    // Question 1116
    {
        question: "Xarici burunun yüngül dərəcəli donması zamanı ilkin tibbi yardım nədir?",
        options: ["Dərman maddələrinin damızdırılması", "Dərinin qarla sürtülməsi", "Dəriyə məlhəmin sürtülməsi", "Buruna isitqac qoyulması", "Dərinin spirtdə isladılmış tamponla sürtülməsi"],
        correct: 4
    },
    // Question 1117
    {
        question: "Burun qanaxmalarında başa hansı vəziyyət verilir ?",
        options: ["Yüngül önə əyilmiş", "Güclü önə əyilmiş", "Arxaya əyilmiş", "Kəskin horizontal", "Kəskin vertikal"],
        correct: 0
    },
    // Question 1118
    {
        question: "Burun boşluğunda yad cism olduqda təhlükəli ağırlaşma nədir?",
        options: ["Seroz möhtəviyyatın ifrazı", "Yad cismlə aspirasiya", "Kəskin irinli rinit", "Burunla tənəffüsün çətinləşməsi", "Kəskin irinli otit"],
        correct: 1
    },
    // Question 1119
    {
        question: "Badamcıq lakunalarının yuyulmasına göstəriş hansıdır?",
        options: ["Kəskin faringit", "Xroniki tonzilit", "Epidemik parotit", "Tireoidit", "Kəskin tonzilit"],
        correct: 1
    },
    // Question 1120
    {
        question: "Haymor cibinin iltihabı necə adlanır?",
        options: ["Haymorit", "Sfenoidit", "Frontit", "Bronxit", "Etmoidit"],
        correct: 0
    },
    // Question 1121
    {
        question: "Udlağın müayinəsi necə adlanır?",
        options: ["Larinqoskopiya", "Otoskopiya", "Bronxoskopiya", "Rinoskopiya", "Farinqoskopiya"],
        correct: 4
    },
    // Question 1122
    {
        question: "Qırtlağın müayinəsi necə adlanır?",
        options: ["Otoskopiya", "Larinqoskopiya", "Rinoskopiya", "Farinqoskopiya", "Bronxoskopiya"],
        correct: 1
    },
    // Question 1123
    {
        question: "Qulağın müayinəsi necə adlanır?",
        options: ["Otoskopiya", "Bronxoskopiya", "Farinqoskopiya", "Rinoskopiya", "Larinqoskopiya"],
        correct: 0
    },
    // Question 1124
    {
        question: "Xarici qulağa hansı aiddir?",
        options: ["Təbil boşluğu", "Qulaq seyvani", "Eşitmə borusu", "İlbiz", "Məməyəbənzər çıxıntı"],
        correct: 1
    },
    // Question 1125
    {
        question: "Qulağa damızdırılan maye neçə dərəcə temperaturda olmalıdır ?",
        options: ["20-25", "30-35", "18-20", "25-30", "36-37"],
        correct: 4
    },
    // Question 1126
    {
        question: "Xarici qulaq keçəcəyindən yad cisim nəyin köməkliyi ilə xaric edilir?",
        options: ["Burun zondu", "Kulikov iynəsi", "Jane şpirisi", "Şüşə çubuq", "Pinset"],
        correct: 2
    },
    // Question 1127
    {
        question: "Xarici qulağın təmizlənməsi necə həyata keçirilir? 1) Qulaq zond; 2)Konik pinset; 3) Jane şprisi; 4) Qulaq qıfı: 5) Elektrosorucu; 6) Atravmatik pipetka 7) Dərman maddəsi\n8. Şüşə çubuq",
        options: ["2, 5, 8", "2 ,4, 6", "3, 4, 7", "1, 3, 5", "1, 4, 8"],
        correct: 3
    },
    // Question 1128
    {
        question: "Xarici qulaq keçəcəyindən qanaxma zamanı ilkin tibbi yardım nədən ibarətdir?",
        options: ["Qulağı təmizləyib, büzücü dərmanları damızdırmaq", "Xarici qulaq keçəcəyini yumaq", "Qulaq keçəcəyinə steril pambıq kürəcik qoyub, xəstəxanaya göndərmək", "Qulağı təmizləyib, qan laxtalarını xaric etmək", "Buz qovuqcuğu qoyub, xəstəxanaya göndərmək"],
        correct: 2
    },
    // Question 1129
    {
        question: "Xarici qulaq keçəcəyinin yuyulması nə ilə həyata keçirilir?",
        options: ["Atravmatik pipetka", "Qulaq qıfı", "Jane şpirisi", "Qulaq zondu", "Steril tampon"],
        correct: 2
    },
    // Question 1130
    {
        question: "Qulaq seyvanın hematoması zamanı ilkin tibbi yardım nədən ibarətdir?",
        options: ["Aseptik sarğının qoyulması", "Qızışdırıcı sarğının qoyulması", "Spirtli tamponun qoyulması", "Qulaq seyvanının hidrogen-peroksid ilə işlənməsi", "Buz qovuqcuğunun və sıxıcı sarğının qoyulması"],
        correct: 4
    },
    // Question 1131
    {
        question: "Qulağa qoyulan qızdırıcı kompress necə təsir göstərir?",
        options: ["Spazmolitik və ağrıkəsici", "Sakitləşdirici və ağrıkəsici", "Antiseptik və stimuləedici", "Qıcıqlandırıcı və sorucu", "Ağrıkəsici və sorucu"],
        correct: 4
    },
    // Question 1132
    {
        question: "Kəskin otit nəyin iltihabıdır?",
        options: ["Qulaq seyvanının", "Burunun selikli qişasının", "Damaq badamcıqlarının", "Udlağın selikli qişasının", "Orta qulağın"],
        correct: 4
    },
    // Question 1133
    {
        question: "Qulaq kiri tixacı nə ilə xaric edilir?",
        options: ["Atravmatik pipetka", "Şpatel", "Qulaq qıfı", "Pambıq tampon", "Jane şpirisi"],
        correct: 4
    },
    // Question 1134
    {
        question: "Haymor cibinin punksiyası zamanı nədən istifadə olunur?",
        options: ["Kulikov iynəsi", "Elektrosorucu", "Qulaq zondu", "Şpatel", "Burun-udlaq güzgüsü"],
        correct: 0
    },
    // Question 1135
    {
        question: "Burundan yad cism nə ilə xaric edilir?",
        options: ["Qarmaq dəsti (lange qarmağı)", "Burun zondu", "Jane şpirisi", "Pinset", "Kulikov iynəsi"],
        correct: 0
    },
    // Question 1136
    {
        question: "Traxeotomiya nədir?",
        options: ["Badamcıqların hissəvi rezeksiyası", "Nəfəs borusuna süni fistulanın qoyulması", "Burun- udlaq badamcıqlarının çıxarılması", "Traxeyaya intubasion borunun yeridilməsi", "Nəfəs borusunun kəsilməsi"],
        correct: 4
    },
    // Question 1137
    {
        question: "Kəskin tonzilitdə nə müşahidə olunur?",
        options: ["Burunla nəfəs almanın çətinləşməsi", "Səsin itməsi", "Udma zamanı ağrı", "Arası kəsilməyən öskürək", "Eşitmənin itməsi"],
        correct: 2
    },
    // Question 1138
    {
        question: "Kirpiklərin və göz qapaqlarının təmizlənməsi necə aparılır",
        options: ["Göz qapağını aşağı çəkməklə", "Aşağıdan yuxarıya", "Gözün xarici bucağından daxilə", "Gözün daxili bucağından xaricə", "Dairəvi hərəkətlərlə"],
        correct: 2
    },
    // Question 1139
    {
        question: "Burun boşluğundan qartmağı xaric etmək üçün nədən istifadə olunur?",
        options: ["Vazelin yağı", "5 %-li kalium permanqanat", "3 %-li hidrogen peroksid", "70 %-li etil spirti", "10 %-li kamfora spirti"],
        correct: 2
    },
    // Question 1140
    {
        question: "Göz təcrübəsində işlənən sulfanilamid preparatı hansıdır?",
        options: ["Natrium xlorid", "Streptosid", "Sulfasıl natrium", "Sulfadimezin", "Biseptol"],
        correct: 2
    },
    // Question 1141
    {
        question: "İlk tibbi yardım harada göstərilir?",
        options: ["Zədələnmə ocağında", "Çeşidləmə meydançasında", "Xəstəxanada", "Hərbi hissədə", "Tibb məntəqəsində"],
        correct: 0
    },
    // Question 1142
    {
        question: "Uzunmüddətli sıxılma sindromunun daha çox rast gəlinən ağırlaşması hansıdır?",
        options: ["Sınıqların əmələ gəlməsi", "Huşun itməsi", "Ağrı", "Toksiki şok", "Tənəffüsün pozulması"],
        correct: 3
    },
    // Question 1143
    {
        question: "\"Diqqət hamının nəzərinə\" həyacan siqnalı nə ilə verilir?",
        options: ["Səsgücləndirici ilə", "Telefon ilə", "Yerli radio ilə", "Polis maşını iə", "Televizior ilə"],
        correct: 0
    },
    // Question 1144
    {
        question: "Fəlakətlər təbabəti işinin əsasını hansı qurum təşkil edir?",
        options: ["Təcili tibbi yardım briqadası", "Şəhər və rayon xəstəxanaları", "Sanitar drujinaları", "İxtisaslaşmış yardım", "İlk tibbi yardım briqadası"],
        correct: 0
    },
    // Question 1145
    {
        question: "Fövqəladə fəlakətlər zamanı fəlakət tibb xidmətinin əsas vəzifələrindən biri hansıdır?",
        options: ["Tibbi çeşidləmə", "Qəza zonasında, xilasetmə və təxirə salınmaz işlərin aparılması, onların axtarılması və ərazidən çıxarılması", "Qəza zonasında xilasetmə işlərinin təşkili", "Qüvvə və vasitələrin səfərbər olunması", "Zərərçəkənə ilk tibbi yardım göstərilməsi və köçürülmə mərhələsində həyati vacib orqanların fəaliyyətinin bərpa edilməsi"],
        correct: 4
    },
    // Question 1146
    {
        question: "Fəlakət ocağında hospitala qədər hansı tibbi yardım göstərilir?",
        options: ["Əhali tərəfindən", "İxtisaslaşmış", "Cərrahi", "Xüsusiləşmiş", "İlk"],
        correct: 4
    },
    // Question 1147
    {
        question: "Uzunmüddətli sıxılma sindromunun aşağıdakı növü yoxdur?",
        options: ["Qısa müddətli (2-3 saat)", "Ani (0, 5 saat)", "Çox uzun müddətli (7saatdan çox)", "Uzun müddətli (4-7 saat)", "Orta müddətli (4 saat)"],
        correct: 1
    },
    // Question 1148
    {
        question: "Kimyəvi zədələnmə ocağında ilk tibbi yardımın əsas tədbirlərinə nə aid deyildir?",
        options: ["Əlehqazların geyindirilməsi", "Xəsarət almışların zədə ocağından çıxarılması", "Antidontların vurulması", "Natamam sanitar təmizləmənin aparılması", "Qanaxmanın daimi dayandırılması"],
        correct: 4
    },
    // Question 1149
    {
        question: "Əhalinin kütləvi qırğın silahlarından qorunma üsulları hansıdır?",
        options: ["Tibbi yardımın göstərilməsi və müalicəsinin aparılması", "Əhalini şəhər ətrafı ərazilərə köçürülməsi", "Əhalinin həmin ərazidən çıxarılması və sığınacaqlarda yerlşdirilməsi", "Tibbi ləvazimatlardan istifadə edilməsi", "Əhaliyə xəbərdarlıq edilməsi"],
        correct: 2
    },
    // Question 1150
    {
        question: "Ətrafın sıxılması zamanı ilk tibbi yardım necə göstərilir?",
        options: ["Periferiyadan mərkəzə doğru sıxıcı sarğı qoyulur və ağrıkəsicilər yeridilir", "Oksigen inhalyasiya olunur", "Antihistamin maddələrin yeridilir", "Standart şinalarla immobilizasiya aparılır", "Antibakterial terapiya aparılır"],
        correct: 0
    },
    // Question 1151
    {
        question: "Əlaltı vasitələrdən istifadə etməklə zədələnmə ocağında hansı növ tibbi yardım göstərilir?",
        options: ["İlk yardım", "İxtisaslaşdırılmış yardım", "Xüsusiləşdirilmiş yardım", "İlk həkim yardımı", "Təkmilləşmiş həkim yardımı"],
        correct: 0
    },
    // Question 1152
    {
        question: "Sudaboğulan şəxsə ilk tibbi yardım hansı ardıcıllıqla göstərilməlidir?\n1) Sudan çıxarmaq və ağız boşluğundan yad cisimləri xaric etmək; 2) Ağ ciyərlərin süni ventilyasiyası; 3) Ürəyin qapalı masajı; 4) Bədənin isidilməsi; 5) Dərman müalicəsi; 6) Ürəyin açıq masajı",
        options: ["1, 2, 3", "1, 5, 6", "1, 4, 5", "2, 3, 4", "4, 5, 6"],
        correct: 0
    },
    // Question 1153
    {
        question: "Hansı zəhərləyici maddələrlə zəhərlənmə zamanı dəridə \"boz hipoksiya\" əmələ gəlir?",
        options: ["Zorin", "Ammonyak", "Dəm qazı", "Fosgen", "Xlorpikrin"],
        correct: 3
    },
    // Question 1154
    {
        question: "Dezaktivasiya nədir?",
        options: ["Antidotların yeridilməsi", "Radiaktiv maddələrin təmizləməsi", "Gəmiricilərin zərərsizlədirilməsi", "Zərərli maddələrin zərərsizləşdirilməsi", "Mikrobların zərərsizləşdirilməsi"],
        correct: 1
    },
    // Question 1155
    {
        question: "Yüngül dərəcəli yanıqlara hansı yanıqlar aiddir?",
        options: ["I, II, III A dərəcəli yanlıqlar", "I, II, III, B dərəcəli yanıqlar", "Hamısı", "I dərəcəli yanıqlar", "I və II dərəcəli yanıqlar"],
        correct: 0
    },
    // Question 1156
    {
        question: "Əhalinin kütləvi qırğın silahlarından mühafizə zamanı nədən istifadə edilmir?",
        options: ["Yeraltı keçidlərdən", "Binaların zirzəmisindən", "Radiasiyaya qarşı daldanacaqlardan", "Əlehqazlardan", "Metrodan"],
        correct: 3
    },
    // Question 1157
    {
        question: "Nüvə zədələnməsi ocaqlarında göstərilən ilk tibbi yardıma hansı aid deyil ?",
        options: ["Arterial qanaxmanın daimi dayandırılması", "Yanan paltarların söndürülməsi", "Qanaxmanın müvəqqəti saxlanılması", "Yanıqlarda ağrıkəsicilərin vurulması", "Yuxarı tənəffüs yollarının keçiriciliyinin bərpası"],
        correct: 0
    },
    // Question 1158
    {
        question: "Təbii fəlakətlərə hansı aid deyil ?",
        options: ["Daşqınlar", "Zəlzələ", "Terrorizm", "Qasırğa", "Torpaq sürüşməsi"],
        correct: 2
    },
    // Question 1159
    {
        question: "Bunlardan hansı əhalinin kütləvi qırğın silahlarından mühafizəsi üsullarına aid deyil?",
        options: ["Əhalinin şəhərkənarı əraziyə təxliyyəsi", "Əhalinin mühafizə qurğularında yerləşdirilməsi", "Fərdi mühafizə vasitələrindən istifadə edilməsi", "Əhalinin sayının seyrəkləşdirilməsi", "Əhalinin evlərdə, binalarda gizlənməsi"],
        correct: 4
    },
    // Question 1160
    {
        question: "Fərdi mühafizə vasitələrinə bunlardan nə aid deyil?",
        options: ["Respiratorlar.", "Əlehqazlar", "Dərinin mühafizə vasitəsi", "Tənəffüs üzvlərinin mühafizə vasitəsi", "Radiasiyaya qarşı daldanacaqlar"],
        correct: 4
    },
    // Question 1161
    {
        question: "Kimyəvi zədələnmə ocağında ilk tibbi yardımın əsas tədbirlərinə aid deyil?",
        options: ["Xəsarət almışların zədə ocağından çıxarılması", "Əlehqazların geyindirilməsi", "Natamam sanitar təmizlənmənin aparılması", "Antidotların vurulması", "Təkmilləşdirilmiş və ixtisaslaşdırılmış tibbi yardım təşkili"],
        correct: 4
    },
    // Question 1162
    {
        question: "Bakterioloji ocağın ləğv olunması tədbirlərinə nə daxil deyil ?",
        options: ["Bakterioloji ocağın sərhədləri müəyyən olunur", "Karantin və observasiya təşkil olunur", "Sanator- kurort müalicəsi aparılır", "Ərazidə bioloji kəşfiyyat aparılır", "Ümumi kəşfiyyatların nəticələrinə görə əhali xəbərdar edilir"],
        correct: 2
    },
    // Question 1163
    {
        question: "Hansı zəhərli maddə sinir iflic edici təsirə malikdir?",
        options: ["İprit,luizit", "Fosgen, difosgen", "Qıcıqlandırıcı və gözyaşardıcı maddələr", "Zarin,zoman vi-iks", "Linil turşusu"],
        correct: 3
    },
    // Question 1164
    {
        question: "Bunlardan hansı boğucu təsirli zəhərli maddələrdir?",
        options: ["Sinil turşusu", "Gözyaşardıcı maddələr", "İprit, lüizit", "Fosgen, difosgen", "Sulfat turşusu"],
        correct: 3
    },
    // Question 1165
    {
        question: "Kəskin şüa xəstəliyi zamanı ilk tibbi yardım necə aparılır?",
        options: ["Qüvvətləndirici və medikamentoz terapiya", "Təzə sitrat, qan trombositləri, eritrositar kütlənin yeridilməsi", "Polivitamin, dimidrol, antibiotiklərin tətbiqi", "Parenteral qidalanma", "Zərərçəkəni zədələnmə ocağından çıxarmaq, hissəvi sanitar təmizləmə aparmaq, içməyə 1 tab etapirazin vermək, şüalanmanın qarşısını almaq üçün -- sistamin (6 tab bir dəfəyə vermək)"],
        correct: 4
    },
    // Question 1166
    {
        question: "Boğucu təsirli zəhərli maddə fosgenlə zəhərləndikdə bu əlamərlərdən hansı müşahidə olunmur?",
        options: ["Ağızda xoşagəlməz dad", "Gözlərin və tənəffüs yollarının qıcıqlanması", "Hallüsinasiyalar", "Öskürək, boğulma", "Mədə nahiyyəsində ağrılar və qusma"],
        correct: 2
    },
    // Question 1167
    {
        question: "Ümumi təsirli, zəhərli maddələrlə zədələndikdə ilk tibbi yardım zamanı hansı tədbir aparılmır.",
        options: ["Antidot yeridilir", "Süni tənəffüs verilir", "Zədələnmə ocağından çıxarılır", "Zədə alana əlehqaz geyindirilir", "Antibiotiklər, dezensibilizəedici maddələr, transfuzion terapiya"],
        correct: 4
    },
    // Question 1168
    {
        question: "Qan qrupu və rezus-faktoru uyğun olmayan qan köçürdükdə hansı növ şok baş verir?",
        options: ["Kardiogen", "Hemorragik", "Hemotransfuzion", "Travmatik", "Hipovolemik"],
        correct: 2
    },
    // Question 1169
    {
        question: "Həyat əlamətlərinə bunlardan nə aid deyil?",
        options: ["Gözün buynuz qişası bulanır və quruyur", "Ürək döyüntülərinin olması", "Bəbəklərin işiğa qarşı reaksiyasının olması", "Tənəffüsün olması", "Arteriyalar üzərində nəbzin əllənməsi"],
        correct: 0
    },
    // Question 1170
    {
        question: "Yanıq xəstəliyinin müalicəsində aşağıdakı hansı dərman istifadə olunur?",
        options: ["Heparin", "Aspirin", "Promedol", "Adrenalin", "Protamin sulfat"],
        correct: 2
    },
    // Question 1171
    {
        question: "Termiki yanıqlar zamanı zərdab hansı xəstəliyin profilaktikası məqsədilə vurulur?",
        options: ["Qarayara", "Botulizm", "Tetanus", "Quduzluq", "Vəba"],
        correct: 2
    },
    // Question 1172
    {
        question: "Yanıq xəstəliyi bədənin neçə faizi yandıqda əmələ gəlir?",
        options: ["6-7 %", "10 % və daha çox", "2-3 %", "1-2 %", "3-5 %"],
        correct: 1
    },
    // Question 1173
    {
        question: "Yanıq xəstəliyi nəticəsində hansı şok əmələ gəlir?",
        options: ["Travmatik", "Anafilaktik", "Hipovolemik", "Kardiogen", "Bakterial"],
        correct: 2
    },
    // Question 1174
    {
        question: "Termiki yanıqlar neçə dərəcəyə bölünür?",
        options: ["5", "2", "3", "6", "4"],
        correct: 0
    },
    // Question 1175
    {
        question: "Hansı yanıqlar səthi yanıqlara aiddir?",
        options: ["I- III", "I və II", "I, II, III A", "I-II-III B", "I"],
        correct: 2
    },
    // Question 1176
    {
        question: "Yanıqların infuzion müalicəsində hansı növ məhlulllardan istifadə edilir?",
        options: ["Dezintoksikosion təsirli", "Antihistamin təsirli", "Polyarlaşmış", "Duz tərkibli", "Zülal tərkibli"],
        correct: 0
    },
    // Question 1177
    {
        question: "Kəskin şüa xəstəliyində ən erkən rast gəlinən kliniki simptom hansıdır?",
        options: ["Dəridə eritema", "Tüklərin tökülməsi", "Ürəkbulanma və qusma", "İshalın olması", "Qanazlığı"],
        correct: 2
    },
    // Question 1178
    {
        question: "Travma ikincili qanaxma hansı müddətdə əmələ gəlir?",
        options: ["2 sutkadan sonra", "Bir neçə saatdan bir sutkaya qədər", "6 sutkadan sonra", "4 sutkadan sonra", "10 sutkadan sonra"],
        correct: 1
    },
    // Question 1179
    {
        question: "Donmadan neçə müddət sonra demarkasion xətt əmələ gəlir?",
        options: ["1-2 gün", "25-30 gün", "10-12 saat", "10-12 gün", "4-6 saat"],
        correct: 3
    },
    // Question 1180
    {
        question: "Qanaxmanın hansı növündə köpüklü və al qırmızı qan müşahidə olunur?",
        options: ["Ağciyər qanaxmasında", "Qida borusu qanaxmasında", "Bağırsaq qnaxmasında", "Burun qanaxmasında", "Mədə qanaxmasında"],
        correct: 0
    },
    // Question 1181
    {
        question: "Qansaxlayıcı turna düzgün qoyulduqda ətraflarda hansı dəyişiklər baş verir?",
        options: ["Venoz qanaxma davam edir", "Ətraf avazıyır, göyərir, turnadan aşağı nəbz təyin edilmir", "Turnadan aşağı nəbz təyin edilir", "Ətraf göyərir, venoz qanaxma davam edir", "Turnadan aşağı nəbz təyin edilmir"],
        correct: 1
    },
    // Question 1182
    {
        question: "Hansı qanaxmalarda bərk sarğı qoyulur?",
        options: ["Xarici", "Bazu arteriyasından qanaxma", "Arterial", "Venoz", "Qarışıq"],
        correct: 3
    },
    // Question 1183
    {
        question: "Psixomotor oyanıqlıq zamanı xəstəyə təxirəsalınmaz yardım üçün hansı preparatdan istifadə olunur?",
        options: ["Koffein", "Ensefabol", "Pirasetam", "Aminazin", "Analgin"],
        correct: 3
    },
    // Question 1184
    {
        question: "Bir çox psixi xəstələrdə yeməkdən imtina və yedizdirməyə müqavimət zamanı tibb bacısının taktikası:",
        options: ["Gözləməli xəstə yeməyə özü təşəbbüs etsin", "Qaşıqla yedizdirməli", "Xəstəni süni qidalandırmalı", "İştahartırma dərmanları verməli", "Başqa qida növü təklif etməli"],
        correct: 2
    },
    // Question 1185
    {
        question: "Miqren xəstəliyi necə başlayır?",
        options: ["Burundan qanaxma ilə", "Yuxu pozuntusu ilə", "Ətraflarda qıcolma ilə", "Başın bir yarısında tutmaşəkilli ağrılarla", "Qarında ağrılar ilə"],
        correct: 3
    },
    // Question 1186
    {
        question: "Psixoterapiya nədir?",
        options: ["Xəstələrə nəzarətin təşkili", "Xəstənin əmək reablitasiyasiyası", "Xəstənin xəstəxanaya yerləşdirilməsi", "Xəstənin dərmanla müalicəsi", "Xəstənin psixikasına sözlə təsir etmə"],
        correct: 4
    },
    // Question 1187
    {
        question: "Tibb işçilərinin ehtiyatsızlığı nəticəsində müşahidə olunan psixi pozuntu nədir?",
        options: ["Düşüncə pozuntusu", "Diqqət pozuntusu", "Yaddaş pozuntusu", "Yatrogeniya", "İradi-hərəki pozuntu"],
        correct: 3
    },
    // Question 1188
    {
        question: "Kəskin beyin-qan dövranının pozuntusu zamanı yataq rejiminə neçə gün müddətinə riayət olunur?",
        options: ["21", "6", "30", "10", "14"],
        correct: 0
    },
    // Question 1189
    {
        question: "Meningit xəstəliyini təsdiqləyən müayinə üsulu hansıdır?",
        options: ["Qanın müayinəsi", "Ultrasəs müayinəsi", "Onurğa beyin mayesinin müayinəsi", "Şəkərin müayinəsi", "Sidiyin müayinəsi"],
        correct: 2
    },
    // Question 1190
    {
        question: "Miqren tutması zamanı ilk tibbi yardım hansıdır?",
        options: ["Başı soyuq su ilə yumaq", "Sıxıcı paltarlardan azad etmək", "Xəstəni yarıqaranlıq, havası dəyişdirilmiş, sakit bir yerdə yerləşdirmək", "Zəli qoymaq", "Oksigen vermək"],
        correct: 2
    },
    // Question 1191
    {
        question: "Üçlü sinirin nevralgiyası zamanı ağrı tutması nə qədər davam edir?",
        options: ["1 sutka", "2 saat", "3 saat", "Saniyə-dəqiqə", "1 saat"],
        correct: 3
    },
    // Question 1192
    {
        question: "Epilepsiya üçün xarakter əlamət nədir?",
        options: ["Ürəkbulanma", "Başgicəllənmə", "Qıcolma", "Nitqin tormozlanması", "Özünə qapanma"],
        correct: 2
    },
    // Question 1193
    {
        question: "Adi epileptik tutma nə qədər davam edir?",
        options: ["1 saat", "1 sutka", "5-6 dəqiqəyə kimi", "12 saat", "1 saatdan artıq"],
        correct: 2
    },
    // Question 1194
    {
        question: "Fobiya nədir?",
        options: ["Sayıqlama", "Qorxu", "Həyəcan", "Adət", "Tərəddüd"],
        correct: 1
    },
    // Question 1195
    {
        question: "Epileptik status zamanı mexaniki asfiksiyanın qarşısını almaq üçün tibb bacısının taktikası:",
        options: ["Xəstəni təmiz havaya çıxartmalı", "Başa buz qoymalı", "Başa hündür vəziyyət verməli", "Yuxarı tənəffüs yollarını selikdən təmizləmək, başı yana çevirməli", "Mədə-bağırsaq traktını yumalı"],
        correct: 3
    },
    // Question 1196
    {
        question: "Hemorragik insult zamanı təxirəsalınmaz yardım:",
        options: ["Xəstəni sağ tərəfə çevirmək", "Xəstəyə başıaşağı vəziyyət vermək", "Xəstəni sol tərəfə çevirmək", "Xəstəyə yarıoturaq vəziyyət vermək", "Xəstəni uzatmaq, tənəffüs yollarını təmizləmək"],
        correct: 4
    },
    // Question 1197
    {
        question: "Qeyd edilən preparatlardan narkotik qrupuna aid olanı hansıdır?",
        options: ["Diazepam", "Barbital", "Morfi", "Aminazin", "Kofein"],
        correct: 2
    },
    // Question 1198
    {
        question: "Stasionarda xəstənin vəziyyəti qəfildən dəyişib. Psixomotor oyanıqlıq qeyd olunur. Ünsiyyətə daxil olmur, ətrafdakılara və özünə zərər yetirir. Tibb bacısı nə etməlidir?",
        options: ["Təkidlə ünsiyyətə daxil olmağa çalışmalı", "Xəstənin vəziyyətindəki dəyişiklik barədə dərhal həkimə xəbər verməli", "Təyin olunan dərmanların dozasını artırmalı", "Xəstəni təmiz havaya çıxarmalı", "Xəstəni qaranlıq otağa qapatmalı"],
        correct: 1
    },
    // Question 1199
    {
        question: "Afaziya nədir?",
        options: ["Düşüncə pozuntusu", "Yaddaş pozuntusu", "Nitq pozuntusu", "Yuxu pozuntusu", "Diqqət pozuntusu"],
        correct: 2
    },
    // Question 1200
    {
        question: "İsterik tutma zamanı tibb işçisinin taktikası necə olmalıdır?",
        options: ["Xəstəyə yarımoturaq vəziyyət verməli", "Oksigen verməli", "Başa hündür vəziyyət verməli", "Xəstəni yumşaq bir yerə uzatmalı, kənar şəxsləri uzaqlaşdırmalı", "Başa buz qoymalı"],
        correct: 3
    },
    // Question 1201
    {
        question: "Beyinə qan sızan xəstə hansı vəziyyətdə daşınmalıdır?",
        options: ["Gövdənin vəziyyəti tez-tez dəyişdirilməli", "Ayaqları yuxarı qaldırılmalı", "Xəstəni təcili yardım nəqliyyatı ilə xəstəxanaya çatdırmaq", "Başın vəziyyəti tez-tez dəyişdirilməli", "Başa hündür vəziyyət verilməli"],
        correct: 2
    },
    // Question 1202
    {
        question: "Alkoqolla zəhərlənmə zamanı ilk təxirəsalınmaz yardım :",
        options: ["Təmiz havaya çıxartmaq", "Başına buz qoymaq", "Zond vasitəsilə mədənin yumaq, qarın işlədici duzlar vermək, sürətləndirilmiş diurez", "Sıxıcı paltarlardan azad etmək", "Ayaqlarına isitqac qoymaq"],
        correct: 2
    },
    // Question 1203
    {
        question: "Peyvəndlər hansı preparatlar ilə aparılır?",
        options: ["Antibiotiklər, Sulfanilamidlər,bakteriofaqlar", "Anatoksin, interferon, vaksin", "Zərdab, vaksin, regidron,trisol", "Vaksinlər, anatoksinlər", "Vaksinlər, nitrofuran törəmələri"],
        correct: 3
    },
    // Question 1204
    {
        question: "Süni aktiv immunitet necə əmələ gəlir?",
        options: ["Yoluxucu xəstəlik keçirdikdən sonra", "Tərkibində anicism olan zərdabların və qammaqlobulinlərin yeridilməsi nəticəsində", "Zərdablar yeridildikdə", "Ana südü ilə qidalandırmada immunoqlobulinlərin alınmasında", "Vaksinlər yeridildikdə"],
        correct: 4
    },
    // Question 1205
    {
        question: "Süni passiv immunitet necə əmələ gəlir?",
        options: ["Vaksinlər yeridilməsində", "Yoluxucu xəstəliyi keçirdikdən sonra", "Anticism tərkibli qan zərdabı və qamma-qlobulinlərin yeridilməsi zamanı", "Anadangəlmə", "Nəsildən-nəsilə irsi yolla keçmə zamanı"],
        correct: 2
    },
    // Question 1206
    {
        question: "Residiv nəyə deyilir?",
        options: ["Periodic olaraq kəskinləşən xəstəlik", "Əlamətlərin geriyə qayıtması", "Bir neçə əlamətin birlikdə təzahürünə", "Törədicinin yenidən yoluxdurulması", "Simptomsuz, subklinik formada cərəyan edən prosesə"],
        correct: 1
    },
    // Question 1207
    {
        question: "Dizenteriyada infeksiya mənbəyi aşağıdakılardan hansıdır?",
        options: ["İri və xırda mal-qara", "Xəstə insan, rekonvalessentlər, bakteriya gəzdirənlər", "Çöl və ev quşları", "Bit,birə,gənə", "Qansorucular"],
        correct: 1
    },
    // Question 1208
    {
        question: "Botuluzmin infeksiya mənbəyi aşağıdakılardan hansıdır?",
        options: ["Bakteriya gəzdirənlər", "Ağcaqanadlar", "İstiqanlı və bəzən soyuqqanlı heyvanlar", "Xəstə insan", "Gəmiricilər, həşaratlar"],
        correct: 2
    },
    // Question 1209
    {
        question: "Polimelitin törədicisi hansıdır?",
        options: ["Viruslar", "Spiroxetlər", "İbtidailər", "Bakteriyalar", "Göbələklər"],
        correct: 0
    },
    // Question 1210
    {
        question: "Quduzluğa qarşı tədbirlər nə vaxt aparılmalıdır.?",
        options: ["Xəstəliyin ilk günlərində", "Quduz olması güman edilən heyvanla təmasdan dərhal sonra", "Dişlənəndən 40 gün sonra", "Dişlənəndən 20 gün sonra", "Dişlənən gündən 16- gün sonra"],
        correct: 1
    },
    // Question 1211
    {
        question: "Evdə yoluxucu xəstə həkim tərəfindən aşkar edildikdə, tibb bacısının vəzifələri nədən ibarətdir?",
        options: ["Həkimin ğöstərişi ilə təmasda olanları müşahidə etmək, peyvənd işlərini aparmaq", "Xəstəlik tarixi yazmaq", "Dezinfeksiya işini özbaşına aparmaq", "Xəstəxanaya göndəriş vərəqəsi yazmaq", "Evdə xəstəyə müalicə təyin etmək"],
        correct: 0
    },
    // Question 1212
    {
        question: "Spesifik profilaktik tədbirlərdə tibb bacısının vəzifələri:",
        options: ["İmmunizasiya aparmaq, müalicə təyin etmək", "Təcili tibbi xəbərdarlıq vərəqəsi doldurmaq", "Xəstəni müayinəyə göndərmək", "Kontaktda olanların müşahidəsi", "GEM - ə dezstansiyaya xəbərdarlıq etmək"],
        correct: 2
    },
    // Question 1213
    {
        question: "Sahədə yoluxucu xəstəliyin yayılmasının qarşısını almaq məqsədilə tibb bacısı hansı işləri aparmalıdır?",
        options: ["Sanitariya -- maarifi işi aparmaq, qida məhsullarının keyfiyyətini yoxlamaq, suyu xlorlaşdırmaq", "Sanitariya -- maarifi işi aparmaq, suyun xlorlaşdırılması, kontaktda olanları müşahidə etmək", "Sanitariya -- maarifi işi aparmaq, profilaktik peyvənlərin aparılması, kontaktda olanları müşahidə etmək", "Suyun xlorlaşdırılması, profilaktik peyvəndlər, qida məhsullarının keyfiyyətini yoxlamaq", "Xəstənin əşyalarını dezinfeksiya etmək, qida məhsullarının keyfiyyətini yoxlamaq"],
        correct: 2
    },
    // Question 1214
    {
        question: "Dərinin hansı sahələrində piy vəziləri mövcud deyil?",
        options: ["Gövdə", "Ovuc və ayaqaltı", "Başın tüklü hissəsi", "Ətraflar", "Sifət"],
        correct: 1
    },
    // Question 1215
    {
        question: "Dərinin elastikliyini itirməsi nəticəsində aşağıdakılardan hansı əmələ gəlir?",
        options: ["Qartmaq", "Yara", "Kəpək", "Çat", "Eroziya"],
        correct: 3
    },
    // Question 1216
    {
        question: "Mikozların əmələ gəlməsində rol oynamır.",
        options: ["Başqasının corabını geyinmək", "Sulfanilamid preparatların qəbulu", "Dar ayaqqabı geyinmək", "Ayaqların çox tərləməsi", "Ümumi hamamda çimmək"],
        correct: 1
    },
    // Question 1217
    {
        question: "Sifilisin törədicisi hansıdır?",
        options: ["Leysmania tropica", "Sporothrix schenki", "Pitrosporum orbiculare", "Candida albicans", "Treponema pallidum(solğun)"],
        correct: 4
    },
    // Question 1218
    {
        question: "Sifilis xəstəliyinin mütləq diaqnostikasına aiddir?",
        options: ["Anamnez məlumatları", "Seroloji reaksiyalar", "Klinik əlamətlər", "Limfa vəzilərinin müayinəsi", "Solğun treponemanın mikroskopik aşkar olunması"],
        correct: 1
    },
    // Question 1219
    {
        question: "Aşağıdakı hansı məhsulun istifadəsi botulizmlə yoluxmağa səbəb ola bilməz?",
        options: ["Ev şəraitində hazırlanmış göbələk konservi", "Kolbasa məhsulları", "Ev şəraitində hazırlanmış pomidor turşusu", "Qaynadılmış süd", "Hisə verilmiş balıq"],
        correct: 3
    }
];

// Export the array for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = questions;
}
