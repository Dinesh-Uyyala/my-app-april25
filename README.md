# MyAppApril25

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.











Steps to install Angular Application:
=====================================

1. Nodejs installation
    install nodejs from nodejs.org
    open command prompt for running commands
        check: 
            node -v
            npm -v

2. Install Angular
    npm install -g @angular/cli@15
        check:
            ng version

3. move path/directory to the destination folder
    cd desktop or cd onedrive/desktop

4. Create angular application
    ng new my-app
    -> routing - yes
    -> style - css

5. open application in vscode

6. change execution policy in powershell
    ->Run windows powershell as administrator
    -> set-ExecutionPolicy Unrestricted

7. Run application
    ng serve








Directives:  Used to alter the DOM
===========

1. Structure Directives:
    *ngFor, *ngIf

2. Attribute Directives:
    ngClass, ngStyle






Possible API Calls:
===================
1) all details              get         get(url)
2) specific details         get         get(url/id)
3) filtering                get         get(url?filter=term)
4) sorting                  get         get(url?sortBy=column&order=asc/desc)
5) pagination               get         get(url?limit=values&page=pageno)

6) create                   post        post(url,data)
7) update                   
8) delete                   delete      delete(url/id)



Validations:
============

ts:
===

name:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(12)])

html:
=====

<div *ngIf="CONTROLS?.touched && CONTROLS?.invalid">
        <p *ngIf="CONTROLS?.errors?.['required']">Name should Required</p>
        <p *ngIf="CONTROLS?.errors?.['minlength']">Name should be minimum 6 letters</p>
        <p *ngIf="CONTROLS?.errors?.['maxlength']">Name should maximum 12 letters</p>
    </div>


CONTROLS:
=========
1) FormGroup = userForm.get('name')
2) Nested FormGroup = userForm.get('address')?.get('city)
3) FormArray = cardsFormArray.controls[i].get('number')



LifeCycleHooks:
===============

1) ngOnChanges- when parent to child (@input)
2) ngOnInIt- initialization
3) ngDoCheck- change detection 
4) ngAfterContentInit- whenever new content comes into component
5) ngAfterContentChecked- 
6) ngAfterViewInit- whenever view rendered in the component
7) ngAfterViewChecked- 
8) ngOnDestroy- when component get destroyed

















Build:
======
1) AOT --> Ahead of Time
    Code
    Transpile
    Compile
    bundle
    Download in the browser
    run--> open



2) JIT --> Just in Time
    Code
    Transpile
    bundle
    Download in the browser
    Compile
    run--> open


    Bundle Optimization Techniques:
    ===============================
    1) Tree Shaking
    2) Minification
    3) Uglification



Git :
=====
-> install git software (git -v), create an account in GitHub
1) System <--> GitHub
    git config -g user.name "XXXXXX"
    git config -g user.email "XXXXXX@email.com"

    check:
    ======
        git config --list

2) Repository <--> Project
    git init
    git remote add origin repository-url 

    check:
    ======
    git remote -v

3) Send code to repository
    git add .
    git commit -m "commit message"
    git push
    

4) Branching
    git branch
    create a branch in github
    git fetch
    git checkout branchName

5) Pull Request
    After pushing code-> Raise pull request-> look for conflicts-> create pull request-> merge pull request

6) Shift Branches
    commit changes
    git stash --include-untracked
    after coming back use (git stash pop)

7) Delete a commit
    git log---> 111111 222222
    git reset 222222

8) Merge commit into another Branch
    git cherry-pick XXXXXX

9) Two banches code into one branch
    checkout to branch feature/three
    git pull origin feature/one
    git pull origin feature/two

10) merge conflicts
    checkout to the branch
    git pull origin master
    accept incoming / accept current / accept both
    git add, commit, push



RXJS Operators
==============

from/of=> creational operators
map=> to alter every element/data
filter=> to select some data

ForkJoin=> Parallel Operations

forkJoin([observable1, observable2]).subscribe(result =>
console.log(result[0], result[1]);
)

concatMap=> Sequential API Calls

switchMap=> calls the new API call
exhaustMap=> calls old API call and rejects new API call
debounceTime=> delay the API call