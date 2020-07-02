; (function ($) {
    $(document).ready(function () {

        // grid
        var iso = new Isotope('.grid', {
            itemSelector: '.element-item',
            layoutMode: 'fitRows'
        });
        var filterFns = {
            ium: function (itemElem) {
                var name = itemElem.querySelector('.element-item').textContent;
                return name.match(/ium$/);
            }
        };
        var filtersElem = document.querySelector('.filters-button-group');
        filtersElem.addEventListener('click', function (event) {
            if (!matchesSelector(event.target, 'button')) {
                return;
            }
            var filterValue = event.target.getAttribute('data-filter');
            filterValue = filterFns[filterValue] || filterValue;
            iso.arrange({ filter: filterValue });
        });
        var buttonGroups = document.querySelectorAll('.button-group');
        for (var i = 0, len = buttonGroups.length; i < len; i++) {
            var buttonGroup = buttonGroups[i];
            radioButtonGroup(buttonGroup);
        }

        function radioButtonGroup(buttonGroup) {
            buttonGroup.addEventListener('click', function (event) {
                if (!matchesSelector(event.target, 'button')) {
                    return;
                }
                buttonGroup.querySelector('.is-checked').classList.remove('is-checked');
                event.target.classList.add('is-checked');
            });
        }




    });
})(jQuery);

