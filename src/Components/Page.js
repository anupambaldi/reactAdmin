import React from 'react';
import Prop from '../utils/propTypes';

import bn from '../utils/bemnames';

import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

import Typography from './Typography';

const bem = bn.create('page');

const Page = ({
  title,
  breadcrumbs,
  tag: Tag,
  className,
  children,
  ...restProps
}) => {
  const classes = bem.b('px-3', className);

  return (
    <Tag className={classes} {...restProps}>
      <div className={bem.e('header')}>
        {title && typeof title === 'string' ? (
          <Typography type="h1" className={bem.e('title')}>
            {title}
          </Typography>
        ) : (
            title
          )}
        {breadcrumbs && (
          <Breadcrumb className={bem.e('breadcrumb')}>
            <BreadcrumbItem>Home</BreadcrumbItem>
            {breadcrumbs.length &&
              breadcrumbs.map(({ name, active }, index) => (
                <BreadcrumbItem key={index} active={active}>
                  {name}
                </BreadcrumbItem>
              ))}
          </Breadcrumb>
        )}
      </div>
      {children}
    </Tag>
  );
};

Page.Prop = {
  tag: Prop.component,
  title: Prop.oneOfType([Prop.string, Prop.element]),
  className: Prop.string,
  children: Prop.node,
  breadcrumbs: Prop.arrayOf(
    Prop.shape({
      name: Prop.string,
      active: Prop.bool,
    })
  ),
};

Page.defaultProps = {
  tag: 'div',
  title: '',
};

export default Page;
