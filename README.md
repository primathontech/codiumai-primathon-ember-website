# Primathon Ember Site!

The app has 2 parts

1.  Blog (Wordpress app)
2.  Site (Ember app)

## Blog

The blog is deployed using docker image.

```
# ssh to server
cd projects/blog/

# to start / restart
docker-compose up -d

# to stop
docker-compose down

# to read logs
docker-compose logs -f
```

The blog files location is inside wordpress folder.
you can edit the blog wordpress config using

```
cd /home/ubuntu/projects/blog/wordpress
vi wp-config.php
```

## Site

Site in ember app on location `/home/ubuntu/projects/primathon-ember-web`

Below pm2 commands are used to deploy the app

```
pm2 start /home/ubuntu/projects/primathon-ember-web/start.sh --name  prima-web

# to stop

pm2 stop  prima-web
```

## Nginx Conf

1. assets path are redirected once we replace the /blog/wp-\* part of request_uri and redirect to blog app at 8180
2. the /blog pages are served using 8180 directly
3. the site page with / path are sent to ember app.

## Prerequisites

You will need the following things properly installed on your computer.

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (with npm)
- [Ember CLI](https://ember-cli.com/)
- [Google Chrome](https://google.com/chrome/)

## Installation

- `git clone <repository-url>` this repository
- `cd primathon-ember-web`
- `yarn install`

## Running / Development

- `ember serve`
- Visit your app at [http://localhost:4200](http://localhost:4200).
- Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

## Production Deployment

- Access primathon site server
- Step-1 - `cd /home/ubuntu/projects/primathon-ember-web/`
- Step-2 - `git checkout master`
- Step-3 - `git pull origin master`
- Step-4 - `bash deploy-to-s3-prod.sh`

## Production Deployment (From Local)

- Access primathon site server
- Step-1 - `git checkout master`
- Step-2 - `git pull origin master`
- Step-3 - `bash redeploy-prima-site.sh`

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

- `ember test`
- `ember test --server`

### Linting

- `npm run lint`
- `npm run lint:fix`

### Building

- `ember build` (development)
- `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

- [ember.js](https://emberjs.com/)
- [ember-cli](https://ember-cli.com/)
- Development Browser Extensions
  - [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  - [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
