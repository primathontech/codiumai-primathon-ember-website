#!/bin/bash

# specify the server to ssh into
server=site

ssh  $server << 'EOF'
    branch=main
    directory=/home/ubuntu/ubuntu/projects/primathon-ember-web
    app_name=prima-web
    
    # navigate to the code directory
    cd $directory

    # pull the remote branch
    git checkout $branch
    git pull origin $branch
   

    export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
    npm run build
    pm2 restart $app_name
EOF
