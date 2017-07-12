(function () {

  'use strict';

    describe('Dimensions object should hold height property', function () {
      it('Height property is avialable', function () {
        expect(camo.dimensions).to.have.property('height');
      });
    });
    describe('Dimensions object should hold width property', function () {
      it('Width property is avialable', function () {
        expect(camo.dimensions).to.have.property('width');
      });
    });


})();
