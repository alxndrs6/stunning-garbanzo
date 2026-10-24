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

//commit
git commit -m "commit name"

//push
git push -u origin main