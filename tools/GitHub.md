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
#sprawdzenie podpiętego url do lokalnego git
git remote -v

#zmiana podpiętego url do lokalnego git
git remote set-url origin git@github.com:alxndrs6/[repo name].git
```
## Zarządzanie repo
```bash
#utworzenie repo z folderu
git init

#sprawdzenie statusu
git status
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
//merge priv
git rebase main

//merge public
git merge main

//push
git push -u origin main
```
# GitHub
## Setup
```bash
#gh install
brew install gh

//gh auth
gh auth login
```
## Pull Requests (PR)
```bash
#gh pr create
gh pr create --title "[PR name]" --body "[PR description]"

#gh pr approve
gh pr review --approve

#gh pr merge
gh pr merge
```
## Kopiowanie innych repo
```bash
# Używanie HTTPS
git clone https://github.com/ProjectURL

# Używanie SSH (wymaga konfiguracji klucza SSH)
git clone git@github.com:username/repository.git

# Używanie GitHub CLI
gh repo clone username/repository
```
