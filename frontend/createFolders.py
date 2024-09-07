import os

folders = [
    'components',
    'constants',
    'context',
    'data',
    'environment',
    'features',
    'hoc',
    'hooks',
    'layouts',
    'pages',
    'routes',
    'services',
    'stores',
    'utils',
]

src_directory = 'src'

for folder in folders:
    folder_path = os.path.join(src_directory, folder)
    try: 
        os.makedirs(folder_path, exist_ok=True)
        print(f'Created folder: {folder_path}')
    except Exception as e:
        print(f'Error creating folder: {folder_path}: {e}')