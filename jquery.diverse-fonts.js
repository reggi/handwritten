$(document).ready(function() {
    $("[data-fonts]").each(function() {
        var $element = $(this);
        var styles = function() {
            var fonts = $element.attr("data-fonts").split(", ");
            var font_case = ($element.attr("data-mix-case") == "") ? true : false;
            if (font_case) {
                var styles = _.flatten(_.map(fonts, function(font) {
                    return [{
                        "font-family": font,
                        "text-transform": "uppercase"
                    }, {
                        "font-family": font,
                        "text-transform": "lowercase"
                    }];
                }));
            } else {
                var styles = _.map(fonts, function(font) {
                    return {
                        "font-family": font
                    };
                });
            }
            return styles;
        }();
        var replace_html = function() {
            var text_array = $element.text().split('');
            var text_array_clean = _.without(text_array);
            var replace_html = $("<div>");
            _.each(text_array_clean, function(letter) {
                if (letter == "") {
                    var letter_elment = $("<span>").text(" ");
                    replace_html.append(letter_elment);
                } else {
                    var random_style = styles[Math.floor(Math.random() * styles.length)];
                    var letter_elment = $("<span>").css(random_style).text(letter);
                    replace_html.append(letter_elment);
                }
            });
            return replace_html.html();
        }();
        $element.html(replace_html);
    });
});