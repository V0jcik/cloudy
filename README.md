# Cloudy
### Projekt prostego chatbota odpowiadającego na komendy w języku JavaScript.
*26.07.2021*
### Lista dostępnych komend:
- ```!hi``` - bot przywita się
- ```!cloudy``` - bot przedstawi swoją krótką historię
- ```!help``` - lista dostępnych komend
- ```!go [link / lub słowo klucz "rick"]``` - otwiera link w nowym oknie na fullscreenie
- ```!clear``` - wyczyszczenie okna czatu
- ```!dzis``` - podanie dzisiejszej daty
- ```!swieta``` - ilość dni do świąt Bożego Narodzenia

### Prosty kalkulator !operacja [liczba a] [liczba b]
```!dodaj a b```
```!odejmij a b```
```!podziel a b```
```!pomnoz a b```
```!poteguj a b```

### Kalkulator dni do następnych urodzin
> [!IMPORTANT]
> Jest to najbardziej rozwinięta komenda. Obsługuje walidację poprawności wprowadzonej daty jak i obsługuje rok przestepny.
- ```!bday``` - bot wyświetla informację jak skorzystać z komendy

- ```!bday [ DD.MM.RRRR, DD-MM-RRRR, DD MM RRRR ]```  -  obliczy ilość dni oraz poda które to będą urodziny z kolei
- ```!bday [ DD.MM, DD-MM, DD MM ]``` -  obliczy ilość dni do następnych urodzin
> [!NOTE]
> Komenda obsługuje także sytuację podania daty z przyszłości (wyświetla odpowiednie powiadomienie)
- ```!bday cloudy``` - Cloudy poda datę do swoich kolejnych urodzin :)

### Filtr zabronionych słów
Cloudy ma również zaimplementowany podstawowy filtr słów zabronionych, w przypadku użycia jednego z nich nie pozwala wysłać takiej wiadomości.
