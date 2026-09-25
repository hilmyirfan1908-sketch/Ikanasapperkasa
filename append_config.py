import yaml

with open('public/admin/config.yml', 'r') as f:
    config = yaml.safe_load(f)

# Update products category
for collection in config.get('collections', []):
    if collection['name'] == 'store_data':
        for file in collection.get('files', []):
            if file['name'] == 'products':
                for field in file.get('fields', []):
                    if field['name'] == 'products_list':
                        for subfield in field.get('fields', []):
                            if subfield['name'] == 'category':
                                subfield['options'] = ['frozen', 'siap-makan']

# Add Home Page collection
home_file = {
    'label': 'Landing Page',
    'name': 'landing_page',
    'file': 'data/home.json',
    'description': 'Manage the landing page content',
    'fields': [
        {
            'label': 'Hero Section',
            'name': 'hero',
            'widget': 'object',
            'fields': [
                {
                    'label': 'Slides',
                    'name': 'slides',
                    'widget': 'list',
                    'fields': [
                        {'label': 'Title', 'name': 'title', 'widget': 'string'},
                        {'label': 'Body', 'name': 'body', 'widget': 'text'},
                        {'label': 'Image', 'name': 'image', 'widget': 'image'}
                    ]
                }
            ]
        },
        {
            'label': 'Founder Section',
            'name': 'founder',
            'widget': 'object',
            'fields': [
                {'label': 'Title', 'name': 'title', 'widget': 'string'},
                {'label': 'Image', 'name': 'image', 'widget': 'image'},
                {'label': 'Body Paragraphs', 'name': 'body', 'widget': 'list', 'field': {'label': 'Paragraph', 'name': 'paragraph', 'widget': 'text'}}
            ]
        },
        {
            'label': 'USP Section',
            'name': 'usp',
            'widget': 'object',
            'fields': [
                {'label': 'Title', 'name': 'title', 'widget': 'string'},
                {'label': 'Subtitle', 'name': 'subtitle', 'widget': 'string'},
                {
                    'label': 'Items',
                    'name': 'items',
                    'widget': 'list',
                    'fields': [
                        {'label': 'Title', 'name': 'title', 'widget': 'string'},
                        {'label': 'Description', 'name': 'description', 'widget': 'text'},
                        {'label': 'Image', 'name': 'image', 'widget': 'image', 'required': False},
                        {
                            'label': 'Image Style',
                            'name': 'imageStyle',
                            'widget': 'object',
                            'required': False,
                            'fields': [
                                {'label': 'Object Position (e.g. 15% center)', 'name': 'objectPosition', 'widget': 'string', 'required': False}
                            ]
                        }
                    ]
                }
            ]
        },
        {
            'label': 'Testimonials Section',
            'name': 'testimonials',
            'widget': 'object',
            'fields': [
                {'label': 'Title', 'name': 'title', 'widget': 'string'},
                {
                    'label': 'Items',
                    'name': 'items',
                    'widget': 'list',
                    'fields': [
                        {'label': 'Name', 'name': 'name', 'widget': 'string'},
                        {'label': 'Location', 'name': 'location', 'widget': 'string'},
                        {'label': 'Quote', 'name': 'quote', 'widget': 'text'}
                    ]
                }
            ]
        },
        {
            'label': 'FAQ Section',
            'name': 'faq',
            'widget': 'object',
            'fields': [
                {'label': 'Title', 'name': 'title', 'widget': 'string'},
                {
                    'label': 'Items',
                    'name': 'items',
                    'widget': 'list',
                    'fields': [
                        {'label': 'Question', 'name': 'question', 'widget': 'string'},
                        {'label': 'Answer', 'name': 'answer', 'widget': 'text'}
                    ]
                }
            ]
        }
    ]
}

# Find or create Page Content collection
pages_collection = None
for collection in config.get('collections', []):
    if collection['name'] == 'pages':
        pages_collection = collection
        break

if not pages_collection:
    pages_collection = {
        'name': 'pages',
        'label': 'Pages',
        'files': []
    }
    config['collections'].append(pages_collection)

# Replace if exists, else append
existing = [f for f in pages_collection['files'] if f['name'] == 'landing_page']
if existing:
    pages_collection['files'].remove(existing[0])
pages_collection['files'].append(home_file)

with open('public/admin/config.yml', 'w') as f:
    yaml.dump(config, f, sort_keys=False, default_flow_style=False)
