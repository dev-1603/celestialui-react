export interface ComponentInfo {
  name: string
  category: 'ATOMIC' | 'MOLECULAR' | 'ORGANISM' | 'TEMPLATE' | 'ADVANCED'
  description: string
  implemented: boolean
  storybookPath?: string
  docPath: string
}

export const componentData: ComponentInfo[] = [
  // ATOMIC Components
  { name: 'Button', category: 'ATOMIC', description: 'Primary action button with variants and states', implemented: true, storybookPath: '/?path=/story/components-button--primary', docPath: '/components/button' },
  { name: 'Input', category: 'ATOMIC', description: 'Text input field with validation and states', implemented: true, storybookPath: '/?path=/story/components-input--basic', docPath: '/components/input' },
  { name: 'Icon', category: 'ATOMIC', description: 'SVG icon component with size and color variants', implemented: true, storybookPath: '/?path=/story/components-icon--basic', docPath: '/components/icon' },
  { name: 'Card', category: 'ATOMIC', description: 'Container component with header, content, and footer sections', implemented: true, storybookPath: '/?path=/story/components-card--basic', docPath: '/components/card' },
  { name: 'Checkbox', category: 'ATOMIC', description: 'Binary selection control', implemented: false, docPath: '/components/checkbox' },
  { name: 'Radio', category: 'ATOMIC', description: 'Single selection from group', implemented: false, docPath: '/components/radio' },
  { name: 'Switch', category: 'ATOMIC', description: 'Toggle control', implemented: false, docPath: '/components/switch' },
  { name: 'Slider', category: 'ATOMIC', description: 'Range input control', implemented: false, docPath: '/components/slider' },
  { name: 'Progress', category: 'ATOMIC', description: 'Progress indicator', implemented: false, docPath: '/components/progress' },
  { name: 'Avatar', category: 'ATOMIC', description: 'User profile image', implemented: false, docPath: '/components/avatar' },
  { name: 'Badge', category: 'ATOMIC', description: 'Status indicator', implemented: false, docPath: '/components/badge' },
  { name: 'Divider', category: 'ATOMIC', description: 'Section separator', implemented: false, docPath: '/components/divider' },
  { name: 'Skeleton', category: 'ATOMIC', description: 'Loading placeholder', implemented: false, docPath: '/components/skeleton' },
  { name: 'Spinner', category: 'ATOMIC', description: 'Loading indicator', implemented: false, docPath: '/components/spinner' },
  { name: 'Heading', category: 'ATOMIC', description: 'Typography heading', implemented: false, docPath: '/components/heading' },
  { name: 'Text', category: 'ATOMIC', description: 'Typography text', implemented: false, docPath: '/components/text' },
  { name: 'Code', category: 'ATOMIC', description: 'Code display', implemented: false, docPath: '/components/code' },
  { name: 'Link', category: 'ATOMIC', description: 'Navigation link', implemented: false, docPath: '/components/link' },
  { name: 'IconButton', category: 'ATOMIC', description: 'Icon-only button', implemented: false, docPath: '/components/icon-button' },
  { name: 'Kbd', category: 'ATOMIC', description: 'Keyboard key display', implemented: false, docPath: '/components/kbd' },

  // MOLECULAR Components
  { name: 'Toast', category: 'MOLECULAR', description: 'Notification component with auto-dismiss and positioning', implemented: true, storybookPath: '/?path=/story/feedback-toast--playground', docPath: '/components/toast' },
  { name: 'Modal', category: 'MOLECULAR', description: 'Overlay dialog component with backdrop and focus management', implemented: true, storybookPath: '/?path=/story/components-modal--basic', docPath: '/components/modal' },
  { name: 'Select', category: 'MOLECULAR', description: 'Dropdown selection', implemented: false, docPath: '/components/select' },
  { name: 'MultiSelect', category: 'MOLECULAR', description: 'Multiple selection dropdown', implemented: false, docPath: '/components/multiselect' },
  { name: 'Textarea', category: 'MOLECULAR', description: 'Multi-line text input', implemented: false, docPath: '/components/textarea' },
  { name: 'FileUpload', category: 'MOLECULAR', description: 'File selection component', implemented: false, docPath: '/components/file-upload' },
  { name: 'DatePicker', category: 'MOLECULAR', description: 'Date selection', implemented: false, docPath: '/components/date-picker' },
  { name: 'TimePicker', category: 'MOLECULAR', description: 'Time selection', implemented: false, docPath: '/components/time-picker' },
  { name: 'ColorPicker', category: 'MOLECULAR', description: 'Color selection', implemented: false, docPath: '/components/color-picker' },
  { name: 'NumberInput', category: 'MOLECULAR', description: 'Numeric input with controls', implemented: false, docPath: '/components/number-input' },
  { name: 'SearchInput', category: 'MOLECULAR', description: 'Search input with suggestions', implemented: false, docPath: '/components/search-input' },
  { name: 'PasswordInput', category: 'MOLECULAR', description: 'Password input with toggle', implemented: false, docPath: '/components/password-input' },
  { name: 'PinInput', category: 'MOLECULAR', description: 'PIN/OTP input', implemented: false, docPath: '/components/pin-input' },
  { name: 'FormField', category: 'MOLECULAR', description: 'Form field wrapper', implemented: false, docPath: '/components/form-field' },
  { name: 'FormLabel', category: 'MOLECULAR', description: 'Form label component', implemented: false, docPath: '/components/form-label' },
  { name: 'FormHelperText', category: 'MOLECULAR', description: 'Form helper text', implemented: false, docPath: '/components/form-helper-text' },
  { name: 'FormErrorMessage', category: 'MOLECULAR', description: 'Form error display', implemented: false, docPath: '/components/form-error-message' },
  { name: 'FieldSet', category: 'MOLECULAR', description: 'Form fieldset container', implemented: false, docPath: '/components/fieldset' },
  { name: 'InputGroup', category: 'MOLECULAR', description: 'Grouped input elements', implemented: false, docPath: '/components/input-group' },
  { name: 'Tabs', category: 'MOLECULAR', description: 'Tab navigation', implemented: false, docPath: '/components/tabs' },
  { name: 'Breadcrumb', category: 'MOLECULAR', description: 'Navigation breadcrumb', implemented: false, docPath: '/components/breadcrumb' },
  { name: 'Pagination', category: 'MOLECULAR', description: 'Page navigation', implemented: false, docPath: '/components/pagination' },
  { name: 'Steps', category: 'MOLECULAR', description: 'Step indicator', implemented: false, docPath: '/components/steps' },
  { name: 'Menu', category: 'MOLECULAR', description: 'Dropdown menu', implemented: false, docPath: '/components/menu' },
  { name: 'ContextMenu', category: 'MOLECULAR', description: 'Right-click menu', implemented: false, docPath: '/components/context-menu' },
  { name: 'Alert', category: 'MOLECULAR', description: 'Alert message', implemented: false, docPath: '/components/alert' },
  { name: 'Notification', category: 'MOLECULAR', description: 'System notification', implemented: false, docPath: '/components/notification' },
  { name: 'Popover', category: 'MOLECULAR', description: 'Contextual popup', implemented: false, docPath: '/components/popover' },
  { name: 'Tooltip', category: 'MOLECULAR', description: 'Hover information', implemented: false, docPath: '/components/tooltip' },
  { name: 'Dialog', category: 'MOLECULAR', description: 'Modal dialog', implemented: false, docPath: '/components/dialog' },
  { name: 'Drawer', category: 'MOLECULAR', description: 'Side panel', implemented: false, docPath: '/components/drawer' },
  { name: 'Sheet', category: 'MOLECULAR', description: 'Bottom sheet', implemented: false, docPath: '/components/sheet' },

  // ORGANISM Components
  { name: 'Table', category: 'ORGANISM', description: 'Data table', implemented: false, docPath: '/components/table' },
  { name: 'DataTable', category: 'ORGANISM', description: 'Enhanced data table', implemented: false, docPath: '/components/data-table' },
  { name: 'VirtualTable', category: 'ORGANISM', description: 'Virtualized table', implemented: false, docPath: '/components/virtual-table' },
  { name: 'List', category: 'ORGANISM', description: 'Item list', implemented: false, docPath: '/components/list' },
  { name: 'InfiniteScroll', category: 'ORGANISM', description: 'Infinite scrolling list', implemented: false, docPath: '/components/infinite-scroll' },
  { name: 'Image', category: 'ORGANISM', description: 'Enhanced image', implemented: false, docPath: '/components/image' },
  { name: 'Carousel', category: 'ORGANISM', description: 'Image/content carousel', implemented: false, docPath: '/components/carousel' },
  { name: 'Gallery', category: 'ORGANISM', description: 'Image gallery', implemented: false, docPath: '/components/gallery' },
  { name: 'VideoPlayer', category: 'ORGANISM', description: 'Video player', implemented: false, docPath: '/components/video-player' },
  { name: 'Container', category: 'ORGANISM', description: 'Layout container', implemented: false, docPath: '/components/container' },
  { name: 'Stack', category: 'ORGANISM', description: 'Vertical/horizontal stack', implemented: false, docPath: '/components/stack' },
  { name: 'Grid', category: 'ORGANISM', description: 'CSS Grid layout', implemented: false, docPath: '/components/grid' },
  { name: 'Flex', category: 'ORGANISM', description: 'Flexbox container', implemented: false, docPath: '/components/flex' },
  { name: 'Box', category: 'ORGANISM', description: 'Generic container', implemented: false, docPath: '/components/box' },
  { name: 'Center', category: 'ORGANISM', description: 'Centering container', implemented: false, docPath: '/components/center' },
  { name: 'Spacer', category: 'ORGANISM', description: 'Flexible space', implemented: false, docPath: '/components/spacer' },
  { name: 'Sidebar', category: 'ORGANISM', description: 'Application sidebar', implemented: false, docPath: '/components/sidebar' },
  { name: 'Header', category: 'ORGANISM', description: 'Application header', implemented: false, docPath: '/components/header' },
  { name: 'Footer', category: 'ORGANISM', description: 'Application footer', implemented: false, docPath: '/components/footer' },
  { name: 'AppShell', category: 'ORGANISM', description: 'Application layout shell', implemented: false, docPath: '/components/app-shell' },
  { name: 'FormWizard', category: 'ORGANISM', description: 'Multi-step form', implemented: false, docPath: '/components/form-wizard' },
  { name: 'FormBuilder', category: 'ORGANISM', description: 'Dynamic form builder', implemented: false, docPath: '/components/form-builder' },
  { name: 'Survey', category: 'ORGANISM', description: 'Survey form system', implemented: false, docPath: '/components/survey' },
  { name: 'AutoComplete', category: 'ORGANISM', description: 'Auto-completion input', implemented: false, docPath: '/components/autocomplete' },
  { name: 'ComboBox', category: 'ORGANISM', description: 'Combo box input', implemented: false, docPath: '/components/combo-box' },
  { name: 'Mention', category: 'ORGANISM', description: 'Mention/tag input', implemented: false, docPath: '/components/mention' },
  { name: 'TagInput', category: 'ORGANISM', description: 'Tag input system', implemented: false, docPath: '/components/tag-input' },

  // TEMPLATE Components
  { name: 'DashboardLayout', category: 'TEMPLATE', description: 'Dashboard page layout', implemented: false, docPath: '/templates/dashboard-layout' },
  { name: 'AdminLayout', category: 'TEMPLATE', description: 'Admin page layout', implemented: false, docPath: '/templates/admin-layout' },
  { name: 'AuthLayout', category: 'TEMPLATE', description: 'Authentication layout', implemented: false, docPath: '/templates/auth-layout' },
  { name: 'LandingLayout', category: 'TEMPLATE', description: 'Landing page layout', implemented: false, docPath: '/templates/landing-layout' },
  { name: 'ErrorLayout', category: 'TEMPLATE', description: 'Error page layout', implemented: false, docPath: '/templates/error-layout' },
  { name: 'AppBar', category: 'TEMPLATE', description: 'Application bar', implemented: false, docPath: '/templates/app-bar' },
  { name: 'NavigationRail', category: 'TEMPLATE', description: 'Vertical navigation', implemented: false, docPath: '/templates/navigation-rail' },
  { name: 'BottomNavigation', category: 'TEMPLATE', description: 'Bottom navigation bar', implemented: false, docPath: '/templates/bottom-navigation' },
  { name: 'SideNavigation', category: 'TEMPLATE', description: 'Side navigation panel', implemented: false, docPath: '/templates/side-navigation' },

  // ADVANCED Components
  { name: 'RichTextEditor', category: 'ADVANCED', description: 'Rich text editing', implemented: false, docPath: '/advanced/rich-text-editor' },
  { name: 'CodeEditor', category: 'ADVANCED', description: 'Code editor', implemented: false, docPath: '/advanced/code-editor' },
  { name: 'MarkdownEditor', category: 'ADVANCED', description: 'Markdown editor', implemented: false, docPath: '/advanced/markdown-editor' },
  { name: 'Calendar', category: 'ADVANCED', description: 'Calendar component', implemented: false, docPath: '/advanced/calendar' },
  { name: 'Timeline', category: 'ADVANCED', description: 'Timeline display', implemented: false, docPath: '/advanced/timeline' },
  { name: 'Kanban', category: 'ADVANCED', description: 'Kanban board', implemented: false, docPath: '/advanced/kanban' },
  { name: 'Chart', category: 'ADVANCED', description: 'Chart components', implemented: false, docPath: '/advanced/chart' },
  { name: 'Graph', category: 'ADVANCED', description: 'Graph visualization', implemented: false, docPath: '/advanced/graph' },
  { name: 'Sparkline', category: 'ADVANCED', description: 'Mini charts', implemented: false, docPath: '/advanced/sparkline' },
  { name: 'Heatmap', category: 'ADVANCED', description: 'Heatmap visualization', implemented: false, docPath: '/advanced/heatmap' },
  { name: 'Command', category: 'ADVANCED', description: 'Command palette', implemented: false, docPath: '/advanced/command' },
  { name: 'Spotlight', category: 'ADVANCED', description: 'Spotlight search', implemented: false, docPath: '/advanced/spotlight' },
  { name: 'TreeView', category: 'ADVANCED', description: 'Tree navigation', implemented: false, docPath: '/advanced/tree-view' },
  { name: 'FileExplorer', category: 'ADVANCED', description: 'File system explorer', implemented: false, docPath: '/advanced/file-explorer' },
  { name: 'VirtualList', category: 'ADVANCED', description: 'Virtualized list', implemented: false, docPath: '/advanced/virtual-list' }
]

export const getComponentsByCategory = () => {
  return componentData.reduce((acc, component) => {
    if (!acc[component.category]) {
      acc[component.category] = []
    }
    acc[component.category].push(component)
    return acc
  }, {} as Record<string, ComponentInfo[]>)
}

export const getCategoryStats = () => {
  const categories = getComponentsByCategory()
  return Object.entries(categories).map(([category, components]) => ({
    category,
    total: components.length,
    implemented: components.filter(c => c.implemented).length,
    pending: components.filter(c => !c.implemented).length
  }))
}
