/// <reference path="../../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';

import {IconButton, IconButtonProps} from '@workday/canvas-kit-react-button';

import README from '../lib/theming/README.md';

import {
  CanvasProvider,
  createCanvasTheme,
  ContentDirection,
} from '@workday/canvas-kit-labs-react-core';
import {rewind30Icon, fastForward15Icon, mediaPauseIcon} from '@workday/canvas-system-icons-web';
import {Card} from '@workday/canvas-kit-react';

const commonIconButtonProps: Pick<IconButtonProps, 'aria-label' | 'title' | 'icon'> = {
  'aria-label': 'Activity Stream',
  title: 'Activity Stream',
};

storiesOf('Labs/Core/React', module)
  .addDecorator(withReadme(README))
  .add('Direction', () => (
    <div className="story">
      <section>
        <CanvasProvider theme={createCanvasTheme({direction: ContentDirection.RTL})}>
          <Card heading="مشغل وسائط" style={{width: '186px'}}>
            <CanvasProvider theme={createCanvasTheme({direction: ContentDirection.LTR})}>
              <IconButton
                {...commonIconButtonProps}
                variant={IconButton.Variant.Circle}
                size={IconButton.Size.Medium}
                icon={rewind30Icon}
              />
              <IconButton
                {...commonIconButtonProps}
                variant={IconButton.Variant.Circle}
                size={IconButton.Size.Medium}
                icon={mediaPauseIcon}
              />
              <IconButton
                {...commonIconButtonProps}
                variant={IconButton.Variant.Circle}
                size={IconButton.Size.Medium}
                icon={fastForward15Icon}
              />
            </CanvasProvider>
          </Card>
        </CanvasProvider>
      </section>
    </div>
  ));
