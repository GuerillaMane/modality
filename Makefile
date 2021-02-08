.PHONY: build
build:
# 	cp -urf /mnt/c/Users/anton.golubev/work/test/modality/cmd/ ./
# 	cp -urf /mnt/c/Users/anton.golubev/work/test/modality/internal/ ./
	go build -v ./cmd/modal/

.PHONY: build_static
build_static:
# 	cp /mnt/c/Users/anton.golubev/work/test/modality/mod_frontend/package.json ./mod_frontend/package.json
# 	cp /mnt/c/Users/anton.golubev/work/test/modality/mod_frontend/vue.config.js ./mod_frontend/vue.config.js
# 	cp /mnt/c/Users/anton.golubev/work/test/modality/mod_frontend/vue.config.js ./mod_frontend/babel.config.js
# 	cp -urf /mnt/c/Users/anton.golubev/work/test/modality/mod_frontend/public ./mod_frontend
# 	cp -urf /mnt/c/Users/anton.golubev/work/test/modality/mod_frontend/src ./mod_frontend
	cd ./mod_frontend; npm run build;

.PHONY: run
run:
	./modal
