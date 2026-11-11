path = r'src/main.tsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# 把带反引号的href换成不带反引号的
bad = 'href="`https://github.com/1205xia`"'
good = 'href="https://github.com/1205xia"'
if bad in content:
    content = content.replace(bad, good)
    print('替换成功！')
else:
    print('没找到带反引号的版本，文件里可能已经是对的')
    # 也试试不带反引号的版本
    if good in content:
        print('确认：href已经是正确的')
    else:
        print('两个版本都没找到！请检查')
        print('文件里包含github的行：')
        for line in content.split('\n'):
            if 'github' in line:
                print(line)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print('修复完成')
