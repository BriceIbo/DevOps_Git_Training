//-------------------------------------- Lab 1,1 ------------------------------------------//

//                                       Basics

-- git init in "Hello" directory return "git init create in emty directory"
-- git config --global user.name "brice.zokpato2" 	
-- git config --global user.email "brice.zokpato@edu.univ-eiffel.fr"
-- git config --list return {
	user.name=brice.zokpato2
	user.email=brice.zokpato@edu.univ-eiffel.fr
	core.repositoryformatversion=0
	core.filemode=true
	core.bare=false
	core.logallrefupdates=true
}


//                                  First commit



-- git status.file1.txt return "Sur la branche master

Aucun commit

Fichiers non suivis:
  (utilisez 'git add <fichier>...'' pour inclure dans ce qui sera validé)

	file1.txt

aucune modification ajoutée à la validation mais des fichiers non suivis sont présents (utilisez 'git add' pour les suivre)"

-- the help proposed by git status is "(utilisez 'git add <fichier>...'' pour inclure dans ce qui sera validé)"

-- After "git add file1.txt" git status return "Sur la branche master

Aucun commit

Modifications qui seront validées :
  (utilisez 'git rm --cached <fichier>...' pour désindexer)

	nouveau fichier : file1.txt"

//                               basics - first commit


 -- "git commit -m 'this is my first commit add file1.txt' "  :  the branch i commit to is master
 -- One file change
 -- SHA-1 checksum the commit has (7bc1229)
 -- 0 insertions(+), 0 deletions(-)


 //                            basics 1.2

 -- git diff give index and difference betwean last file add current file. 
 -- git status : "modifié :         file1.txt"
 -- git --amend after add and not commit : return message(E325 ATTENTION) -> Un autre programme est peut-être en train d'éditer ce fichier /Une session d'édition de ce fichier a planté
  "Le fichier d'échange '~/M2/DevOps/TP1/Lab1_Basics/Hello/.git/.COMMIT_EDITMSG.swp' existe déjà !'"
 -- key 'E' for edit

 //                            basic 1.2

 -- git log : return all all commits i made with date and message
 -- git show :  return commit details
 -- git status : the help proposed by git is "(utilisez 'git add <fichier>...' pour mettre à jour ce qui sera validé)
  (utilisez 'git checkout -- <fichier>...'' pour annuler les modifications dans la copie de travail)"
 -- I add one line on my file and if i do git checkout -- file1.txt, the line is remove on my file
 -- After, git status return "rien à valider, la copie de travail est propre"
 -- Modify again mu file, git status propose to add and after add it propose to commit
 -- git reset --soft HEAD~1 and git checkout -- file1.txt
 -- the line i had on my file is remove and git remove propose the validation of commit
 -- Explications : thirst, we go to last commit and after remove the modification of file.

 //                                    basics - remote

 -- git clone https://github.com/saussact/git-training-repo.git
 -- git fetch  : Get the repo modification
 -- git log --graph --oneline --all --decorate :  Observe the repo update  with SHA-1
 -- git config --global alias.lg "log --graph --oneline --all --decorate" : create alias 'lg' for "log --graph --oneline --all --decorate"
 -- git push to push my commit to remote : "remote: Permission to saussact/git-training-repo.git denied to BriceIbo"


 //                                   Branching 2,1


 -- git checkout -b lab2-BriceIbo :  create the branch lab2-BriceIbo
 -- git branch -a
 -- git status :  "Sur la branche lab2-BriceIbo rien à valider"
 -- git commit -m "commit : Modify file_2.txt"
 -- git commit -m "commit : create file_3.txt"
 -- git checkout main non


 //                             merging ; fast forward

 -- git merge lab2-BricecIbo : Mise à jour d5ca701..b6539a7
                              Fast-forward
                               users/ZokpatoBrice/file_2.txt | 1 +
                               users/ZokpatoBrice/file_3.txt | 0
                               2 files changed, 1 insertion(+)
                               create mode 100644 users/ZokpatoBrice/file_3.txt
 
 -- git log

 -- git status : Sur la branche main
                  Votre branche est en avance sur 'origin/main' de 3 commits.
                    (utilisez "git push" pour publier vos commits locaux)

                  rien à valider, la copie de travail est propre

-- git checkout lab2-BriceIbo
-- git status
-- git commit -m "Modify file_2;commit"
-- git checkout main
-- git commit -m "Modify file_1"
-- git checkout lab2-BriceIbo and git merge main : Merge made by the 'recursive' strategy.
                                                     users/ZokpatoBrice/file_1.txt | 1 +
                                                     1 file changed, 1 insertion(+)


-- git branch -D lab2-BriceIbo : Branche lab2-BriceIbo supprimée (précédemment a8980ce)
-- git branch -a


//                              Lab 3 - Merge conflicts

-- git checkout -b lab3-BriceIbo
-- git status
-- git add users/ZokpatoBrice/file_1.txt 
-- git commit -m "modify file 1 on lab3; first commit"
-- git add users/ZokpatoBrice/file_1.txt 
-- git commit -m "modify file 1 on lab3; second commit"
-- git checkout main
-- git add users/ZokpatoBrice/file_1.txt 
-- git commit -m "modify file 1 on lab3; main commit"
-- git merge lab3-BriceIbo : Fusion automatique de users/ZokpatoBrice/file_1.txt
                              CONFLIT (contenu) : Conflit de fusion dans users/ZokpatoBrice/file_1.txt
                              La fusion automatique a échoué ; réglez les conflits et validez le résultat.
modify file 1
<<<<<<< HEAD
modify file 1 -> commit for main branch in lab3
=======
modify file 1 for first commit on Lab3
modify file 1 for second commit on Lab3
>>>>>>> lab3-BriceIbo

-- After modify file, use git add and git merge status : Tous les conflits sont réglés mais la fusion n'est pas terminée.
                                                            (utilisez "git commit" pour terminer la fusion) 

-- git commit -m "merge conflict resolve commit"
-- git log

//                              Lab 4 - Rebase

-- git checkout -b lab4-BriceIbo
-- git status
-- git commit -m "First commit : modify file1.txt  ; commit "
-- git commit -m "Second commit modify again file1.txt ; commit"
-- git checkout main and create a new file("file_4.txt") 
-- git checkout lab4-BriceIbo
-- git rebase lab4-BriceIbo 
-- git log


//                            Lab 5 - Workflow (1)

-- git clone https://gitlab.forge.orange-labs.fr/hpnt9572/workflow.git 

I could not finish because of this error ("Clonage dans 'workflow'...fatal: impossible d'accéder à 'https://gitlab.forge.orange-labs.fr/hpnt9572/workflow.git/' : The requested URL returned error: 403")