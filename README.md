# Pārbaudes darbs Flask

:exclamation: Pēc katra uzdevuma izpildies veikt commit. :exclamation:

### :point_right: Uzdevums 1
Izveidot route '/health', kas atgriež tekstu "OK".

### :point_right: Uzdevums 2
- Izveidot route '/home', kas atgriež template "home.html"
- Izveidot route '/calc', kas atgriež template "calc.html"

### :point_right: Uzdevums 3
- Izveidot "layout.html" (html kodu paņemt no "home.html"), lai body daļā iekš container varētu atgriez citus template satura blokus. 
- Pievienot (salinkot) "layout.html" ar "main.css"
- Pārveidot "calc.html", "home.html", lai viņus varētu izmantot, kā blokus iekš "layout.html".

### :point_right: Uzdevums 4
- Izveidot satura bloku (template) "about.html", kur parādās jūsu Vārds, Uzvārds un grupa
- Izveidot route '/about', kas atgriež šo template
- Papildināt "layout.html" menu ar navigāciju uz about

### :point_right: Uzdevums 5
Uztaisīt, lai iezīmējas atbilstošs menu (pēc klikšķa uz tā un paliek izīmēts sarkanā krāsā), tai pat laikā pārējie menu paliek "standarta" izskatā.

### :point_right: Uzdevums 6
Izveidot route '/calc' (POST), kas saņem JSON, kurš atbilst šādam formātam:
``` json
{
    "sk1":"10",
    "sk2":"5",
    "darb":"+"
}
```
- sk1 un sk2 => Veseli skaitļi, ko lietotājs ievada atbilstošos laukos.
- darb => Iespējamās darbības (+, -, /, *) lietotājs ievada atbilstošos laukos.

Uz šādu pieprasījumu jāatbild ar (jāveic norādītā darbība):
``` json
{
    "rez":"15"
}
```

- PĒDĒJAIS rezultāts jāsaglabā failā "data.txt"

### :point_right: Uzdevums 6
Nopublicēt heroku pabeigto lapu un pievienot readme pēdējā rindiņā linku uz lapu.
  
Link to Heroku: