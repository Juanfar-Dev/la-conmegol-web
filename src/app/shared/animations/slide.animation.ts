import {
  animate,
  animation,
  group,
  query,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const slideAnimation = animation([
  group([
    query(
      ':enter',
      style({
        transform: 'translateX({{ enterStart }}) scale({{ hiddenScale }})',
      }),
      { optional: true }
    ),
    query(
      ':leave',
      [
        animate(
          '{{speed}}ms ease-in-out',
          style({
            transform: 'translateX({{ leaveEnd }}) scale({{ hiddenScale }})',
          })
        ),
      ],
      { optional: true }
    ),
    query(
      ':enter',
      [
        animate(
          '{{speed}}ms ease-in-out',
          style({ transform: 'translateX(0) scale(1)' })
        ),
      ],
      { optional: true }
    ),
  ]),
]);

export const slideInOut = trigger('slideInOut', [
  state('in', style({ transform: 'translateY(0)' })),
  state('out', style({ transform: 'translateY(100%)' })),
  transition('in => out', [
    animate('0.5s ease-in-out')
  ]),
  transition('out => in', [
    animate('0.5s ease-in-out')
  ])
])
