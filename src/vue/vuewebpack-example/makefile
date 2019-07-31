OUTPUT=./output
WEBPACK=npx webpack
WEBPACK_SERVER=npx webpack-dev-server

.PHONY: clean
clean:
	-@rm $(OUTPUT)/js/*

.PHONY: build
build:
	@$(WEBPACK)

.PHONY: dev
dev:
	@$(WEBPACK_SERVER)
