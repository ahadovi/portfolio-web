## Tailwind Merge and CLSX (cn):

- Go to `utils` folder > `index.ts` file
- It actually works for **_conflict_** conditional and **_over writing_** tailwind classes.

## Before git add and commit run:

Husky Configuration (If git not init, please [`git init`] first).

- `npm run prepare`

Then create a file `pre-commit` inside `.husky` folder and copy & paste this code:

```js
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx lint-staged
```

Then run this: `chmod +x .husky/pre-commit`

## Docker Command:

```bash
COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose build
#&&
docker-compose up
```

or-

- Upload docker: `docker compose up` | if linux or macOs then `sudo docker compose up`
- Upload docker detach mode: `docker compose up -d` | if linux or macOs then `sudo docker compose up -d`
- Delete docker container & stop: `docker compose down` | if linux or macOs then `sudo docker compose down`
- Remove docker image after container remove (if needed): `docker rmi [image-name]` | if linux or macOs then `sudo docker rmi [image-name]`

#### Manually run docker:

> Build docker image: `docker build -t project-name .` | if linux or macOs then `sudo docker build -t project-name .`
>
> upload and run detach mode: `docker run -p (your define port:4003):(your server port:80) project-name -d`
