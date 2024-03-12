function(e, _, E) {
    e.exports = Object.freeze({
        DISCORD_NAME: "Discord",
        DEFAULT_CONFIRMATION_MODAL_HEADER: "Are you sure?",
        DISAPPROVAL: "ಠ_ಠ",
        ENGLISH_LANGUAGE: "English",
        GO_LIVE_MODAL_SELECT_GUILD_FORM_TITLE: "Select a server for your stream",
        GO_LIVE_MODAL_GUILD_FORM_TITLE: "Where you're streaming",
        OVERLAY_NEWS_GO_LIVE_BODY_NO_VOICE_CHANNEL: "Stream {game} to your friends!",
        SYSTEM_MESSAGE_GUILD_STREAM_ACTIVE: "$[!!{username}!!](usernameHook) is live! Now streaming !!{activityName}!!. [Join Stream](onJoinStream)",
        SYSTEM_MESSAGE_GUILD_STREAM_ACTIVE_MOBILE: "[!!{username}!!](usernameOnClick) is live. [Join Stream](onJoinStream)",
        SYSTEM_MESSAGE_GUILD_STREAM_ENDED: "$[!!{username}!!](usernameHook) was live for {duration} in !!{channelName}!!",
        SYSTEM_MESSAGE_GUILD_STREAM_ENDED_MOBILE: "[!!{username}!!](usernameOnClick) was live for {duration}.",
        INVITE_YOUR_FRIENDS: "Invite your friends!",
        PROGRESS_STEPS_FINISHED: "Completed!",
        MESSAGE_STEP_TITLE: "Send your first message",
        CHANNEL_PERMISSIONS_READ_ONLY_TITLE: "Read Only",
        CHANNEL_PERMISSIONS_READ_ONLY_DESCRIPTION: "By making a channel read only, members will not be able to send messages.",
        ROLE_CREATE_ADD_MEMBERS_SUBTITLE: "Assign this role to your members. Members can have more than one role.",
        INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN_GROUP_DM_BY_USER: "**!!{username}!!** has invited you to join a group DM",
        INVITE_MODAL_NEVERMIND_BUTTON: "Nevermind",
        INVITE_APP_GMAIL: "Gmail",
        INVITE_APP_WHATSAPP: "WhatsApp",
        INVITE_APP_LINE: "Line",
        INVITE_APP_TWITTER: "Twitter",
        INVITE_APP_MESSENGER: "Messenger",
        INVITE_APP_TELEGRAM: "Telegram",
        INVITE_SEND_ERROR: "Message Failed",
        INVITE_MESSAGE_PLACEHOLDER: "hey come check out Discord with me !!{link}!!",
        INVITE_URGENT_DAYS_MESSAGE_PLACEHOLDER: "hey join me on Discord! Invite expires in {numDays, plural, one {1 day} other {{numDays} days}}. !!{link}!!",
        INVITE_URGENT_HOURS_MESSAGE_PLACEHOLDER: "hey join me on Discord! Invite expires in {numHours, plural, one {1 hour} other {{numHours} hours}}. !!{link}!!",
        INVITE_URGENT_MINUTES_PLACEHOLDER: "hey join me on Discord! Invite expires in {numMinutes, plural, one {1 minute} other {{numMinutes} minutes}}. !!{link}!!",
        INVITE_EXPIRATION_NOTICE: "Invite expires in **!!{duration}!!.**",
        SYSTEM_MESSAGE_INVITE_USERS_OWNER: "Wondering who to invite?",
        SYSTEM_MESSAGE_INVITE_USERS_DESCRIPTION_OWNER: "Start by inviting anyone who can help you build the server!",
        SYSTEM_MESSAGE_INVITE_NOTIFICATION: "Wondering who to invite? Start by inviting anyone who can help you build the server!",
        SYSTEM_MESSAGE_INVITE_USERS: "Invite your friends",
        SYSTEM_MESSAGE_INVITE_USERS_DESCRIPTION: "The best way to setup a server is with your buddies!",
        SYSTEM_MESSAGE_INVITE_USERS_BUTTON: "Send an Invite",
        SYSTEM_MESSAGE_INVITE_USERS_OWNER_COMPACT: "**Wondering who to invite?** Start by inviting anyone who can help you build the server! $[Send an invite](inviteHook)",
        SYSTEM_MESSAGE_INVITE_USERS_COMPACT: "**Invite your friends!** The best way to setup a server is with your buddies! $[Send an invite](inviteHook)",
        SOUNDPACK_LABEL: "Sound Pack",
        SOUNDPACK_CLASSIC_LABEL: "classic",
        SOUNDPACK_DETUNE_LABEL: "discord but something's off",
        STAGE_INSTANCE_TICKET_PURCHASE_CONFIRMATION_TITLE: "You're in.",
        UPCOMING_GUILD_STAGE_INSTANCE_DISCOVERY_EMPTY_STATE_SUB_TITLE: "Let people know what’s happening by scheduling an upcoming Stage.\nIt will show up here for everyone in this server.",
        DELETE_STAGE_EVENT_CONFIRMATION_DESCRIPTION: "Are you sure you want to delete **!!{eventName}!!**? This action cannot be undone.",
        CREATE_STAGE_INSTANCE_SELECT_GUILD_HEADER: "Where's the party?",
        GUILD_STAGES_LANDING_MOBILE_SUBTITLE: "Visit this link on your desktop to buy a ticket. Once you have a ticket, you'll be able to attend the event on desktop or mobile.",
        GET_MOBILE_APP_SUBTITLE: "Discord isn't supported on mobile web browsers. Join over 100 million people who use Discord to talk with communities and friends.",
        MOBILE_APP_DOWNLOAD_CTA: "Get our mobile app",
        MOBILE_APP_DOWNLOAD_SUBHEADER: "Keep the conversion going on our iOS or Android app.",
        QR_CODE_DOWNLOAD_CTA: "Scan this QR code for an easy download link for our iOS or Android apps.",
        DESKTOP_DOWNLOAD_DESCRIPTION: "More features, better performance, and easy access to all your conversations.",
        DESKTOP_DOWNLOAD_TITLE_MAC: "Discord for Mac",
        DESKTOP_DOWNLOAD_TITLE_WINDOWS: "Discord for Windows",
        DESKTOP_DOWNLOAD_TITLE_LINUX: "Discord for Linux",
        DESKTOP_DOWNLOAD_TITLE: "Discord for desktop",
        GUILD_SETTINGS_AUDIT_LOG_V2_FILTER: "Filters",
        GUILD_SETTINGS_AUDIT_LOG_V2_SORT: "Sort by Date",
        GUILD_SETTINGS_AUDIT_LOG_V2_MEMBER_BAN_ADD: '$[**!!{user}!!**](userHook) banned $[**!!{target}!!**](targetHook): "!!{reason}!!"',
        GUILD_SETTINGS_AUDIT_LOG_V2_PRIVATE_THREAD_CREATE: '$[**!!{user}!!**](userHook) created a private thread $["!!{target}!!"](targetHook)',
        GUILD_SETTINGS_AUDIT_LOG_V2_ANNOUNCEMENT_THREAD_CREATE: '$[**!!{user}!!**](userHook) created an announcement thread $["!!{target}!!"](targetHook)',
        GUILD_SETTINGS_AUDIT_LOG_V2_THREAD_CREATE: '$[**!!{user}!!**](userHook) created a thread $["!!{target}!!"](targetHook)',
        GUILD_SETTINGS_AUDIT_LOG_V2_THREAD_UPDATE: '$[**!!{user}!!**](userHook) made changes to the thread $["!!{target}!!"](targetHook)',
        GUILD_SETTINGS_AUDIT_LOG_V2_THREAD_DELETE: '$[**!!{user}!!**](userHook) deleted the thread $["!!{target}!!"](targetHook)',
        GUILD_SETTINGS_AUDIT_LOG_V2_SCHEDULED_EVENT_CREATE: '$[**!!{user}!!**](userHook) scheduled the event $["!!{target}!!"](targetHook)',
        GUILD_SETTINGS_AUDIT_LOG_V2_SCHEDULED_EVENT_UPDATE: '$[**!!{user}!!**](userHook) updated the scheduled event $["!!{target}!!"](targetHook)',
        GUILD_SETTINGS_AUDIT_LOG_V2_SCHEDULED_EVENT_DELETE: '$[**!!{user}!!**](userHook) canceled the scheduled event $["!!{target}!!"](targetHook)',
        GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_QUARANTINE_USER: "AutoMod quarantined $[**!!{user}!!**](userHook) for violating content in their user profile",
        GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_FLAGGED_USER_PROFILE: "AutoMod flagged $[**!!{user}!!**](userHook) for violating content in their user profile",
        DEV_NOTICE_LOCAL: "Local development mode",
        DEV_NOTICE_STAGING: "Staging {buildNumber}",
        NOTIF_CENTER_V2_VIEW_SUMMARY: "Join in!",
        NOTIFICATION_CENTER_HIGHLIGHT_SETTINGS: "Highlight Notification Settings",
        NOTIFICATION_REPORT_IRRELEVANT_CHANNEL: "I don't care about this channel",
        NOTIFICATION_REPORT_IRRELEVANT_USER: "I don't know these people",
        NOTIFICATION_REPORT_IRRELEVANT_TOPIC: "Topic isn't relevant to me",
        NOTIFICATION_REPORT_SENSITIVE_OR_OFFENSIVE_TOPIC: "Topic is sensitive or offensive",
        HIGHLIGHT_NOTIFICATION_SETTINGS_LABEL_SUPPRESS_HIGHLIGHTS: "Suppress Highlights in this server",
        HIGHLIGHT_NOTIFICATION_ACTIONSHEET_BODY: "Stay informed, without the noise! Highlights provide occasional updates when your friends are chatting in busy servers. [Learn more]({helpUrl})",
        GUILD_SETTINGS_PARTNER_CHECKLIST_LOADING_FAILED: "We are having trouble loading the requirements. Please check back later.",
        GUILD_SETTINGS_PARTNER_CHECKLIST_LOADING_FAILED_TOOLTIP: "Something went wrong. Please check back later",
        PURCHASE_REVIEW_TAX_LABEL: "Tax",
        ONE_TIME_PURCHASE_FINE_PRINT: "This purchase is non-refundable.",
        GUILD_ROLE_SUBSCRIPTION_PURCHASE_BACK_TO_SUBSCRIPTION_USER_SETTING_CTA: "Back to Manage Server Subscriptions",
        FRIEND_INVITE_SHEET_TITLE: "Send Link to Add Friends",
        FRIEND_INVITE_EXPIRATION: "Links expire in {expirationDays} days, or {expirationUses} uses.",
        FRIEND_INVITE_REVOKE_ALL: "Revoke All Links",
        FRIEND_INVITE_ACCEPT_CONFIRMATION: "You are now friends with {username}!",
        PAYMENTS_ALL_METHOD_BUTTON: "All payment methods",
        DAY: "{count, plural, =1 {day} other {{count} days}}",
        MONTH: "{count, plural, =1 {month} other {{count} months}}",
        YEAR: "{count, plural, =1 {year} other {{count} years}}",
        DIRECTORY_CATEGORY_INTERNAL_1: "Work",
        DIRECTORY_CATEGORY_INTERNAL_2: "Social",
        DIRECTORY_CATEGORY_INTERNAL_3: "ERGs",
        DIRECTORY_CATEGORY_INTERNAL_5: "Archives",
        GUILD_DISCOVERY_SEARCH_PLACEHOLDER_TAGS: "Explore communities, or try popular tags below",
        GUILD_DISCOVERY_CATEGORY_SEARCH_PLACEHOLDER_TAGS: "Explore {categoryName} servers, or try popular tags below",
        CHANNEL_CHAT_NOTIFICATION_SETTINGS_NOTICE_MUTED: "You will not be notified of new messages because **!!{name}!!** is muted.",
        CHANNEL_CHAT_NOTIFICATION_SETTINGS_NOTICE_ONLY_MENTIONS: "You will only be notified when you are mentioned because **!!{name}!!** is set to **Only @mentions**.",
        NOTIFICATION_SETTINGS_UNREAD_MENTION_ONLY_DISABLED: "Disabled when notification is set to all messages",
        NOTIFICATION_SETTINGS_UNREAD_UPDATE_WARNING: "This will update unread badges to all messages",
        GUILD_JOIN_FEEDBACK_HEADER: "How is !!{guildName}!! going?",
        GUILD_JOIN_FEEDBACK_BODY: "Tell us about your community experience",
        GUILD_JOIN_FEEDBACK_ISSUE_SECTION_HEADER: "Choose your main issue",
        GUILD_JOIN_FEEDBACK_STILL_EXPLORING: "I am still exploring the server",
        GUILD_JOIN_FEEDBACK_NO_ACCESS: "I could not get full access to the server",
        GUILD_JOIN_FEEDBACK_ACCESS_TOO_HARD: "I got full access to the server, but gaining access was too hard",
        GUILD_JOIN_FEEDBACK_WHAT_DO: "I don't know what to do here",
        GUILD_JOIN_FEEDBACK_PERSONAL_EXPERIENCE: "I had a negative personal experience upon joining due to another server member(s)",
        GUILD_JOIN_FEEDBACK_REPORT: "Thanks for your feedback! Feedback like yours helps us improve Discord servers.",
        GET_STARTED: "Get Started",
        FEATURED_CHANNELS: "Featured Channels",
        TOP_CHANNELS: "Top Channels",
        CHANNELS_YOU_SHOULD_CHECK_OUT: "Channels you should check out",
        MEMBER_INSIGHTS_SERVER_ACCESS: "New Members",
        MEMBER_INSIGHTS_ACCESS_RATE_TOOLTIP: "7 day average percentage of non-bot new members who fail to access the community's channels (updated daily). You should aim for <10%.",
        MEMBER_INSIGHTS_ACCESS_RATING_BAD: "Your server is $[very hard to join](ratingHook)",
        MEMBER_INSIGHTS_ACCESS_RATING_NEUTRAL: "Your server is $[hard to join](ratingHook)",
        MEMBER_INSIGHTS_ACCESS_RATING_GOOD: "Your server is $[easy to join, but could be better](ratingHook)",
        MEMBER_INSIGHTS_ACCESS_RATING_VERY_GOOD: "Your server is $[easy to join](ratingHook)",
        MEMBER_INSIGHTS_ACCESS_RATING_APPROX: "Approximately {accessRate}% of new members fail to get access to your channels.",
        MEMBER_INSIGHTS_ACCESS_RATING_MORE: "More than {accessRate}% of new members fail to get access to your channels.",
        MEMBER_INSIGHTS_ACCESS_RATING_LESS: "Fewer than {accessRate}% of new members fail to get access to your channels.",
        MEMBER_INSIGHTS_TIPS: "Improve **New Member Retention** with these tips",
        ACCESS_RATE_ACTION_SUCCESS: "Great job! Check out **$[more insights](insightsHook)** to continue to improve your server.",
        ACCESS_RATE_ACTION_SIMPLIFY: "If you have verification steps for new members,  make instructions clearer for people less\n  familiar with Discord.",
        ACCESS_RATE_ACTION_EXTRA_STEPS: "Remove unnecessary verification steps, so members can check out your community.",
        ACCESS_RATE_ACTION_BOTS: "If your server is using $[third party integrations](integrationsHook) to restrict access, switch to integrations that are easier to understand.",
        ACCESS_RATE_ACTION_AUDIT: "Audit your server's onboarding as a new member. Look for any broken or confusing steps.",
        USER_SETTINGS_CHOOSE_GUILD_TITLE: "Choose a server",
        USER_SETTINGS_OTHER_QUICK_ACTIONS: "Other Actions",
        USER_SETTINGS_QUICK_ACTION_FORCE_NEW_USER_ONBOARDING: "Force new user onboarding flow",
        BETA: "Beta",
        BAN_MULTIPLE_CONFIRM_TITLE: "Would you like to ban {count, plural, one {1 member} other {{count} members}}?",
        BAN_MULTIPLE_SUCCESS_TOAST: "Mass ban succesful",
        BAN_MULTIPLE_FAILED_TOAST: "Mass ban failed",
        GUILD_MEMBER_MOD_VIEW_PHONE_VERIFIED: "Phone Verified",
        GUILD_MEMBER_MOD_VIEW_AGREE_TO_RULES: "Agreed to Rules",
        GUILD_MEMBER_MOD_VIEW_INVITE_LINK: "Invite Link",
        GUILD_MEMBER_MOD_VIEW_INVITE_LINK_TOOLTIP: "Invite link used to join server",
        GUILD_MEMBER_MOD_VIEW_INVITE_LINK_LABEL: "Join Method",
        GUILD_MEMBER_MOD_VIEW_DISCORD_JOIN_DATE: "Discord Join Date",
        GUILD_MEMBER_MOD_VIEW_GUILD_JOIN_DATE: "Server Join Date",
        GUILD_MEMBER_MOD_VIEW_GUILD_MESSAGE_ACTIVITY_TITLE: "Server Activity",
        APP_ICON_MUSHROOM: "One Up",
        STAFF_PTO_NOTICE: "Heads up! This person may be Out of Office.",
        CONSOLE_PLAYSTATION_STAGING_TRANSFER_VOICE: "Transfer to PlayStation (sp-int)",
        CONSOLE_PLAYSTATION_STAGING_JOIN_VOICE: "Join on PlayStation (sp-int)",
        SEARCH_EVERYWHERE: "Search Everywhere",
        SEARCH_FAVORITES: "Search Favorites",
        ROLE_PERMISSIONS_CONNECT_DESCRIPTION_THREADS: "Allows members to talk in voice and hear others in this channel's threads.",
        ROLE_PERMISSIONS_CONNECT_DESCRIPTION_THREADS_EVERYONE: "Allows members to talk in voice and hear others in this channel's threads.",
        ROLE_PERMISSIONS_SPEAK_DESCRIPTION_THREADS: "Allows members to talk in voice in this channel's threads. If this permission is disabled, members are default muted until somebody with the “Mute Members” permission un-mutes them.",
        ROLE_PERMISSIONS_STREAM_DESCRIPTION_THREADS: "Allows members to share their video, screen share, or stream a game in this channel's threads.",
        ROLE_PERMISSIONS_USE_VAD_DESCRIPTION_THREADS: "Allows members to speak in this channel's threads by simply talking. If this permission is disabled, members are required to use Push-to-talk. Good for controlling background noise or noisy members.",
        ROLE_PERMISSIONS_PRIORITY_SPEAKER_DESCRIPTION_THREADS: "Allows members to be more easily heard in this channel's threads. When activated, the volume of others without this permission will be automatically lowered. Priority Speaker is activated by using the **[{keybind}](onClick)** keybind.",
        ROLE_PERMISSIONS_PRIORITY_SPEAKER_DESCRIPTION_THREADS_MOBILE: "Allows members to be more easily heard in this channel's threads. When activated, the volume of others without this permission will be automatically lowered. Priority Speaker is activated by using the **{keybind}** keybind.",
        ROLE_PERMISSIONS_MUTE_MEMBERS_DESCRIPTION_THREADS: "Allows members to mute other members in this channel's threads for everyone.",
        ROLE_PERMISSIONS_DEAFEN_MEMBERS_DESCRIPTION_THREADS: "Allows members to deafen other members in this channel's threads, which means they won’t be able to speak or hear others.",
        ROLE_PERMISSIONS_MOVE_MEMBERS_DESCRIPTION_THREADS: "Allows members to disconnect other members from this channel's threads. They will also be able to move somebody into other channels that they have this permission in.",
        ROLE_PERMISSIONS_USE_EMBEDDED_ACTIVITIES_DESCRIPTION_THREADS: "Allows members to use Activities in this channel's threads.",
        MESSAGE_REMINDERS_EMPTY: "You have no Reminders!",
        MESSAGE_REMINDERS_EMPTY_TIP: "You can mark any message as a Reminder to have it appear here.",
        MESSAGE_REMINDERS_HEADER: "Message Reminders",
        MESSAGE_REMINDERS_HEADER_MOBILE: "Reminders",
        MESSAGE_REMINDERS_MARK_AS_TODO: "Remind Me",
        MESSAGE_REMINDERS_MARK_AS_DONE: "Remove Reminder",
        MESSAGE_REMINDERS_HEADER_ALL: "All Reminders",
        MESSAGE_REMINDERS_HEADER_OVERDUE: "Overdue Reminders",
        MESSAGE_REMINDERS_HEADER_SHOW_ALL: "Show all ({count, number})",
        MESSAGE_REMINDERS_HEADER_SHOW_OVERDUE: "Show overdue ({count, number})",
        MESSAGE_REMINDERS_SNOOZE_FOR: "Snooze for {duration}",
        MESSAGE_REMINDERS_SNOOZE: "Snooze",
        MESSAGE_REMINDERS_IN_ONE_HOUR: "in 1 hour",
        MESSAGE_REMINDERS_IN_TWO_HOURS: "in 2 hours",
        MESSAGE_REMINDERS_IN_FOUR_HOURS: "in 4 hours",
        MESSAGE_REMINDERS_IN_ONE_DAY: "in 1 day",
        MESSAGE_REMINDERS_IN_ONE_WEEK: "in 1 week",
        MESSAGE_REMINDERS_NEVER: "never",
        MESSAGE_REMINDERS_DUE_IN: "Due in {duration}",
        MESSAGE_REMINDERS_OVERDUE: "Due {duration} ago",
        APPLICATION_AUTOMOD_BADGE: "Uses AutoMod",
        SHARED_CANVAS_DRAW_MODE_LINE: "Draw",
        SHARED_CANVAS_DRAW_MODE_EMOJI_HOSE: "Emoji Hose",
        SHARED_CANVAS_HIDE_OVERLAY_DRAWINGS: "Hide Drawings in Overlay",
        AI_TAG: "AI",
        CLYDE_VIEW_SOURCE_SHOW_TOOLTIP: "View Sources",
        CLYDE_VIEW_SOURCE_HIDE_TOOLTIP: "Hide Sources",
        PERSONALITY_CHANNEL_BASED_KEY: "channel-based",
        PERSONALITY_SERIOUS_KEY: "serious-business",
        PERSONALITY_DEFAULT_KEY: "clyde",
        PERSONALITY_1_KEY: "pirate-life",
        PERSONALITY_2_KEY: "whimsical-wizard",
        PERSONALITY_3_KEY: "astro-adventurer",
        PERSONALITY_4_KEY: "noir-narrator",
        PERSONALITY_5_KEY: "inventive-intellectual",
        PERSONALITY_6_KEY: "knight-narrative",
        PERSONALITY_7_KEY: "secret-spy",
        PERSONALITY_8_KEY: "oracle-observations",
        PERSONALITY_9_KEY: "voyager-voice",
        PERSONALITY_10_KEY: "cinema-charmer",
        PERSONALITY_11_KEY: "wumpus",
        PERSONALITY_12_KEY: "nelly",
        BROADCASTING_SETTINGS: "Open Party Settings",
        BROADCASTING_SETTINGS_DESCRIPTION: "Control who can see your Open Party.",
        BROADCASTING_SETTINGS_CTA: "Configure Open Party Settings",
        BROADCASTING_SETTINGS_MODAL_AUDIENCE_TITLE: "Who can see your Open Party",
        BROADCASTING_SETTINGS_MODAL_CUSTOM_AUDIENCE_PLACEHOLDER_USERS: "Enter a friend's username",
        BROADCASTING_SETTINGS_MODAL_CUSTOM_AUDIENCE_PLACEHOLDER_GUILDS: "Enter a server name",
        BROADCASTING_SETTINGS_MODAL_FRIENDS: "Allow all of my friends to join my Open Party",
        BROADCASTING_SETTINGS_MODAL_CUSTOM_USERS: "Allow specific users to join my Open Party",
        BROADCASTING_SETTINGS_MODAL_CUSTOM_GUILDS: "Allow members of specific servers to join my Open Party",
        BROADCASTING_SETTINGS_MODAL_CUSTOM_USERS_HINT: "Select up to {count, number} users",
        BROADCASTING_SETTINGS_MODAL_CUSTOM_GUILDS_HINT: "Select up to {count, number} servers",
        BROADCASTING_SETTINGS_MODAL_DISABLED_DESCRIPTION: "All of your friends can see your Open Party",
        BROADCASTING_SETTINGS_MODAL_BEHAVIOR_TITLE: "Creating an Open Party",
        LEAVE_BROADCAST: "Leave Open Party",
        STOP_BROADCASTING: "End Open Party",
        START_BROADCASTING: "Start an Open Party",
        START_BROADCASTING_CTA: "Start Open Party",
        BROADCASTING: "In an Open Party",
        BROADCASTING_DESCRIPTION: "An Open Party is a temporary hangout space for you and your friends. Choose who can join, watch, and chat with you!",
        BROADCAST_SETTINGS: "Open Party Settings",
        BROADCAST_SETTINGS_SAVE: "Save Settings",
        BROADCASTING_CHANNEL_NAME: "!!{name}!!'s Open Party",
        LIVE_BROADCASTS: "Open Parties",
        AUTO_BROADCAST_TOGGLE: "Automatically create an Open Party when starting games",
        BROADCASTING_CAPTURE_PAUSED: "Your Party is Open",
        BROADCASTING_CAPTURE_PAUSED_DETAILS: "Hang tight and we'll see who's around...",
        MORE_OPEN_BROADCASTS: "{count, plural, =1 {{count, number} more Open Party} other {{count, number} more Open Parties}}",
        VIEW_OPEN_BROADCASTS: "View all Open Parties",
        JOIN_BROADCAST: "Join Open Party",
        VIEW_BROADCAST: "View Open Party",
        BROADCAST_FULL: "Open Party Full",
        BROADCASTING_BROADCASTER_TOOLTIP_HEADER: "Start an Open Party!",
        BROADCASTING_BROADCASTER_TOOLTIP_BODY: "You can now create your own temporary space where friends can drop by to hang out.",
        BROADCASTING_STOP_STREAM_CONFIRM_BODY: "Stopping your stream will also close your party, preventing people from seeing and joining it. You can re-open your party at any time by restarting your stream. Are you sure you want to end your stream?",
        BROADCASTING_START_STREAM_CONFIRM_BODY: "Starting your stream will re-open your party, allowing people to see it and join. Are you sure you want to start your stream?",
        BROADCASTING_BETA_TOOLTIP_TEXT: "Open Parties is an experimental feature. A limited number of users have the ability to host or join.",
        START_BROADCAST_NOTIFICATION_BODY: "Start a party, so your friends can drop by!",
        START_BROADCAST_NOTIFICATION_CTA: "Open a Party",
        XBOX: "Xbox",
        PLAYSTATION: "PlayStation",
        SAFETY_HUB_CLASSIFICATIONS_TABLE_HEADER: "Lorem, ipsum",
        SAFETY_HUB_CLASSIFICATIONS_TABLE_EMPTY_TEXT: "Lorem, ipsum dolor",
        SAFETY_HUB_CLASSIFICATIONS_TABLE_COLUMN_HEADER_DATE: "DATE",
        SAFETY_HUB_CLASSIFICATIONS_TABLE_COLUMN_HEADER_TYPE: "TYPE",
        SAFETY_HUB_CLASSIFICATIONS_TABLE_COLUMN_HEADER_EXPIRES: "EXPIRES",
        SAFETY_HUB_CLASSIFICATIONS_TABLE_COLUMN_HEADER_STATUS: "STATUS",
        CHANNEL_PROMPT_UPLOAD_IMAGE_CTA: "Upload a picture",
        CHANNEL_PROMPT_RANDOM_STICKER_CTA: "Random sticker",
        DEADCHAT_PROMPT_1: "It's quiet in here.",
        CHANNEL_PROMPT_GAMING_CTA: "Get my stats!",
        USER_SETTINGS_APPEARANCE_CHANNEL_LIST_LAYOUT_MINIMAL: "Minimal",
        SERVER_USAGE_SURVEY_BODY: "Help us make Discord better by answering a few questions about !!{guildName}!!",
        SERVER_USAGE_SURVEY_CTA: "Take Survey",
        REPORTS_USER_PREVIEW_TITLE: "Selected User",
        REPORTS_FREE_TEXT_PLACEHOLDER: "(Optional) Provide more context about your report here",
        REPORTS_USER_MENU_OPTION_MOBILE: "Report User Profile",
        FORM_LABEL_OVERLAY_SHOW_MUTE_DEAFEN_KEYBINDS: "Show mute and deafen keybinds",
        KEYBIND_NOTIFICATION_DESCRIPTION: "Now you can see your keybind for toggling mute in the overlay.",
        PROBLEMATIC_GPU_DRIVER_DETECTED: "There is currently a known issue with your GPU driver version which may affect the Go Live quality. If you experience this issue, learn more about how to fix it [here]({helpCenterLink}).",
        MANAGE_AUTHORIZED_APP: "Manage Authorized App",
        ADD_TO_USER: "Add to my apps",
        ADD_TO_USER_SUBTITLE: "Add app to your account to use anywhere",
        ADD_TO_GUILD: "Add to server",
        ADD_TO_GUILD_SUBTITLE: "Customize your server by adding this app",
        USER_APPS_LEARN_MORE: "To learn more about apps on Discord, visit our [Help Center]({helpUrl}).",
        SCOPE_DM_SELF: "Send you direct messages",
        MFA_REQUIRED_FOR_STAFF: "Multi-factor authentication is required for staff.",
        INAPPROPRIATE_CONVERSATION_CONTACT_CRISIS_TEXT_LINE_HEADER: "Contact Crisis Text Line",
        INAPPROPRIATE_CONVERSATION_CONTACT_CRISIS_TEXT_LINE_DESCRIPTION: "Get 24-hour, live support from a counselor. To start, text DISCORD to 741-741.",
        INAPPROPRIATE_CONVERSATION_CONTACT_CRISIS_TEXT_LINE_ALT: "Illustration of floating phone surrounded by various abstract health info bubbles",
        INAPPROPRIATE_CONVERSATION_SEND_A_TEXT: "Send a text",
        INAPPROPRIATE_CONVERSATION_CHAT_ON_THE_WEB: "Chat on the web",
        INAPPROPRIATE_CONVERSATION_MARK_AS_TIER_1: "Add Inappropriate Tier 1 Warning (Experimental)",
        INAPPROPRIATE_CONVERSATION_MARK_AS_TIER_2: "Add Inappropriate Tier 2 Warning (Experimental)",
        SAFETY_WARNINGS_DELETE: "Delete all Safety Warnings (Experimental)",
        STRANGER_DANGER_CONTEXT_MENU_CLEAR: "Reset Safety Warning dismissals (Experimental)",
        SERVER_DRAWER_ACTIVITY_VOICE: "in **!!{channelName}!!**",
        SERVER_DRAWER_ACTIVITY_VOICE_STATUS: "$[](statusHook) in **!!{channelName}!!**",
        SERVER_DRAWER_ACTIVITY_EVENT_IN_UPCOMING: "in !!{relativeTime}!!",
        SERVER_DRAWER_ACTIVITY_TOPIC: "talking **!!{topic}!!**",
        SERVER_DRAWER_ACTIVITY_PLAYING: "playing **!!{activity}!!**",
        SERVER_DRAWER_ACTIVITY_STREAMING: "streaming **!!{activity}!!**",
        SERVER_DRAWER_ACTIVITY_STREAMING_SCREEN: "sharing screen",
        PACKAGES: "Packages",
        USER_SETTINGS_PACKAGES_HEADER_CTA: "Open your Mailbox",
        USER_SETTINGS_PACKAGES_MAILBOX_HEADER: "Mailbox",
        USER_SETTINGS_PACKAGE_COUNT: "x{count, number}",
        USER_SETTINGS_PACKAGE_BANNER_DEFAULT: "Wow you have a lot of mail.",
        USER_SETTINGS_PACKAGE_BANNER_PITY: "How about you thank your mail delivery person?",
        USER_SETTINGS_PACKAGE_BANNER_CTA: "Give Thanks",
        PACKAGE_ITEM_1_NAME: "Newspaper",
        PACKAGE_ITEM_2_NAME: "Bills",
        PACKAGE_ITEM_3_NAME: "Grocery Savings",
        PACKAGE_ITEM_4_NAME: "Lost ID",
        PACKAGE_ITEM_5_NAME: "Postcard",
        PACKAGE_ITEM_6_NAME: "New Socks",
        PACKAGE_ITEM_7_NAME: "Glitterbomb",
        PACKAGE_ITEM_8_NAME: "Empty Envelope",
        PACKAGE_ITEM_9_NAME: "Birthday Card",
        PACKAGES_PACKAGES_OPENED: "Your Packages Opened",
        PACKAGES_UNIQUE_PACKAGES_OPENED: "Packages Received",
        PACKAGES_GLOBAL_PACKAGES_OPENED: "Total Packages Opened",
        PACKAGES_OPENED_OUT_OF: "{count, number} / {total, number}",
        PACKAGES_ENTRYPOINT_TITLE: "Your mail has arrived!",
        PACKAGES_ENTRYPOINT_DESCRIPTION: "See what you got...",
        PACKAGES_ENTRYPOINT_CLOSE: "Didn't ask",
        PACKAGES_NO_TEXT_TO_SPEECH_ANSWER_YES: "Yes",
        PACKAGES_NO_TEXT_TO_SPEECH_ANSWER_NO: "No",
        PACKAGES_NO_TEXT_TO_SPEECH_QUESTION_1: "Is this a joke?",
        PACKAGES_NO_TEXT_TO_SPEECH_QUESTION_2: "What will you get in your package?",
        PACKAGES_NO_TEXT_TO_SPEECH_QUESTION_2_ANSWER_1: "The forbidden dish",
        PACKAGES_NO_TEXT_TO_SPEECH_QUESTION_2_ANSWER_2: "Rat poison",
        PACKAGES_NO_TEXT_TO_SPEECH_QUESTION_3: "How many packages will you open?",
        PACKAGES_NO_TEXT_TO_SPEECH_QUESTION_3_ANSWER_1: "I'm disappointed",
        PACKAGES_NO_TEXT_TO_SPEECH_QUESTION_3_ANSWER_2: "Nice",
        PACKAGES_NO_TEXT_TO_SPEECH_QUESTION_4: "Are you confused?",
        PACKAGES_NO_TEXT_TO_SPEECH_QUESTION_5: "No Text to Speech?",
        PACKAGES_NO_TEXT_TO_SPEECH_QUESTION_6: "How about you give thanks to your mail delivery person",
        PACKAGES_NO_TEXT_TO_SPEECH_QUESTION_6_ANSWER_1: "Okay",
        PACKAGES_NO_TEXT_TO_SPEECH_QUESTION_7: "You're welcome :)",
        CONTENT_INVENTORY_MEMBERLIST_GROUP_TITLE: "Activity"
    })
}