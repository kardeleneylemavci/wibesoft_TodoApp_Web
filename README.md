# wibesoft_TodoApp_Web
## React Todo Uygulaması

Bu React Todo uygulaması, kullanıcıların yapılacaklar listesini yönetmelerine olanak tanır. Kullanıcılar yeni görevler ekleyebilir, varolan görevleri işaretleyebilir, görevlerin ilerleme durumunu güncelleyebilir ve tamamlanan görevleri görüntüleyebilirler.

## Kurulum

1. Öncelikle bu repository'i klonlayın:

    ```
    git clone <repository-linki>
    ```

2. Proje dizinine gidin:

    ```
    cd <proje-dizini>
    ```

3. Gerekli bağımlılıkları yükleyin:

    ```
    npm install
    ```

4. Uygulamayı başlatın:

    ```
    npm start
    ```

Uygulama varsayılan olarak `http://localhost:3000` adresinde çalışacaktır. Tarayıcınızı açın ve bu adresi ziyaret edin.

## Nasıl Kullanılır

- **Yeni Görev Ekleme:** Sayfanın üst kısmındaki metin kutusuna yeni bir görev yazın ve "Ekle" düğmesine tıklayın veya Enter tuşuna basın.
- **Görev Tamamlama:** Görevin yanındaki kaydırma çubuğunu kullanarak ilerleme durumunu ayarlayın. Görevin tamamlanması durumunda ilerleme durumunu %100 olarak ayarlayabilirsiniz.
- **Görev Silme:** Görevin yanındaki "Sil" düğmesine tıklayarak görevi silin.
- **Karanlık / Aydınlık Mod:** Sayfanın alt kısmındaki "Karanlık Mod" veya "Aydınlık Mod" düğmesine tıklayarak tema modunu değiştirin.

## Dosya Yapısı

- **App.js:** Ana bileşen olan uygulamanın ana mantığını içerir. Yeni görev ekleme ve görev listesini görüntüleme işlemlerini yönetir.
- **TodoList.js:** Görev listesini görüntüleyen ve her bir görevin işlemlerini yöneten bileşendir.
- **AddTodo.js:** Yeni görev eklemek için kullanılan bileşendir.

## Ek Bilgiler

- Bu uygulama [React](https://reactjs.org/) ve [useState](https://reactjs.org/docs/hooks-state.html) gibi React kütüphanelerini kullanarak geliştirilmiştir.


