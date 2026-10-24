# Terminal
```bash
#sprawdzenie gdzie mamy otwarty terminal
pwd

#otworzenie konkretnego folderu w terminalu [Tab]
cd [folder name]

#cofnięcie się o krok do tyłu w folderze
cd ..
```
# Git
## Setup
```bash
#sprawdzenie aktualnej wersji
git --version

#wskazanie username/mail do podpisu
git config --global user.name [name]
git config --global user.email [mail]

#sprawdzenie klucza ssh
ls al ~/.ssh

#wygenerowanie i skopiowanie nowego klucza ssh
ssh-keygen -t ed25519 -C "mail"
pbcopy <~/.ssh/id_ed25519.pub

#sprawdzenie połączenia z kluczem ssh
ssh -T github@github.com

#sprawdzenie podpiętego url do lokalnego git
git remote -v

#zainicjowanie repo
git init

#podpięcie folderu do pustego repo
git remote add origin git@github.com:[username]/[repo].git

#zmiana podpiętego url do lokalnego git
git remote set-url origin git@github.com:[username]/[repo name].git
```
## Zarządzie branachami
```bash
#sprawdzenie brancha
git branch --show-current

#dodanie nowego brancha
git branch [branch name]

#zmiana nazwy brancha
git branch -m [renamed branch name]

#utworzenie + przełączenie na nowy branch
git switch -c [branch name]

#przełączenie na nowy branch
git switch [branch name]

#usunięcie brancha
git branch -d [branch name]
```
## Publikowanie zmian
```bash
#sprawdzenie statusu
git status

#pull bieżącej wersji
git pull origin main --allow-unrelated-histories

#dodanie wszystkich plików
git add .

#dodanie konkretnego pliku
git add [filename]

#reset dodanych plików
git reset

#reset konkretnego pliku
git reset [file name]

#commit dodanych pików
git commit -m "commit name"
```
## Merge
```bash
#merge (rekomendowany dla prywatnego repo)
git rebase main

#merge (rekomendowany dla repo jednocześnie używanego przez wielu userów)
git merge main

#push
git push -u origin main
```
# GitHub
## Setup
```bash
#instalacja GitHub CLI
brew install gh

#autentyfikacja
gh auth login
```
## Pull Requests (PR)
```bash
#lista PR
gh pr list

#pobranie PR do osobnego brancha
gh pr checkout [numer PR]

#sprawdzenie diff
git diff ..[branch name do porównania]

#usuwanie brancha po CR
gh branch -D [branch name]

#utworzenie PR
gh pr create --title "[PR name]" --body "[PR description]"

#approve PR
gh pr review --approve

#merge PR
gh pr merge
```
## Kopiowanie innych repo
```bash
#używanie HTTPS
git clone https://github.com/ProjectURL

#używanie SSH (wymaga konfiguracji klucza SSH)
git clone git@github.com:username/repository.git

#używanie GitHub CLI
gh repo clone username/repository
```
