//sprawdzenie gdzie mamy otwarty terminal
pwd

//otworzenie konkretnego folderu w terminalu (remember to use Tab)
cd [folder name]

//cofnięcie się o krok do tyłu w folderze
cd ..

//sprawdzenie podpiętego url do lokalnego git
git remote -v

//zmiana podpiętego url do lokalnego git
git remote set-url origin git@github.com:alxndrs6/[repo name].git	

//sprawdzenie statusu
git status

//dodanie wszystkich plików
git add .

//dodanie konkretnego pliku
git add [filename]

//reset dodanych plików
git reset

//reset konkretnego pliku
git reset [file name]

//sprawdzenie brancha
git branch --show-current

//dodanie nowego brancha
git branch [new branch name]

//zmiana nazwy brancha
git branch -m [renamed branch name]

//utworzenie + przełączenie na nowy branch
git switch -c [new branch name]

//przełączenie na nowy branch
git switch [new branch name]

//usunięcie brancha
git branch -d nazwa-galazi

//commit
git commit -m "commit name"

//pull
git pull origin main --allow-unrelated-histories

//merge priv
git rebase main

//merge public
git merge main

//push
git push -u origin main