.PHONY: up deps-up
.DEFAULT_GOAL := up

docker-compose := docker compose
yarn := $(shell command -v yarn 2> /dev/null)

crawl: deps-up
	yarn build && nf start

download: deps-up
	yarn build && nf start

deps-up:
	$(docker-compose) -f docker-compose.deps.yml up -d

deps-stop:
	$(docker-compose) -f docker-compose.deps.yml stop

deps-down:
	$(docker-compose) -f docker-compose.deps.yml down

deps-logs:
	$(docker-compose) -f docker-compose.deps.yml logs -f

setup:
	cd crawler && yarn 