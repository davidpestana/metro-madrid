start:
	docker run -u 1000 -it --rm -v $$(pwd):/app -p 4200:4200 miangular bash
build:
	docker build -t miangular .