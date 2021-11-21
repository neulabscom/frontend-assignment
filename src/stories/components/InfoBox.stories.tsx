import React from 'react';
import { Story, Meta } from '@storybook/react';
import InfoBox from '../../../components/InfoBox';
import { InfoBoxProps } from '../../../interfaces';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/InfoBox',
  component: InfoBox,
  argTypes: {
    handleClick: { action: 'clicked' },
  },
} as Meta;

const Template: Story<InfoBoxProps> = (args) => <InfoBox {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: 'Il Signore degli anelli',
  description:
    "L'Anello diede a Gollum un'innaturale lunga vita. Per 500 anni avvelenò la sua mente, e nell'oscurità della caverna di Gollum attese. Le tenebre strisciarono di nuovo nella foresta del mondo, correvano voci di un'ombra ad est, sussurri di una paura senza nome. E l'Anello del potere percepì che era giunto il suo momento. Abbandonò Gollum. Ma accadde qualcosa che l'Anello non aveva previsto. Fu raccolto dalla creatura più improbabile che ci fosse...",
  levelImageUrl:
    'https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/The_One_Ring%2C_logo_of_the_Gollum_Wiki.png/128px-The_One_Ring%2C_logo_of_the_Gollum_Wiki.png',
  level: 2002,
};
