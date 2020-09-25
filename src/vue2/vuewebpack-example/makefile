OUTPUT=./output
WEBPACK=npx webpack
WEBPACK_SERVER=npx webpack-dev-server

.PHONY: clean
clean:
	-@rm $(OUTPUT)/js/*

.PHONY: build
build: clean
	@$(WEBPACK)

.PHONY: dev
dev: clean build
	@$(WEBPACK_SERVER)
