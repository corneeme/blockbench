if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let f={};const b=e=>i(e,c),d={module:{uri:c},exports:f,require:b};s[c]=Promise.all(a.map((e=>d[e]||b(e)))).then((e=>(r(...e),f)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"blockbench"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"index.html",revision:"b7c21ecce55a2cfddb7b6b204e5c211a"},{url:"favicon.png",revision:"bb17c5c284076fc17e3399860df472d7"},{url:"js/animations/animation_controllers.js",revision:"7058f8c9ec9020bc160f79d52f326033"},{url:"js/animations/animation.js",revision:"81fb62b8633bbae499a120cbd38c60bf"},{url:"js/animations/keyframe.js",revision:"e6a23bcbdbbcc6e589953b3ecac5b679"},{url:"js/animations/molang.js",revision:"7023fb8757128532a09cfbfb5681e5b8"},{url:"js/animations/timeline_animators.js",revision:"170431ca2e7725a51f3f0e0d76ba9f0d"},{url:"js/animations/timeline.js",revision:"887ad01c6acd2086ba9fbf7ba30fd9ea"},{url:"js/api.js",revision:"b02c9489cf984ce4d9a971b5fddc821e"},{url:"js/boot_loader.js",revision:"33c51f9cef3f859af9f5a82dc6c4568a"},{url:"js/copy_paste.js",revision:"51e511cdff7dd4d748b1d4eb77fb74cd"},{url:"js/desktop.js",revision:"9eaab90536f99aba3f7022a8e0321947"},{url:"js/display_mode.js",revision:"ff21ac8b2c8a982e0f809cd638c2da97"},{url:"js/edit_sessions.js",revision:"68656b1508c2bb76c3613c0af520ab44"},{url:"js/file_system.js",revision:"6c2ee95348da5a75bb31d08670fc0ab6"},{url:"js/globals.js",revision:"442493e3975da7568905d8286a1ce8ba"},{url:"js/interface/about.js",revision:"c74c8ffa22a6b0f8586f58d1cf8e5c10"},{url:"js/interface/action_control.js",revision:"9f0e1b67c56e519b940e9498c36e013c"},{url:"js/interface/actions.js",revision:"05e4e11574af74514481137515d7546f"},{url:"js/interface/dialog.js",revision:"cedeee9e597b908dbfb592786cea87f3"},{url:"js/interface/interface.js",revision:"8c939b8bab81fbf26fdd5ddf9e4c285e"},{url:"js/interface/keyboard.js",revision:"4833501c8f3ae4762fd5c5aab576dde8"},{url:"js/interface/menu_bar.js",revision:"168a49210bd7ca01fff495421a91a997"},{url:"js/interface/menu.js",revision:"fe1bb171876632a7c311c0b489171a0b"},{url:"js/interface/panels.js",revision:"f94f87cfd7d1f5b3c8573aacb8b3dbd2"},{url:"js/interface/settings.js",revision:"5f2e34306debe0c424a7134956e72573"},{url:"js/interface/start_screen.js",revision:"d8da52205339530c2439bf62df241953"},{url:"js/interface/themes.js",revision:"04f713a536f09b7a3efc55af0d3c883d"},{url:"js/interface/vue_components.js",revision:"f1a08373f04fe03127feca3685a8f5d5"},{url:"js/io/codec.js",revision:"dac4120838c4a7a0b15759fcd4bc270b"},{url:"js/io/format.js",revision:"73e3c58a1456a4bbfba28b3a9e5c1696"},{url:"js/io/formats/bbmodel.js",revision:"688c0d87e94f151b5cc21d653a22d31e"},{url:"js/io/formats/bedrock_old.js",revision:"7883129f892e5e49465f67fde86ae3e5"},{url:"js/io/formats/bedrock.js",revision:"da6446a68c5d8f3ee596d51d14a17b3d"},{url:"js/io/formats/collada.js",revision:"1bf2452562b7f438c72b5bac4952c7a4"},{url:"js/io/formats/fbx.js",revision:"855a2b92ac25e56721f80ac9e41a69d6"},{url:"js/io/formats/generic.js",revision:"7064ced3120d1345c09d9830571bb5e5"},{url:"js/io/formats/gltf.js",revision:"46ade35d1332048ab286f2725804a2cc"},{url:"js/io/formats/image.js",revision:"2ec84f468716649fb7a0cc8f17e933b6"},{url:"js/io/formats/java_block.js",revision:"119df5ca927331964dd6fff94eae5521"},{url:"js/io/formats/modded_entity.js",revision:"69a8c5343c8cb924dbf496c231b0a814"},{url:"js/io/formats/obj.js",revision:"db5bc4b405ad407b6b1fb8ff8c4cb8d3"},{url:"js/io/formats/optifine_jem.js",revision:"551a69bdffecb0edfbbf0f38f5d75dfc"},{url:"js/io/formats/optifine_jpm.js",revision:"7902a08955db9db9df5499c03e71b9a7"},{url:"js/io/formats/skin.js",revision:"98da5ea3c6261fd13aca8979666bdca3"},{url:"js/io/io.js",revision:"e23c2ee263314e06266f21641c4346a7"},{url:"js/io/project.js",revision:"0c3f1ee3821c113e9c5a1a08dc145e69"},{url:"js/io/share.js",revision:"6c30a1e2dbf43d3ae42b277789718a52"},{url:"js/misc.js",revision:"ca145a9831fdf51058f01eb0905cb6f2"},{url:"js/modeling/mesh_editing.js",revision:"57193d68341067bb5924b50c6c47cd9b"},{url:"js/modeling/scale.js",revision:"272523a2b1bedf87e78acdade131f234"},{url:"js/modeling/transform_gizmo.js",revision:"e7539b44a3620fe51a30ffbffbd1553b"},{url:"js/modeling/transform.js",revision:"06d2ccdc56c2a7d2fcc425e38b4138d8"},{url:"js/modes.js",revision:"3dbc200cfec707f686f74ff4039c4188"},{url:"js/outliner/cube.js",revision:"cba06e9ffb9224a827503695ff8cb20f"},{url:"js/outliner/group.js",revision:"a593efdbfe4fc3705d76fbe4486abc31"},{url:"js/outliner/locator.js",revision:"18d543830f68e18c8d62c20c769919d2"},{url:"js/outliner/mesh.js",revision:"405c66f30a15eeb952ab83618c9945ac"},{url:"js/outliner/null_object.js",revision:"26e69ab94673aa8663edccc7adf8c7af"},{url:"js/outliner/outliner.js",revision:"b85636964b3a8c2be20060f834760d3e"},{url:"js/outliner/texture_mesh.js",revision:"f97b358017ab2f107c51454a43db4f8e"},{url:"js/plugin_loader.js",revision:"b977f365393c1d6318b5716e9c379a11"},{url:"js/predicate_editor.js",revision:"68eba7a01e4af212de937f132cb7a61b"},{url:"js/preview/canvas.js",revision:"8e4c6f36f7bbdb7857ff3b3db058e31b"},{url:"js/preview/OrbitControls.js",revision:"7ddda0ca2bc697d8a6c97c64bb6294aa"},{url:"js/preview/preview_scenes.js",revision:"d769f67f3d495808e053e634803b1eee"},{url:"js/preview/preview.js",revision:"b230cd4e393dcdc1ad57f72bae35d519"},{url:"js/preview/reference_images.js",revision:"20bc01c7361f8b8e037d3ef1094a281a"},{url:"js/preview/screenshot.js",revision:"ca830515f24e724b628cb50e1d8fc223"},{url:"js/texturing/color.js",revision:"cac322ba59d7cd9f676d372afbfe808f"},{url:"js/texturing/edit_texture.js",revision:"4070e491a8377efbcdaff16f1cf647f0"},{url:"js/texturing/painter.js",revision:"f7c1fd395756dedfa591df476cde60a6"},{url:"js/texturing/texture_generator.js",revision:"bd31f38de61c2a51f7f8cfa925dce03e"},{url:"js/texturing/textures.js",revision:"a794edb314c21210aa8ce68b08d1b38f"},{url:"js/texturing/uv.js",revision:"e034003130ec2731f31aa95a1841bd32"},{url:"js/undo.js",revision:"84d9cd0ea81454e60245877c97b2525e"},{url:"js/util/array_util.js",revision:"655f788b4c2b2f3eb834f4c68d03437f"},{url:"js/util/event_system.js",revision:"ffc81d2dc246215aa8b5aff7e14ae403"},{url:"js/util/math_util.js",revision:"25fb8212a3acb0d908165c8be75980f0"},{url:"js/util/property.js",revision:"c0176313a64ba965e5b58b513203af2e"},{url:"js/util/util.js",revision:"1a43ed87a1030f1ffd04ee264e073add"},{url:"js/validator.js",revision:"16549cdd3980708c71b930c654521173"},{url:"js/web.js",revision:"1f0065ecf76fba555da85348c33a0da8"},{url:"js/webpack/bundle.js",revision:"781fddb104aefbf04c5fbf8e09542a6c"},{url:"lib/canvas2apng.js",revision:"51d5d0955625d02625cf1d5fd72cc37d"},{url:"lib/CanvasFrame.js",revision:"442b595ea349317249ae9cefe2273b8f"},{url:"lib/color-picker.min.js",revision:"1725de455ed2f45daafb69dd90413104"},{url:"lib/fik.min.js",revision:"9985a46a1107966f2375d0c61241c689"},{url:"lib/FileSaver.js",revision:"547422b2d7a739f14eefa1fc1c59c658"},{url:"lib/gif.js",revision:"6760f4c06414ceb8b3d30e14d3a59c69"},{url:"lib/gif.worker.js",revision:"d8cc71ca8334b5002e4481497802c2ac"},{url:"lib/GLTFExporter.js",revision:"761d87878a43c46d12376baa31a9cf6f"},{url:"lib/jquery-ui.min.js",revision:"f7275ece7d6dea2aec3c23457415695c"},{url:"lib/jquery.js",revision:"3e4bb227fb55271bfe9c9d4a09147bd8"},{url:"lib/jszip.min.js",revision:"5ab88d8028258f8c1d0ae2ab85d1e2bd"},{url:"lib/lzutf8.js",revision:"079e1fb0ed75a7a0b78c41704425bb60"},{url:"lib/marked.min.js",revision:"f12d4a87973b8b958222aca5fdb84394"},{url:"lib/molang-prism-syntax.js",revision:"4b9be48b3e6e9205517a7ff077c2a63e"},{url:"lib/molang.umd.js",revision:"9bc6d7cd9b6b5ce4a3904dd094f29e29"},{url:"lib/peer.min.js",revision:"da4b6c59e67068a4da26ebfc6b52f7c5"},{url:"lib/prism.js",revision:"8b9de8b28b26a713474c0a6e612a85ba"},{url:"lib/purify.min.js",revision:"73b8be8a1f049413506c1578a0cebaaa"},{url:"lib/spectrum.js",revision:"a2be6576c3b44bdb4ffce313816e5a65"},{url:"lib/targa.js",revision:"17c5ce65af686baa97294748f929541e"},{url:"lib/three_custom.js",revision:"546b2bfa3c20ab60cfdb8873ba20666b"},{url:"lib/three.min.js",revision:"0a8a3113f4c503210e9a8de577025ff4"},{url:"lib/vue_sortable.js",revision:"87cfedd91d600fb8d44668a0e83d4101"},{url:"lib/vue.min.js",revision:"0a9a4681294d8c5f476687eea6e74842"},{url:"lib/VuePrismEditor.min.js",revision:"e4f8e303a2254691da6efb332ee6635e"},{url:"lib/wintersky.umd.js",revision:"d4ad68f4d2fc1ef3f349a86ab3fa3d22"},{url:"css/dialogs.css",revision:"a705e1ad071ecef015c62e6cd5a0815a"},{url:"css/fontawesome.css",revision:"1cd088b35b0d3fac7265a75875471484"},{url:"css/general.css",revision:"0400d58109cc498b90d01a2b6da76882"},{url:"css/jquery-ui.min.css",revision:"db778110650dea1e4533cd09f75533a2"},{url:"css/panels.css",revision:"35620210ae3b44f1c5ad4a9995de26d4"},{url:"css/prism.css",revision:"e6a2c692b28dbb89c1a06154a868bb5c"},{url:"css/setup.css",revision:"74b1026e1282448f03f1b699db73adb8"},{url:"css/spectrum.css",revision:"f28ec14a773962b92665392c52e967bf"},{url:"css/start_screen.css",revision:"3838efe9657ba157b26c969ec1ed0907"},{url:"css/w3.css",revision:"04db708c100ea3937a3a5bf138cfcbf3"},{url:"css/window.css",revision:"caaee8425a1ceb97301fa4f9bef426bb"},{url:"assets/armor_stand.png",revision:"d936b2d5fe33f45fc3b67ebace503bf6"},{url:"assets/brush.png",revision:"b6a28bb79f9dea063d7a2ac620a3236a"},{url:"assets/hud.png",revision:"049320fa871e4fbe54978dd6043acd8c"},{url:"assets/inventory_full.png",revision:"430fc3c0627f04302d457eead5e1fa16"},{url:"assets/inventory_nine.png",revision:"28cc307e3f2ee4570532fe6ee01a6131"},{url:"assets/item_frame.png",revision:"08eaa797bfb1ceb3784b6fa04ce77387"},{url:"assets/locator.png",revision:"8448be12d087adfc0aea285af26ecbe8"},{url:"assets/logo_cutout.svg",revision:"1a2b2e5db76846d910af304e87605aee"},{url:"assets/logo_text_white.svg",revision:"021abc358f6fd915b2ad77d548bb1954"},{url:"assets/missing_blend.png",revision:"5d055c1476e74bcdfd987ab62045b8a6"},{url:"assets/missing.png",revision:"462b3d598e49c3bbd453bb01d88ac6aa"},{url:"assets/north.png",revision:"d6c44f75fe7a6dd16927b9b8d8d0e9c2"},{url:"assets/null_object.png",revision:"298d80b3ba99198a3688e8c558dda065"},{url:"assets/player_skin.png",revision:"bd60891dc6eacb8f038556dfdb1dadcc"},{url:"assets/poses/aiming.svg",revision:"99cc4acebde8bf10e5578a6ff0c4d418"},{url:"assets/poses/crouching.svg",revision:"ea45f7a8485078ac9fc50bf6cf032542"},{url:"assets/poses/jumping.svg",revision:"268a1a6966abb5b8eef0fc783017b980"},{url:"assets/poses/natural.svg",revision:"1bc79dd4c044a9fd330745699db6d721"},{url:"assets/poses/none.svg",revision:"38929100bfd2f391c3650fdde20b0e03"},{url:"assets/poses/sitting.svg",revision:"23eab940f7e9729a6e24438487553e7d"},{url:"assets/poses/walking.svg",revision:"eee91b6c25b42f5901961d39d35854d5"},{url:"assets/preview_scenes/mc_end.png",revision:"1406cfcc761cdeab183d76a7ca7f72a2"},{url:"assets/preview_scenes/mc_nether.png",revision:"8610f68e5e0cf57d99370b29d04f6772"},{url:"assets/preview_scenes/mc_overworld.png",revision:"c3b21121a345ade4dab50cc987fd6863"},{url:"assets/preview_scenes/studio.png",revision:"116be6e8296015a2653fe5a8c6e23ffe"},{url:"assets/rotate_cursor.png",revision:"092b9000c5901c27d4bee37236f6407c"},{url:"assets/splash_art.png",revision:"c7217e28768f89c102003545e4331b5d"},{url:"assets/uv_preview.png",revision:"dc46b13a7544fe5b4381ef8295c72c8b"},{url:"assets/vertex.png",revision:"6b314afc9e5a153db6798cf8c0a93918"},{url:"assets/zombie.png",revision:"a5fd9124b9eab1bc7880fea5f1b26e4c"},{url:"font/Assistant-Bold.ttf",revision:"d582391da9a68daf10a2ed2514c33826"},{url:"font/Assistant-ExtraBold.ttf",revision:"f2bbc6bae2ee3ce641adc1bb1a655371"},{url:"font/Assistant-ExtraLight.ttf",revision:"5e4d348ae3eca48143c0274a3124a9c0"},{url:"font/Assistant-Light.ttf",revision:"5415f395c1567a5c19efc1dc2892927a"},{url:"font/Assistant-Regular.ttf",revision:"e2b46dd69f54e57767ceef1d5fc8e688"},{url:"font/Assistant-SemiBold.ttf",revision:"d6759edb35ac7f29a029caa1192c010d"},{url:"font/fa-brands-400.woff2",revision:"a9afdb72826cde196ddf29eb8f9d0f8f"},{url:"font/fa-regular-400.woff2",revision:"f817938f131b0cabee81e59a96f9c2a6"},{url:"font/fa-solid-900.woff2",revision:"297973a488f688271dd223d542ba2697"},{url:"font/icomoon.ttf",revision:"e41af0d7e74154a711fc444d30b79e80"},{url:"font/icomoon.woff",revision:"86f5286db61fca481661deb53c4cfd3a"},{url:"font/MaterialIcons-Regular.ttf",revision:"4e85bc9ebe07e0340c9c4fc2f6c38908"}],{})}));
