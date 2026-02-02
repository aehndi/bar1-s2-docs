import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Einfach zu verwenden',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus wurde entwickelt, um Ihre Website schnell zum Laufen zu bringen.
        Wir haben alles für Sie eingerichtet, damit Sie sich auf Ihre Dokumentation konzentrieren können.
      </>
    ),
  },
  {
    title: 'Fokussieren Sie sich auf das Wesentliche',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus lässt Sie sich auf Ihre Dokumentation konzentrieren, während wir uns um die
        Rest kümmern. Gehen Sie und schreiben Sie Ihre Dokumentation.
      </>
    ),
  },
  {
    title: 'Von React betrieben',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Erweitern Sie oder passen Sie Ihre Website mit React-Komponenten an.
        Docusaurus nutzt die volle Leistung von React, um Ihre Dokumentation interaktiv zu machen.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}