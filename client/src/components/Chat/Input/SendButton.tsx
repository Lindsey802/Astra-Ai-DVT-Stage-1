import React, { forwardRef } from 'react';
import { useWatch } from 'react-hook-form';
import type { Control } from 'react-hook-form';
import { SendIcon, TooltipAnchor } from '@librechat/client';
import { useLocalize } from '~/hooks';
import { cn } from '~/utils';

type SendButtonProps = {
  disabled: boolean;
  control: Control<{ text: string }>;
};

const SubmitButton = React.memo(
  forwardRef((props: { disabled: boolean }, ref: React.ForwardedRef<HTMLButtonElement>) => {
    const localize = useLocalize();
    return (
      <TooltipAnchor
        description={localize('com_nav_send_message')}
        render={
          <button
            ref={ref}
            aria-label={localize('com_nav_send_message')}
            id="send-button"
            disabled={props.disabled}
            className={cn(
              'rounded-full border border-white/10 bg-white/5 p-1.5 text-violet-400 outline-offset-4 transition-all duration-200 hover:bg-white/10 hover:text-violet-300 disabled:cursor-not-allowed disabled:text-text-secondary disabled:opacity-40',
            )}
            data-testid="send-button"
            type="submit"
          >
            <span className="" data-state="closed">
              <SendIcon size={24} className="text-current" />
            </span>
          </button>
        }
      />
    );
  }),
);

const SendButton = React.memo(
  forwardRef((props: SendButtonProps, ref: React.ForwardedRef<HTMLButtonElement>) => {
    const data = useWatch({ control: props.control });
    const content = data?.text?.trim();
    return <SubmitButton ref={ref} disabled={props.disabled || !content} />;
  }),
);

export default SendButton;
