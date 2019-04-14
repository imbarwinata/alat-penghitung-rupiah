(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    54(e, a, t) {
      t.r(a);
      const n = t(0);
      const r = t.n(n);
      const s = t(55);
      const l = t.n(s);
      const c = t(56);
      const m = t.n(c);
      const p = t(2);
      const o = t.n(p);
      class i extends r.a.Component {
        render() {
          const e = this.props;
          const a = e.costLeft;
          const t = e.costReturn;
          const n = e.decimals;
          const s = e.input;
          return r.a.createElement(
            r.a.Fragment,
            null,
            s
              ? r.a.createElement(
                  'div',
                  { className: o.a.costInput },
                  'Uang yang anda masukkan :Rp',
                  ' ',
                  r.a.createElement(m.a, {
                    value: s,
                    displayType: 'text',
                    decimalSeparator: ',',
                    thousandSeparator: '.',
                  }),
                )
              : r.a.createElement(r.a.Fragment, null),
            t &&
              n.map((e, a) =>
                t[e]
                  ? r.a.createElement(
                      'div',
                      { key: e, className: o.a.item },
                      r.a.createElement(
                        'div',
                        { className: o.a.total },
                        'x ',
                        t[e],
                      ),
                      r.a.createElement(
                        'div',
                        { className: o.a.nominal },
                        'Rp',
                        ' ',
                        r.a.createElement(m.a, {
                          value: n[a],
                          displayType: 'text',
                          decimalSeparator: ',',
                          thousandSeparator: '.',
                        }),
                      ),
                    )
                  : r.a.createElement(r.a.Fragment, null),
              ),
            a
              ? r.a.createElement(
                  'div',
                  { className: o.a.costLeft },
                  'Uang yang tersisa :Rp',
                  ' ',
                  r.a.createElement(m.a, {
                    value: a,
                    displayType: 'text',
                    decimalSeparator: ',',
                    thousandSeparator: '.',
                  }),
                )
              : r.a.createElement(r.a.Fragment, null),
          );
        }
      }
      (i.propTypes = {
        costLeft: l.a.number.isRequired,
        costReturn: l.a.oneOfType([l.a.number]),
        decimals: l.a.objectOf(l.a.number),
        input: l.a.number.isRequired,
      }),
        (a.default = i);
    },
  },
]);
// # sourceMappingURL=5.ca26143ee1de9be4d95c.js.map
