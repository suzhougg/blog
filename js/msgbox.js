function showmsgbox(id) {
	this.obj = id;
	this.result = "";
}
showmsgbox.prototype = {
	style: function (style) {
		switch (style) {
			case "wrong":
			case "error":
				infostyle =
					'data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E<defs><style>.error{fill:red}</style></defs>%3Cpath%20class="error"%20d%3D%22M12%2022C6.477%2022%202%2017.523%202%2012S6.477%202%2012%202s10%204.477%2010%2010-4.477%2010-10%2010zm-.763-15.864l.11%207.596h1.305l.11-7.596h-1.525zm.759%2010.967c.512%200%20.902-.383.902-.882%200-.5-.39-.882-.902-.882a.878.878%200%2000-.896.882c0%20.499.396.882.896.882z%22%2F%3E%3C%2Fsvg%3E';
				break;
			case "right":
				infostyle = 'data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E<defs><style>.right{fill:forestgreen}</style></defs>%3Cpath%20class="right"%20d%3D%22M12%2022C6.477%2022%202%2017.523%202%2012S6.477%202%2012%202s10%204.477%2010%2010-4.477%2010-10%2010zm-1.177-7.86l-2.765-2.767L7%2012.431l3.119%203.121a1%201%200%20001.414%200l5.952-5.95-1.062-1.062-5.6%205.6z%22%2F%3E%3C%2Fsvg%3E';
				break;
			case "loading":
			case "showLoading":
				infostyle =
					'data:image/gif;base64,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';
				break;
			case 'confirm':
				infostyle = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JQAAgIMAAPn/AACA6QAAdTAAAOpgAAA6mAAAF2+SX8VGAAAAY1BMVEX///8/lf8/lf8/lf8/ lf8/lf8/lf8/lf8/lf8/lf8/lf8/lf8/lf8/lf8/lf8/lf8/lf9Xov+31//z+P/////b6/+Hvf9j qf/D3v9LnP9vsP97tv+fyv/n8v/P5P+TxP+r0P+uPsg8AAAAEHRSTlMAGliOvOD3K4DRAWjNGIyY FB538gAAAAFiS0dEAIgFHUgAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfmBR4PAwktQlG5 AAABCElEQVQ4y8WU2RKCMAxFtQsiuESJqIjV//9KAds0XRx50vvCBM60yU3CYvE/LYVUuii0kmL5 AVmVayCty1UGqeoNBNrUVcxsd5Bot42YPWS0D6iKzjkcG8RT687iN9aOOQ/IqIuNa1aXy/naYNN2 txNib7P3NZbuoB6xe7N3+6YkD8kfYz8aROeXc1VQOYgmgkBYSBLUdefp6a8DaSEV+/OgxAGUhXTE tINTFGgLFSFzG5grRUUWGupnDEHhdQ9sDizU2cR7fPJQJRZMaZuWhzIxMyORtCUVtcU3OBU12I/K qKdhibNR8UMHY3OND9jQsfENoWB8Zy3CvJWat5zz1nxy9fsP4xd6AcvoLo6BSLErAAAAJXRFWHRk YXRlOmNyZWF0ZQAyMDIyLTA1LTMwVDEyOjAzOjA5KzAzOjAw3pV8TwAAACV0RVh0ZGF0ZTptb2Rp ZnkAMjAyMi0wNS0zMFQxMjowMzowOSswMzowMK/IxPMAAAAASUVORK5CYII='
				break;
			case "info":
			default:
				infostyle =
					'data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E<defs><style>.error{fill:lightskyblue}</style></defs>%3Cpath%20class="error"%20d%3D%22M12%2022C6.477%2022%202%2017.523%202%2012S6.477%202%2012%202s10%204.477%2010%2010-4.477%2010-10%2010zm-.763-15.864l.11%207.596h1.305l.11-7.596h-1.525zm.759%2010.967c.512%200%20.902-.383.902-.882%200-.5-.39-.882-.902-.882a.878.878%200%2000-.896.882c0%20.499.396.882.896.882z%22%2F%3E%3C%2Fsvg%3E';
		}
		return infostyle;
	},
	show: function (message, style, config) {
		if (typeof config == 'undefined') {
			config = {};
		}
		var timeout = 1;
		var msg = document.createElement("div");
		if (typeof (config.timeout) == 'undefined') {
			try {
				var regex = /(<([^>]+)>)/gi;
				var final = message.replace(regex, "");
				timeout = final.length * 0.25;
			} catch (e) {
				timeout = 2.0;
			}
		} else {
			if (config.timeout > 300) {
				timeout  = config.timeout / 1000
			} else {
				timeout = config.timeout;
			}
		}
		rnd = Math.random() * 1000;
		msg.id = rnd;
		this.obj = msg;
		this.id = rnd;

		infostyle = this.style(style);
		var width_str = ""
		if (window.innerWidth > 500) {
			width_str = "width: fit-content; margin:0 auto;max-width:35%;"
		} else {
			if (style == 'input') {
				width_str = "margin:0 auto;width:85%;"
			} else {
				width_str = "width: fit-content; margin:0 auto;max-width:85%;"
			}
		}
		var html = ''
		if(style == '' || typeof style == 'undefined'){
			style = 'info';
		}
		if (style == 'right' || style == 'wrong' || style == 'error' || style == 'confirm' || style == 'info') {
			html = '<div data-rnd="' + rnd + '" id="cover_' + rnd + '" style="position: fixed;z-index: 4999;top: 0;right: 0;left: 0;bottom: 0;background: rgba(0,0,0,0.6);"></div><div style="position: fixed; ' + width_str + ' z-index: 5000; top: 40%; left: 16px; right: 16px; -webkit-transform: translate(0,-50%); transform: translate(0,-50%); background-color: #fff; text-align: center; border-radius: 12px; overflow: hidden; display: -webkit-box; display: -webkit-flex;  -webkit-flex-direction: column; -webkit-box-orient: vertical; -webkit-box-direction: normal; flex-direction: column; max-height: 90%;"><div style="min-height: 40px; padding: 32px 24px 0; font-weight: 700;display: flex;-webkit-box-orient: vertical; overflow-y: auto; -webkit-overflow-scrolling: touch; padding: 0 24px; margin-bottom: 28px; font-size: 18px; line-height: 1.4; word-wrap: break-word; -webkit-hyphens: auto; hyphens: auto; color: rgba(0,0,0,0.5); color: #444;padding: 32px 24px 0;">'
			if(style == 'confirm' || style == 'error' || style == 'wrong' || style == 'info'){
				html += '<img id="img_' + rnd + '" src=\'' + infostyle + '\' style="top: 50%; position: absolute; left: 10px; transform: translateY(-100%);display: inline-block; vertical-align: middle; width: 2.4em; height: 2.4em;"><div style="text-align:left; margin-left:40px; position:relative;" id="wm_content_' + rnd + '">' + message + '</div></div><div style="position:relative; border-top:1px solid #ccc;display:flex;">';
				if (typeof config.button != 'undefined') {
					for (var x in config.button) {
						html += '<a style="-webkit-box-flex: 1; -webkit-flex: 1; flex: 1; display: block; padding:11px 0; line-height: 1.41176471; font-size: 17px; color: #576b95; font-weight: 700; text-decoration: none; -webkit-tap-highlight-color: rgba(0,0,0,0); position: relative; overflow: hidden;cursor:pointer;' + (x > 0 ? 'border-left:1px solid #ccc;' : '') + '" class="btn_'+ rnd + '" data-rnd="' + rnd + '" data-btn_index=' + x + '>' + config.button[x] + '</a>'
					}
				} else {
					html += '<a style="width:100%;padding:11px 0; display:block;font-size: 17px; color: #576b95; font-weight: 700; text-decoration: none; -webkit-tap-highlight-color: rgba(0,0,0,0); overflow: hidden; cursor:pointer"' + 'class="btn_' + rnd + '" data-rnd="' + rnd + '">ȷ��</a>';
				}
				html += "</div>";
			} else {
				html += '<img id="img_' + rnd + '" src=\'' + infostyle + '\' style="top: 50%; position: absolute; left: 10px; transform: translateY(-45%);display: inline-block; vertical-align: middle; width: 2.4em; height: 2.4em; cursor:pointer" onclick="document.body.removeChild(document.getElementById(' + rnd + '));"><div style="text-align:left; margin-left:40px;position:relative;" id="wm_content_' + rnd + '">' + message + '</div></div>';
			}
		} else if (style == 'loading') {
			html = '<div style="position: fixed;z-index: 19820828;top: 0;right: 0;left: 0;bottom: 0;background: rgba(0,0,0,0);"></div><div style="position:fixed;top: 40%; left: 50%;z-index: 19820828; -webkit-transform: translate(-50%,-50%); transform: translate(-50%,-50%); text-align: center; border-radius: 12px; color: rgba(255,255,255,0.9); display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; -webkit-box-align: center; -webkit-align-items: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; background-color: #4c4c4c; box-sizing: border-box; line-height: 1.4;width: 10em;word-break: break-all;height: 10em; overflow:hidden "><img id="img_' + rnd + '" src="' + infostyle + '" style="position: absolute; top: 50%; transform:translateY(-100%);display: inline-block; vertical-align: middle; width: 3em; height: 3em;"><a style="font-size: 15px; top:60%; position:absolute; text-decoration: none; -webkit-tap-highlight-color: rgba(0,0,0,0); overflow: hidden;padding:10px;color:#FFF;" id="wm_content_' + rnd + '">' + message + '</a></div>'
		} else if(style == 'input'){
			html = '<div id="mask'+ rnd +'" style="position: fixed;z-index: 4999;top: 0;right: 0;left: 0;bottom: 0;background: rgba(0,0,0,0.6);"></div><div style="position: fixed; ' + width_str + ' z-index: 5000; top: 50%; left: 16px; right: 16px; -webkit-transform: translate(0,-50%); transform: translate(0,-50%); background-color: #fff; text-align: center; border-radius: 12px; overflow: hidden; display: -webkit-box; display: -webkit-flex;  -webkit-flex-direction: column; -webkit-box-orient: vertical; -webkit-box-direction: normal; flex-direction: column; max-height: 90%;"><div style="min-height: 40px; padding: 32px 24px 0; font-weight: 700;display: flex;-webkit-box-orient: vertical; overflow-y: auto; -webkit-overflow-scrolling: touch; padding: 0 24px; margin-bottom: 28px; font-size: 18px; line-height: 1.4; word-wrap: break-word; -webkit-hyphens: auto; hyphens: auto; color: rgba(0,0,0,0.5); color: #444;padding: 32px 24px 0;">'
			html += '<div style="text-align:left; position:relative;width:100%"><div style="margin-bottom:10px" id="wm_content_' + rnd + '">' + message + '</div>';
			if (typeof config.html == 'undefined' || config.html == '') {
				html += '<input type="text" id="input' + rnd + '" style="width:100%;height:40px;" value="' + (typeof config.default == 'undefined' ? '' : config.default) + '" />';
			} else {
				html += config.html;
			}
			

			html += '</div>';
			html += '</div><div style="position:relative; border-top:1px solid #ccc;display:flex;">';

			if (typeof config.button != 'undefined') {
				for (var x in config.button) {
					html += '<a style="-webkit-box-flex: 1; -webkit-flex: 1; flex: 1; display: block; padding:11px 0; line-height: 1.41176471; font-size: 17px; color: #576b95; font-weight: 700; text-decoration: none; -webkit-tap-highlight-color: rgba(0,0,0,0); position: relative; cursor:pointer;overflow: hidden;' + (x > 0 ? 'border-left:1px solid #ccc;' : '') + '" class="btn_'+ rnd + '" data-rnd="'+ rnd +'" data-btn_index=' + x + '>' + config.button[x] + '</a>'
				}
			} else {
				html += '<a style="width:100%;padding:11px 0; display:block;font-size: 17px; color: #576b95; font-weight: 700; text-decoration: none; -webkit-tap-highlight-color: rgba(0,0,0,0); overflow: hidden; cursor:pointer;cursor:pointer;"' + 'class="btn_' + rnd + '" data-rnd="'+ rnd +'"  data-btn_index=0>ȡ��</a>';
				html += '<a style="width:100%;padding:11px 0; display:block;font-size: 17px; color: #576b95; font-weight: 700; text-decoration: none; border-left:1px solid #ccc; -webkit-tap-highlight-color: rgba(0,0,0,0); overflow: hidden; cursor:pointer;cursor:pointer"' + 'class="btn_' + rnd + '" data-rnd="'+ rnd +'" data-btn_index=1>ȷ��</a>';
			}
			html += "</div>";
		}
		
		html += '</div>'
		msg.innerHTML = html;
		document.body.appendChild(msg);

		var btns = document.getElementsByClassName('btn_' + rnd);
		if (style == 'confirm' || style == 'error' || style == 'info' || style == 'wrong') {
			for (var x in btns) {
				if (typeof btns[x] == 'object') {
					btns[x].addEventListener('click', function (e) {
						
						if (typeof config.click != 'undefined') {
							config.click(this.getAttribute('data-btn_index'));
						}
						
						try {
							var btn_rnd = this.getAttribute('data-rnd');
							document.body.removeChild(document.getElementById(btn_rnd));
						} catch (e) {
							
						}
					});
				}
			}
		}
		if (style == 'input') {
			for (var x in btns) {
				if (typeof btns[x] == 'object') {
					var that = this;
					btns[x].addEventListener('click', function (e) {
						var inp_val = '';
						if (typeof config.html == 'undefined' || config.html == '') {
							inp_val = document.getElementById('input' + rnd).value;
						} else {
							var form = document.getElementById(rnd).getElementsByTagName('form');
							inp_val = form[0].id
						}

						
						if (typeof config.click != 'undefined') {
							that.result = inp_val;
							config.click(this.getAttribute('data-btn_index'));
						}
						try {
							var btn_rnd = this.getAttribute('data-rnd');
							document.body.removeChild(document.getElementById(btn_rnd));
						} catch (e) {
							
						}
					});
				}
			}
			var n = 0;
			if (typeof config.html == 'undefined' || config.html == '') {
				var textbox = document.getElementById('input' + rnd);
				n = textbox.value.length;
				textbox.focus();
				if (navigator.userAgent.indexOf("MSIE") == -1) {
					document.getElementById('input' + rnd).setSelectionRange(n, n);				
				} else {
					var range = document.selection.createRange();
					var textRange = textbox.createTextRange();
					textRange.moveStart('character', n);
					textRange.collapse();
					textRange.select();
				}
			}

		}
		if (style == 'right') {
			document.getElementById('cover_' + rnd).addEventListener('click', function (e) {
				try {
					var btn_rnd = this.getAttribute('data-rnd');
					document.body.removeChild(document.getElementById(btn_rnd));
				} catch (e) {
					
				}
			});
			setTimeout(function () {
				if(document.getElementById(rnd)){
					document.body.removeChild(msg);
				}
				if (typeof config.redirect != 'undefined') {
					location.href = config.redirect;
				}
			}, timeout * 1000);
		}
		return this;
	},
	close: function (who) {
		console.log(who)
		document.body.removeChild(document.getElementById(who.id));
	},
	showtext: function (text) {
		try {
			document.getElementById('wm_content_' + this.id).innerHTML = text;
		} catch (e) {
			console.error("catched error:" + e);
		}
	}
};
var msgbox = new showmsgbox();