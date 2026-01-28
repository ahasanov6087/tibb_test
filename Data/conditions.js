const DATA = [
  // Məsələ 1
{
  condition: "Gecə uşaqda 38,7 qızdırma var. Hürücü öskürəkdən uşaq tez-tez yuxudan oyanır. Nəfəs almada çətinlik çəkir. Arabir boğulma tutmaları müşahidə olunur. Hürücü öskürək var.",
  questions: [
    {
      question: "Bu hansı xəstəlikdir?",
      options: ["Rinit", "Yalançı inaq", "Həqiqi inaq"],
      correct: 1
    },
    {
      question: "Bu zaman nə etmək lazımdır?",
      options: ["Sahə həkiminə məlumat verilməli", "Təcili yardım çağırmaq", "Həkimin qəbuluna müraciət yazmaq"],
      correct: 1
    },
    {
      question: "Həkim yardımı göstərilənə qədər tibb bacısı nə etməlidir?",
      options: ["Yayındırıcı terapiya", "Medikamentoz terapiya", "Heçnə etməməlidir"],
      correct: 0
    },
    {
      question: "Hansı üsullarla temperaturu endirmək olar?",
      options: ["Masaj etməklə", "Fiziki üsullarla", "Hərarətsalıcılarla"],
      correct: 1
    },
    {
      question: "Xəstəyə nə qədər maye vermək olar?",
      options: ["Çox miqdarda", "Verilməməlidir", "Məhdud miqdarda"],
      correct: 2
    }
  ]
},

// Məsələ 2
{
  condition: "40 həftəlik hamiləlikdən çəkisi 3160 qram boyu 51 sm olan uşaq doğulub. Uşaq dərhal qışqırmış, əzələ tonusu normaldır. Tam sağlam uşaqdır. Apqar şkalasına görə 8 balla qiymətləndirilib.",
  questions: [
    {
      question: "Bu uşağa xəstəxanada ilk 12 saat ərzində hansı peyvəndlər vurulmalıdır?",
      options: ["VƏP, Hepatit B", "Hepatit B, OPV", "Hepatit B"],
      correct: 0
    },
    {
      question: "Vaksin vurulandan sonra uşaq nə vaxt yedirilməlidir?",
      options: ["Dərhal sonra", "1 saat sonra", "3 saat sonra"],
      correct: 2
    },
    {
      question: "Peyvəndi uşağa kim vurmalıdır?",
      options: ["İmmunlaşma aparan tibb bacısı", "Həkim", "Tibb bacısı"],
      correct: 0
    },
    {
      question: "Gonobloneroyanın profilaktikası nə vaxt aparılır?",
      options: ["İlk 1 saat ərzində", "3 saat sonra", "5 saat sonra"],
      correct: 0
    },
    {
      question: "Yenidoğulmuş uşağa hansı hepatitə qarşı peyvənd aparılır?",
      options: ["Hepatit A", "Hepatit C", "Hepatit B"],
      correct: 2
    }
  ]
},

// Məsələ 3
{
  condition: "Uşaqda 3 gündür ishal qeyd olunur. Nəcis qanlıdır. Tenezmlar var. Uşağın temperaturu yüksəkdir, iştahı yoxdur.",
  questions: [
    {
      question: "Bu hansı xəstəlikdir?",
      options: ["Dizenteriya", "Salmonelyoz", "Sadə diareya"],
      correct: 0
    },
    {
      question: "Bu necə xəstəlikdir?",
      options: ["Yoluxucu", "Somatik", "Nevraloji"],
      correct: 0
    },
    {
      question: "Bu xəstəlik idarə olunur?",
      options: ["Bəli", "Xeyr", "Qisman idarə olunur"],
      correct: 0
    },
    {
      question: "Bu xəstəliyin peyvəndi hansıdır?",
      options: ["QPM", "PK", "Peyvəndi yoxdur"],
      correct: 2
    },
    {
      question: "Sizin taktikanız?",
      options: ["Həkim çağırmaq", "Müalicə etmək", "Heç nə etməmək"],
      correct: 0
    }
  ]
},

// Məsələ 4
{
  condition: "Doğum evində 34 həftəlik hamiləlikdən çəkisi 1700 q, boyu 42 sm olan uşaq doğulmuşdur. Ana Hepatit B daşıyıcısıdır. Uşaq apqar şkalası ilə 5 balla qiymətləndirilib.",
  questions: [
    {
      question: "Hepatit B vaksini bu uşağa nə vaxt vurula bilər?",
      options: ["Çəkisi az olduğu üçün bu uşağa peyvənd vurulmur", "İlk 12 saat ərzində", "Ana Hepatit B daşıyıcısı olduğu üçün bu uşağa vaksin vurmaq olmaz"],
      correct: 1
    },
    {
      question: "Hepatit B vaksini hansı nahiyyəyə vurulur?",
      options: ["Sol çiyindən iki barmaq aşağı dərialtı", "Budun ön lateral hissəsinə əzələdaxili", "Sağ çiyindən aşağı dəri içinə"],
      correct: 1
    },
    {
      question: "Hepatit B vaksini hansı vaksinin tərkibində var?",
      options: ["PK", "Hib", "IPV"],
      correct: 1
    },
    {
      question: "Hepatit B vaksini tərkibinə görə necə vaksindir?",
      options: ["Cansız", "Canlı", "Gen mühəndisliyi ilə hazırlanmışdır"],
      correct: 0
    },
    {
      question: "Hepatit B vaksinindən sonra orqanizmdə necə immunitet yaranır?",
      options: ["Aktiv süni", "Aktiv təbii", "Passiv süni"],
      correct: 0
    }
  ]
},

// Məsələ 5
{
  condition: "Xəstə 38 yaşlı kişidir. Qarnüstü (epiqastral) nahiyədə kəskin ağrıdan, ürəkbulanma və qısmadan şikayətlənir. Son 3 ildə müntəzəm olaraq ağrılar baş verir. Bir gün əvvəl acı qida qəbulundan sonra ağrılar artmış, qısma baş vermişdir. Qısmadan sonra ağrı sakitləşmişdir. Səhər yenidən ağrılar artmış, qısmuş, qəhvə xıltı şəklində qusuntu kütləsi gəlmişdir.",
  questions: [
    {
      question: "Nədən şübhələnirsiniz?",
      options: ["Kəskin enterit", "Mədə xorası", "Qida borusunun divertikulu"],
      correct: 1
    },
    {
      question: "Xəstə daxilə nə qəbul edə bilər?",
      options: ["Soyuq su", "Ağrıkəsici dərman", "İsti çay"],
      correct: 2
    },
    {
      question: "Qarnüstü (epiqastral) nahiyəyə hansını qoymaq olar?",
      options: ["Zəli qoymaq", "İsitqac", "Buz qovuğu"],
      correct: 2
    },
    {
      question: "Xəstənin rejimi necə olmalıdır?",
      options: ["Yarım yataq rejimi", "Yataq rejimi", "Ümumi rejim"],
      correct: 1
    },
    {
      question: "Tibb bacısının taktikası:",
      options: ["Təcili yardım maşını ilə tez bir zaman xəstəxanaya çatdırmaq", "Ev şəraitində müalicə", "Yalnız maye içirtmək"],
      correct: 0
    }
  ]
},


// Məsələ 7
{
  condition: "Uşaqda 3 gündür qızdırma, baş ağrısı, ürəkbulanma, başgicəllənmə, qulaqlarda küy var. Dünəndən gözdə qızarıqlıq, işıqdan qorxma müşahidə olunur. Uşağın temperaturu 38.5°C, nəbzi 110, tənəffüsü 28-dir. Sidik ifrazı azalıb, rəngi qırmızıdır.",
  questions: [
    {
      question: "Uşaqda hansı xəstəlik ola bilər?",
      options: ["Pielonefrit", "Qida zəhərlənməsi", "Qlomerulonefrit"],
      correct: 2
    },
    {
      question: "Xəstəliyin yaranmasına səbəb nədir?",
      options: ["İnfeksion, allergik xəstəlikdir", "Bağırsaq infeksiyasıdır", "Virus xəstəlikdir"],
      correct: 0
    },
    {
      question: "Tibb bacısı nə etməlidir?",
      options: ["Uşağı müayinə üçün həkimin qəbuluna dəvət edir", "Təcili xəstəxanaya göndərməlidir", "Söhbət etməlidir"],
      correct: 1
    },
    {
      question: "Xəstəliyin fəsadı nə ola bilər?",
      options: ["Qaraciyər sırrozu", "Kəskin və xroniki böyrək çatmamazlıq", "Peritonit"],
      correct: 1
    },
    {
      question: "Xəstəlikdə dispanser qeydiyyata götürülür?",
      options: ["Bəli", "Xeyr"],
      correct: 0
    }
  ]
},

// Məsələ 8
{
  condition: "Xəstə qadındır, 41 yaşı var. Döş sümüyü arxasında sıxıcı, təzyiq edici ağrılardan, ağrının sol qola, sol çiyinə yayılmasından, başgicəllənmədən şikayət edir. Ağrılar 5-ci mərtəbəyə ağır zənbillə piyada qalxandan sonra başlayıb. Əvvəllər də ürək nahiyəsində qısa müddətli ağrılar olub, lakin əhəmiyyət verməyib, həkimə müraciət etməyib. Nitroqliserin qəbulundan sonra ağrılar keçib. Obyektiv olaraq vəziyyəti kafidir, dərialtı piy təbəqəsi qalındır. Tənəffüsün sayı 1 dəqiqədə 16, nəbz 92, A/T 130/90 mm c.süt, t0 36.7°C-dir.",
  questions: [
    {
      question: "Nədən şübhələnirsiniz?",
      options: ["Stenokardiya", "Ürək astması", "Miokard infarktı"],
      correct: 0
    },
    {
      question: "Ürək nahiyəsinə hansını qoymaq məqsədəuyğundur?",
      options: ["Banka", "Xardal yaxması", "Soyuq kompress"],
      correct: 1
    },
    {
      question: "Belə vəziyyətdə xəstəyə hansı dərman kömək edir?",
      options: ["Noşpa", "Analgin", "Nitroqliserin"],
      correct: 2
    },
    {
      question: "Xəstə hansı vəziyyətdə olmalıdır?",
      options: ["Arxası üstə uzanmış", "Yarım oturaq", "Ayaqları bir qədər yuxarı olmaqla uzanmış"],
      correct: 1
    },
    {
      question: "Tibb bacısının sonrakı taktikası:",
      options: ["Ərazi üzrə poliklinika kardioloqunun müayinəsinə göndərmək və ya təcili yardım maşını ilə tez bir zaman xəstəxanaya çatdırmaq", "Xəstəni evdə saxlayıb, hər gün Analgin və Dimedrol vurmağı məsləhət vermək", "Xəstəni evdə saxlayıb, məsləhət vermək"],
      correct: 0
    }
  ]
},

// Məsələ 9
{
  condition: "Xəstə qadındır, 55 yaşı var. Kəskin baş ağrıları, ürəkbulanma, başgicəllənmə, qulaqlarda küy, göz önündə ulduz sayrışması şikayətləri var. Son illər vaxtaşırı baş ağrıları olmuş, lakin əhəmiyyət verməmiş, həkimə müraciət etməmişdir. Burundan qanaxma müşahidə olunub. Obyektiv olaraq vəziyyəti orta ağırdır, nəbz gərgin, 1 dəqiqədə 92, A/T 200/100 mm c.süt.",
  questions: [
    {
      question: "Nədən şübhələnirsiniz?",
      options: ["Anemiya", "Burun qanaxması", "Hipertonik kriz"],
      correct: 2
    },
    {
      question: "Xəstəyə yardım göstərərkən hansını etmək olmaz?",
      options: ["Ürək nahiyyəsinə zəli qoymaq", "Venadan qan buraxmaq", "Ayaqlarını isti vannaya qoymaq"],
      correct: 0
    },
    {
      question: "Hansını etmək daha məqsədəuyğundur?",
      options: ["Boyun arxasına xardal yaxması qoymaq", "Burundan qanaxma baş verməməsi üçün başı arxaya əymək", "Boyun arxasına buz qovuğu qoymaq"],
      correct: 0
    },
    {
      question: "Xəstənin vəziyyəti necə olmalıdır?",
      options: ["Arxası üstə uzanmış vəziyyət", "Yarım oturaq", "Sol tərəfi üstə uzanmış vəziyyət"],
      correct: 1
    },
    {
      question: "Tibb bacısının sonrakı taktikası necə olmalıdır?",
      options: ["Xəstəni terapevtin qəbuluna göndərmək", "Təcili yardım çağırmaq", "Xəstəyə yuxugətirici dərman preparatı təyin etmək"],
      correct: 1
    }
  ]
},

// Məsələ 10
{
  condition: "19 yaşlı xəstənin yüksək temperatur, diz, topuq, dirsək oynaqlarında ağrı şikayətləri var. Bir gün əvvəl qəflətən temperaturu 39°C-yə yüksəlmiş və oynaqları ağrımağa başlamışdır. Anamnezində 2 həftə əvvəl angina keçirdiyini söyləyir. Obyektiv olaraq vəziyyəti orta ağırdır, bədən temperaturu 39°C-dir. Diz oynağı nahiyəsində şişkinlik, qızartı, hərəkət zamanı ağrı müşahidə olunur. Nəbz 1 dəqiqədə 115, A/T 110/70 mm c.süt. Ağız boşluğunda kariyesli dişlər, badamcıqların böyüdüyü görünür.",
  questions: [
    {
      question: "Nədən şübhələnirsiniz?",
      options: ["Revmatoid artrit", "Artroz", "Hemorragik vaskulit"],
      correct: 0
    },
    {
      question: "Diz oynağına nə etmək olar?",
      options: ["Buz qovuğu", "İsidici kompres", "Xardal yaxması"],
      correct: 1
    },
    {
      question: "Qızdırmanı aşağı salmaq üçün nə etmək olar?",
      options: ["Bədənini bürümək", "Bədənini 40 dərəcəli su ilə silmək", "Xəstənin alnına soyuq kompres qoymaq"],
      correct: 2
    },
    {
      question: "Xəstəyə steroid preparatları necə vermək lazımdır?",
      options: ["Xüsusi sxem üzrə", "Gündə 3 dəfə yeməkdən əvvəl", "Həftədə 1 dəfə"],
      correct: 0
    },
    {
      question: "Tibb bacısının sonrakı taktikası necə olmalıdır?",
      options: ["Həkim-travmatoloqa yönləndirmək", "Həkim-revmatoloqa yönləndirmək", "Həkim-infeksionistə yönləndirmək"],
      correct: 1
    }
  ]
},

// Məsələ 11
{
  condition: "Ananın sözlərinə görə 5 yaşlı uşaq gecəni narahat yatır, ağzından su axır, anus dəliyi ətrafında qaşınma, göbək ətrafında ağrılar, ümumi narahatlıq hissi, iştahasızlıq müşahidə olunur. Obyektiv olaraq çəki itkisi, dəri örtüklərinin solğunluğu, anus dəliyi ətrafında ekzematoz zədələnmələr nəzərə çarpır. Sahə həkimi ümumi müayinədən sonra tibb bacısına anaya tövsiyələrini verməyi və anus dəliyindən yaxma götürmək üçün uşağı hazırlamaq qaydalarını öyrətməyi tapşırdı.",
  questions: [
    {
      question: "Hansı xəstəlikdən şübhələnmək olar?",
      options: ["Xolesistit", "Qastrit", "Enterebioz"],
      correct: 2
    },
    {
      question: "Tibb bacısı anaya hansı məsləhəti verə bilər?",
      options: ["Sanitar-gigiyenik qaydalara riayət etsin", "Uşağın qidasında yağların miqdarını artırsın", "Vitamin C qəbul etsin"],
      correct: 0
    },
    {
      question: "Anus dəliyindən yaxma necə götürülür?",
      options: ["Səhər yeməkdən sonra", "Axşam yatmazdan əvvəl", "Səhər, anus dəliyi yuyulmamış"],
      correct: 2
    },
    {
      question: "Helmintozlar zamanı bütün ailə üzvlərini müayinə etməyə ehtiyac varmı?",
      options: ["Mütləq müayinə aparılmalıdır", "Müayinəyə ehtiyac yoxdur", "Yalnız ana müayinə olunmalıdır"],
      correct: 0
    },
    {
      question: "Helmintoz diaqnozu təsdiq edilmiş uşaqlar uşaq müəssisəsinə gedə bilərmi?",
      options: ["Karantin elan edilməlidir", "Gedə bilər", "Xəstəxanada müalicə olunmalıdır"],
      correct: 1
    }
  ]
},

// Məsələ 12
{
  condition: "Ana 10 yaşlı uşağı ilə poliklinikaya müraciət edib. Uşaq ürək nahiyəsində ağrılar, ağırlıq hissi, tez yorulma, təngnəfəslik, iri oynaqlarda uçucu xarakter daşıyan ağrılardan şikayət edir. Anamnezdə ildə 4-5 dəfə yüksək temperaturla müşayiət olunan angina qeyd olunur. Obyektiv olaraq uşaqda süstlük, dəri örtüklərinin avazıması, oynaq ətrafında şişkinlik, xırda səpgilər müşahidə edilir. Temperatur 37.8°C dir. ÜDS 80, TS 21 dir. Müayinədən sonra həkim müalicə təyin edib və tibb bacısına Bisillin terapiyasını aparmağı tapşırıb.",
  questions: [
    {
      question: "Hansı xəstəlikdən şübhələnmək olar?",
      options: ["Helmintoz", "Revmatizm", "Qastrit"],
      correct: 1
    },
    {
      question: "Həkim gələnə qədər tibb bacısı nə etməlidir?",
      options: ["Xəstənin temperaturunu, nəbzini, tənəffüsünü saymalı", "Xəstəyə müalicə təyin etməlidir", "Uşağın boğazını silməlidir"],
      correct: 0
    },
    {
      question: "Bisillin-5-in vurulma qaydası necədir?",
      options: ["8 həftə, həftədə 1 dəfə", "Günasını, 2 həftə ərzində", "İlboyu, isti aylar istisna olmaqla, əzələdaxili, ayda bir dəfə"],
      correct: 2
    },
    {
      question: "Bədən temperaturu 37.8°C olduqda, fiziki üsullarla endirməyə ehtiyac varmı?",
      options: ["Bəli", "Xeyr", "Litik qarışıq vurmaq lazımdır"],
      correct: 1
    },
    {
      question: "Bisillin-5 hansı nahiyəyə və neçə dərəcəli bucaq altında vurulmalıdır?",
      options: ["Sağrı əzələsinin yuxarı xarici 1/4 kvadratına, 90 dərəcəli bucaq altında", "Sağrı əzələsinin yuxarı daxili 1/4 kvadratına, 90 dərəcəli bucaq altında", "Sağrı əzələsinin yuxarı xarici 1/4 kvadratına, 45 dərəcəli bucaq altında"],
      correct: 0
    }
  ]
},

// Məsələ 13
{
  condition: "Ana 5 yaşlı oğlu ilə poliklinikaya müraciət edib. Ana uşağın tez yorulmasından, süstlükdən, halsızlıqdan şikayət edir. İştahasının yüksək olmağına baxmayaraq, çəki azlığı müşahidə olunur, çox miqdarda su qəbul edir və tez-tez sidiyə gedir, gecə və gündüz enurez qeyd olunur. Obyektiv müayinə zamanı fiziki və zehni qabiliyyətin zəifləməsi, dəri örtüklərinin quruluğu, polidipsiya, polifagiya, poliuriya aşkar olunmuşdur. Aparılan müayinələrdən sonra həkim xəstəyə insulin təyin edir.",
  questions: [
    {
      question: "Hansı xəstəlikdən şübhələnmək olar?",
      options: ["Revmatizm", "Şəkərli diabet", "Qlomerulonefrit"],
      correct: 1
    },
    {
      question: "Anaya nə tövsiyə etmək lazımdır?",
      options: ["Tez bir zamanda həkimə müraciət etsin", "Həkimə müraciət etməyə ehtiyac yoxdur", "Nəcisin ümumi analizini versin"],
      correct: 0
    },
    {
      question: "İnsulinin vurulma qaydası necədir?",
      options: ["Həkimin təyinatına uyğun, birdəfəlik şprislə, hər dəfə yeri dəyişməklə dəri altına yeridilir", "Birdəfəlik şprislə əzələdaxili yeridilir", "Birdəfəlik şprislə dəriçinə yeridilir"],
      correct: 0
    },
    {
      question: "Pəhriz təyin etmək vacibdirmi?",
      options: ["Xeyr. Pəhrizə ehtiyac yoxdur", "Bəli. Karbohidratların miqdarı qida rasionunda azaldılmalıdır", "Qida rasionundan yalnız zülallar çıxarılır"],
      correct: 1
    },
    {
      question: "Sidikdə şəkərin təyini üçün sidik necə yığılmalıdır?",
      options: ["Birdəfəlik sidik müayinə olunur", "Gecə sidiyi müayinə olunur", "Sutkalıq sidik yığılaraq, ümumi kütlədən 1 ml götürülərək müayinəyə göndərilir"],
      correct: 2
    }
  ]
},

// Məsələ 14
{
  condition: "Ana 4 yaşlı oğlan uşağı ilə həkimə müraciət edib. Uşaqda ümumi zəiflik, iştahasızlıq, baş ağrıları, çeynəmənin ağrılı olması, qulaqarxası nahiyədə şişkinliyin olması müşahidə olunur. Uşaq 3000 q çəki, 52 sm boyla vaxtında doğulub. Doğulan kimi qışqırıb. Bir yaşına kimi təbii qidalanıb. Fiziki və psixomotor inkişafı yaşına uyğundur. Profilaktik peyvəndlərdən ana imtina edib. Bağçaya gedir. 2 gündür xəstədir. Obyektiv olaraq uşaqda dəri və selikli qişalar təmizdir, solğun rəngdədir. Temperatur 37.8°C-dir. Dili ağ ərplə örtülüb. Əsnəyi təmizdir. Hər iki tərəfdə qulaqarxası nahiyədə şişkinlik var. Şişkinlik yumşaqdır, kənarları hiss olunur. Həmin nahiyədə dərinin rəngi dəyişməyib. Sidik və nəcis ifrazı normaldır. Müayinədən sonra həkim tibb bacısına anaya qulluq qaydaları haqqında məlumat verməyi tapşırır.",
  questions: [
    {
      question: "Uşaqda hansı xəstəlik ola bilər?",
      options: ["Qızılca", "Su çiçəyi", "Epidemik parotit"],
      correct: 2
    },
    {
      question: "Tibb bacısı nə etməlidir?",
      options: ["Həkimə çağırış yazmalıdır", "Uşağa müalicə təyin etməlidir", "Uşağı qanın ümumi analizinə göndərməlidir"],
      correct: 0
    },
    {
      question: "Tibb bacısının anaya məsləhəti nə ola bilər?",
      options: ["Uşağı bağçaya göndərsin", "Həkimin müayinəsini gözləsin, uşağı evdə saxlasın", "Uşağın qidasında yağların miqdarını artırsın"],
      correct: 1
    },
    {
      question: "Qulaqarxası şişkinliyi aradan götürmək üçün yod və ya spirt tərkibli kompreslərin qoyulmağı məsləhətdirmi?",
      options: ["Bəli", "Xeyr", "Spirtli kompres qoymaq lazımdır"],
      correct: 1
    },
    {
      question: "Bu uşaq təlim tərbiyə ocaqlarına gedə bilərmi?",
      options: ["Xeyr, karantin elan edilməlidir", "Bəli, bu xəstəlik yoluxucu xəstəlik deyil", "Uşağın hərarəti yüksək olmasa gedə bilər"],
      correct: 0
    }
  ]
},

// Məsələ 15
{
  condition: "Ana 6 yaşlı qız uşağı ilə quru öskürək, iştahasızlıq, dəridə səpgilər, temperaturun yüksəlməsi şikayətləri ilə həkimə müraciət edib. Uşaq 2900 q çəki, 49 sm boyla vaxtında doğulmuşdur. Anamnezində tez-tez KRVİ yoluxmalar qeyd olunur. Ana profilaktik peyvəndlərdən imtina edib. Bir yaşa qədər heç bir infeksion xəstəlik keçirməmişdir. Uşaq məktəbə gedir. Dünən xəstələnib. Ananın sözünə görə 15 gün əvvəl məktəbə gedən qardaşında da belə səpgilər olmuşdur. Obyektiv müayinə zamanı uşağın temperaturu normaldır. Üzündə, bədənində və ətraflarda xırda papulyoz çəhrayı səpgilər var. Ənsə limfa vəziləri əllənir, ağrısızdır. Ağız boşluğunun selikli qişası təmizdir, əsnək bir qədər hiperemikdir. Həkimin tapşırığı ilə tibb bacısı anaya xəstəyə qulluq haqqında məlumat verməlidir.",
  questions: [
    {
      question: "Uşaqda hansı xəstəlik ola bilər?",
      options: ["Su çiçəyi", "Məxmərək", "Angina"],
      correct: 1
    },
    {
      question: "Tibb bacısı nə etməlidir?",
      options: ["Həkimə çağırış yazmalıdır", "Uşağa müalicə təyin etməlidir", "Limfa vəzilərini masaj etməlidir"],
      correct: 0
    },
    {
      question: "Tibb bacısının anaya məsləhəti nə ola bilər?",
      options: ["Uşağı məktəbə göndərməsin və həkimin gəlməyini gözləsin", "Uşağa müalicə təyin etməlidir", "Uşağa pəhriz təyin etməlidir"],
      correct: 0
    },
    {
      question: "Ənsənin limfatik düyünlərinin üzərinə yod və ya spirt tərkibli kompres qoymaq məsləhətdirmi?",
      options: ["Spirt tərkibli kompres qoymaq lazımdır", "Bəli, yod setkası mütləq çəkilməlidir", "Xeyr, limfatik vəzilər sağalma dövründə sorularaq sağalır"],
      correct: 2
    },
    {
      question: "Məxmərək diaqnozu qoyulmuş xəstə uşaq müəssisəsinə gedə bilərmi?",
      options: ["Bəli, bu xəstəlik yoluxucu deyil", "Xeyr, karantin təyin olunur", "Bədən hərarəti normal olduğu halda gedə bilər"],
      correct: 1
    }
  ]
},

// Məsələ 16
{
  condition: "Tibb bacısı 5 aylıq uşağa patronaja gedib. Uşaq birinci hamiləlikdəndir. Hamiləlik və doğuş normal keçmişdir. Doğularkən çəkisi 3000 qr, boyu 51 sm olmuşdur. Ana südü ilə qidalanır. Həkimin müayinəsində olmamışdır. Ana uşağın narahatlığından, yuxusunun pis olmasından, yuxuda və döşlə qidalanan zaman çox tərləməsindən, tez-tez diksinməsindən şikayət edir. Obyektiv müayinə zamanı uşağın vəziyyəti kafidir. Şaquli vəziyyətdə tutduqda başını yaxşı saxlamır, ayaqlarını dirəmir. Narahatdır, ənsə nahiyyəsində saçı zolaq şəklində tökülüb. Böyük və kiçik əmgəklər açıqdır. Dərisi və görünən selikli qişalar təmiz və solğundur. Sidik və nəcis ifrazı normaldır.",
  questions: [
    {
      question: "Uşaqda hansı xəstəlik ola bilər?",
      options: ["Pnevmoniya", "Raxit", "Revmatizm"],
      correct: 1
    },
    {
      question: "Tibb bacısı nə etməlidir?",
      options: ["Sahə həkiminə məlumat verməli, ananı həkimin müayinəsi üçün poliklinikaya dəvət etdirməlidir", "Evdə özü müalicə təyin etməlidir", "Uşağa pəhriz təyin etməlidir"],
      correct: 0
    },
    {
      question: "Tibb bacısının anaya məsləhəti nə ola bilər?",
      options: ["Uşağı açıq havada gəzdirməli, həkimin təyinatına riayət etməli, meyvə-tərəvəz şirələri verməsini məsləhət görməlidir", "Uşağı evdə saxlamaq, yalnız süd qarışıqları ilə qidalandırmaq", "Uşağı saat 12.00-16.00 arasında günün altında saxlamalıdır"],
      correct: 0
    },
    {
      question: "Raxit diaqnozu qoyulmuş uşaq profilaktik peyvəndlərini almalıdırmı?",
      options: ["Raxit xəstəliyi zamanı uşağa yalnız canlı vaksinlər vurmaq olar", "Xeyr, peyvənd aparmaq olmaz", "Bəli, Raxit xəstəliyi profilaktik peyvəndlərin aparılması üçün əks göstəriş deyil"],
      correct: 2
    },
    {
      question: "Günorta, saat 12.00-16.00 dək, uşağı havaya çıxarmaq məsləhətdirmi?",
      options: ["Bəli, olar", "Xeyr, bu saatlarda yüksək radiasiya olduğundan uşağı havaya çıxarmaq olmaz", "Uşaq səhərdən axşama kimi günün altında olmalıdır"],
      correct: 1
    }
  ]
},

// Məsələ 17
{
  condition: "Poliklinikaya 12 aylıq uşaq valideyni ilə Milli Peyvənd təqviminə əsasən peyvənd olunmaq üçün dəvət olunmuşdur. Sahə həkimi tərəfindən aparılan müayinədən sonra uşağın sağlam olduğu müəyyən edildi. İmmunlaşma otağının xüsusi hazırlıq keçmiş tibb bacısı anaya vurulacaq peyvənd haqqında məlumat verdi. Bu peyvəndin uşağı hansı xəstəliklərdən qoruduğu və peyvənddən sonra baş verə biləcək reaksiyalar haqqında ana məlumatlandırıldı.",
  questions: [
    {
      question: "12 aylıq uşaq hansı vaksini almalıdır?",
      options: ["QPM", "BCG", "OPV"],
      correct: 0
    },
    {
      question: "Bu vaksin uşağı hansı xəstəlikdən qoruyur?",
      options: ["Polimielit, Difteriya", "Vərəm, Difteriya, Su çiçəyi", "Qızılca, Parotit, Məxmərək"],
      correct: 2
    },
    {
      question: "Vaksindən sonra uşaqda hansı immunitet formalaşır?",
      options: ["Süni passiv", "Süni aktiv", "Təbii aktiv"],
      correct: 1
    },
    {
      question: "Bu vaksinlə yanaşı uşağa hansı vitamin verilməlidir?",
      options: ["Vitamin A", "Vitamin C", "Vitamin B"],
      correct: 0
    },
    {
      question: "Bu vaksin hansı temperaturda saxlanılmalıdır?",
      options: ["0°C - +12°C", "+2°C - +8°C", "+3°C - +10°C"],
      correct: 1
    }
  ]
},

// Məsələ 18
{
  condition: "Tibb bacısı raxit diaqnozu ilə müalicə alan 11 aylıq uşağa patronaja gedib. Uşaq süni qidalanır. Temperatur 36.6°C-dir. Obyektiv müayinə edərkən uşaq ağladı və bu zaman qəflətən xırtıltılı nəfəsalma fonunda tənəffüsün bir neçə saniyəlik dayanması baş verdi. Uşağın rəngi əvvəl solğunlaşdı, sonra isə sianozlaşdı. Bir neçə dəqiqəyə tutma dərin səsli nəfəsalma ilə qurtardı və uşaq yenidən ağlamağa başladı.",
  questions: [
    {
      question: "Uşaqda nə baş vermişdir?",
      options: ["Spazmofiliya, larinqospazm (səs yarığının spazmi)", "Göy öskürək", "Pnevmoniya"],
      correct: 0
    },
    {
      question: "Tibb bacısı hansı taktikanı seçməlidir?",
      options: ["Xəstəni böyrü üstə uzadaraq, hər tərəfinə istiqac qoymalıdır", "Xəstəni imalə etməlidir", "Xəstəni düz səth yerə uzatmaq, təmiz hava axını ilə təmin etmək, sakitlik vermək və venadaxili kalsium qlükonat yeritməlidir"],
      correct: 2
    },
    {
      question: "Xəstədə bu vəziyyət hansı səbəbdən yarana bilər?",
      options: ["Aspirasion sindrom", "Raxitin müalicəsinin düzgün getməməsi", "Pnevmoniyanın ağırlaşması"],
      correct: 1
    },
    {
      question: "Xəstədə sianozun yaranma səbəbini izah edin",
      options: ["Hipertansiya", "Hipertermiya", "Hipoksiya"],
      correct: 2
    },
    {
      question: "Bu vəziyyətdə xəstəni təmiz hava axını ilə təmin etmək mütləqdirmi?",
      options: ["Bəli", "Xeyr", "Qəti qadağandır"],
      correct: 0
    }
  ]
},

// Məsələ 19
{
  condition: "Uşağın 6 yaşı var. Uşaq 3200 q çəki, 50 sm boyla vaxtında doğulub. Bir yaşa qədər təbii qidalanmışdır. Profilaktik peyvəndləri vaxtında almışdır. 3 yaşından bağçaya gedir. Heç bir infeksion xəstəlik keçirməyib. Məktəbə getməyə hazırlaşır. Bağcanın tibb bacısı həkimin müayinəsinə hazırlıq məqsədilə uşağın antropometriyasını aparmışdır. Sahə həkimi müayinədən sonra Milli Peyvənd təqviminə uyğun QPM peyvəndinin aparılması üçün uşağı vaksin otağına göndərir.",
  questions: [
    {
      question: "Normada uşağın çəkisi nə qədər olmalıdır?",
      options: ["22 kq", "30 kq", "35 kq"],
      correct: 0
    },
    {
      question: "Boyu nə qədər olmalıdır?",
      options: ["80 sm", "112 sm", "120 sm"],
      correct: 1
    },
    {
      question: "6 yaşında uşağa hansı peyvəndlər olunmalıdır?",
      options: ["OPV", "PK", "DT, QPM"],
      correct: 2
    },
    {
      question: "QPM vaksini hansı nahiyəyə olunmalıdır?",
      options: ["Bazunun bayır orta nahiyəsinə dərialtı vurulur", "Budun ön lateral nahiyəsinə vurulur", "Saidin içəri səthinə dəriicinə vurulur"],
      correct: 0
    },
    {
      question: "QPM vaksini uşağı hansı xəstəlikdən qoruyur?",
      options: ["Qızılca, Parotit, Məxmərək", "Göyöskürək, Difteriya, Poliomielit", "Poliomielit, məxmərək"],
      correct: 0
    }
  ]
},

// Məsələ 20
{
  condition: "Uşaq 7 günlükdür, 1-ci hamiləlikdəndir. Hamiləlik və doğuş normal keçmişdir. Doğularkən çəkisi 2800 q, boyu 48 sm olmuşdur. Ana südü ilə qidalanır. Göbək qalığı 4-cü gün düşmüşdür. Həmin gün doğum evindən evə buraxılmışdır. Uşağın göbəyində şişkinlik və ifrazat olduğu üçün tibb bacısı hər gün patronaja gedir. Ana uşağın pis ammasından və narahat olmasından şikayət edir. Obyektiv müayinə zamanı uşağın temperaturu 37.8°C-dir. Göbəyi şişkindir, göbəkətrafı dəri qızarıb, ağrılıdır. Döşü tutmur. Dəri və görünən selikli qişalar təmizdir, sidik və nəcis ifrazı normaldır.",
  questions: [
    {
      question: "Hansı xəstəlikdən şübhələnmək olar?",
      options: ["Omfolit", "Qarında köp var", "Otit"],
      correct: 0
    },
    {
      question: "Xəstəliyə səbəb nədir?",
      options: ["Çox ağlamaq", "Göbək yarasının infeksiyalaşması", "Uşağın təbii qidalandırılması"],
      correct: 1
    },
    {
      question: "Tibb bacısı nə etməlidir?",
      options: ["Uşağın göbəyini dezinfeksiyaedici məhlullarla işləyir, steril salfet qoyur. Həkimə məlumat verməlidir", "Tibb bacısı anaya tövsiyə edir ki, uşağa şüyüd suyu versin, qarnını masaj etsin və isti saxlasın", "Qarnını masaj etməlidir"],
      correct: 0
    },
    {
      question: "Xəstəliyin ağırlaşması nə ola bilər?",
      options: ["Pnevmoniya", "Kəskin qarın", "Sepsis"],
      correct: 2
    },
    {
      question: "Uşağa BCG və OPV peyvəndlərini etmək olarmı?",
      options: ["Bəli, profilaktik peyvənd təqviminə uyğun peyvəndlər aparılmalıdır", "Xeyr, temperatur olduğu üçün peyvənd aparmaq əks göstərişdir", "Yalnız peroral OPV vaksini vermək olar"],
      correct: 1
    }
  ]
},

// Məsələ 21
{
  condition: "Uşağın 6 yaşı var. Profilaktik peyvəndləri vaxtında almışdır. 3 yaşından bağçaya gedir. Heç bir infeksion xəstəlik keçirməmişdir. Tez-tez angina ilə xəstələnir. Ana uşaqda dünəndən temperaturun yüksəlməsi, iştahasızlıq, halsızlıq, baş ağrılarının olmasından şikayət edir. Bu gün səhərdən dəridə səpgilərin olduğunu görmüşdür. Temperatur 38.7°C-dir. Uşaq halsızdır. Dəridə, xüsusilə büküşlərdə, qasıq və qoltuqaltı nahiyələrdə xırda nöqtəvari səpgilər vardır. Ağızatrafı avazımızdır. Dil ağ ərplə örtülüb. Əsnəyi hiperemikdir. Sidik ifrazı normaldır.",
  questions: [
    {
      question: "Tibb bacısı hansı xəstəlikdən şübhələnə bilər?",
      options: ["Epidemik parotit", "Skarlatina", "Raxit"],
      correct: 1
    },
    {
      question: "Xəstəliyin törədicisi nədir?",
      options: ["Viruslar", "β-hemolitik streptokoklar", "D vitaminin çatmamazlığı"],
      correct: 1
    },
    {
      question: "Tibb bacısı nə etməlidir?",
      options: ["Uşağa vitaminlər təyin etməlidir", "Uşağı müayinə etməlidir", "Həkimə məlumat verməlidir"],
      correct: 2
    },
    {
      question: "Bu xəstəliyə qarşı hansı peyvənd aparılır?",
      options: ["PK", "GDT", "Bu xəstəliyə qarşı peyvənd yoxdur"],
      correct: 2
    },
    {
      question: "Xəstəlikdən sonra hansı fəsadlar ola bilər?",
      options: ["Qlomerulonefrit", "Pnevmoniya", "Difteriya"],
      correct: 0
    }
  ]
},

// Məsələ 22
{
  condition: "Ana 2 yaşlı uşağının üç gündür ki xəstələndiyini söyləyir. Onun sözünə görə uşaqda gündə 8-10 dəfə selikli nəcis ifrazı olur. Tez-tez gücəmələr və qarında sancı uşağı narahat edir. 2 dəfə qusma olub. Dünəndən halsızdır, yemək yemir. Obyektiv müayinə zamanı dəri örtükləri quru və solğundur. Dil ərplidir. Qarnı yumşaq, ağrılıdır. Nəcisi selikli-qanlıdır. Temperatur 37.7°C-dir.",
  questions: [
    {
      question: "Uşaqda hansı xəstəlik ola bilər?",
      options: ["Difteriya", "Dizenteriya", "Revmatizm"],
      correct: 1
    },
    {
      question: "Bu necə xəstəlikdir?",
      options: ["Yoluxucudur", "Xroniki xəstəlikdir", "İrsi xəstəlikdir"],
      correct: 0
    },
    {
      question: "Tibb bacısı nə etməlidir?",
      options: ["Uşağı xəstəxanaya göndərməlidir", "Uşağı imalə etməlidir", "Uşağa antibiotik təyin etməlidir"],
      correct: 0
    },
    {
      question: "Xəstəlik idarə olunandırımı?",
      options: ["Bəli, GDT peyvəndi ilə idarə olunur", "Xeyr, xəstəliyə qarşı peyvənd olmadığı üçün idarə olunmur", "Bəzi hallarda idarə olunur"],
      correct: 1
    },
    {
      question: "Xəstəliyə qarşı peyvənd olunurmu?",
      options: ["PK peyvəndi ilə", "GDT peyvəndi ilə", "Xeyr, bu xəstəliyin peyvəndi yoxdur"],
      correct: 2
    }
  ]
},

// Məsələ 23
{
  condition: "Uşağın 6 yaşı var. Profilaktik peyvəndləri peyvənd təqviminə uyğun almışdır. Məktəbə gedir. Dünən xəstələnib. Ananın sözünə görə uşağın başının tüklü hissəsində bir neçə ədəd ağcaqanad sancmasını xatırladan səpgi olub. Bu gün səhər bədənində də həmin səpgilərdən olduğunu görüb. Müayinə zamanı bədən temperaturu 36.7°C-dir. Aktivdir. Başın tüklü hissəsində, üzündə, bədənində və ətraflarında ağcaqanad sancmasını xatırladan papulyoz səpgilər var. Səpgilər polimorfdur. Kəskin qaşınma hiss olunur. Dili ərplidir, əsnəyi sakitdir.",
  questions: [
    {
      question: "Hansı xəstəlikdən şübhələnirsiniz?",
      options: ["Su çiçəyi", "Dizenteriya", "Göy öskürək"],
      correct: 0
    },
    {
      question: "Xəstəliyin törədicisi nədir?",
      options: ["Qida ilə əlaqədardır", "Virusdur", "β-hemolitik streptokoklar"],
      correct: 1
    },
    {
      question: "Xəstəlikdə neçə gün karantin təyin olunur?",
      options: ["7 gün", "21 gün", "Karantin təyin olunmur"],
      correct: 1
    },
    {
      question: "Tibb bacısı nə etməlidir?",
      options: ["Uşağa antibiotik təyin etməlidir", "Anaya uşağın qidalanması ilə əlaqədar məsləhət verir", "Həkimə çağırış yazmalıdır. Ananı xəbərdar etməlidir ki, uşağı məktəbə aparmasın, həkimin müayinəsini gözləsin"],
      correct: 2
    },
    {
      question: "Xəstəlikdən sonra necə immunitet yaranır?",
      options: ["Təbii aktiv immunitet yaranır", "İmmunitet yaranmır", "Xəstəlik xroniki xarakter daşıyır"],
      correct: 0
    }
  ]
},

// Məsələ 24
{
  condition: "Şəkərli diabeti olan 52 yaşlı xəstə insulin inyeksiyasından sonra qida qəbul etməyib. Bir azdan xəstədə zəiflik, aclıq hissi, tərləmə və titrəmə baş verib.",
  questions: [
    {
      question: "Xəstədə hansı vəziyyətdir?",
      options: ["Hipertoniya", "Hiperqlikemiya", "Hipoqlikemiya"],
      correct: 2
    },
    {
      question: "Xəstənin bu vəziyyətə düşməsinin səbəbi nədir?",
      options: ["İnyeksiyasından sonra qida qəbul etməməsi", "Xəstə stress keçirib", "Xəstə şəkər qəbul edib"],
      correct: 0
    },
    {
      question: "Tibb bacısı xəstəyə hansı yardımı etməlidir?",
      options: ["Vena daxilinə 40%-li 40 ml qlükoza vurmalıdır", "Xəstəyə 2-3 parça qənd, şirin çay verməlidir", "Xəstəyə kaptopril verməlidir"],
      correct: 1
    },
    {
      question: "Xəstə huşunu itirərsə tibb bacısı nə etməlidir?",
      options: ["Həkim gələnə qədər 40%-li 40 ml qlükoza məhlulu vena daxilinə vurmaq üçün hazırlamalıdır", "Xəstənin aşağı ətrafını bir qədər yuxarı qaldırmalıdır", "Xəstənin arterial təzyiqi və nəbzinə nəzarət etməlidir"],
      correct: 0
    },
    {
      question: "Şəkərli diabet xəstəliyinin ağırlaşması nə ola bilər?",
      options: ["Ətraflarda ödem", "Ətrafların qanqrenası", "Miokard infarktı"],
      correct: 1
    }
  ]
},

// Məsələ 25
{
  condition: "28 yaşlı xəstənin sağrı əzələsinə antibiotik vurulduqdan sonra xəstədə narahatlıq, başgicəllənmə, sinədə sıxılma hissi, arterial təzyiqin enməsi, taxikardiya baş verib, xəstə huşunu itirərək yıxılıb.",
  questions: [
    {
      question: "Xəstədə hansı vəziyyətdir?",
      options: ["Hipotoniya", "Bayılma", "Anafilaktik şok"],
      correct: 2
    },
    {
      question: "Tibb bacısının taktikası:",
      options: ["İnyeksiya yerinə 0,1%-li 0,5 ml adrenalin yeridilməlidir", "İnyeksiya yerinə 0,5%-li 2,0 ml novokain yeridilməlidir", "İnyeksiya yerinə 0,9%-li 5,0 ml fizioloji məhlul yeridilməlidir"],
      correct: 0
    },
    {
      question: "Xəstəyə hansı vəziyyət verilməlidir?",
      options: ["Üfüqi", "Oturaq", "Yarım oturaq"],
      correct: 0
    },
    {
      question: "Xəstədə ürək və tənəffüs dayanarsa, tibb bacısı nə etməlidir?",
      options: ["Xəstəyə oksigen verməlidir", "Ürək-ağciyar reanimasiyasını başlamalıdır", "Xəstəyə naşatır spirti iylətməlidir"],
      correct: 1
    },
    {
      question: "İlk yardım zamanı bu preparatlardan hansı effektlidir?",
      options: ["Platifillin, atropin, no-şpa", "Kardiamin, mezaton, analgin", "Adrenalin, prednizolon, dimedrol"],
      correct: 2
    }
  ]
},

// Məsələ 26
{
  condition: "Stasionarda ürəyin işemik xəstəliyindən müalicə olunan 55 yaşlı artıq çəkili xəstə gecə tibb bacısını çağırır. Xəstəni döş qəfəsində olan, sol qola vuran, sıxıcı xarakterli ağrılar və döş qəfəsində sıxılma hissi narahat edir. Xəstənin arterial qan təzyiqi 130/80 mm c.süt. Nəbzi tezləşmişdir.",
  questions: [
    {
      question: "Xəstənin vəziyyətini müəyyənləşdirin:",
      options: ["Nevrotik hal", "Stenokardiya", "Qabırğaarası nevralgiya"],
      correct: 1
    },
    {
      question: "Tibb bacısı ilk yardım zamanı nə etməlidir?",
      options: ["Xəstəni sakitləşdirib, təmiz hava gəlməsini təmin etməlidir, dərhal həkim çağırmalıdır", "Valokordin 25 damcı verməli və əzələ daxilinə dibazol vurmalıdır", "Vena daxilinə prednizolon vurmalıdır"],
      correct: 0
    },
    {
      question: "Xəstəliyin yaranmasına hansı risk faktorları təsir edir?",
      options: ["Çoxlu maye qəbulu", "Piylənmə, stres, siqaret", "Oturaq həyat tərzi"],
      correct: 1
    },
    {
      question: "İlk yardım zamanı xəstəyə hansı preparatları vermək məqsədəuyğundur?",
      options: ["Spazmalqon, baralgin", "Diklofenak, analgin", "Nitroqliserin, aspirin"],
      correct: 2
    },
    {
      question: "Xəstə qidalanmasında nəyi azaltmalıdır?",
      options: ["Yağlar və karbohidratları", "Meyvə və tərəvəzləri", "Zülalları"],
      correct: 0
    }
  ]
},

// Məsələ 27
{
  condition: "Qonşuda 50 yaşlı qadın stress keçirdikdən sonra ənsə nahiyəsində güclü baş ağrıları, ürəkbulanma, göz önündə qara nöqtələr olmasından şikayətlənir. Xəstənin vəziyyəti ağırdır, oyanıqdır, üzü qızarmışdır. Xəstənin təzyiqi 160/94 mm c.sut, nəbzi 1 dəqiqədə 104 vurğudur.",
  questions: [
    {
      question: "Bu hansı xəstəlik ola bilər?",
      options: ["Arterial hipertenziya", "Miqren", "Beyin şişi"],
      correct: 0
    },
    {
      question: "Tibb bacısı ilk yardım zamanı nə etməlidir?",
      options: ["Dərhal həkim çağırıb, arterial təzyiqi ölçməlidir", "Xəstəyə üfüqi vəziyyət verməlidir", "Xəstənin alnına soyuq kompres qoymalıdır"],
      correct: 0
    },
    {
      question: "Xəstəyə nə məsləhət görərdiniz?",
      options: ["Baş ağrısı dərmanı içmək", "Ayaqlarını isti suya qoymaq", "Maye qəbul etmək"],
      correct: 1
    },
    {
      question: "Xəstə qidalanmasında nəyi azaltmalıdır?",
      options: ["Yağ və karbohidratla zəngin qidaları", "Tərkibində kalium olan qidaları", "Duz və suyu"],
      correct: 2
    },
    {
      question: "Bu xəstəlik hansı ağırlaşma verə bilər?",
      options: ["Plevrit, nevrosteniya", "Miokard infarktı, insult", "Aritmiya, kollaps"],
      correct: 1
    }
  ]
},

// Məsələ 28
{
  condition: "Təcili yardım xəstəxanasının qəbul şöbəsinə 45 yaşlı xəstə daxil olub. O, fiziki gərginlikdən sonra, döş sümüyünün arxasında bütün döş qəfəsinə yayılan göynədici ağrıdan şikayət edir. Ağrılar iki saata yaxındır ki, davam edir. Validol, korvalol qəbul etsə də təsiri olmayıb. Baxış zamanı xəstənin vəziyyətinin ağır, çox oyanıq, dəri örtüyünün solğun və tər damcıları ilə örtülməsi, A/T 110/70 mm c.sut, nəbzin 1 dəqiqədə təxminən 106 vurğu və aritmik olması müəyyənləşdirilib.",
  questions: [
    {
      question: "Bu hansı xəstəlik ola bilər?",
      options: ["Stenokardiya", "Miokard infarktı", "Quru plevrit"],
      correct: 1
    },
    {
      question: "Tibb bacısı ilk yardım zamanı nə etməlidir?",
      options: ["Xəstəyə nitroqliserin dil altına və aspirin verməlidir, həkim çağırmalıdır", "Xəstənin ayağına isti vanna etməlidir", "Xəstəyə analgin və dimedrol vurmalıdır"],
      correct: 0
    },
    {
      question: "Bu xəstəliklərin yaranma səbəbləri:",
      options: ["Soyuqlama, kəskin respirator xəstəliklər", "Tromboflebit", "Tac damarların daralması (spazması) və trombla tutulması"],
      correct: 2
    },
    {
      question: "Bu xəstəliklərin risk faktorları hansılardır?",
      options: ["Hipertenziya, Şəkərli diabet", "Xroniki bronxitin olması", "Xroniki qlomerulonefrit"],
      correct: 0
    },
    {
      question: "Bu xəstəyə nitroqliserin neçə dəfə verilə bilər?",
      options: ["5-6 dəfə", "4-5 dəfə", "2-3 dəfə, həkim gələnə qədər"],
      correct: 2
    }
  ]
},

// Məsələ 29
{
  condition: "Qəbul şöbəsinə gətirilən 62 yaşlı qadın yağlı qida qəbulundan sonra sağ qabırğaaltı nahiyədə olan, sağ kürəyə və çiyinə vuran güclü ağrıdan, vaxtaşırı öd qısımdan, ağızda quruluq və acılıq hissindən şikayətlənir. Xəstənin vəziyyəti orta ağırdır, bədən temperaturu 36.6°C və A/T 130/80 mm c.sut, nəbzin 1 dəqiqədə 90 vurğudur.",
  questions: [
    {
      question: "Hansı xəstəlikdən şübhələnirsiniz?",
      options: ["Xolesistit", "Appendisit", "Pankreatit"],
      correct: 0
    },
    {
      question: "Tibb bacısı qısma zamanı hansı yardım göstərməlidir?",
      options: ["Epiqastral nahiyəyə buz qovuğu qoymalıdır", "Sağ qabırğaaltı nahiyəyə soyuq kompress qoymalıdır", "Qısma zamanı xəstənin başını yana çevirməlidir"],
      correct: 2
    },
    {
      question: "Bu xəstəlik zamanı hansı müayinələr aparıla bilər?",
      options: ["Endoskopik müayinə", "Qarın boşluğu üzvlərinin ultrasəs müayinəsi", "Rentgenoloji müayinə"],
      correct: 1
    },
    {
      question: "Bu xəstəliyin müalicəsində hansı preparatlar daha effektlidir?",
      options: ["No-şpa, baralgin, serukal", "Suprastin, adrenalin, vitamin C", "Kontrikal, mezim-forte, ampioks"],
      correct: 0
    },
    {
      question: "Pəhriz zamanı hansı qidalar məhdudlaşdırılmalıdır?",
      options: ["Meyvə və tərəvəzlər", "Yağlı və qızardılmış qidalar", "Duzlu qidalar"],
      correct: 1
    }
  ]
},

// Məsələ 30
{
  condition: "Xəstəxananın qəbul şöbəsinə 25 yaşlı sürücü daxil olub. 5 saat əvvəl yolda qida qəbulundan sonra özünü pis hiss edib. Baxış zamanı epiqastral nahiyyədə ağrı, ürəkbulanma, qusma, dəri örtüyünün solğun və soyuq tər damcıları ilə örtülməsi, A/T 110/70 mm c.sut, nəbzin 1 dəqiqədə 85 vurğu olması müəyyənləşdirilib.",
  questions: [
    {
      question: "Hansı xəstəlikdən şübhələnmək olar?",
      options: ["Miokard infarktının abdominal forması", "Kəskin qida zəhərlənməsi", "Kəskin pielonefrit"],
      correct: 1
    },
    {
      question: "Tibb bacısının taktikası:",
      options: ["Xəstəyə qusuntu kütləsini yığmaq üçün qab və dəsmal verməlidir", "Xəstənin ayağına isti vanna etməlidir", "Epiqastral nahiyyəyə soyuq kompres qoymalıdır"],
      correct: 0
    },
    {
      question: "Dəqiq diaqnoz qoymaq üçün hansı müayinə aparılmalıdır?",
      options: ["Qanın ümumi müayinəsi", "Seroloji müayinə", "Qusuntu kütləsinin bakterioloji müayinəsi"],
      correct: 2
    },
    {
      question: "Bu halda həkimin nəzarəti ilə hansı tədbir həyata keçirilməlidir?",
      options: ["Xəstənin mədəini yumaq", "Xəstəyə çoxlu maye vermək", "Fibroqastroduodenoskopiya"],
      correct: 0
    },
    {
      question: "Mədəni yumaq üçün nə qədər maye götürülür?",
      options: ["5 litr", "10 litr", "1 litr"],
      correct: 1
    }
  ]
},

// Məsələ 31
{
  condition: "53 yaşlı kişi gecə yarısı amblotora müraciət edib. Döş qəfəsi arxasında ağrı, yanğı hissiyyatı, qusma, qusmadan sonra qıcqırma olub. 20 ildir tütün qəbul edir.",
  questions: [
    {
      question: "Hansı xəstəlikdən şübhələnirsiz?",
      options: ["Ürəyin işemik xəstəliyi", "Qida borusunun xorası", "Diafraqmanın yırtığı"],
      correct: 1
    },
    {
      question: "Həkim gələnə qədər tibb bacısı nə etməlidir?",
      options: ["Çoxlu soyuq su qəbul etdirməli", "Təcili yardım çağırmaq", "Nitroqliserin, aspirin verməli"],
      correct: 1
    },
    {
      question: "Müayinə necə olmalıdır?",
      options: ["EKQ", "Döş qəfəsi rentgen", "Qastrofibroskopiya"],
      correct: 2
    },
    {
      question: "Xəstəliyin yaranma səbəbi?",
      options: ["Xolesistit", "Appendisit", "Ezafogit reflüks"],
      correct: 2
    },
    {
      question: "Tibb bacısı həkimə qədər ilk yardımdan sonra nə etməlidir?",
      options: ["Xəstənin hərəkətsizliyi təmin olunmalı", "Terapevtə yönəltməli", "Kardioloqa müraciət etmək"],
      correct: 2
    }
  ]
},

// Məsələ 32
{
  condition: "Xəstə kişidir və 2 ildir xəstədir, halhazırda ürəkbulanma, diareya, qarında gurultu, göbək ətrafında spastik ağrılardan şikayət edir, ağrılar acı qidanın qəbulundan sonra əmələ gəlib, defekasiya aktı zamanı artır. AT 100-60, nəbz 100. Nəcis suludur.",
  questions: [
    {
      question: "Nədən şübhələnmək olar?",
      options: ["Xroniki qastrit", "Xroniki xolesistit", "Xroniki enteritin kəskinləşməsi"],
      correct: 2
    },
    {
      question: "Hansı dərmanlardan ilk yardım olaraq istifadə edərdiniz?",
      options: ["Antibiotiklər", "Ağrıkəsicilər spazmolitiklər", "Kortikosteroidlər"],
      correct: 1
    },
    {
      question: "Xəstə hansı həkimə göndərilməlidir?",
      options: ["Qastroenteroloqa", "Terapevta", "Cərraha"],
      correct: 0
    },
    {
      question: "Müalicədə hansı dərmanlardan istifadə edilir?",
      options: ["Probiotiklər, enterol", "Qələviləşdirən", "Kortikosteroidlər"],
      correct: 0
    },
    {
      question: "Pəhriz necə olmalıdır?",
      options: ["Qıcıqlandıran qidalar çıxarılır pəhrizdən, vitaminlərlə zəngin qidalar verilir", "Yağlarla zəngin", "Karbohidratlarla zəngin"],
      correct: 0
    }
  ]
},

// Məsələ 33
{
  condition: "Covid-19 koronavirusun formaları haqqında",
  questions: [
    {
      question: "Covid-19 koronavirusun orta ağır formasında TS necə olur?",
      options: ["24-30 arası", "15-20 arası", "22-25 arası"],
      correct: 0
    },
    {
      question: "Covid-19 koronavirusun orta ağır formasında SPO2 necə olur?",
      options: ["65-70 faiz arası", "93-95 faiz arası", "80-85 faiz arası"],
      correct: 1
    },
    {
      question: "Covid-19 koronavirusun orta ağır formasında ağ ciyərlərin KT-sında hansı dəyişikliklər olur?",
      options: ["5-6 sm ölçüdə 2 ədəddən çox donmuş şüşə tipli bərkimə", "3-5 sm ölçüdə 3 ədəddən çox donmuş şüşə tipli bərkimə"],
      correct: 1
    },
    {
      question: "Covid-19 koronavirusun orta ağır formasında temperatur necə olur?",
      options: ["Febril", "Subfebril", "Olmur"],
      correct: 0
    },
    {
      question: "Covid-19 koronavirusun yüngül formasında temperatur necə olur?",
      options: ["Febril olur", "Ya olmur ya subfebril olur"],
      correct: 1
    }
  ]
},

// Məsələ 34
{
  condition: "Xəstə 38 yaşlı kişidir. Qarnüstü (epiqastral) nahiyədə kəskin ağrıdan, ürəkbulanma və qısmadan şikayətlənir. Son 3 ildə müntəzəm olaraq ağrılar baş verir. Bir gün əvvəl acı qida qəbulundan sonra ağrılar artmış, qısma baş vermişdir. Qısmadan sonra ağrı sakitləşmişdir. Səhər yenidən ağrılar artmış, qısmuş, qəhvə xıltı şəklində qusuntu kütləsi gəlmişdir.",
  questions: [
    {
      question: "Nədən şübhələnirsiniz?",
      options: ["Mədə xorası", "Qastrit"],
      correct: 0
    },
    {
      question: "Xəstəyə daxilə dərman vermək olarmı?",
      options: ["Bəli", "Xeyr"],
      correct: 1
    },
    {
      question: "Qarnüstü (epiqastral) nahiyəyə hansını qoymaq olar?",
      options: ["Buz qovuğu", "İsitqac"],
      correct: 0
    },
    {
      question: "Xəstənin rejimi necə olmalıdır?",
      options: ["Yataq rejimi", "Yarım yataq rejimi"],
      correct: 0
    },
    {
      question: "Tibb bacısının taktikası:",
      options: ["Ev şəraitində müalicə", "Təcili yardım maşını ilə tez bir zaman xəstəxanaya çatdırmaq"],
      correct: 1
    }
  ]
},

// Məsələ 35
{
  condition: "Xəstə 19 yaşlı kişidir. Ümumi zəiflik, baş ağrısı, təngnəfəslik və bəlğəmli öskürəkdən şikayətlənir. Xəstəliyini soyuqdayma ilə əlaqələndirir. 4 gündür xəstədir. Obyektiv olaraq vəziyyəti kafidir. Bədən temperaturu 37.7°C, tənəffüsün sayı 1 dəqiqədə 21, A/T 110/70 mm c.süt., nəbzi 1 dəq. 88 vurğudur.",
  questions: [
    {
      question: "Nədən şübhələnirsiniz?",
      options: ["Pnevmoniya", "Kəskin bronxit"],
      correct: 1
    },
    {
      question: "Xəstənin döş qəfəsinə banka qoymaq olarmı?",
      options: ["Bəli", "Xeyr"],
      correct: 1
    },
    {
      question: "Evkalipt dəmləməsi ilə inhalyasiya aparmaq:",
      options: ["Olar", "Olmaz"],
      correct: 0
    },
    {
      question: "Xəstənin ayaqlarını xardal vannasına qoymaq olarmı?",
      options: ["Bəli", "Xeyr"],
      correct: 0
    },
    {
      question: "Xəstənin rejimi necə olmalıdır?",
      options: ["Yataq rejimi", "Yarım yataq rejimi"],
      correct: 0
    }
  ]
},

// Məsələ 36
{
  condition: "Uşaqda 3 gündür qızdırma, baş ağrısı, ürəkbulanma, başgicəllənmə, qulaqlarda küy var. Dünəndən gözdə qızarıqlıq, işıqdan qorxma müşahidə olunur. Uşağın temperaturu 38.5°C, nəbzi 110, tənəffüsü 28-dir. Sidik ifrazı azalıb, rəngi qırmızıdır.",
  questions: [
    {
      question: "Tibb bacısı hansı xəstəlikdən şübhələnə bilər?",
      options: ["Pnevmoniya", "Anemiya", "Revmatizm"],
      correct: 0
    },
    {
      question: "Uşağa hansı yardımı göstərə bilərsiniz?",
      options: ["Fiziki üsullarla temperaturu aşağı salmaq", "Antibakterial terapiya", "Hormonal terapiya"],
      correct: 0
    },
    {
      question: "Hansı müayinə üsulu diaqnostik əhəmiyyətə malikdir?",
      options: ["EKQ", "Rentgen müayinə", "Sidiyin ümumi müayinəsi"],
      correct: 1
    },
    {
      question: "Uşağı bu xəstəlikdən qorumaq üçün hansı vaksinlə aktiv immunlaşma aparılır?",
      options: ["QPM", "OPV", "PKV"],
      correct: 0
    },
    {
      question: "Milli Peyvənd təqviminə görə uşaq neçə dəfə bu xəstəliyə görə immunlaşdırılmalıdır?",
      options: ["5 dəfə", "1 dəfə", "3 dəfə"],
      correct: 2
    }
  ]
},

// Məsələ 37
{
  condition: "20 yaşlı oğlan xəstəxanaya gəlib. Xəstənin sol qolundaki əlində 1 barmaq, sağ əlində 3-4 barmağı don vurub. Şişkin qızartı, dəri altı maye yığılıb.",
  questions: [
    {
      question: "Neçənci dərəcəli donmadı?",
      options: ["1-ci dərəcəli donma", "2-ci dərəcəli donma", "3-cü dərəcəli donma"],
      correct: 1
    },
    {
      question: "Həmin don vurmuş nahiyyədə hissiyatın hansı forması saxlanılır?",
      options: ["Ağrı, temperatur", "Toxunma hissi", "Heç biri"],
      correct: 0
    },
    {
      question: "Həmin nahiyyəyə 2-ci infeksiya qoşulmayıbsa neçə müddətə sağalar?",
      options: ["1 ay", "2 həftə", "2 ay"],
      correct: 1
    },
    {
      question: "Donmuş nahiyyə tam sağaldıqdan sonra həmin nahiyyənin ətraf mühitə isti ya soyuq olması reaksiyası necə olur?",
      options: ["Artır", "Azalır", "Dəyişmir"],
      correct: 0
    },
    {
      question: "Ümumiyyətlə donmalarda yardım nə etmək lazımdı?",
      options: ["Buzlu su ilə ovuşdurmaq", "38-40°C isti suya salmaq", "Quru əllə ovmaq"],
      correct: 1
    }
  ]
},

// Məsələ 38
{
  condition: "Tibb bacısı 5 yaşlı uşağa patronaja gedib. Uşaq 6 gündür xəstədir. Səpgilər var. Səpgilər bədənin müəyyən nahiyələrində birləşib. Dildə və ağız boşluğunda da belə səpgilərin olduğu görünür. Qızdırması var. Ana uşaqda səpgilərin 4-cü gündən çıxdığını söyləyir. Uşaq halsızdır.",
  questions: [
    {
      question: "Hansı xəstəlikdən şübhələnmək olar?",
      options: ["Qızılca", "Skarlatina", "Su çiçəyi"],
      correct: 0
    },
    {
      question: "Xəstəliyin törədicisi nədir?",
      options: ["Virusdur", "Qida ilə əlaqədardır", "β-hemolitik streptokoklar"],
      correct: 0
    },
    {
      question: "Xəstəlikdə neçə gün karantin təyin olunur?",
      options: ["21 gün", "Karantin təyin olunmur", "7 gün"],
      correct: 0
    },
    {
      question: "Tibb bacısı nə etməlidir?",
      options: ["Uşağa antibiotik təyin etməlidir", "Anaya uşağın qidalanması ilə əlaqədar məsləhət verir", "Həkimə çağırış yazmalıdır. Ananı xəbərdar etməlidir ki, uşağı məktəbə aparmasın, həkimin müayinəsini gözləsin"],
      correct: 2
    },
    {
      question: "Xəstəlikdən sonra necə immunitet yaranır?",
      options: ["Təbii aktiv immunitet yaranır", "İmmunitet yaranmır", "Xəstəlik xroniki xarakter daşıyır"],
      correct: 0
    }
  ]
},

// Məsələ 39
{
  condition: "35 yaşlı kişidə döş qəfəsinin açıq yarası vardır. Xəstənin vəziyyəti ağırdır. Boğulma və tənəffüsün çətinləşməsi qeyd olunur. Obyektiv olaraq dəri avazımız, soyuq tərlə örtülmüşdür. Üzdə və dodaqlarda sianoz vardır. Az bir vaxtda tənəffüs tezləşir, A/T enir, taxikardiya müşahidə olunur. Nəfəsalma zamanı havanın spesifik səslə ötürülməsi, öskürdükdə yaradan qan və hava qabarcıqları çıxması nəzərə çarpır.",
  questions: [
    {
      question: "Xəstədə nə baş vermişdir?",
      options: ["Açıq pnevmotoraks", "Plevrit"],
      correct: 0
    },
    {
      question: "Yaranın ilkin işlənməsi necə aparılır?",
      options: ["Aseptik məhlullarla", "Su ilə yuyulur"],
      correct: 0
    },
    {
      question: "Hansı sarğıdan istifadə olunur?",
      options: ["Laçəkvari", "Okkluzion"],
      correct: 1
    },
    {
      question: "Tibb bacısının taktikası necə olmalıdır?",
      options: ["Yara üzərinə kip sarğı qoyaraq qospitalizə olunur", "Ağrıkəsici vuraraq qospitalizə olunur"],
      correct: 0
    },
    {
      question: "Xəstə hansı şöbəyə yerləşdirilir?",
      options: ["Travmatologiya", "Ümumi cərrahiyyə"],
      correct: 1
    }
  ]
},

// Məsələ 40
{
  condition: "Laboratoriyada elmi tədqiqat işləri ilə məşğul olan gənc qızın sol əlində qələvi məhlulun təsirindən dərinin kəskin qızarması, göynədici ağrılar qeyd olunur.",
  questions: [
    {
      question: "Nədən şübhələnirsiz?",
      options: ["Termiki yanıq", "Kimyəvi yanıq"],
      correct: 1
    },
    {
      question: "İlk yardım necə olmalıdır?",
      options: ["Yanıq səthi axar su altında 15-20 dəqiqə yuyulur", "Yanıq səthinə yanıq əleyhinə maz sürtülür"],
      correct: 0
    },
    {
      question: "Yaranın işlənməsində hansı taktika seçilir?",
      options: ["Yanıq səthi qələvi məhlulla neytrallaşdırılır", "Yanıq səthi turşu məhlulu ilə neytrallaşdırılır"],
      correct: 1
    },
    {
      question: "Tibb bacısı xəstəyə hansı məsləhəti verə bilər?",
      options: ["Quru aseptik sarğı qoyub cərraha göndərilir", "Yod çəkərək nəzarətdə saxlayır"],
      correct: 0
    },
    {
      question: "Müalicə zamanı yara hansı vəziyyətdə olmalıdır?",
      options: ["Açıq qalmalıdır", "Sarğı qoyulmalıdır"],
      correct: 1
    }
  ]
},

// Məsələ 41
{
  condition: "Uşaq küçədə oynayarkən yıxılıb, döş qəfəsi yaralanıb, al qırmızı qan qaytarır.",
  questions: [
    {
      question: "Xəstədə nə baş vermişdir?",
      options: ["Ağciyər qanaxması", "Mədə qanaxması", "Venoz qanaxması"],
      correct: 0
    },
    {
      question: "Bu vəziyyət hansı xəstəlik nəticəsində baş verə bilər?",
      options: ["Mədə xərçəngi", "Vərəm", "Qaraciyər sərrozu"],
      correct: 1
    },
    {
      question: "Xəstə hansı şöbəyə qospitalizə oluna bilər?",
      options: ["Neyrocərrahiyyə şöbəsi", "Qastroenterologiya", "Vərəm şöbəsinə"],
      correct: 2
    },
    {
      question: "Xəstə hansı vəziyyətdə qospitalizə olunur?",
      options: ["Böyrü üstə uzanmış, hər tərəfinə istiqac qoyularaq", "Yarımoturaq vəziyyətdə", "Uzanmış vəziyyətdə"],
      correct: 1
    },
    {
      question: "Hansı ilk yardım göstərilə bilər?",
      options: ["Döş qəfəsinə soyuq qoyularaq", "Epiqastral nahiyyəyə istiqac qoyularaq", "Spirtli kompres qoyularaq"],
      correct: 0
    }
  ]
},

// Məsələ 42
{
  condition: "Uşağın 6 yaşı var. Tez-tez yuxarı tənəffüs yollarının katarı ilə xəstələnir. Profilaktik peyvəndləri peyvənd təqviminə uyğun almamışdır. Məktəbə gedir. Dünən xəstələnib, Ananın sözünə görə üç həftə əvvəl bağçaya gedən bacısında da belə səpgilər olmuşdur. Uşaqda 38.5°C temperatur, quru öskürək, konyuktivit, işıqdan qorxma, iştahsızlıq, dəridə səpgi müşahidə olunur. Üzündə, bədənində və ətraflarda eritemetoz-papulyoz səpgilər var.",
  questions: [
    {
      question: "Uşaqda hansı xəstəlik ola bilər?",
      options: ["Məxmərək", "Qızılca", "Skarlatina"],
      correct: 1
    },
    {
      question: "Xəstəliyin törədicisi nədir?",
      options: ["Virusdur", "Qida ilə əlaqədardır", "Stafilokok"],
      correct: 0
    },
    {
      question: "Səpgilər yaranana kimi bu xəstəlikdə hansı xarakterik əlamət müşahidə olunur?",
      options: ["Filatov üçbucağı", "Belski-Filatov-Koplik ləkələri", "Coğrafi dil"],
      correct: 1
    },
    {
      question: "Tibb bacısı nə etməlidir?",
      options: ["Həkimə çağırış yazmalıdır. Ananı xəbərdar etməlidir ki, uşağı məktəbə aparmasın, həkimin müayinəsini gözləsin", "Anaya uşağın qidalanması ilə əlaqədar məsləhət verir. Uşağı dəri həkiminə aparmağı tövsiyyə etməlidir", "Uşağa pəhriz təyin etməlidir"],
      correct: 0
    },
    {
      question: "Xəstəlikdən sonra necə immunitet yaranır?",
      options: ["Aktiv təbii immunitet yaranır", "İmmunitet yaranmır", "Süni aktiv immunitet yaranır"],
      correct: 0
    }
  ]
},

// Məsələ 43
{
  condition: "Xəstə oğlan 19 yaşındadır. Ümumi zəiflik, baş ağrısı, təngnəfəslik, bəlğəmli öskürəkdən şikayətlənir. Xəstəliyini soyuqdayma ilə əlaqələndirir, 4 gündür xəstədir. Obyektiv olaraq, vəziyyəti kafidir, bədən temperaturu 37.7°C, tənəffüsün sayı 1 dəqiqədə 21, nəbz 88, A/T 110/70 mm c.süt.",
  questions: [
    {
      question: "Nədən şübhələnirsiniz?",
      options: ["Kəskin bronxit", "Qastrit", "Ağciyər emfizeması"],
      correct: 0
    },
    {
      question: "Bronxların drenajı nə məqsədlə aparılır?",
      options: ["Öskürəyi azaltmaq", "Bəlğəm ifrazını asanlaşdırmaq", "Döş qəfəsində ağrını azaltmaq"],
      correct: 1
    },
    {
      question: "Bəlğəm ifrazını asanlaşdırmaq üçün hansı daha məqsədəuyğundur?",
      options: ["Öskürək əleyhinə dərmanların qəbulu", "Çoxlu maye qəbulu", "Tənəffüs gimnastikası"],
      correct: 2
    },
    {
      question: "Hansı dərmanlardan istifadə etmək olar?",
      options: ["Mukolitiklərdən, evkalipt dəmləməsindən", "Steroid preparatlardan", "Antipiretiklərdən (qızdırma əleyhinə) preparatlardan"],
      correct: 0
    },
    {
      question: "Xəstənin rejimi necə olmalıdır?",
      options: ["Yataq rejimi", "Yarım yataq rejimi", "Ümumi rejim"],
      correct: 0
    }
  ]
},

// Məsələ 44
{
  condition: "Uşaq 9 aylıqdır. Doğularkən çəkisi 3400 qr boyu 52 sm olmuşdur. Ana südü ilə qidalanır. Əla qidalarda qəbul edir. Peyvəndlərini vaxtında almışdır. 3 gündür ki, xəstədir. Ananın sözünə uşaqda qusma və duru nəcis ifrazı olur. Dünəndən halsızdır, mayeni pis içir, döşü tutmur. Xeyli çəkisini itirib. Müayinə zamanı temperaturu 38 dərəcədir. Dərisi qurudur.",
  questions: [
    {
      question: "Uşaqda hansı xəstəlik ola bilər?",
      options: ["Toksiki diareya", "Sada diareya"],
      correct: 0
    },
    {
      question: "Xəstəliyin yaranmasına səbəb nədir?",
      options: ["Vitamin çatışmamazlığıdır", "Bağırsaq infeksiyasıdır"],
      correct: 1
    },
    {
      question: "Tibb bacısı nə etməlidir?",
      options: ["Uşağı müayinə üçün həkimin qəbuluna dəvət edir", "Təcili xəstəxanaya göndərilməlidir"],
      correct: 1
    },
    {
      question: "Xəstəliyə səbəb nədir?",
      options: ["Keyfiyyətsiz qida qəbulu", "Tez-tez qidalandırma"],
      correct: 0
    },
    {
      question: "Xəstəlik idarə olunandırımı?",
      options: ["Bəli", "Xeyr"],
      correct: 0
    }
  ]
},

// Məsələ 45
{
  condition: "Uşaq 3 aylıqdır. 3000 q çəkidə doğulub. Süni qidalanır. Hazırda 5100 qr-dır. Müayinə zamanı qasıq və sarğı büküşlərində hiperimiya qeyd olunur.",
  questions: [
    {
      question: "Uşağın çəkisi necə olmalıdır?",
      options: ["3000", "4200"],
      correct: 1
    },
    {
      question: "Hiperemiyanın səbəbi nədir?",
      options: ["Gigiyena qaydalarını gözləməmək", "Məxmərək"],
      correct: 0
    },
    {
      question: "Belə hiperemiya nə adlanır?",
      options: ["Bişməcə", "Diatez", "Allergiya"],
      correct: 0
    },
    {
      question: "Tibb bacısının taktikası?",
      options: ["Həkim çağırmaq", "Müalicə etmək", "Uşağı çimizdirmək"],
      correct: 0
    },
    {
      question: "Tibb bacısının anaya məsləhəti?",
      options: ["Gigiyenik qaydalar", "Pəhriz", "Günün rejimi"],
      correct: 0
    }
  ]
},
// Məsələ 44
{
  condition: "Ana 2 yaşlı uşağının üç gündür ki, xəstələndiyini söyləyir. Onun sözünə görə uşaqda gündə 8-10 dəfə selikli nəcis ifrazı olur. Tez-tez gücəmələr və qarında sənci olur. 2 dəfə qusma olub. Dünəndən. halsızdır, yemək yemir. Obyektiv müayinə zamanı uşağın temperaturu 37,7-dir. Halsızdır, dərisi qurudur. solğundur. Dili ərplidir. Qarnı yumşaq, ağrılıdır. Nəcisi selikli-qanlıdır.",
  questions: [
    {
      question: "Uşaqda hansı xəstəlik ola bilər?",
      options: ["Dizenteriya", "Zəhərlənmə", "Sadə diareya"],
      correct: 0
    },
    {
      question: "Hansı imalə olunur?",
      options: ["Dərman imaləsi", "Sifon imələsi", "Çobanyastığı dəmləməsi ilə mikro imalə"],
      correct: 2
    },
    {
      question: "Tibb bacısı nə etməlidir?",
      options: ["Uşağı xəstəxanaya göndərməlidir", "Uşağı müalicə etməlidir", "Anaya qidalanması haqqında məsləhət verməlidir"],
      correct: 0
    },
    {
      question: "Xəstəlik idarə olunandırımı?",
      options: ["Xeyr", "Bəli", "Peyvəndi var"],
      correct: 0
    },
    {
      question: "Xəstəyə içməyə nə verilir?",
      options: ["Az-az çoxlu mayə vermək", "Heçnə verməmək", "Çox miqdarda mayə birdən vermək"],
      correct: 0
    }
  ]
},
// Məsələ 45
{
  condition: "17 yaşlı xəstə diz və dirsək oynağında olan uçucu xarakterli ağrıdan, ürək nahiyəsində xoşagəlməz hissdən, ümumi zəiflik və iştahasızlıqdan şikayət edir. İki həftə əvvəl angina ilə xəstələndiyini söyləyir. Baxış zamanı xəstənin narahat, oynaqlarının şişkin və ağrılı olması, temperaturun 37.80C dərəcə, A/T- 110/70 mm c.süt, nəbzin 1 dəqiqədə 84 vurğu olması müəyyənləşdirilib.",
  questions: [
    {
      question: "Bu hansı xəstəlik ola bilər?",
      options: ["Revmatizm", "Osteoartroz", "Stenokardiya"],
      correct: 0
    },
    {
      question: "Xəstəliyin törədicisi hansı mikroblardır?",
      options: ["Stafilokoklar", "A qrupundan olan β- hemolitik streptokokklar", "Sitomeqalovirus"],
      correct: 1
    },
    {
      question: "Bu xəstəlik keçirilmiş hansı haldan sonra baş verə bilər?",
      options: ["İntoksikasiya, stress", "Oynaqların zədələnməsi", "Angina və tonzillit"],
      correct: 2
    },
    {
      question: "Bu xəstəlik zamanı daha çox hansı orqan zədələnir?",
      options: ["Ürək və oynaqlar", "Həzm sistemi", "Mərkəzi sinir sistemi"],
      correct: 0
    },
    {
      question: "Bu xəstəlik gələcəkdə hansı fəsadları verə bilər?",
      options: ["Podaqra", "Ürək qusurları", "Böyrək çatışmazlığı"],
      correct: 1
    }
  ]
},
// Məsələ 46
{
  condition: "28 yaşlı neftçi, üzdə şişkinlik, baş ağrısı, zəiflik və tez yorulmadan şikayətlənir. Xəstəliyini iki həftə əvvəl angina keçirməsi ilə əlaqələndirir. Obyektiv olaraq A/T 135/96 mm c.sut, nəbz 1 dəqiqədə 80 vurğu, dəri örtüyü solğundur. Sidiyin rəngi qırmızı-bulanlıqdır, yuyulmuş ət suyunu xatırladır. Sidiyin analizində: çoxlu miqdarda zülal və eritrositlər aşkar edilib.",
  questions: [
    {
      question: "Hansı xəstəlikdən şübhələnmək olar?",
      options: ["Hipotireoz", "Pielonefrit", "Qlomerulonefrit"],
      correct: 2
    },
    {
      question: "Xəstəliyin törədicisi nədir?",
      options: ["Stafilokok", "Streptokok", "Kandida göbələyi"],
      correct: 1
    },
    {
      question: "Xəstəliyin əsas əlaməti hansıdır?",
      options: ["Hipertenziya, ödem, oliquriya, sidikdə zülal", "Ürəkbulanma, qusma, bel nahiyəsində ağrı", "Zəiflik, dəri quruması, yuxululuq"],
      correct: 0
    },
    {
      question: "Xəstə qidalanmasında nəyi azaltmalıdır?",
      options: ["Yağlı qidaları", "Duz və suyu", "Şəkəri"],
      correct: 1
    },
    {
      question: "Müalicə zamanı hansı dərmanlar tətbiq edilir?",
      options: ["Antibiotiklər", "Qan əvəzedici preparatlar", "Hormonlar"],
      correct: 0
    }
  ]
},
// Məsələ 47
{
  condition: "Sahə tibb bacısı patranaja gedib. Uşaq 5 günlükdür. Təbii yolla doğulub. Çəkisi 3200 q. boyu 50 sm Sağlamdır.",
  questions: [
    {
      question: "Uşaq necə qidalanmalıdır?",
      options: ["sərbəst", "gündə 5 dəfə", "gündə 6 dəfə"],
      correct: 0
    },
    {
      question: "Hər qidalanmadan əvvəl döş təmizlənməlidir?",
      options: ["təmizlənməməli", "bəli", "xeyr"],
      correct: 1
    },
    {
      question: "Əmizdirmədən öncə ilk süd atılmalıdır?",
      options: ["Bəli", "Xeyr", "Atılmağı mütləq deyil"],
      correct: 1
    },
    {
      question: "Uşağa peyvənd necə aparılmalıdır?",
      options: ["milli peyvənd təqviminə uyğun", "epidemik şəraitə uyğun", "ananın istəyinə uyğun"],
      correct: 0
    },
    {
      question: "Uşağın göbəyi necə işlənməlidir?",
      options: ["işlənilmir", "gündə 1 dəfə", "gündə 3 dəfə"],
      correct: 0
    }
  ]
},
// Məsələ 48
{
  condition: "48 yaşlı xəstə epiqastral nahiyədə dözülməz ağrı, ürəkbulanma, ət qidalarına qarşı ikrah hissi, iştahasızlıq, kəskin arıqlama, qəhvə xıltı şəklində qusmadan və zəiflikdən şikayət edir. Obyektiv olaraq xəstə halsızdır, dəri örtüyü solğun və torpaq rəngindədir, A/T 100/60 mm c.sut,nəbz 1 dəqiqədə 60 vurğudur. Son 1 il ərzində xəstə 10 kq arıqlayıb.",
  questions: [
    {
      question: "Bu hansı xəstəlik ola bilər?",
      options: ["Hepatit", "Pankreatit", "Mədə xərçəngi"],
      correct: 2
    },
    {
      question: "Qəhvə xıltı şəklində qusma olarsa tibb bacısı nə etməlidir?",
      options: ["Epiqastral nahiyəyə buz qovuğu qoymalıdır", "Epiqastral nahiyəyə isitqac qoymalıdır", "Xəstəyə su içirməlidir"],
      correct: 0
    },
    {
      question: "Bu xəstəliyin diaqnozunu dəqiqləşdirmək üçün hansı müayinə daha effektlidir?",
      options: ["Komyuter tomoqrafiyası", "Qastrofibroskopiya", "Rentgenoloji müayinə"],
      correct: 1
    },
    {
      question: "Bu xəstəlik hansı fəsadlar verə bilər?",
      options: ["Abses", "Qanaxma və peritonit", "Sirroz"],
      correct: 1
    },
    {
      question: "Qəhvə xıltı şəklində qusma olarsa, nəyə üstünlük vermək olar?",
      options: ["Aminokapron turşusu, disinon inyeksiyası", "Mədənin zondla yuyulması", "Heparin, aspirin"],
      correct: 0
    }
  ]
},
// Məsələ 49
{
  condition: "20 yaşlı arıq bədən quruluşlu qadın ürəkdöyünmə, baş gicəllənmə, təngnəfəslik, iştahasızlıq və zəiflikdən şikayətlənir. Bəzən təbaşir yediyini söyləyir. Obyektiv olaraq dəri örtüyü solğundur, saçların tökülməsi, dırnaqların qırılması və qaşığabənzər formada olması, bəzən aşağı ətraflarında ödem müşahidə olunur. A/T -100/60 mm c.sut, nəbz isə 1 dəqiqədə 110 vurğudur.",
  questions: [
    {
      question: "Bu əlamətlər hansı xəstəlikdə ola bilər?",
      options: ["Ürək qüsuru", "Dəmir defisitli anemiya", "Hipotireoz"],
      correct: 1
    },
    {
      question: "Qanın müayinəsində nə aşkar edilə bilər?",
      options: ["Hemoqlobin və eritrositlərin sayının azalması", "Revmatik sınaqların müsbət olması", "Qan zərdabında hormonların konsentrasiyasının dəyişilməsi"],
      correct: 0
    },
    {
      question: "Bu xəstəlikdə hansı qidaların qəbulu məsləhət görülür?",
      options: ["Yağlı qidalar", "Süd və süd məhsulları", "Ət, çuğundur"],
      correct: 2
    },
    {
      question: "Bu xəstəliyin yaranma səbəbləri:",
      options: ["Xroniki qanitirmə və alimentar dəmir çatışmamazlığı", "Yoluxucu və parazitar xəstəliklər", "İmmun sisteminin zəifləməsi"],
      correct: 0
    },
    {
      question: "Xəstəliyin müalicəsində hansı preparatların istifadəsi effektlidir?",
      options: ["Sidikqovucular", "Dəmir preparatları, B12 vitamini", "Yod preparatları"],
      correct: 1
    }
  ]
},
// Məsələ 50
{
  condition: "48 yaşlı xəstə gecələr və ac qaldıqda epiqastral nahiyədə olan dözülməz ağrıdan, hava gayirmədən, ürəkbulanma, qusma və zəiflikdən şikayət edir. 1,5 ildir ki, xəstəlik davam edir, son 5 gün ərzində vəziyyəti daha da pisləşib. Xəstə bunu stress keçirməsi ilə əlaqələndirir. Obyektiv olaraq xəstənin vəziyyəti kafidir, huşu aydındır, dəri örtüyü solğun, A/T -100/60 mm c.sut, nəbz 1 dəqiqədə 64 vurğudur.",
  questions: [
    {
      question: "Bu hansı xəstəlikdir?",
      options: ["12-barmaq bağırsağın xora xəstəliyi", "Pankreatit", "Xroniki qastrit"],
      correct: 0
    },
    {
      question: "Xəstəliyin yaranma səbəbləri:",
      options: ["Öd daşı xəstəliyi", "Heliokobakter pilori", "Genetik faktorlar"],
      correct: 1
    },
    {
      question: "Bu xəstəlikdə hansı diaqnostik müayinələr aparılır?",
      options: ["Ultrasəs müayinəsi", "Endoskopik müayinə, biopsiya", "Elektrokardioqrafiya"],
      correct: 1
    },
    {
      question: "Xəstəliyin ağırlaşması:",
      options: ["Perforasiya, qanaxma", "Şəkərli diabet", "Qastroduodenit"],
      correct: 0
    },
    {
      question: "Ağrıları sakitləşdirmək üçün xəstəyə hansı preparatlar təyin edilə bilər?",
      options: ["Almagel, pankreatin", "Kontrikal, festal", "Platifillin, no-spa"],
      correct: 2
    }
  ]
},
// Məsələ 51
{
  condition: "55 yaşlı xəstə ağızda quruluq, yanğı hissi, çoxlu maye və qida qəbul etməsi, arıqlama, görmə zəifliyi, ayaqlarda hissiyyatın itməsi və tez yorulma şikayətləri ilə həkimə müraciət edib. Obyektiv olaraq xəstənin vəziyyəti orta ağırdır, dəri qurudur, üzərində qaşınma izləri var. A/T 140/90 mm c.sut, nəbz 1 dəqiqədə 80-dir.",
  questions: [
    {
      question: "Bu hansı xəstəlikdir?",
      options: ["Miksedema", "Şəkərsiz diabet", "Şəkərli diabet"],
      correct: 2
    },
    {
      question: "Bu hansı orqanın xəstəliyidir?",
      options: ["Mədəaltı vəzin", "Hipofizin", "Qalxanabənzər vəzin"],
      correct: 0
    },
    {
      question: "Bu xəstəlik zamanı orqanizmdə hansı hormon çatışmır?",
      options: ["İnsulin", "Vazopressin", "Tiroksin, triyodtironin"],
      correct: 0
    },
    {
      question: "Xəstə hansı müayinələrdən keçməlidir?",
      options: ["Ultrasəs müayinəsi", "Mədə şirəsinin müayinəsi", "Qanda və sidikdə şəkarin daimi müayinəsi"],
      correct: 2
    },
    {
      question: "Xəstəliyin müalicəsində hansı preparatlar təyin edilə bilər?",
      options: ["Desmopressin", "İnsulin", "Levo-tiroksin"],
      correct: 1
    }
  ]
},
// Məsələ 52
{
  condition: "18 yaşlı gənc imtahan verərkən qəflətən huşunu itirir və yıxılır. Obyektiv olaraq xəstənin dəri örtüyü solğundur, soyuq tərlə örtülub. Tənəffüsü 1 dəqiqədə 16-dır. A/T- 90/60 mm c.sut, nəbz 1 dəqiqədə 100 vurğudur.",
  questions: [
    {
      question: "Bu əlamətlər hansı xəstəlikdə ola bilər?",
      options: ["Bayılma", "Epilepsiya", "Hipoqlikemiya"],
      correct: 0
    },
    {
      question: "Xəstəliyin baş verməsinin əsas səbəbi:",
      options: ["Beyində patoloji ocağın olması", "Beyində qısa müddətli oksigen çatmamazlığı (Hipoksiya)", "Qanda tiroksinin normadan aşağı olması"],
      correct: 1
    },
    {
      question: "Tibb bacısının taktikası:",
      options: ["Xəstəyə atropin əzələ daxilinə vurulmalıdır", "Qusma zamanı xəstənin başını yana çevirməlidir", "Xəstənin beyninə qan gəlməsi üçun ayaqlara hündür vəziyyət verməlidir"],
      correct: 2
    },
    {
      question: "Bu vəziyyət nə qədər davam edə bilər?",
      options: ["1-10 dəqiqə", "30 dəqiqədən çox", "1 saat"],
      correct: 0
    },
    {
      question: "Xəstəyə hansı preparatlar təyin edilir?",
      options: ["Maqnezium sulfat", "Kardiamin, mezaton", "Qlikoza məhlulu"],
      correct: 1
    }
  ]
},
// Məsələ 53
{
  condition: "Tibb bacısı 14 günlük uşağa patronaja gedib. Uşaq təbii qidalanır. Ana göbək yarasının nəm olmasından şıkayət edir. Obyektiv müayinə zamanı göbəkdən serozlu ifrazatın axması müəyyən olunur. Uşağın temperaturu 37,80C dir. Ümumi vəziyyəti qənaətbəxşdir.",
  questions: [
    {
      question: "Hansı xəstəlikdən şübhələnmək olar?",
      options: ["Kataral omfalit", "Hemolitik anemiya", "Yenidoğulmuşun qovuççulu xəstəliyi"],
      correct: 0
    },
    {
      question: "Tibb bacısı hansı taktikanı seçməlidir?",
      options: ["Antibiotik təyin etməlidir", "Sahə həkiminə məlumat verməlidir", "Uşağı ana südündən ayırmalıdır"],
      correct: 1
    },
    {
      question: "Xəstədə göbək yarasına yerli olaraq nə istifadə oluna bilər?",
      options: ["3% hidrogen-peroksid, 70 % spirt və brilyant abısı", "1% tetrasiklin mazı", "Kalium permanqanat"],
      correct: 0
    },
    {
      question: "Tibb bacısı anaya uşaqda bu vəziyyətin hansı səbəbdən yarandığını necə izah etməlidir?",
      options: ["Uşağın isti saxlanılması", "Göbək yarasına düzgün qulluq qaydalarına riayət olunmaması", "Uşağın təbii qidalandırılması"],
      correct: 1
    },
    {
      question: "Patronaj vaxtı tibb bacısı anaya hansı məsləhəti verə bilər?",
      options: ["Göbək yarasına aseptik sarğının qoyulması", "Göbək yarasının təmiz və nəm saxlanılması", "Göbək yarasının təmiz və quru saxlanılması"],
      correct: 2
    }
  ]
},
// Məsələ 54
{
  condition: "12 yaşlı oğlan uşağı valideyni ilə səhər acqarınına qan analizi vermək üçün tibb müəssisəsinə müraciət edib. Manipulyasiya zamanı uşağın vəziyyəti qəfil pisləşdi, rəngi avazıdı və huşunu itirdi. Tibb bacısı təcili həkimə məlumat verdi. Həkim müayinədən sonra xəstəyə dərialtına kofein təyin etdi. A/T - 85/55 mm c. süt.",
  questions: [
    {
      question: "Xəstədə nə baş vermişdir?",
      options: ["Bayılma", "Anafilaktik şok", "Qıcolma"],
      correct: 0
    },
    {
      question: "Xəstədə bu vəziyyətin yaranma səbəbini izah edin.",
      options: ["Kəskin qastrit", "Qorxu hissi, həyacan", "Revmatizm"],
      correct: 1
    },
    {
      question: "Həkim gələnə kimi tibb bacısı xəstəyə hansı vəziyyəti verməlidir?",
      options: ["Uzadaraq ayaqlarını təxminən 300 dərəcə qaldırmaq", "Oturaq vəziyyət vermək", "Sol böyrü üstə uzatmaq"],
      correct: 0
    },
    {
      question: "Həkim xəstəyə kofein benzoat inyeksiyası təyin edib. Kofein hansı nahiyəyə və neçə dərəcəli bucaq altında vurulmalıdır?",
      options: ["Bazunun aşağı 1/3 hissəsinə 90 dərəcə bucaq altında", "Bazunun yuxarı 1/3 hissəsinə 90 dərəcə bucaq altında", "Bazunun yuxarı 1/3 hissəsinə 45 dərəcə bucaq altında"],
      correct: 2
    },
    {
      question: "Uşaq ayıldıqdan sonra tibb bacısı nə etməlidir?",
      options: ["Xardal qoymaq", "Şərbət vermək", "Ayaqlarını vanna etmək"],
      correct: 1
    }
  ]
},
// Məsələ 55
{
  condition: "Ana 10 günlük uşağı ilə poliklinikaya müraciət edib. Doğularkan uşağın çəkisi 3500 qramm, boyu 52 sm olub. Uşaq təbii qidalanır. Ananın dediyinə görə uşaq bir neçə gündür döşdən imtina edir. Narahatdır. Yuxusu pozulub. Tez tez oyanır. Gün ərzində defekasiya aktı bir dəfə müşahidə olunur. Obyektiv müayinədə qarında köp nəzərə çarpır. Temperatur 36,60C-dır. Həkim uşağa qazçıxarıcı boru və imalə təyin edib.",
  questions: [
    {
      question: "Tibb bacısı qazçıxarıcı borunu düz bağırsaqda nə qədər saxlamalıdır?",
      options: ["3-5 dəq", "30 dəq", "1 saat"],
      correct: 0
    },
    {
      question: "İmalə üçün tibb bacısı suyu hansı temperaturda götürməlidir?",
      options: ["10-12 dərəcə", "20-22 dərəcə", "35-37 dərəcə"],
      correct: 2
    },
    {
      question: "Tibb bacısı imalə üçün nə qədər su götürməlidir?",
      options: ["50 ml/kq (200 ml)", "30 ml/kq (120 ml)", "10 ml/kq (40 ml)"],
      correct: 2
    },
    {
      question: "İmalə zamanı yenidoğulmuş uşaq hansı vəziyyətdə ola bilər? 1. Sol böyrü üstə 2. Kürəyi üstə 3. Sağ böyrü üstə 4. Qarnı üstə",
      options: ["1,2", "2,3", "Yalnız 4"],
      correct: 0
    },
    {
      question: "Tibb bacısı anaya hansı məsləhəti verə bilər?",
      options: ["Uşağı adaptasiya olunmuş qidalarla qidalandırmaq", "Köp və qəbzlik yaradan qidaları qida rasionundan çıxarmaq", "Uşağı döşdən ayırmaq"],
      correct: 1
    }
  ]
},
// Məsələ 56
{
  condition: "Doğum evində 30 həftəlik hamiləlikdən çəkisi 1600q, boyu 42 sm olan uşaq doğulmuşdur. Ana HBsAg (Hepatit B) daşıyıcısıdır.",
  questions: [
    {
      question: "Tibb bacısı yenidoğulmuş uşaqı necə xarakterizə edə bilər?",
      options: ["Sağlam yenidoğulmuş uşaq", "Vaxtından əvvəl doğulmuş uşaq", "Vaxtınan gec doğulan uşaq"],
      correct: 1
    },
    {
      question: "Bu uşağın sonrakı qulluq qaydası necə olmalıdır?",
      options: ["evə yazmaq", "uşağı küvezdə saxlamaq", "isti mələfəyə büküb, süni qidalarla qidalandırmaq"],
      correct: 1
    },
    {
      question: "Əgər uşaq küvezdə saxlanılsa, hansı temperatur rejimi seçilməlidir?",
      options: ["36 0C", "25 0C", "22 0C"],
      correct: 0
    },
    {
      question: "Doğulduqdan sonra ilk 1 saat ərzində bu uşaq döşə qoyula bilərmi?",
      options: ["Xeyr, uşağın vəziyyəti bərpa olunduqdan sonra döşə qoyula bilər", "Bəli, bu uşaq ilk 1 saat ərzində döşə qoyula bilər", "Bu uşağa döş vermək əks göstərişdir"],
      correct: 0
    },
    {
      question: "Həkim uşağa Hepatit B peyvəndinin vurulmasını təyin edib. Hepatit B peyvəndi hansı nahiyəyə vurulmalıdır?",
      options: ["Bazunun yuxarı 1/3 hissəsinə", "Sağrının yuxarı 1/4 xarici kvadratına", "Budun ön-lateral hissəsinə"],
      correct: 2
    }
  ]
},
// Məsələ 57
{
  condition: "Tibb bacısı 3 aylıq uşağa patronaja gedib. Ana uşağının narahat olmasından şikayət edir. Uşaq təbii qidalanır. Yanağında səpgilər, coğrafi dil, başın tüklü hissəsində Qneys (başın tüklü hissəsində qartmaq) nəzərə çarpır. Ananın dediyinə görə uşaq narahatdır, yuxusu pozulub. Hərarəti normaldır.",
  questions: [
    {
      question: "Tibb bacısı nədən şübhələnə bilər?",
      options: ["Otit", "Allergik rinit", "Ekssudativ kataral diatez"],
      correct: 2
    },
    {
      question: "Tibb bacısı anaya uşaqda bu vəziyyətin yaranma səbəbini necə izah edə bilər?",
      options: ["Ana öz qida rasionunun pozması nəticəsində", "Uşağın isti saxlanılmasına görə", "Uşağın süni qidalanması səbəbindən"],
      correct: 0
    },
    {
      question: "Qneysi (qartmaq) aradan qaldırmaq üçün tibb bacısı anaya hansı məsləhəti verə bilər?",
      options: ["Qneys olan nahiyəyə brilyant abısı çəkmək", "Qneys olan nahiyəyə bitki yağında isladılmış kompres qoymaq", "Qneys olan nahiyəyə spirt çəkmək"],
      correct: 1
    },
    {
      question: "Bu uşağa peyvəndlər nə zaman aparıla bilər?",
      options: ["Milli Peyvənd Təqviminə əsasən peyvənd aparılmalıdır", "Uşaq tam sağaldıqdan sonra", "Bu uşağa peyvənd eləmək əks göstərişdir"],
      correct: 1
    },
    {
      question: "3 aylıq uşağa Milli Peyvənd təqviminə əsasən hansı peyvəndlər aparılmalıdır?",
      options: ["Hib, OPV", "Pk, OPV", "Pk, GDT"],
      correct: 0
    }
  ]
},
// Məsələ 58
{
  condition: "Ana 6 aylıq uşağı ilə peyvənd olunmaq üçün poliklinikaya gəlib. Uşağın doğularkən çəkisi 3000q, boyu 52 sm olmuşdur. Hal hazırda çəkisi 7650 q, boyu 68 sm-dır. Müayinə zamanı sağrı və qasıq büküşlərində hiperemiya (qızartı) qeyd olunur. Uşaq qarışıq qidalanır.",
  questions: [
    {
      question: "Uşağın çəkisi antropometrik göstəricilərə görə fiziki inkişafa uyğundurmu?",
      options: ["Bəli, uyğundur", "Xeyr, uyğun deyil", "Uşağın çəkisi fiziki inkişaf meyarlarına aid deyil"],
      correct: 0
    },
    {
      question: "Uşağın boyu fiziki inkişafa uyğundurmu?",
      options: ["Bəli, uyğundur", "Xeyr, uyğun deyil", "Uşağın boyu fiziki inişaf meyarlarına aid deyil"],
      correct: 0
    },
    {
      question: "Tibb bacısı anaya hiperemiyanın səbəbini necə izah edə bilər?",
      options: ["Uşağın təbii qidalandırılması", "Uşağın süni qidalandırılması", "Uşağın isti saxlanılması və gigiyenik qaydalara riayət olunmaması"],
      correct: 2
    },
    {
      question: "Tibb bacısı anaya hansı məsləhəti verə bilər?",
      options: ["Uşağı döşdən ayırmağı məsləhət görməlidir", "Uşağın qidasını yeni qida ilə əvəz etməli", "Uşaq hər defekasiya aktından sonra dərhal yuyunmalı, çimizdirildikdən sonra təmiz qurulanmalı, paltarları təmiz olmalıdır"],
      correct: 2
    },
    {
      question: "Milli peyvənd Təqviminə görə bu uşağa hansı peyvəndlər aparılmalıdır?",
      options: ["Hib, Pk", "Pk, IPV", "OPV, GDT"],
      correct: 1
    }
  ]
},
// Məsələ 59
{
  condition: "Tibb bacısı patronaj vaxtı təbii qidalanan 11 aylıq uşaqda 39,1C temperatur aşkar edib. Uşağın dəri örtükləri al qırmızı rəngdə, ətraflar isti, selikli qışalar qurudur. Uşaq narahatdır, döşdən imtina edir. Uşaqda tənəffüsün tezləşməsi, təngnəfəslik, burun-dodaq ücbuçağının sianozu müşahidə olunur. Ananın dediyinə görə temperatur uşaqda 3 gündür yüksəlib. Huşu aydındır.",
  questions: [
    {
      question: "Tibb bacısının taktikası necə olmalıdır?",
      options: ["Hərarətsalıcı preparat təyin etməlidir", "Təcili hakimə məlumat verməlidir", "Antibiotik vurmalıdır"],
      correct: 1
    },
    {
      question: "Həkim gələnə gədər tibb bacısı nə edə bilər?",
      options: ["Çoxlu maye içirtmək, imalə etmək, bədənini soyutmaq məqsədilə nam maləfə ilə silmək", "İstiqac qoymaq", "Ayaqlarını isti su ilə vanna etmək"],
      correct: 0
    },
    {
      question: "Uşaqda hansı ağırlaşma ola bilər?",
      options: ["Anafilaktik şok", "Febril qıcolma", "Spazmofiliya"],
      correct: 1
    },
    {
      question: "Həkim uşağa litik qarışığı təyin etdi. Litik qarışıq hansı nahiyyəyə vurulur?",
      options: ["sağrı əzələsinin yuxarı xarici 1/4 kvadratına", "sağrı əzələsinin yuxarı daxili 1/4 kvadratına", "sağrı əzələsinin aşağı xarici 1/4 kvadratına"],
      correct: 0
    },
    {
      question: "Tibb bacısı anaya əlavə hansı məsləhəti verə bilər?",
      options: ["Uşağı döşdən ayırmaq", "Uşağı imalə etmək", "Uşağa çoxlu maye vermək, döşlə qidalandırmaq"],
      correct: 2
    }
  ]
},
// Məsələ 60
{
  condition: "Ana 2 aylıq oğlan uşağı ilə poliklinikaya müraciət etmişdir. Ananın dediyinə görə uşağa 1 gün əvvəl Pentaksim (GDTHibHepB) vaksinin ilk dozası vurulmuşdur. Günün sonuna doğru uşağın temperaturu 39,80C-yə yüksəlmiş, uşaq 2 saat ərzində fasiləsiz olaraq ağlamışdır. Obyektiv olaraq uşağın temperaturu hal-hazırda 38,70C-dir. Dərisi solğundur, süstlük nəzərə çarpır. Tənəffüs və ürək döyüntülərinin dəqiqəlik sayı artmışdır. Vaksinin yeridildiyi nahiyədə hiperemiya və 5 sm diametrində infiltrat qeyd olunur.",
  questions: [
    {
      question: "Pentaksim (Hib) hansı vaksinlərə aiddir",
      options: ["Canlı", "Cansız", "Gen mühəndisliyi ilə hazırlanmış"],
      correct: 1
    },
    {
      question: "Pentaksim necə vaksinin kombinasiyasıdır?",
      options: ["1", "3", "5"],
      correct: 2
    },
    {
      question: "Pentaksim vaksinin vurulmasına uşağın necə ayından başlamaq lazımdır?",
      options: ["2 ayından", "6 ayından", "4-7-ci gündən"],
      correct: 0
    },
    {
      question: "Pentaksim vaksini vurulduqdan sonra ağır reaksiya olarsa vaksinin növbəti dozasını vurmaq olarmı?",
      options: ["Bəli, vurmaq olar", "Xeyr, vurmaq olmaz", "Növbəti peyvənd sınaq qoyularaq vurulmalıdır"],
      correct: 1
    },
    {
      question: "Pentaksim vaksini orqanizmin hansı nahiyəsinə və necə yeridilir?",
      options: ["Budun ön-lateral nahiyyəsinə əzələdaxili, 90 bucaq altında", "Sağrı əzələsinə, əzələdaxili, 90 bucaq altında", "Bazunun lateral nahiyyəsinə dərialtı, 45 bucaq altında"],
      correct: 0
    }
  ]
},
// Məsələ 61
{
  condition: "Uşaq 1900 q çəki ilə doğulmuşdur. Vaxtından əvvəl doğulmuşlar üçün küvezə yerləşdirilmişdir. İlk 12 saat ərzində Hepatit B əleyhinə vaksin almışdır. Neonatoloq tərəfindən vərəm əleyhinə peyvəndin doğum evində vurulmasına əks-göstəriş qeyd edilmişdir. Hal hazırda uşaq 2,5 aylıqdır, çəkisi 3400 q-dır. Ümumi vəziyyəti kafidir.",
  questions: [
    {
      question: "Hal hazırda uşağa BCG (vərəm əleyhinə) vaksini vurmaq olarmı?",
      options: ["Vurmaq olar, lakin Mantu sınağı qoyulduqdan sonra", "Bəli, sınaq qoymadan vurmaq olar", "Xeyr, vurmaq olmaz"],
      correct: 0
    },
    {
      question: "BCG tərkibinə görə necə vaksindir?",
      options: ["Canlı", "Cansız", "Gen mühəndisliyi ilə hazırlanmış vaksindir."],
      correct: 0
    },
    {
      question: "BCG vaksini orqanizmin hansı nahiyəsinə və necə yeridilir?",
      options: ["Budun ön-lateral nahiyyəsinə əzələdaxili, 90 bucaq altında", "Bazu nahiyyəsinə, sol çiyindən 2 sm aşağı, dərriçi", "Sağrı əzələsinə, əzələdaxili, 90 bucaq altında"],
      correct: 1
    },
    {
      question: "BCG vaksini yeridildikdən sonra ilk immun reaksiya nə vaxt əmələ gəlir?",
      options: ["10 günə", "1 həftəyə", "8 həftəyə"],
      correct: 2
    },
    {
      question: "2,5 aylıq uşağa BCG vaksini yeridilməmişdən əvvəl Mantu sınağı qoyulmalıdırımı?",
      options: ["Xeyr, qoyulmur", "Bəli, mütləq qoyulmalıdır", "Mantu sınağı 1 yaşdan sonra qoyula bilər"],
      correct: 1
    }
  ]
},
// Məsələ 62
{
  condition: "Uşaq 3700 q çeki, 52 sm boy ilə doğulmuşdur. Apgar şkalası ilə 8 balla qiymətləndirilmişdir. Doğum evində müvafiq peyvəndləri almışdır. Bir yaşadək 3 dəfə Pentaksim və OPV ilə vaksinlanmışdır. Pnevmokok əleyhinə vaksin almamışdır. Hazırda 2 yaşı var.",
  questions: [
    {
      question: "Pnevmokok aleyhinə vaksinin vurulmasına uşağın hansı yaş dövründən başlanılır?",
      options: ["2 ayından", "2 yaşından", "1 yaşından"],
      correct: 0
    },
    {
      question: "Pk vaksini hansı nahiyəyə və necə yeridilir?",
      options: ["Sağrının yuxarı xarici 1/4 kvadratına, əzələdaxilinə 45 dərəcə bucaq altında", "Budun ön-lateral hissəsinə, əzələdaxilinə, 90 dərəcə bucaq altında", "Bazunun lateral hissəsinə, əzələdaxilinə, 30-45 dərəcə bucaq altında"],
      correct: 1
    },
    {
      question: "Pk vaksini neçə dəfə vurulur?",
      options: ["1 dəfə", "2 dəfə", "3 dəfə"],
      correct: 2
    },
    {
      question: "Pk vaksini tərkibinə görə necə vaksindir?",
      options: ["Canlı", "Cansız", "Gen mühəndisliyi ilə hazırlanmış"],
      correct: 1
    },
    {
      question: "Pk vaksini uşağı hansı xəstəlikdəm qoruyur?",
      options: ["Difteriya", "Polimielit", "Pnevmoniya"],
      correct: 2
    }
  ]
},
// Məsələ 63
{
  condition: "Poliklinikanın peyvənd otağında yerləşən soyuducunun işi elektrik naqillərində olan nasazlığa görə 4 saat ərzində dayanmışdır. Soyuducuda 24 ədəd müxtəlif tipli peyvənd flakonu var. Soyuducunun orta rəfində yerləşdirilən termometr +10 dərəcə C göstərir.",
  questions: [
    {
      question: "Peyvəndlər hansı temperatur rejimində saxlanılmalıdır?",
      options: ["(+10 dərəcə)-(+15 dərəcə)", "(+2 dərəcə )-(+8 dərəcə )", "(-2 dərəcə)-( -4 dərəcə)"],
      correct: 1
    },
    {
      question: "Peyvand otağının vaksın edən tibb bacısı vaksinlər saxlanılan soyuducunun temperatur göstəricisini gündə neçə dəfə yoxlamalıdır?",
      options: ["1 dəfə", "2 dəfə", "3 dəfə"],
      correct: 1
    },
    {
      question: "Soyuducunun işi 4 saat dayandığı halda soyuducuda olan vaksinləri istifadə etmək olarmı?",
      options: ["Xeyr, olmaz", "Bəli, olar", "Yoxlandıqdan sonra istifadə etmək olar"],
      correct: 0
    },
    {
      question: "Soyuducuda qalan vaksinləri nə etmək lazımdır?",
      options: ["Tez istifadə etmək", "Saxlamaq", "Məhv etmək"],
      correct: 2
    },
    {
      question: "Yarasız vaksin flakonları necə məhv edilir?",
      options: ["Müvafiq qaydalara uyğun olaraq məhv edilir", "Zibil qutusuna atılır", "Flakonlar sındırılaraq atılır"],
      correct: 0
    }
  ]
},
// Məsələ 64
{
  condition: "Doğum evində 39 həftəlik hamiləlikdən çəkisi 3600 q, boyu 51 sm olan uşaq doğulmuşdur. Doğularkən qışqırmışdır, əzələ tonusu normaldır, reflekslər normaldır. ÜDS (ürək döyünməsinin dəqiqədəlik sayı) 138/ 1 dəq., TS (tənəffüsün dəqiqədəlik sayı) 40-dir.",
  questions: [
    {
      question: "Tibb bacısı yenidoğulmuşu necə xarakterizə edə bilər?",
      options: ["Sağlam yenidoğulmuş uşaq", "Vaxtından əvvəl doğulmuş uşaq", "Vaxtından gec doğulan uşaq"],
      correct: 0
    },
    {
      question: "Yenidoğulmuşun vəziyyəti Aqpar şkalasına görə neçə balla qiymətləndirə bilər?",
      options: ["1-3 bal", "4-5 bal", "8-10 bal"],
      correct: 2
    },
    {
      question: "Bu uşaq döşə nə vaxt qoyula bilər?",
      options: ["Doğulduqdan sonra ilk 1 saat ərzində", "Doğulduqdan 2 saat sonra", "Doğulduqdan 1 gün sonra"],
      correct: 0
    },
    {
      question: "Peyvəndlər aparıla bilərmi?",
      options: ["Bəli, peyvəndlər Milli Peyvənd təqviminə əsasən aparılmalıdır", "Xeyr, bu uşağa peyvənd vurmaq olmaz", "Peyvəndlər bir aydan sonra vurula bilər"],
      correct: 0
    },
    {
      question: "Doğum evində yenidoğulmuşa hansı peyvəndlər aparılmalıdır?",
      options: ["Hepatit A, BCG, GDT", "Hepatit B, BCG, OPV", "Hepatit B, BCG, Pk"],
      correct: 1
    }
  ]
},
// Məsələ 65
{
  condition: "52 yaşlı arıq bədənli kişidə sürəkli öskürəkdən sonra qısa müddət ərzində 10 ml- dən çox al- qırmızı köpüklü qan xaric olur.",
  questions: [
    {
      question: "Nədən şübhələnirsiniz",
      options: ["Ağ ciyər qanaxmasından", "Mədə qanaxmasından", "Onikibarmaq bağırsaq qanaxmasından"],
      correct: 0
    },
    {
      question: "Görüləcək ilk tədbir nədən ibarətdir?",
      options: ["Xəstəyə 5%-li qlükoza məhlulu venaya köçürtmək", "Xəstəyə rahatlıq verib təcili yardıma zəng etmək", "Heparin inyeksiyasını vurmaq"],
      correct: 1
    },
    {
      question: "İlk tibbi yardım necə olmalıdır?",
      options: ["İsitqac qoymaq", "Venadaxilinə 10%-li 10ml kalsium xlor", "Oksiqen inhalyasiyasını aparmaq"],
      correct: 2
    },
    {
      question: "Diaqnozu təsdiq etmək üçün aparılacaq əsas müayinə üsulu hansıdır?",
      options: ["Döş qəfəsinin Rentgen müayinəsi", "USM", "Angioqrafiya"],
      correct: 0
    },
    {
      question: "Xəstə hansı şöbədə yerləşdirilməlidir?",
      options: ["Travmatologiya şöbəsində", "Terapiya şöbəsində", "Vərəm şöbəsində (və ya pulmonologiya şöbəsində)"],
      correct: 2
    }
  ]
},
// Məsələ 66
{
  condition: "23 yaşlı dülgərdə sağ əlin yuxarı 1/3-də dərin, kənarları hamar yara vardır. Xəstədə al-qırmızı, güclü, nəbzə uyğun qanaxma qeyd olunur.",
  questions: [
    {
      question: "Yaranın növü?",
      options: ["Kəsilmiş yara", "Didilmiş yara", "Deşilmiş yara"],
      correct: 0
    },
    {
      question: "Hansı qanaxmadan şübhələnirsiniz?",
      options: ["Venoz qanaxma", "Arterial qanaxma", "Kapillyar qanaxma"],
      correct: 1
    },
    {
      question: "Yara üçün xarakterik əlamətlər nədir?",
      options: ["Güclü qanaxma və ağrı", "Qansızmalar", "Nekroz"],
      correct: 0
    },
    {
      question: "İlk tibbi yardım nədən ibarətdir?",
      options: ["Qanaxmanın dayandırılması (turna qoymaqla) və aseptik sarğı", "Məlməmlərlə sarğı qoymaq", "Streptosid tozu ilə sargı"],
      correct: 0
    },
    {
      question: "Proflaktik tədbirlər hansılardır?",
      options: ["Antibiotik vurmaq", "Yaraya isitqaç qoymaq", "Tetanus əleyhinə zərdab və ya anatoksin"],
      correct: 2
    }
  ]
},
// Məsələ 67
{
  condition: "46 yaşlı kişinin qarnında kəskin ağrılar, qusma, qarın boşluğunda ekssudat və qarının ön divar əzələlərinin gərginləşməsi, taxtavari qarın (defans), nəbzin tezləşməsi (1 dəqiqədə 128 vurğu) və təngnəfəslik müşahidə edilir. Xəstənin vəziyyəti ağırdır və temperaturu yüksəkdir (38,60C).",
  questions: [
    {
      question: "Nədən şübhələnirsiniz",
      options: ["Qastrit", "Böyrək daşı", "Peritonit"],
      correct: 2
    },
    {
      question: "Görüləcək ilk tədbir nədən ibarətdir?",
      options: ["Mədəni zondla yumaq", "Buz qovuquçu və ya soyuq qoymaq, xəstəni sakitləşdirmək", "Narkotiklər vurmaq"],
      correct: 1
    },
    {
      question: "İlk tibbi yardım necə olmalıdır?",
      options: ["Şəraitdən asılı olaraq təcili yardıma zəng etmək", "İsitqaç qoymaq", "Ağrıkəsici vurmaq"],
      correct: 0
    },
    {
      question: "Xəstə hansı şöbədə yerləşdirilməlidir?",
      options: ["Terapiya şöbəsində yerləşdirilməlidir", "Təcili cərrahi şöbəyə yerləşdirilməlidir", "Travmatologiya şöbəsində"],
      correct: 1
    },
    {
      question: "Xəstənin əməliyyata hazırlıq zamanı sanitar işlənməsi necə olmalıdır?",
      options: ["Təcili hallarda tam sanitar işlənmə aparılmır", "Tam sanitar işlənmə mütləq aparılır", "Mədə zondla yuyulduqdan sonra aparılır"],
      correct: 0
    }
  ]
},
// Məsələ 68
{
  condition: "50 yaşlı kişinin qarnında sancı şəklində tutmalarla ağrılar, ağrıların əvvəlcə məhəlli (lokal) olmasına baxmayaraq sonradan yayılmış ağrılara keçməsi müşahidə olunur. Ağrılar tez-tez təkrarlanır, ara-sıra qısma muşahidə olunur, lakin yüngülləşmə hiss olunmur. Bəzən qusuntu kütləsindən nəcis iyi gəlir. Defekasiya və qazların ləngiməsi müşahidə olunur. Xəstənin rəngi avazımış və soyuq tərlə örtülmüşdür. Dil quru və qəhvəyi rəngli ərplə örtülmüşdür, ağızdan pis iy gəlir.",
  questions: [
    {
      question: "Nədən şübhələnirsiniz?",
      options: ["Bağırsaq keçməməzliyindən", "Xroniki apendisitdən", "Böyrək daşı xəstəliyindən"],
      correct: 0
    },
    {
      question: "İlkin görüləcək tədbirlər nədən ibarətdir?",
      options: ["Ağrıkəsici, narkotiklər vurmaq", "Xəstəyə rahatlıq verib, təcili yardıma zəng etmək", "İmalə etmək"],
      correct: 1
    },
    {
      question: "Sizin ilk addımınız necə olmalıdır?",
      options: ["Narkotiklər vurmaq", "Mədəni zondla yumaq", "Buz qovuçuğu və ya soyuq qoymaq, xəstəni sakitləşdirmək"],
      correct: 2
    },
    {
      question: "Belə xəstəyə hansı müayinələr mütləq aparılmalıdır?",
      options: ["Laparosentez", "Artroskopiya", "Rentgen müayinəsi və qastroskopiya (FQDS)"],
      correct: 2
    },
    {
      question: "Xəstənin daşınması necə həyata keçirilir?",
      options: ["Xərəkdə uzadılmış, başı yana çevrilmiş vəziyyətdə", "Oturaq vəziyyətdə", "Yarımoturaq vəziyyətdə"],
      correct: 0
    }
  ]
},
// Məsələ 69
{
  condition: "26 yaşlı gənc oğlanda bazunun yuxarı 1/3 – də palpasiya zamanı və hərəkət etdirdikdə, ağrılar müşahidə edilir. Palpasiya zamanı krepitasiya hiss olunur. Ətrafın funksiyası pozulmuşdur. Xəstənin vəziyyəti ağırdır, dəri örtüyü soyuq tərlə örtülmüşdür.",
  questions: [
    {
      question: "Nədən şübhələnirsiniz",
      options: ["Bazunun qapalı siniyi", "Bazunun çıxığı", "Yumşaq toxumaların əzilməsi"],
      correct: 0
    },
    {
      question: "İlkin görüləcək tədbirlər?",
      options: ["Repozisiya etmək", "Paltarlarını çıxartmaq", "Xəstəyə rahatlıq vermək və paltarlarını çıxartmamaq"],
      correct: 2
    },
    {
      question: "İlk tibbi yardım nədən ibarətdir?",
      options: ["Soyuq qoymaq, immobilizasiya etmək", "İsitqac qoymaq", "Spirtlə kompres qoymaq"],
      correct: 0
    },
    {
      question: "Mütləq müayinə hansıdır?",
      options: ["Dopler müayinə", "USM(ultura səs müayinəsi)", "Rentgenoloji müayinə"],
      correct: 2
    },
    {
      question: "Ağrının azaltmaq üçün nə etmək lazımdır?",
      options: ["Kompleks vitamin terapiyası", "2%-li 2-5 ml novokain blokadası etmək", "Antibiotiklərdən istifadə etmək"],
      correct: 1
    }
  ]
},
// Məsələ 70
{
  condition: "Aterosklerozdan əziyyət çəkən adam həkimin yanına gəlib. Ayaqdan aşağıda ağrı, iki barmaq göyərib, qaralıb, həmin nahiyyədə hissiyyat yox. Həkim diaqnoz qoyub: Nekroz.",
  questions: [
    {
      question: "Nədən şübhələnirsiz?",
      options: ["Yaş qanqrena", "Quru qanqrena", "Klassik nekroz"],
      correct: 2
    },
    {
      question: "Hansı üsulla müalicə olunur?",
      options: ["Cərrahi Nekrostomiya", "Cərrahi Nekrotomiya", "Pəncənin ambutasiyası"],
      correct: 1
    },
    {
      question: "Nekrotik proses olduğunu nədən bilirsiniz?",
      options: ["Toxumalarda hissiyyat olmaması", "ətraf toxumanin qaralması", "demorkasion xəttə görə"],
      correct: 1
    },
    {
      question: "Ağırlaşması nədir?",
      options: ["Sepsis", "İntoksikasiya", "Nekrozun sponton şəkildə qopması"],
      correct: 2
    },
    {
      question: "Müalicə nədən ibarət olmalıdı?",
      options: ["Atreskleroza", "Sepsisə qarşı", "İntoksikasiya qarşı müalicə"],
      correct: 0
    }
  ]
},
// Məsələ 71
{
  condition: "Uşaq həyatdə topla oynayarkən yıxılıb Burundan qan gəlib. Ana uşaqı yaxınlıqdakı tibb bacısinin yanına aparıb.",
  questions: [
    {
      question: "Tibb bacı burun qanaxma zamanı uşağa hansı vəziyyət verməlidir?",
      options: ["Başını qabağa ayib döş sümüyünə sıxmalı", "Başını arxaya əyməli", "Başını düz saxlamalı"],
      correct: 0
    },
    {
      question: "Qanaxma zamanı nə etmək lazımdır?",
      options: ["3%li perksidə isladılmıs tampon drenaj", "Spirtdə isladılmış tampon", ""],
      correct: 0
    },
    {
      question: "Tibb bacı nə etməlidir?",
      options: ["Burun qanadlarını baş və işarə barmaqla burun çapərinə sıxmaq", "Burun qanadlarını genəldirmək", ""],
      correct: 0
    },
    {
      question: "Qanaxma zamanı burun üstünə nə qoyulur?",
      options: ["Buz qovuğu qoyulur", "Heçnə qoyulmur", ""],
      correct: 0
    },
    {
      question: "Bütün bunlara baxmayaraq qanaxma dayanmırsa uşağı hansı həkim mütəxəsisə göndərərdiz?",
      options: ["Terapevtə", "Cərraha", "Otilarinqoloqa"],
      correct: 2
    }
  ]
},
// Məsələ 72
{
  condition: "Heksa vaksin",
  questions: [
    {
      question: "Heksa vaksin necə vaksindir?",
      options: ["Canlı", "Cansız", ""],
      correct: 1
    },
    {
      question: "Vaksin hansı temperaturda saxlanılır?",
      options: ["+2 +8", "+4 +6", "+ 6 +8"],
      correct: 0
    },
    {
      question: "Hansı nahiyyəyə vurulur?",
      options: ["Budun ön lateral hissəsinə", "Dəri altı", "əzələ daxili"],
      correct: 0
    },
    {
      question: "Heksanın tərkibinə neçə vaksin daxildir?",
      options: ["5", "6", "3"],
      correct: 1
    },
    {
      question: "Soyuducuda hansı rəfdə saxlanılır",
      options: ["Orta rəfdə", "Aşağı rəfdə.", "Soyuducunun qapısında"],
      correct: 0
    }
  ]
},
// Məsələ 73
{
  condition: "Xəstənin sol qolundaki əlində 1 barmağ sağ əlində 3-4 barmağı don vurub. Şişkin qızartı, Dəri altı maye yığılıb",
  questions: [
    {
      question: "Neçənci dərəcəli donmadı?",
      options: ["1 ci dərəcəli donma", "2 ci dərəcəli donma", "3 cü dərəcəli donma"],
      correct: 1
    },
    {
      question: "Donmadan neçə müddət sonra demarkasion xətt əmələ gəlir?",
      options: ["10 - 12 gün", "25-30 gün", "4-6 saat"],
      correct: 0
    },
    {
      question: "Don vurmuş nahiyyənin qan dövranını bərpa etmək ücün hansı ilk tibbi yardım göstərilir?",
      options: ["Spirtli pampıqla sürtmək", "Quru alla sürtmək", "Yodla silmək"],
      correct: 0
    },
    {
      question: "Demarkasion xətt hansı toxumalar arasında əmələ gəlir?",
      options: ["Dəri ilə Sağlam toxuma arasında", "Sağlam toxuma ilə ölmüş toxuma arasında", "Ölmüş toxuma ilə dəri arasında"],
      correct: 1
    }
  ]
},
// Məsələ 74
{
  condition: "46 yaşlı kişi yataqda uzanmış vəziyyətdədir. Kəskin təngnəfəslik, öskürək, az miqdarda qatı bəlğəm ifrazı, ümumi zəiflikdən şikayətlənir. 4 ildir vaxtaşırı boğulma tutmaları olur. Tutma zamanı 'berotek' inhalyasiyası alır. 5 gün əvvəl kəskin respirator infeksiyaya yoluxub. Bu fonda tutmaların sayı artıb, tənginəfslik keçmir, dərman inhalyasiyası qısa müddətli effekt verir. Obyektiv olaraq: dəri solğun, sianozludur, müəyyən məsafədən xırıltılı tənəffüs eşidilir. Nəbz 1 dəq. 120, A/T -160/90 mm c. süt., tənəffüs 1 dəq. 28-dir.",
  questions: [
    {
      question: "Nədən şübhələnirsiniz?",
      options: ["Bronxial astma", "Xroniki bronxitin kəskinləşməsi", ""],
      correct: 0
    },
    {
      question: "Xəstənin döş qəfəsinə xardal yaxması qoymaq olarmı?",
      options: ["Xeyr", "Bəli", ""],
      correct: 0
    },
    {
      question: "Xəstənin ayaqlarını isti vannaya qoymaq:",
      options: ["Olmaz", "Olar", ""],
      correct: 0
    },
    {
      question: "Oksigenoterapiya aparılması məqsədə uyğundurmu?",
      options: ["Bəli", "Xeyr", ""],
      correct: 0
    },
    {
      question: "Xəstənin vəziyyəti necə olmalıdır?",
      options: ["Yarım oturaq vəziyyət", "Uzanmış vəziyyət", ""],
      correct: 0
    }
  ]
},
// Məsələ 75
{
  condition: "15 yaşlı oğlanda qaynar suyun təsiri nəticəsində gövdənin ön hissəsində va aralıq nahiyyəsində 3-4 dərəcəli yanıq var.",
  questions: [
    {
      question: "Bu necə yanıqdır?",
      options: ["kimyəvi", "termiki", "heç biri"],
      correct: 1
    },
    {
      question: "Xəstədə nədir?",
      options: ["yanıq xəstəliyi", "gövdənin yanığı", "aralıq nahiyyənin yanığı"],
      correct: 0
    },
    {
      question: "Yanığın sahəsi bədənin neçə faizini təşkil edir?",
      options: ["19", "27", "9"],
      correct: 0
    },
    {
      question: "Sizin taktikaniz?",
      options: ["xəstəxanaya göndərmək", "məsləhət vermək", "müalicə etmək"],
      correct: 0
    },
    {
      question: "Xəstəxanada infuzion terapiya ilk öncə hansı məqsəd daşımalıdır?",
      options: ["qidalandırıcı", "dezintoksikasiya", "heç biri"],
      correct: 1
    }
  ]
},
// Məsələ 76
{
  condition: "Yaşlı arıq kişi bir neçə ildir ki xəstədir. Bir neçə gün öncə KRV keçirib. Hal-hazırda uzanıb təngnəfəsdir. Öskürdükdə ağzından köpüklü, qanlı bəlğəm gəlir. Periferik Limfa vəziləri böyümüşdür.",
  questions: [
    {
      question: "Bu nə xəstəlikdir",
      options: ["bronxial astma", "Vərəm, ağciyər qanaxması", "plevrit"],
      correct: 1
    },
    {
      question: "Bu xəstəliyin törədicisi nədir?",
      options: ["mikrobakteriyalar", "streptokoklar", ""],
      correct: 0
    },
    {
      question: "Bu xəstəliyin aktiv immunizasiyası nə ilə aparılır?",
      options: ["VƏP", "QPM", "AGDT"],
      correct: 0
    },
    {
      question: "Sizin taktikanız?",
      options: ["həkim çağırmaq", "heçnə etməmək", "müalicə etmək"],
      correct: 0
    }
  ]
},
// Məsələ 77
{
  condition: "Uşaq 38 həftəlik hamiləlikdən 3000q çəki, 51 sm boyla doğulmuşdur. Doğularkən vəziyyəti Apqar şkalası ilə 8 balla qiymətləndirilmişdir. Hal hazırda 4 günlükdür. Çəkisi 2750q-dır. Döş vəziləri şişkinləşmiş və bərkləşmişdir. Dəridə qabıqlanma müşahidə edilir. Bu gündən dəri və selikli qişalarda saralma nəzərə çarpır. Uşağın vəziyyəti kafidir. Döşü aktiv əmir. Doğum evində bütün peyvəndləri almışdır.",
  questions: [
    {
      question: "Uşağın ilkin çəki itkisi neçə faiz təşkil edir?",
      options: ["8%-10%", "3%-5%", "15%-20%"],
      correct: 0
    },
    {
      question: "Döş vəzilərində baş verən dəyişiklik necə adlanır?",
      options: ["Fizioloji eritema", "Fizioloji sarılıq", "Fizioloji mastit"],
      correct: 2
    },
    {
      question: "Dəridə olan dəyişikliyi necə izah edə bilərsiniz?",
      options: ["Fizioloji haldır", "Patoloji haldır", "Peyvənddən sonra yaranmışdır."],
      correct: 0
    },
    {
      question: "Dəri və selikli qişalarda olan sarılıq necə adlanır?",
      options: ["Fizioloji sarılıq", "Fizioloji eritema", "Fizioloji vulvovaginit"],
      correct: 0
    },
    {
      question: "Fizioloji sarılıq zamanı hansı tədbir görülməlidir?",
      options: ["Uşaq yalnız ana südü ilə qidalandırılmalıdır.", "Uşağı imalə etmək lazımdır.", "Uşağa regidron vermək lazımdır"],
      correct: 0
    }
  ]
},
// Məsələ 78
{
  condition: "Uşağın 5 yaşı var, bağçaya gedir. Kəskin xəstələnmişdir. Bədən temperaturu 37,8°C-ya yüksəlmiş, başın tüklühissəsinin dərisində, bədən və ətrafların dərisində papulyoz səpgilər əmələ gəlmişdir. Növbəti gün bu səpgilər içərisində maye olan vezikulaya formalaşmışdır. Ağızın selikli qişasında da vezikulalar qeyd edilir. Səpgilər polimorfdur.",
  questions: [
    {
      question: "Uşaqda hansı xəstəlik ola bilər?",
      options: ["Su çiçəyi", "Qızılca", "Göyöskürək"],
      correct: 0
    },
    {
      question: "Müalicəsi necə olmalıdır?",
      options: ["Dəri və selikli qişaların gigeyenası, səpgilərin brilyant abısı ilə işlənməsi", "Antibakterial terapiya", "Fizioterapiya"],
      correct: 0
    },
    {
      question: "Xəstəlikdə neçə gün karantin təyin olunur?",
      options: ["5 gün", "Karantin təyin olunmur.", "21 gün"],
      correct: 2
    },
    {
      question: "Tibb bacısı nə etməlidir?",
      options: ["Antihistamin preparatlar təyin etməlidir", "Anaya uşağın qidalanması ilə əlaqədar məsləhət verir. Uşağı dəri həkiminə aparmağı tövsiyyə etməlidir.", "Həkimə çağırış yazmalıdır. Ananı xəbərdar etməlidir ki, uşağı məktəbə aparmasın, həkimin müayinəsini gözləsin."],
      correct: 2
    },
    {
      question: "Xəstəlikdən sonra necə immunitet yaranır?",
      options: ["Təbii passiv immunitet yaranır.", "Immunitet yaranmır.", "Təbii aktiv immunitet yaranır"],
      correct: 2
    }
  ]
},
// Məsələ 79
{
  condition: "Arı sancmasından sonra xəstədə ürəkbulanma, ürək döyüntüsünün tezləşməsi, huşunun itməsi, tənəffüsün çətinləşməsi baş verir.",
  questions: [
    {
      question: "Nə baş vermişdir?",
      options: ["Anafilaktik şok", "Beyin ödəmi", "Sağ alin iflici"],
      correct: 0
    },
    {
      question: "Hansı tədbir həyata keçirilir?",
      options: ["Arının zəhər kisəcəyini çıxartmaq", "Heçnə etməmək", "Deşib çıxartmaq"],
      correct: 0
    },
    {
      question: "Həkim gələnə qədər hansı tədbir həyata keçirilir?",
      options: ["Soyuq qoymaq", "İsti qoymaq", "Heçne qoymamaq"],
      correct: 0
    },
    {
      question: "Plastik kartla, küt bıçaqla, dırnaq yiyəsi və başqa vasitələrin köməyi ilə arı neçtəri necə çıxarılır?",
      options: ["Dərinin üzərindən iynəni sürüşdürərək arı zəhərini partlatmadan çıxarmaq", "Kisəcəyi partladıb çixartmaq", "Çıxarılmamalıdır"],
      correct: 0
    },
    {
      question: "Həkim gələnə qədər hansı tədbiri həyata keçirə bilərsiz?",
      options: ["Arı sancan nahiyyəni yodla isləmək", "Sabunlu su ilə yumaq", "Heçnə etməmək"],
      correct: 1
    }
  ]
},
// Məsələ 80
{
  condition: "Yanıq şöbəsinə 35 yaşlı üstünə qaynar cəynik dağılan qadın daxil olmuşdur. Xəstənin sol qolu və gövdənin ön səthində III A dərəcəli, sağ qolunda III B dərəcəli yanıq qeyd edilir.",
  questions: [
    {
      question: "Xəstədə hansı yanıq növüdür?",
      options: ["Kimyəvi yanıq", "Termiki yanıq", "şüa yanıq"],
      correct: 1
    },
    {
      question: "Xəstədə neçə faiz səthi yanıq qeyd edilir?",
      options: ["27%", "18%", "36 %"],
      correct: 1
    },
    {
      question: "Xəstədə neçə faiz dərin yanıq qeyd edilir?",
      options: ["27%", "18%", "9%"],
      correct: 2
    },
    {
      question: "Yaranın üzərinə nə sürtülür?",
      options: ["Yanıq əleyhinə maz sürtülür", "Aseptik sarğı qoyulur", "isti qoyulur"],
      correct: 1
    },
    {
      question: "Ağrıkəsici vurmaq olarmı?",
      options: ["Bəli, olar", "Xeyr, olmaz", "yod sürtməli"],
      correct: 0
    }
  ]
},
// Məsələ 81
{
  condition: "65 yaşlı kişi son günlər sidik ifrazının çətinləşməsindən, ağrılı olmasından şikayətlənir. Xəstə sidik ifrazı hissi olması baxmayaraq sidiyin gec ifraz olmasından, sidik təzyiqinin azalmasından, sonda damcı sidik ifrazından şikayət edir.",
  questions: [
    {
      question: "Nədən şübhələnirsiz?",
      options: ["Prostatın adenoması", "Sistit", "Pretonit"],
      correct: 0
    },
    {
      question: "Hansı müayinə metodu məsləhət görülə bilər?",
      options: ["Rentgen müayinə", "Endoskopiya", "Ultrasəs müayinə"],
      correct: 2
    },
    {
      question: "Xəstənin vəziyyətini necə yüngülləşdirmək olar?",
      options: ["Sidik kisəsinin kateterizasiyası", "İmalə", "Mədə yuyulur"],
      correct: 0
    },
    {
      question: "Xəstədə hansı ağırlaşma ola bilər?",
      options: ["Pielonefrit", "Mədə xərçəngi", "Perforasiya"],
      correct: 0
    },
    {
      question: "Xəstə hansı şöbəyə qospitalizə olunur?",
      options: ["Qastroenteroloji", "Onkoloji", "Uroloji"],
      correct: 2
    }
  ]
},
// Məsələ 82
{
  condition: "17 yaşlı xəstə diz və dirsək oynağında olan ucuçu xarakterli ağrıdan, ürək nahiyəsində xoşagəlməz hissdən, ümumi zəiflik və iştahasızlıqdan şıkayət edir. İki həftə əvvəl angina ilə xəstələndiyini söyləyir. Baxış zamanı xəstənin narahat olduğu, oynaqlarının şişkin və ağrılı olması, temperaturun 37,8, A/T 110/70, nəbzinin 85 vurğu olması müəyyənləşib.",
  questions: [
    {
      question: "Bu hansı xəstəlik ola bilər?",
      options: ["revmatizm", "KRVİ", "salmonelyoz"],
      correct: 0
    },
    {
      question: "Sizin taktikanız?",
      options: ["xəstəxanaya göndərmək", "məsləhət vermək", "müalicə etmək"],
      correct: 0
    },
    {
      question: "Müalicə necə aparılır?",
      options: ["ayda bir dəfə", "sxemlə", "gundə bir dəfə"],
      correct: 1
    },
    {
      question: "Oynağa nə qoyulur?",
      options: ["sipirt", "soyuq", "isitqac"],
      correct: 2
    },
    {
      question: "Gələcəkdə hansı fəsadlar ola bilər?",
      options: ["Ürək qüsuru, revmakardit", "plevrit", "pnevmoniya"],
      correct: 0
    }
  ]
},
// Məsələ 83
{
  condition: "Vaksinator səhər işə gələrkən vaksinlər saxlanılan soyuducunun -2° C olduğunu müəyyən edib.",
  questions: [
    {
      question: "Belə vəziyyətdə vaksinator tibb bacısı nə etməlidir?",
      options: ["Donma şübhəsi olan vaksinlər ücün 'silkələnmə testi' aparmalı", "Vaksinlər dərhal məhv edilməlidir", "Vaksinləri istifadə etməlidir"],
      correct: 0
    },
    {
      question: "Donmaya həssas vaksinlər hansılardır?",
      options: ["GDT: QPM", "GDT; DT", "OPV: QPM"],
      correct: 0
    },
    {
      question: "Donmayan vaksinlər soyuducunun hansı rəfində saxlanılır?",
      options: ["Aşağı rəfdə", "Orta rədə", "Soyuducunun qapısında"],
      correct: 1
    },
    {
      question: "Vaksinləri saxlamaq üçün optimal temperatur hansıdır?",
      options: ["(+2° C)-(+8° C)", "B(+12° )-(+14° C)", "(-2° C) - (-8° C)"],
      correct: 0
    },
    {
      question: "Yararsız vaksin flakonlar necə məhv edilir?",
      options: ["Müvafiq qaydalara uyğun olaraq məhv edilir", "Zibil qutusuna atılır", "Flakonlar sındırılaraq atılır"],
      correct: 0
    }
  ]
},
// Məsələ 84
{
  condition: "64 yaşlı kişi sidikdə qan olmasından, sidik ifrazının ağrılı olmasından, ağrıların bel, qasıq və cinsiyyət orqanlarına yayılmasından şikayət edir.",
  questions: [
    {
      question: "Xəstədə nə baş vermişdir?",
      options: ["Sidik yollarının daşı", "Sistit", "Peritonit"],
      correct: 0
    },
    {
      question: "İstiqac istifadə etmək məqsədə uyğundurmu?",
      options: ["Bəli", "Xeyr", ""],
      correct: 1
    },
    {
      question: "Aşağıdakılardan hansını vurmaq olar?",
      options: ["Noşpa, baralgin", "Deksametazon", "Dimedrol"],
      correct: 0
    },
    {
      question: "Diaqnoz hansı üsulla təsdiq oluna bilər?",
      options: ["Rentgen", "Ultrasəs müayinə", "Biopsiya"],
      correct: 1
    },
    {
      question: "Xəstə hansı həkimə göndərilir?",
      options: ["Proktoloqa", "Urologa", "Qastroentoloqa"],
      correct: 1
    }
  ]
},
// Məsələ 85
{
  condition: "Yenidoğulmuş uşaq narahatdır. Döşdən imtina edir. qarnında köp var.",
  questions: [
    {
      question: "Bu nədir ?",
      options: ["dispepsiya", "dizinteriya", "metiorizm"],
      correct: 2
    },
    {
      question: "İlk yardım necə olunmalıdır?",
      options: ["imalə", "təmiz havaya çıxartmaq", "isti vanna"],
      correct: 0
    },
    {
      question: "İmalə üçün nə qədər su lazımdır?",
      options: ["10 ml\\kq", "100 ml\\kq", "50 ml\\kq"],
      correct: 0
    },
    {
      question: "Qazçıxardıcı borunu nə qədər saxlayırlar?",
      options: ["10-15 dəq", "20-25 dəq", "3-5 dəq"],
      correct: 2
    },
    {
      question: "İmalə hansı vəziyyətdə qoyulmalıdır?",
      options: ["arxası üstdə", "sol böyrü üstdə", "sağ böyrü üstdə"],
      correct: 1
    }
  ]
},
// Məsələ 86
{
  condition: "Ana 10 günlük uşağı ilə poliklinikaya gəlib. Uşaq təbii qidalanır. 2 gündür narahatdır. Çətinliklə qidalanır. Temperatur normaldır, yuxusu pozulub, tez-tez oyanır. Gün ərzində 1dəfə nəcis ifraz edib.Qarnında köp var.",
  questions: [
    {
      question: "Nədən şübhələnirsiniz?",
      options: ["qəbizlik", "bağırsaq keçməməzliyi", "meteorizm"],
      correct: 0
    },
    {
      question: "İlk yardım nədir?",
      options: ["imalə", "istiqac", "soyuq"],
      correct: 0
    },
    {
      question: "İmalə üçün suyun temperaturu neçə olmalıdır ?",
      options: ["37-39", "40-41", "35-37"],
      correct: 0
    },
    {
      question: "Qazçıxarıcı boru hansı dərinliyə yeridilməlidir?",
      options: ["2 sm", "5 sm", "7 sm"],
      correct: 0
    },
    {
      question: "Qarın hansı istiqamətdə masaj edilməlidir?",
      options: ["saat əqrəbi istiqamətində", "aşağıdan yuxarı", "yuxarıdan aşağı"],
      correct: 0
    }
  ]
},
// Məsələ 87
{
  condition: "Tibb bacisi patronaj zamanı təbii qidalanan 9 aylıq uşaqda 38-39 temperatur, ətrafları isti, selikli qişaları qurudur. Uşağın dəri örtüyü al qırımızdır. Huşu aydındir.",
  questions: [
    {
      question: "Müşahidə edilən hal hərarətin hansı stadiyasıdır?",
      options: ["febril", "subfebril", "heç biri"],
      correct: 0
    },
    {
      question: "Tibb bacısının taktikası necə olmalıdır?",
      options: ["həkim çağırmaq", "məsləhət vermək", "söhbət etmək"],
      correct: 0
    },
    {
      question: "İlk yardım olaraq iri damarlara nə qoymaq olar?",
      options: ["xardal", "isitqac", "buz"],
      correct: 2
    },
    {
      question: "Hansı inyeksiyanı etmək olar?",
      options: ["litik qarışıq", "lazikis", "amoksosillin"],
      correct: 0
    },
    {
      question: "Litik qarışıq sarğı nahiyyəsinin hansı kvadratına vurulmalıdır?",
      options: ["yuxarı kənar", "yuxarı daxili", "aşağı kənar"],
      correct: 0
    }
  ]
},
{
  condition: "Uşağın 7 yaşı vardır. Bağçaya gedir. '3 gündür ki xəstələnib. Gecələr temperaturu yüksək olur. İştahası pisdir, baş ağrısı, ürəkbulanma və qarında ağrılardan şikayət edir. Sidiya tez-tez gedir, sidiyi tünd və kəskin iylidir. Müayinə zamam derisi solğundur, dili arplidir, əsəniyi qızarıb. Qarında ağrı var, Pasternatski simptomu müsbatdır. Nəcis ifrazı normaldır.",
  questions: [
    {
      question: "Uşaqda hansı xəstəlik ola bilər?",
      options: ["Pielonefrit", "Qida zəhərlənməsi", "Qlomerulonefrit"],
      correct: 0
    },
    {
      question: "Xəstəliyin yaranmasına səbəb nədir?",
      options: ["İnfeksion, allergik xəstəlikdir", "Bağırsaq infeksiyasıdır", "Virus xəstəlikdir"],
      correct: 0
    },
    {
      question: "Tibb bacısı nə etməlidir?",
      options: ["Uşağı müayinə üçün həkimin qəbuluna dəvət edir", "Təcili xəstəxanaya göndərməlidir", "Söhbət etməlidir"],
      correct: 1
    },
    {
      question: "Xəstəliyin fəsadı nə ola bilər?",
      options: ["Qaraciyər sirrozu", "Kəskin və xroniki böyrək çatmamazlıq", "Peritonit"],
      correct: 1
    },
    {
      question: "Xəstəlikdə dispanser qeydiyyata götürülür?",
      options: ["Bəli", "Xeyr"],
      correct: 0
    }
  ]
},
{
  condition: "Uşağın 1,5 yaşı var. Ananın dediyine göre 2 gündür xastadır. Baden temperaturu 39,0°, ümumi zsiflik. tengnefeslik, tez-tez tekrarlanan yaş öskürek müşahide edilir. Teneffüsün 1 deqigelik sayı 45-dir. Ağız-burun ücbucağında sianoz nezere çarpır.",
  questions: [
    {
      question: "Tibb bacısı hansı xastalikdan şübhalene bilar?",
      options: ["Pneumoniya", "Anemiya", "Revmatiz"],
      correct: 0
    },
    {
      question: "Uşağa hansı yardımı göstere bilersiniz?",
      options: ["Fiziki üsullarla temperaturu aşağı salmaç", "Antibakterial terapiya", "Hormonal terapiya"],
      correct: 1
    },
    {
      question: "Hansı müayine üsulu diagnostik ehemiyyete malikdir?",
      options: ["EKQ", "Rentgen müayine", "Sidiyin ümumi müayinesi"],
      correct: 1
    },
    {
      question: "Usağı bu xestalikden gorumaq üçün hansı vaksinle aktiv immunlaşma aparılır?",
      options: ["QPM", "OPV", "PKV"],
      correct: 2
    },
    {
      question: "Milli Peyvend tayimine göre uşaq neça defa bu xestaliye göre immunlaşdırılmalıdır?",
      options: ["5 defa", "1 defa", "3 defa"],
      correct: 2
    }
  ]
},
{
  condition: "Ana uşağı peyvende getirib. Uşağın bitkiişlerinde qrzartı ve səpgj var.",
  questions: [
    {
      question: "Bu nedir?",
      options: ["bişməcə", "diatez", "hemongioma"],
      correct: 1
    },
    {
      question: "Xəstəliyin səbəbi nedir?",
      options: ["Ferment çatışmamazlığı", "Gigiyenik qaydalar gözlenilmeyib", "İsti saxlamaq"],
      correct: 0
    },
    {
      question: "Peyvand vurmaq olarmı?",
      options: ["mütlaç olmalıdır", "olmaz", "olar"],
      correct: 1
    },
    {
      question: "Sizin anaya meslehatiniz.",
      options: ["Gigiyenik qaydaları gözlemek", "Təmiz havada gazdimek", "İsti saxlamaq"],
      correct: 0
    },
    {
      question: "Pehrizde ne olmalıdır?",
      options: ["Dietik yemekler", "Sîtrus meyvelari", "İstenilen yemek"],
      correct: 0
    }
  ]
},
{
  condition: "Pasiyentin 57 yaşı var. Hipertoniyalı xeste qaflaten boğulma, tanganafeslik, öskürek, çahrayı köpüklü belğam ifrazından şikayet edir. A/t 200/110 mm cs, nabz 120.",
  questions: [
    {
      question: "Xostada hansı vaziyyatdir?",
      options: ["Ürək astması", "Tanaffüs çatmamazlıq", "Hipertonik kriz"],
      correct: 0
    },
    {
      question: "Tibb bacısı darhal ne etmelidir?",
      options: ["Xastani üfüqi vaziyyatda uzatmaq", "Hakim çağırmaq", "Darman tayin etmak"],
      correct: 1
    },
    {
      question: "Bu xesteye tәxiresalınmaz yardım zamanı ilk atılacağı addım nadir?",
      options: ["Morfinin tedbiri", "Xasteni oturmuş vaziyyete getirmek", "Antibiotiklerin teyin edilmesi"],
      correct: 1
    },
    {
      question: "Tibb bacısı oksigen terapiyası zamanı hansı növ cihazdan istifade etmelidir?",
      options: ["Aspirator", "Nebulizator", "Oksigen maskası"],
      correct: 2
    },
    {
      question: "Hansı preparatlar xesteye teyin edilebilir?",
      options: ["Atropin, adrenalin", "Laziks, strofantin", "Kontrikal,festal"],
      correct: 1
    }
  ]
},
{
  condition: "5 aylıq körpa valideynleri ile peyvend kabinetine getirilib. Uşaqda heç bir xroniki xestelik yoxdur, sağlam doğulub ve çeki göstericileri normaldir. Peyvend tarixçasına asasan, 2-ci ayda heksavalent (Hexa) vaksinla peyvend olunub. Hazırda 2-ci dozanın vaxtidir.",
  questions: [
    {
      question: "Heksavalent peyvend hansı xesteliklere qarşı qoruma temin edir?",
      options: ["Yalnız hepatit B ve poliomielit", "Hepatit B, difteriya, tetanus, göyöskürek, poliomielit, Hib infeksiyası", "Qizılca, maxmərək, göyöskürek"],
      correct: 1
    },
    {
      question: "Peyvenddan sonra an çox rast galinan eks tesir hansıdır?",
      options: ["Badan heraretinin yükselması ve inyeksiya yerinde qizarıqlıq", "Anafilaktik şok", "Uzunmüddetli heraret ve iflic"],
      correct: 0
    },
    {
      question: "Peyvanddan avval uşağı hazırlamaq üçün ne edilmelidir?",
      options: ["Antipiretik darmanlar vermek", "Körpanin sağlamlığını yoxlamaq ve herareti ölçmek", "Körpani yemekdan saxlamaq"],
      correct: 1
    },
    {
      question: "Peyvanddan sonra valideynlar uşağı ne qadar izlemelidir?",
      options: ["30 deqiqe arzinde tibb mentaqesinde gözlemelidirler", "Eve çatduqdan sonra yalnız gece izlemek lazımdır", "Peyvanddan sonra izleme teleb olunmur"],
      correct: 0
    },
    {
      question: "Heksa vaksin hansı yaşda vurulmalıdır?",
      options: ["1 yaşdan sonra", "2, 3 ve 4 aylıqda", "Yalnız doğuş zamanı"],
      correct: 1
    }
  ]
},
{
  condition: "Hadise yerinde evdeki ağacın altında yerde uzanmış orta yaşlı kişi boğazında kekin, bir qeder kenarları şişkinleşmiş ile müşahide olunan qzzartı var. Onun huşu aydın deyil babaklari genişlenmiş, yuxarı ve aşağı atraf azalelerinde tonusun artması müşahide olunur. Xestenin sifetində şişkinlik, üz derisinde tündleşme, göz altında qaralma qeyd olunur.",
  questions: [
    {
      question: "Nadan şübhalenirsiniz?",
      options: ["bayılma", "özünü asma", "şok"],
      correct: 1
    },
    {
      question: "İlk tıbbi yardım üçün ne etmek lazımdır?",
      options: ["üreyi qapalı masaj edib, süni teneffüs vermek", "üreyi açıq masaj edib, süni teneffüs vermek", "heç ne etmemek"],
      correct: 0
    },
    {
      question: "Kliniki ölümle bioloji ölümü nece müəyyənleşdirek?",
      options: ["gözün işiğa garşı reaksiyası ile", "nobzin olub-olmaması ile", "teneffüsün olub-olmaması ile"],
      correct: 0
    },
    {
      question: "Kliniki ölümde ve bioloji ölümde organizmda geden prosesin ferajlı cahati?",
      options: ["feraj yoxdur", "kliniki ölümde beynin dekortikasiyası baş verir.", "bioloji ölümde beynin dekortikasiyası baş verir"],
      correct: 2
    },
    {
      question: "Kliniki ölüm ne qadar davam edir?",
      options: ["5-6 daq", "10-20 daq", "15-25 daq"],
      correct: 0
    }
  ]
},
{
  condition: "18 aylıq uşağı ile poliklinikaya peyvand olunmaq üçün müracist edib. Bu vaxta kimi uşaq taynım esasın bütün peyvandleri alıb. Uşaqda 37,5C, öskürek, burun axması aşkar olunur.",
  questions: [
    {
      question: "Tibb bacısı neden şübhalenir?",
      options: ["Göyöskürek", "KRVİ", "Moxmərək"],
      correct: 1
    },
    {
      question: "Peyvand hansı halda vurulmalıdır?",
      options: ["uşaq sağaldıqdan minimum 2 hafta sonra", "uşaq sağaldıqdan 1 hafta sonra", "uşaq tam sağalmamış"],
      correct: 0
    },
    {
      question: "Peyvand təqviminə səasən hansı peyvand vurulmalıdır?",
      options: ["QPM", "DT", "GDT, OPV"],
      correct: 2
    },
    {
      question: "OPV vaksini uşağa necə verilir?",
      options: ["Peroral", "∂zələdaxili", "Dərialtı"],
      correct: 0
    },
    {
      question: "QDT peyvandi hansı yaşda vurulmalıdır?",
      options: ["12 aylığında", "18 aylığında", "2 yaşında"],
      correct: 1
    }
  ]
},
{
  condition: "50 yaşlı xeste iştahanın azalması, dari qaşınması, qarının böyümesi, bu sababdan tangnefeslik, ayaqlarda ağrıdan şikayet edir. Son 3 ilde periodik olaraq dari örtüklarinda sarıluq, sidiyin saralması olmuş va öz özüna keçmişdir. Xestanin çekisi nazara çarpacaq qeder azdır, allari asir, döş qafesinda va kürakda damar ulduzcuqlari vardır.",
  questions: [
    {
      question: "Bunlar hansı xostaliyin alamati ola biler?",
      options: ["Ağciyar xerçengi", "Qaraciyar sirrozu", "Meda xorası"],
      correct: 1
    },
    {
      question: "Qarının böyümesini tıbbi terminle nece ifade edilir?",
      options: ["Assit", "Sistit", "Mastit"],
      correct: 0
    },
    {
      question: "Qaraciyer sirrozu olan xsste hansı yemekden imtina etmelidir?",
      options: ["Kefir, qatıq", "Qızardılmış at", "Buxarda bişmiş balıq"],
      correct: 1
    },
    {
      question: "Tibb bacısı ne etmelidir?",
      options: ["Xssteni müayine edir", "Hakim teyinatına tibb bacısı ciddi nezarat edir", "Xsstaya darman teyin edir"],
      correct: 1
    },
    {
      question: "Bu xastaliyin hansı müallice üsulu vardır?",
      options: ["Rentgen müayine", "Gastrofibroskopiya", "Qarın boşluğunun punksiyası"],
      correct: 2
    }
  ]
},
{
  condition: "60 yaşlı kişi pasiyent, diabet diagnozu ile illardir müşahıdadadır. O, tıbb montagasina sağ ayağında yaranın yaranması ve sağ ayaç barmağında qaralma şikayetleri ile müracist edir. Pasiyent geyd edir ki, yaranı evvelce ciddi gabul etmeyib, lakin son bir hafta arzinde yara atrafında qizartı, şişkinlik ve ağrı artıb.",
  questions: [
    {
      question: "Pasiyentin nekroz alamatlarinden biri hansıdır?",
      options: ["Sağ ayaçda periferik nabzin güclenmesi", "Sağ ayaç barmaçlarında qaralma", "Qan şekeri seviyyesinin azalması"],
      correct: 1
    },
    {
      question: "Nekrozun yaranmasının asas sebebi ne ola biler?",
      options: ["Qan dövranının pozulması", "Qan şekerinin aşağı olması", "Ayağın çox istirahat etmesi"],
      correct: 0
    },
    {
      question: "Tibb bacısının bu vaziyyatda ilk növbede etmeli olduğu iş nedir?",
      options: ["Pasiyentin qidalanma planını dayişdirmek", "Yaraya bakış keçirerek gigiyenik tedbirler görmek", "Pasiyente fiziki meşq teklif etmek"],
      correct: 1
    },
    {
      question: "Pasiyente ayaq baxımı ile bağlı hansı tövsiya verilmelidir?",
      options: ["Ayaqların isti su ile tez-tez yuyulması", "Ayaqların her gün müayine edilmesi ve yaraların vaktında müalicesi", "Ayaqlarda yaranan her hansı dayişiklikleri gözardı etmek"],
      correct: 1
    },
    {
      question: "Nekrozun qarşısını almaq üçün diabetli pasiyentler üçün en vacib profilaktik tedbir hansıdır?",
      options: ["Çox miqdarda maye qabul etmek", "Ayaq baxımına diqget etmek vs qan şekerini normada saklamaq", "Ayaqları daim isti saklamaq"],
      correct: 1
    }
  ]
},
{
  condition: "50 yaşlı kişi xeste ürek nahiyesinde sıxlıma hissi, tangenefeslik ve sol gola yayılan ağrı ile xestexanaya müraciat edir. Şikayetlerin başlangıcı 1 saat önceye tesadüf edir. Xeste stressli veziyyetden sonra simptomların başladığını qeyd edir. O, avvallar ürek-damar xestelikleri üçün hakime müraciat etmeyib. Xeste sigaret çekir ve yüksek tezyiqdan şikayetlenir. Klinik müayinede arterial tezyiq 160/100 mmHg, nabz ise 95 vurğu/daq qeyde alınır.",
  questions: [
    {
      question: "Üreyin işemik xestaliyinin esas simptomu hansıdır?",
      options: ["Baş ağrısı", "Sínada sıxlıma ve ağrı", "Hararat yükselmesi"],
      correct: 1
    },
    {
      question: "Üreyin işemik xestaliyinde ağrının sol gola yayılması ne ile alagadardır?",
      options: ["Ürekdan gelen sinir impulslarının yayılması", "Meda-bağırsaç sistemi problemleri", "Özale spazmları"],
      correct: 0
    },
    {
      question: "Bu sual pdf-de yox idi",
      options: ["Seçim 1", "Seçim 2", "Seçim 3"],
      correct: 0
    },
    {
      question: "Üreyin işemik xastaliyi zamanı istifada edilen nitroqliserinin tasir mekanizmi nedir?",
      options: ["Ürek derecesini artırır", "Damarları genişlendirir ve gan dövanını yaxşılaşdırır", "Qan tezyiqini artırır"],
      correct: 1
    },
    {
      question: "İşemik xastaliyi olan xastada tecili yardım zamanı arterial tazyiq 90/60 mmHg olarsa, nitroqliserin istifadesi hansı sebebden mahdudlaştırılmalıdır?",
      options: ["Nitroqliserin ağrını artırır", "Nitroqliserin tromb amala gelmasına sebeb olur", "Tazyiq daha da aşağı düşe bilar"],
      correct: 2
    }
  ]
},
{
  condition: "50 yaşlı qadın xəstəxananın qabul şöbəsinə müraciət edib. Şikayətləri yüksək temperatur, öskürək, təngnəfəslik və dadbilənin, iybilənin itməsidir. Ağ ciyərlərin rentgenoloji müayinəsində sol ağ ciyərdə 2 sm ölçüdə bərcimə sahələri var. TS-23, ÜDS-90, qanın saturasiyası 96 faizdir.",
  questions: [
    {
      question: "İlkin diaqnoz nədir?",
      options: ["verem", "pnevmoniya", "covid"],
      correct: 2
    },
    {
      question: "Bu xəstəliyin inkubasiya dövrü nə qədərdir?",
      options: ["5-10 gün", "10-15 gün", "2-14 gün"],
      correct: 2
    },
    {
      question: "Klinik mənzərəyə görə bu xəstəliyin hansı formasıdır?",
      options: ["yüngül", "orta ağır", "ağır"],
      correct: 1
    },
    {
      question: "Virus əleyhinə müalicə hansı preparatla aparılır?",
      options: ["remdesevir ilə", "azitromisin ilə", "seftreakson ilə"],
      correct: 0
    },
    {
      question: "Xəstəliyin törədicisi və yoluxma yolu hansıdır?",
      options: ["virus, hava-damcı", "pnevmokok, hava-damcı", "streptokok, alimentar"],
      correct: 0
    }
  ]
}
];

