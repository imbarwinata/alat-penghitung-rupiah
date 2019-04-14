(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    53(e, n, a) {
      a.r(n);
      const t = a(0);
      const o = a.n(t);
      const r = a(55);
      const u = a.n(r);
      const s = a(56);
      const l = a.n(s);
      const c = a(2);
      const i = a.n(c);
      class p extends o.a.Component {
        render() {
          const e = this.props;
          const n = e.handleChangeInput;
          const a = e.handleCalculate;
          const t = e.handleEnter;
          const r = e.input;
          return o.a.createElement(
            'div',
            { className: i.a.form },
            o.a.createElement(l.a, {
              onChange: n,
              onKeyDown: t,
              value: r,
              decimalSeparator: ',',
              thousandSeparator: '.',
              className: i.a.formInput,
            }),
            o.a.createElement(
              'button',
              {
                'data-test': 'component-button',
                className: i.a.formButton,
                type: 'button',
                onClick: a,
              },
              'Hitung',
            ),
          );
        }
      }
      (p.propTypes = {
        handleChangeInput: u.a.func.isRequired,
        handleCalculate: u.a.func.isRequired,
        handleEnter: u.a.func.isRequired,
        input: u.a.string.isRequired,
      }),
        (n.default = p);
    },
  },
]);
// # sourceMappingURL=4.4e45612670ca13d5536b.js.map
