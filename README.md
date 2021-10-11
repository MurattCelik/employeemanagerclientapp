# Employeemanagerapp

Angular projeci için gerekli bazı komutlar

# NPM INSTALL Komutu
npm i -g typescript
NodeJS üzerinden TypeScript’i kurar. “g” parametresi projeye özel değil global kurulumu yapar.

# npm install -g @angular/cli
NodeJS üzerinden Angular’i kurar. (“install” parametresi ile “i” parametresi aynı işlemi yapar.) “g” parametresi projeye özel değil global kurulumu yapar.

npm unistall -g angular/cli
npm cache clean
npm install -g @angular/cli@lastest
Güncel sürümü tekrar kurmak için mevcut Angular Sürümü kaldırıp cache’i temizledikten sonra tekrar kurabilirsiniz.

# NG NEW Komutu
ng new my-project
my-project adıyla bir proje oluşturur.

# CD Komutu
cd my-project
my-project adlı projenizin dizini içerisine girer. Girdikten sonra standart tanımlı kod editörünüzde direk projenizi açmak için “code .” yazmanız yeterli.

# NG SERVE Komutu
ng serve
Projenizi çalıştırır. http://localhost:4200/ adresi üzerinden erişime sunar. ng serve -o komutunu kullanırsanız yeni bir sekmede açmasını sağlarsınız. “o” parametresi yerine “open” parametresi de kullanılabilir. “port” parametresi varsayılan 4200 angular portunun değiştirmek için kullanılabilir.

Özetle; ng serve –open –port 4201 dediğiniz zaman projeyi yeni bir sekmeden 4201 portunda açar.

# NG GENERATE Komutu
ng g component BilesenAdi
BileşenAdi ile yeni bir bileşen oluşturulması sağlar. “g” yerine “generate” de kullanılabilir. Components  parametresi yerine class, component, directive, enum, guard, interface, module, pipeservice, application, library, universal kullanılabilir.

# NG HELP Komutu
ng help generate
NG Generate komutu hakkında yardım dokümantasyonunu görüntüler.

NG LINT Komutu
NG TEST Komutu
NG e2e Komutu
NG BUILD Komutu
ng build --prod
# Uygulamayı yayınlama öncesi derleyip hazırlar. Gerekli optimizasyonları yapar. Derlenen dosyaları DIST klasörü içerisine toplar. –prod parametresi, uygulamayı prodüksiyon için özel hazırlar.



# NG UPDATE Komutu
ng update @angular/cli
Angular CLI’yı güncellemek için kullanılır. Local’deki Angular projesinin sürümünü makinada geçerli olan sürüme yükseltir.
