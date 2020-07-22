build-web-bin:
	docker run --env ENVIRONMENT=web --rm -it -v $$(pwd):/src trzeci/emscripten-ubuntu:latest bash build.sh

build-shell-bin:
	docker run --env ENVIRONMENT=shell --rm -it -v $$(pwd):/src trzeci/emscripten-ubuntu:latest bash build.sh
